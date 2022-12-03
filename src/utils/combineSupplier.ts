import { DetailSupplier, ResponseDetailSupplier } from '$/types/suppliers'

export const combineSupplier = (
  data: DetailSupplier[]
): ResponseDetailSupplier[] => {
  const result: ResponseDetailSupplier[] = []
  const map = new Map()
  for (const item of data) {
    if (!map.has(item.name_supplier)) {
      map.set(item.name_supplier, true) // set any value to Map
      result.push({
        name_supplier: item.name_supplier,
        category_info: [
          {
            source_code: item.source_code,
            supplied_date: item.supplied_date,
            name_category: item.name_category,
            color: item.color,
            purchase_price: item.purchase_price
          }
        ]
      })
    } else {
      for (const i of result) {
        if (i.name_supplier === item.name_supplier) {
          i.category_info.push({
            source_code: item.source_code,
            supplied_date: item.supplied_date,
            name_category: item.name_category,
            color: item.color,
            purchase_price: item.purchase_price
          })
          break
        }
      }
    }
  }
  return result
}
