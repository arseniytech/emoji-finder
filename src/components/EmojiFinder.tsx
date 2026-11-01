import { useEffect, useState } from 'react'
import { fetchEmojis, type Emoji } from '../api/emojiApi'

function EmojiFinder() {
  const [query, setQuery] = useState('')
  const [emojis, setEmojis] = useState<Emoji[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false
    setLoading(true)
    setError('')

    fetchEmojis(query)
      .then((data) => {
        if (!ignore) setEmojis(data)
      })
      .catch(() => {
        if (!ignore) setError('Не удалось загрузить эмодзи, проверь что сервер запущен')
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [query])

  return (
    <section className="finder">
      <input
        type="text"
        placeholder="search any emoji by keywords"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p className="status">Загрузка...</p>}

      {!loading && error && <p className="status error">{error}</p>}

      {!loading && !error && emojis.length === 0 && (
        <p className="status">Эмодзи не найдены</p>
      )}

      {emojis.length > 0 && (
        <div className="cards">
          {emojis.map((emoji) => (
            <div className="card" key={emoji.emoji}>
              <span className="emoji">{emoji.emoji}</span>
              <span className="title">{emoji.title}</span>
              <p className="keywords">{emoji.keywords}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default EmojiFinder