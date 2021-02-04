import express from 'src/routes/items/node_modules/express'

import { itemsRouter } from './items'

const mainRouter = express.Router()

mainRouter.use('/items', itemsRouter)

export { mainRouter }
