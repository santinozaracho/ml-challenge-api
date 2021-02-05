import config from 'config'

const BASE_URL = config.get('serverAddress')

const QUERY_ITEMS_URL = `${BASE_URL}sites/MLA/`
const QUERY_ITEM_URL = `${BASE_URL}items/`

export const ENDPOINTS = {
  BASE_URL,
  QUERY_ITEM_URL,
  QUERY_ITEMS_URL,
}
