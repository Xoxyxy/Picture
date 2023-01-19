async function postDate(url, data) {
  const request = await fetch(url, {
    method: 'POST',
    body: data
  })

  return await request.text()
}

async function getResource(url) {
  const result = await fetch(url)

  if (!result.ok) {
    throw new Error(`Could not fetch ${url}, status: ${result.status}`)
  }

  return await result.json()
}

export { postDate, getResource }