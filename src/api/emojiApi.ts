import axios from 'axios'

export interface Emoji {
  emoji: string
  title: string
  keywords: string
}

const BASE_URL = 'http://localhost:3000/api/emojis'

export async function fetchEmojis(q: string): Promise<Emoji[]> {
  const { data } = await axios.get<Emoji[]>(BASE_URL, {
    params: { q },
  })
  return data
}