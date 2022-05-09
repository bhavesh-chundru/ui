//
/** @type {import('next').NextConfig} */

module.exports = {
  serverRuntimeConfig:{
    mock:false,
    subscriptionKey:"709c72b49b0248a5b6bca315cced3b3a"
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}
