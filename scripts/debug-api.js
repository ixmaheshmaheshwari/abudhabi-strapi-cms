// Debug script to check Strapi permissions and routes
module.exports = async ({ strapi }) => {
  console.log('\n=== DEBUGGING STRAPI API ===\n');

  // Check if content types are loaded
  const contentTypes = Object.keys(strapi.contentTypes);
  console.log('📦 Loaded Content Types:');
  contentTypes
    .filter(ct => ct.startsWith('api::'))
    .forEach(ct => console.log(`   - ${ct}`));

  // Check public role permissions
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (publicRole) {
    console.log('\n🔐 Public Role ID:', publicRole.id);
    
    const permissions = await strapi
      .query('plugin::users-permissions.permission')
      .findMany({
        where: { role: publicRole.id },
        populate: ['role'],
      });

    console.log('\n✅ Public Permissions:');
    permissions
      .filter(p => p.action.startsWith('api::'))
      .forEach(p => {
        console.log(`   ${p.enabled ? '✓' : '✗'} ${p.action}`);
      });
  }

  // Check if routes are registered
  console.log('\n🛣️  Registered API Routes:');
  const routes = strapi.server.router.stack
    .filter(r => r.path && r.path.startsWith('/api/'))
    .map(r => `${r.methods.join(',')} ${r.path}`)
    .slice(0, 20);
  routes.forEach(r => console.log(`   ${r}`));

  console.log('\n=== END DEBUG ===\n');
};
