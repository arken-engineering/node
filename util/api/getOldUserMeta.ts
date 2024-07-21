import fetch from 'node-fetch'

const api = 'https://cache.arken.gg'

// const cache = {
//   getUserMeta: {},
// }

export default async (address: string): Promise<object> => {
  try {
    // if (cache.getUserMeta[address]) return cache.getUserMeta[address]

    const response = await fetch(`${api}/user/${address}`)

    if (!response.ok) {
      return {}
    }

    const data = await response.json()

    // cache.getUserMeta[address] = data

    return data as any
  } catch (error) {
    return {}
  }
}