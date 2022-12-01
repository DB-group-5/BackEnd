import { Customer ,ReportCustomer } from '$/types/customer'
export const combine = (result: Customer[]): ReportCustomer[] => {
  const data: ReportCustomer[] = []
  const map = new Map()
  for (const item of result) {
    if (!map.has(item.category)) {
      map.set(item.category, true)

      data.push({
        id: item.id,
        FirstName: item.FirstName,	  
        LastName: item.LastName,
	    address: item.address,
        category: item.category,
        length: item.length,
        boltCode: item.boltCode,
        date: item.date,
        status: item.status,
        reason: item.reason,
        totalPrice: item.totalPrice,
        orderCode: item.orderCode
      })
    } else {
      for (const i of data) {
        if (i.date == item.date) {
          i.length += item.length;
          break
        }
      }
    }
  }
  return data
}