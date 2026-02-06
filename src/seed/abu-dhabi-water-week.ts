import type { Core } from '@strapi/strapi';

// Seed data - text content only (images will be uploaded manually)
const seedData = {
  abuDhabiWaterWeekPage: {
    hero_title_en: "About Abu Dhabi",
    hero_title_secondary_en: "Water & Power Week.",
    hero_title_ar: "عن أبوظبي",
    hero_title_secondary_ar: "أسبوع المياه والطاقة.",
    hero_description_en: "Learn about Abu Dhabi Water & Power Week and the Technologies.",
    hero_description_ar: "تعرف على أسبوع أبوظبي للمياه والطاقة والتقنيات.",
    explore_heading_en: "Why be part of Abu Dhabi Water & Power Week?",
    explore_heading_ar: "لماذا تكون جزءًا من أسبوع أبوظبي للمياه والطاقة؟",
    explore_para1_en: "Abu Dhabi Water & Power Week is the leading platform that brings together decision-makers, future leaders, and global experts to explore the future of our vital resources and debunk the latest innovations that strengthen water and energy security in line with the urgent need for world progress.",
    explore_para1_ar: "أسبوع أبوظبي للمياه والطاقة هو المنصة الرائدة التي تجمع صناع القرار وقادة المستقبل والخبراء العالميين لاستكشاف مستقبل مواردنا الحيوية.",
    explore_para2_en: "Through a comprehensive multi-day program, the Week offers a unique experience that combines knowledge, innovation, and opportunities for building strategic partnerships, featuring activities such as the World Utilities Congress, Abu Dhabi Water Summit, and six summits that includes leading figures and policymakers.",
    explore_para2_ar: "من خلال برنامج شامل متعدد الأيام، يقدم الأسبوع تجربة فريدة تجمع بين المعرفة والابتكار وفرص بناء الشراكات الاستراتيجية.",
    top_reasons_title_en: "Top Reasons to Visit ADWPW",
    top_reasons_title_ar: "أهم أسباب زيارة أسبوع أبوظبي للمياه والطاقة",
    why_exhibitor_heading_en: "Why Be an Exhibitor at Abu Dhabi Water & Power Week?",
    why_exhibitor_heading_ar: "لماذا تكون عارضًا في أسبوع أبوظبي للمياه والطاقة؟",
    why_exhibitor_para1_en: "Exhibiting at Abu Dhabi Water & Power Week gives your organization an unparalleled opportunity to showcase your solutions to top decision-makers, investors, and global experts across the water and power sectors.",
    why_exhibitor_para1_ar: "يمنح العرض في أسبوع أبوظبي للمياه والطاقة منظمتك فرصة لا مثيل لها لعرض حلولك لأهم صناع القرار والمستثمرين والخبراء العالميين.",
    why_exhibitor_para2_en: "It is a strategic platform built to accelerate innovation, highlight advanced technologies, and create meaningful partnerships that drive business growth.",
    why_exhibitor_para2_ar: "إنها منصة استراتيجية مصممة لتسريع الابتكار وإبراز التقنيات المتقدمة وإنشاء شراكات هادفة تدفع نمو الأعمال.",
    participate_title_en: "Top Reasons to Participate as an Exhibitor",
    participate_title_ar: "أهم أسباب المشاركة كعارض",
    world_utilities_title_en: "World Utilities Congress",
    world_utilities_title_ar: "مؤتمر المرافق العالمي",
    world_utilities_description_en: "",
    world_utilities_description_ar: ""
  },
  topReasons: [
    {
      order: 1,
      badge_color: "primary" as const,
      title_en: "Meet Global Leaders & Decision-Makers.",
      title_ar: "قابل القادة العالميين وصناع القرار.",
      description_en: "Discover the insights and plans of the Abu Dhabi government and its institutions regarding the future of water and energy, and how we work together to build a more efficient and sustainable system.",
      description_ar: "اكتشف رؤى وخطط حكومة أبوظبي ومؤسساتها بشأن مستقبل المياه والطاقة، وكيف نعمل معًا لبناء نظام أكثر كفاءة واستدامة."
    },
    {
      order: 2,
      badge_color: "secondary" as const,
      title_en: "Where Innovation Meets Technology.",
      title_ar: "حيث يلتقي الابتكار بالتكنولوجيا.",
      description_en: "Explore the latest solutions in water management, energy infrastructure, digital transformation, water security, and artificial intelligence through a variety of platforms and specialized workshops.",
      description_ar: "استكشف أحدث الحلول في إدارة المياه والبنية التحتية للطاقة والتحول الرقمي وأمن المياه والذكاء الاصطناعي."
    },
    {
      order: 3,
      badge_color: "primary" as const,
      title_en: "Build Strategic Connections.",
      title_ar: "بناء علاقات استراتيجية.",
      description_en: "Connect with international companies, research institutions, and government entities to unlock new business opportunities and collaborations.",
      description_ar: "تواصل مع الشركات الدولية والمؤسسات البحثية والجهات الحكومية لفتح فرص أعمال وتعاون جديدة."
    },
    {
      order: 4,
      badge_color: "secondary" as const,
      title_en: "Attend High-Value Knowledge Sessions.",
      title_ar: "احضر جلسات معرفية عالية القيمة.",
      description_en: "Be part of thought-provoking discussions, interactive presentations, engaging sessions, and engaging sessions led by international and local experts who provide actionable insights.",
      description_ar: "كن جزءًا من مناقشات محفزة للفكر وعروض تقديمية تفاعلية وجلسات جذابة يقودها خبراء دوليون ومحليون."
    },
    {
      order: 5,
      badge_color: "primary" as const,
      title_en: "Exploring Abu Dhabi's Water & Power Future.",
      title_ar: "استكشاف مستقبل المياه والطاقة في أبوظبي.",
      description_en: "Learn about future projects, government initiatives, and strategies aimed at enhancing water and energy security and achieving the 2050 Net Zero goals.",
      description_ar: "تعرف على المشاريع المستقبلية والمبادرات الحكومية والاستراتيجيات الهادفة إلى تعزيز أمن المياه والطاقة."
    },
    {
      order: 6,
      badge_color: "secondary" as const,
      title_en: "Professional Growth & Learning.",
      title_ar: "النمو المهني والتعلم.",
      description_en: "Whether you work in government, utilities, engineering, technology, or academia, the events elevates your knowledge and strengthens your competitive edge.",
      description_ar: "سواء كنت تعمل في الحكومة أو المرافق أو الهندسة أو التكنولوجيا أو الأوساط الأكاديمية، فإن الحدث يرفع مستوى معرفتك."
    }
  ],
  exhibitorReasons: [
    {
      order: 1,
      badge_color: "primary" as const,
      title_en: "Engage with to Industry Leaders & Policymakers.",
      title_ar: "التواصل مع قادة الصناعة وصناع السياسات.",
      description_en: "Showcase your products and capabilities directly to government authorities, major utilities, and influential industrial players.",
      description_ar: "اعرض منتجاتك وقدراتك مباشرة للسلطات الحكومية والمرافق الكبرى واللاعبين الصناعيين المؤثرين."
    },
    {
      order: 2,
      badge_color: "secondary" as const,
      title_en: "Highlight Your solutions and Products.",
      title_ar: "أبرز حلولك ومنتجاتك.",
      description_en: "Showcase your latest technologies, products, and sustainable solutions to a targeted audience eager to discover innovation and exploring the latest global trends.",
      description_ar: "اعرض أحدث تقنياتك ومنتجاتك وحلولك المستدامة لجمهور مستهدف متحمس لاكتشاف الابتكار."
    },
    {
      order: 3,
      badge_color: "primary" as const,
      title_en: "Unlock New Business & Partnership Opportunities.",
      title_ar: "افتح فرص أعمال وشراكات جديدة.",
      description_en: "Unlock opportunities for collaboration with local and international entities, and build long-term relationships with potential clients or partners.",
      description_ar: "افتح فرص التعاون مع الكيانات المحلية والدولية، وابنِ علاقات طويلة الأمد مع العملاء أو الشركاء المحتملين."
    },
    {
      order: 4,
      badge_color: "secondary" as const,
      title_en: "Strengthen your Corporate Identity in a Competitive Market.",
      title_ar: "عزز هويتك المؤسسية في سوق تنافسي.",
      description_en: "Position your company as a key player in the evolving energy and power landscape and boost your market visibility.",
      description_ar: "ضع شركتك كلاعب رئيسي في مشهد الطاقة المتطور وعزز ظهورك في السوق."
    },
    {
      order: 5,
      badge_color: "primary" as const,
      title_en: "Benefit from a High-Impact, Multi-Event Platform.",
      title_ar: "استفد من منصة متعددة الفعاليات عالية التأثير.",
      description_en: "The event hosts multiple global conferences and exhibitions, drawing a high concentration of experts, investors, and senior government representatives.",
      description_ar: "يستضيف الحدث مؤتمرات ومعارض عالمية متعددة، ويجذب تركيزًا عاليًا من الخبراء والمستثمرين."
    },
    {
      order: 6,
      badge_color: "secondary" as const,
      title_en: "Gain Strategic Insights from Global Experts.",
      title_ar: "احصل على رؤى استراتيجية من الخبراء العالميين.",
      description_en: "Stay up to date with the latest policies, technological advancements, and sector trends shaping the future of energy and water.",
      description_ar: "ابقَ على اطلاع بأحدث السياسات والتطورات التكنولوجية واتجاهات القطاع التي تشكل مستقبل الطاقة والمياه."
    },
    {
      order: 7,
      badge_color: "primary" as const,
      title_en: "Expand Your Presence in a Growing Regional Market.",
      title_ar: "وسّع حضورك في سوق إقليمي متنامٍ.",
      description_en: "With Abu Dhabi as a regional hub for energy and water innovation, exhibitors gain access to strong government support and a growing regional demand.",
      description_ar: "مع أبوظبي كمركز إقليمي لابتكار الطاقة والمياه، يحصل العارضون على دعم حكومي قوي وطلب إقليمي متزايد."
    }
  ]
};

