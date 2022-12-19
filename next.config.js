module.exports = {
  poweredByHeader: false,
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  images: {
    domains: ['i.imgur.com', 'imgur.com', 'cdn.discordapp.com'],
  },
  i18n: {
    locales: ["pl"],
    defaultLocale: "pl",
  }
};
