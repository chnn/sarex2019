const sortBy = (xs, prop) => {
  const sortedXs = [...xs]

  sortedXs.sort((a, b) => a[prop].localeCompare(b[prop]))

  return sortedXs
}

export default sortBy
