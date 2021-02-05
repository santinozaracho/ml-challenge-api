export type categories = [
  {
    name: string
    results: number
  }
]

export type filters = [
  {
    id: string
    values: categories
  }
]

export type item = {
  id: string
  title: string
  price: number
  currency_id: string
  thumbnail: string
  pictures: [{ url: string }]
  condition: string
  sold_cuantity: number
  shipping: {
    free_shipping: boolean
  }
}

export type itemDescription = {
  text: string
  plain_text: string
}

export type items = [item]
