module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','Pu5ER8tBEgt+s4WvjrDFEg=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','Pu5ER8tBEgt+s4WvjrDFEg=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
