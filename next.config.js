module.exports = {
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
    localeDetection: false,
  },

  images: {
    domains: ["media.graphassets.com"],
    unoptimized: true
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}
