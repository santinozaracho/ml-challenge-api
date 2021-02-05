//ANNOTATION: the desicion of slice first and later parse data is a question of performance

import { FILTERS, RESULTS_LIMIT } from 'src/constants'
import { categories, filters, item, items } from './types'

const numberToAmmountAndDecimals = (number: number) => {
  const [amountString, decimalsString] = number.toString().split('.')

  const amount = Number(amountString)
  const decimals = Number(decimalsString)

  return { amount, decimals }
}

const parsePriceAndCurrency = (price: number, currency: string) => {
  const amountAndDecimals = numberToAmmountAndDecimals(price)

  return { currency, ...amountAndDecimals }
}

export const parseAndSliceItems = (items: items) =>
  items
    .slice(0, RESULTS_LIMIT)
    .map(
      ({
        id,
        title,
        price,
        currency_id,
        thumbnail,
        condition,
        shipping: { free_shipping },
      }) => ({
        id,
        title,
        price: parsePriceAndCurrency(price, currency_id),
        picture: thumbnail,
        condition,
        free_shipping,
      })
    )

export const parseItemData = ({
  id,
  title,
  price,
  currency_id,
  pictures,
  condition,
  sold_cuantity,
  shipping: { free_shipping },
}: item) => ({
  id,
  title,
  price: parsePriceAndCurrency(price, currency_id),
  picture: pictures[0].url,
  condition,
  free_shipping,
  sold_cuantity,
})

const findCategoryFilter = (filters: filters) =>
  filters.find(({ id }) => id === FILTERS.CATEGORY)

const sortCategories = (categories: categories) =>
  categories.sort((a, b) => (a.results > b.results ? -1 : 1))

const cleanCategories = (categories: categories) =>
  categories.map(({ name }) => name)

export const findAndSortCategories = (filters: filters) => {
  const categoryFilter = findCategoryFilter(filters)

  if (!categoryFilter) return []

  const categoriesSorted = sortCategories(categoryFilter?.values)

  return cleanCategories(categoriesSorted)
}