export default async function seedAbuDhabiWaterWeek({ strapi }: { strapi: Core.Strapi }) {
  console.log('\n🌱 Starting Abu Dhabi Water Week seed...\n');

  try {
    // Seed Top Reasons
    const existingTopReasons = await strapi.entityService.findMany('api::top-reason.top-reason');
    
    if (!existingTopReasons || existingTopReasons.length === 0) {
      console.log('📝 Seeding Top Reasons...');
      
      for (const reason of seedData.topReasons) {
        await strapi.entityService.create('api::top-reason.top-reason', {
          data: {
            ...reason,
            publishedAt: new Date()
          }
        });
        console.log(`  ✓ Created Top Reason ${reason.order}: ${reason.title_en.slice(0, 30)}...`);
      }
      console.log('✅ Top Reasons seeded! Upload images manually in Media Library.\n');
    } else {
      console.log('⏭️ Top Reasons already exist, skipping...\n');
    }

    // Seed Exhibitor Reasons
    const existingExhibitorReasons = await strapi.entityService.findMany('api::exhibitor-reason.exhibitor-reason');
    
    if (!existingExhibitorReasons || existingExhibitorReasons.length === 0) {
      console.log('📝 Seeding Exhibitor Reasons...');
      
      for (const reason of seedData.exhibitorReasons) {
        await strapi.entityService.create('api::exhibitor-reason.exhibitor-reason', {
          data: {
            ...reason,
            publishedAt: new Date()
          }
        });
        console.log(`  ✓ Created Exhibitor Reason ${reason.order}: ${reason.title_en.slice(0, 30)}...`);
      }
      console.log('✅ Exhibitor Reasons seeded! Upload icons manually in Media Library.\n');
    } else {
      console.log('⏭️ Exhibitor Reasons already exist, skipping...\n');
    }

    // Seed Abu Dhabi Water Week Page (Single Type)
    const existingPage = await strapi.entityService.findMany('api::abu-dhabi-water-week.abu-dhabi-water-week');
    
    if (!existingPage || (Array.isArray(existingPage) && existingPage.length === 0) || !existingPage.id) {
      console.log('📝 Seeding Abu Dhabi Water Week Page...');
      
      await strapi.entityService.create('api::abu-dhabi-water-week.abu-dhabi-water-week', {
        data: {
          ...seedData.abuDhabiWaterWeekPage,
          publishedAt: new Date()
        }
      });
      console.log('✅ Abu Dhabi Water Week Page seeded! Upload images manually in Media Library.\n');
    } else {
      console.log('⏭️ Abu Dhabi Water Week Page already exists, skipping...\n');
    }

    console.log('🎉 Seed completed! Remember to:');
    console.log('   1. Upload images to Media Library');
    console.log('   2. Link images to entries in Content Manager');
    console.log('   3. Configure public permissions in Settings → Roles → Public\n');
  } catch (error) {
    console.error('❌ Error during seeding:', error);
  }
}
