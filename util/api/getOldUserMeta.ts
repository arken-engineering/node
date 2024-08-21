import fetch from 'axios';

const api = 'https://envoy.arken.gg';

// const cache = {
//   getUserMeta: {},
// }

export default async (address: string): Promise<object> => {
  try {
    // if (cache.getUserMeta[address]) return cache.getUserMeta[address]

    const response = await fetch(`${api}/user/${address}`);

    if (!response?.data) {
      return {};
    }

    // cache.getUserMeta[address] = data

    return response.data as any;
  } catch (error) {
    return {};
  }
};
