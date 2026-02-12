import type { Core } from '@strapi/strapi';
import seedAbuDhabiWaterWeek from './seed/abu-dhabi-water-week';

/**
 * Enable public access for custom content types
 * This bypasses the need to manually configure permissions in Strapi Admin UI
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
  const contentTypes = [
    'api::top-reason.top-reason',
    'api::exhibitor-reason.exhibitor-reason',
    'api::abu-dhabi-water-week.abu-dhabi-water-week',
  ];

  console.log('🔓 Setting public permissions for custom content types...');

  for (const contentType of contentTypes) {
    // Enable find and findOne permissions
    const permissions = await strapi
      .query('plugin::users-permissions.permission')
      .findMany({
        where: {
          role: publicRole.id,
          action: {
            $in: [`${contentType}.find`, `${contentType}.findOne`],
          },
        },
      });

    // Update permissions to enabled
    for (const permission of permissions) {
      await strapi.query('plugin::users-permissions.permission').update({
        where: { id: permission.id },
        data: { enabled: true },
      });
    }

    console.log(`   ✓ Enabled public access for ${contentType}`);
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
