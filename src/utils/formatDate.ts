export const formatDate = (date: string): string => {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = `0${d.getMonth() + 1}`.slice(-2)
  const _date = `0${d.getDate()}`.slice(-2)
  return `${year}-${month}-${_date}`
}
