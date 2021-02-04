import express from 'express'
import { ItemService } from 'src/features/item'

const itemsRouter = express.Router()

/**
 * Get all products
 */
itemsRouter.get('/', async (req, res, next) => {
  try {
    const products = await ItemService.findAll()
    res.send({ products })
  } catch (error) {
    next(error)
  }
})

/**
 * Get a specific product
 * @param {string} req.params.id
 */
itemsRouter.get('/:id', async (req, res, next) => {
  const productId = parseInt(req.params.id)
  try {
    const product = await ItemService.findById(productId)
    res.send({ product })
  } catch (error) {
    next(error)
  }
})

/**
 * Create product
 * @param {string} req.params.id
 */
itemsRouter.post('/', async (req, res, next) => {
  const productPayload = req.body.product

  try {
    const product = await ItemService.create(productPayload)
    res.send({ product })
  } catch (error) {
    next(error)
  }
})
/**
 * Update existing product
 * @param {string} req.params.id
 */
itemsRouter.put('/:id', async (req, res, next) => {
  const productId = parseInt(req.params.id)
  const productPayload = req.body.product
  try {
    const product = await ItemService.updateById(productId, productPayload)
    res.send({ product })
  } catch (error) {
    next(error)
  }
})

/**
 * Delete existing product
 * @param {string} req.params.id
 */
itemsRouter.delete('/:id', async (req, res, next) => {
  const productId = parseInt(req.params.id)
  try {
    await ItemService.deleteById(productId)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

export { itemsRouter }
