module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "default_secret"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});
