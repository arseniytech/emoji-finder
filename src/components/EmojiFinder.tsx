import { useEffect, useState } from 'react'
import { fetchEmojis, type Emoji } from '../api/emojiApi'

function EmojiFinder() {
  const [query, setQuery] = useState('')
  const [emojis, setEmojis] = useState<Emoji[]>([])

  useEffect(() => {
    fetchEmojis(query).then((data) => setEmojis(data))
  }, [query])

  return (
    <section className="finder">
      <input
        type="text"
        placeholder="search any emoji by keywords"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

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