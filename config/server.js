module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'my-admin-secret'),
    },
  },
  app: {
    keys: env.array('APP_KEYS',['myKeyA', 'myKeyB']),
  },
});

