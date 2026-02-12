import type { Core } from '@strapi/strapi';
import seedAbuDhabiWaterWeek from './seed/abu-dhabi-water-week';

/**
 * Create and enable public access for custom content types
 * This creates the permission entries that are missing from Strapi Cloud UI
 */
async function setPublicPermissions({ strapi }: { strapi: Core.Strapi }) {
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (!publicRole) {
    console.warn('⚠️  Public role not found');
    return;
  }

  // Content types to make public
  const contentTypesConfig = [
    { uid: 'api::top-reason.top-reason', actions: ['find', 'findOne'] },
    { uid: 'api::exhibitor-reason.exhibitor-reason', actions: ['find', 'findOne'] },
    { uid: 'api::abu-dhabi-water-week.abu-dhabi-water-week', actions: ['find', 'findOne'] },
  ];

  console.log('🔓 Creating/enabling public permissions for custom content types...');

  for (const contentType of contentTypesConfig) {
    for (const action of contentType.actions) {
      const actionName = `${contentType.uid}.${action}`;
      
      // Check if permission already exists
      let permission = await strapi
        .query('plugin::users-permissions.permission')
        .findOne({
          where: {
            role: publicRole.id,
            action: actionName,
          },
        });

      if (permission) {
        // Permission exists, just enable it
        if (!permission.enabled) {
          await strapi.query('plugin::users-permissions.permission').update({
            where: { id: permission.id },
            data: { enabled: true },
          });
          console.log(`   ✓ Enabled ${actionName}`);
        } else {
          console.log(`   ℹ️  ${actionName} already enabled`);
        }
      } else {
        // Permission doesn't exist, create it
        await strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: actionName,
            role: publicRole.id,
            enabled: true,
          },
        });
        console.log(`   ✨ Created and enabled ${actionName}`);
      }
    }
  }

  console.log('✅ Public permissions configured successfully!');
}

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Set public permissions for custom content types
    try {
      await setPublicPermissions({ strapi });
    } catch (error) {
      console.error('❌ Error setting public permissions:', error);
    }

    // Seed Abu Dhabi Water Week content
    try {
      await seedAbuDhabiWaterWeek({ strapi });
    } catch (error) {
      console.error('Error seeding Abu Dhabi Water Week data:', error);
    }
  },
};
