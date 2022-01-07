module.exports = {
  presets: ["next/babel"],
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
    localeDetection: false,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}
