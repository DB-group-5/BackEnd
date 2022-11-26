import { SearchResults, SearchResponse } from '$/types/search'
import moment from 'moment'

export const combinePhones = (result: SearchResults[]): SearchResponse[] => {
  const data: SearchResponse[] = []
  const map = new Map()
  for (const item of result) {
    if (!map.has(item.id)) {
      map.set(item.id, true)
      const date = new Date(item.date_supply)
      data.push({
        id: item.id,
        name: item.name,
        color: item.color,
        date_supply:
          date.getFullYear() +
          '-' +
          (date.getMonth() + 1) +
          '-' +
          date.getDate(),
        purchase_price: item.purchase_price,
        supplier: item.supplier,
        phone_number: [item.phone_number]
      })
    } else {
      for (const i of data) {
        if (i.id == item.id) {
          i.phone_number.push(item.phone_number)
          break
        }
      }
    }
  }
  return data
}
