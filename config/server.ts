export default ({ env }: { env: EnvFunction }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", ["myKeyA", "myKeyB"]),
  },
});
