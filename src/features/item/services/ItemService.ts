import axios from 'axios'
import { AUTHOR, ENDPOINTS } from 'src/constants'
import {
  findAndSortCategories,
  parseAndSliceItems,
  parseItemData,
} from '../utils'

const search = async (searchParams: string) => {
  try {
    const response = await axios.get(
      `${ENDPOINTS.QUERY_ITEMS_URL}search?q=${searchParams}`
    )

    const { data } = response

    const categories = findAndSortCategories(data?.available_filters)

    const items = parseAndSliceItems(data?.results)

    return { ...AUTHOR, categories, items }
  } catch (error) {
    console.log(error)
  }
}

const findById = async (id: string) => {
  try {
    const response = await axios.get(`${ENDPOINTS.QUERY_ITEM_URL}/${id}`)

    const { data } = response

    const mainItemInfo = parseItemData(data)

    const responseDescription = await axios.get(
      `${ENDPOINTS.QUERY_ITEM_URL}/${id}/description`
    )

    const { data: descriptionData } = responseDescription

    const description = descriptionData.plain_text

    return { ...AUTHOR, ...mainItemInfo, description }
  } catch (error) {
    console.log(error)
  }
}

export const ItemService = {
  search,
  findById,
}
