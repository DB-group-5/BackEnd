import { Customer, ReportCustomer } from '$/types/customer'
import { formatDate } from '$/utils/formatDate'
export const combine = (result: Customer[]): ReportCustomer[] => {
  const data: ReportCustomer[] = []
  const map = new Map()
  for (const item of result) {
    if (!map.has(item.category)) {
      map.set(item.category, true)

      data.push({
        id: item.id,
        fullName: item.fullName,
        address: item.address,
        category: item.category,
        length: item.length,
        boltCode: item.boltCode,
        date: formatDate(item.date),
        status: item.status,
        reason: item.reason,
        totalPrice: item.totalPrice,
        orderCode: item.orderCode
      })
    } else {
      for (const i of data) {
        if (i.date == item.date) {
          i.length += item.length
          break
        }
      }
    }
  }
  return data
}
