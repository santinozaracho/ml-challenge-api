import express from 'express'
import { ItemService } from 'src/features/item'

import { itemsRouter } from './items'

const mainRouter = express.Router()

mainRouter.use('/items', itemsRouter)

export { mainRouter }
