function getEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env: ${name}`);
  return value;
}

export const envs = {
  MAILER_SERVICE: getEnv("MAILER_SERVICE"),
  MAILER_EMAIL: getEnv("MAILER_EMAIL"),
  MAILER_SECRET_KEY: getEnv("MAILER_SECRET_KEY"),
  MAILER_RECEPTOR: getEnv("MAILER_RECEPTOR"),
  DOMAIN: getEnv("NEXT_PUBLIC_DOMAIN").replace(/\/$/, ""),
  IS_STAGING: getEnv("NEXT_PUBLIC_IS_STAGING") === "true",
};
