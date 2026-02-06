import type { Core } from '@strapi/strapi';
import seedAbuDhabiWaterWeek from './seed/abu-dhabi-water-week';

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
    // Seed Abu Dhabi Water Week content
    try {
      await seedAbuDhabiWaterWeek({ strapi });
    } catch (error) {
      console.error('Error seeding Abu Dhabi Water Week data:', error);
    }
  },
};
