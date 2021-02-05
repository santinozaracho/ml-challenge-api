import express from 'express'
import { ItemService } from 'src/features/item'

const itemsRouter = express.Router()

/**
 * Get all products
 */

itemsRouter.get('', async (req, res, next) => {
  const searchString = String(req.query.q)

  try {
    const items = await ItemService.search(searchString)
    res.send(items)
  } catch (error) {
    next(error)
  }
})

/**
 * Get a specific product
 * @param {string} req.params.id
 */
itemsRouter.get('/:id', async (req, res, next) => {
  const itemId = String(req.params.id)
  try {
    const item = await ItemService.findById(itemId)
    res.send(item)
  } catch (error) {
    next(error)
  }
})

export { itemsRouter }
