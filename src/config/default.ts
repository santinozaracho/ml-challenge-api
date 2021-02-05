export default {
  port: process.env.PORT ?? 3000,
  env: process.env.NODE_ENV ?? 'development',
  serverAddress: process.env.SERVER_ADDRESS ?? 'https://api.mercadolibre.com/',
}
