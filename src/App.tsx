const cards = [
  {
    emoji: '💯',
    keyword: '100',
    desc: 'Hundred, points, symbol, wow, win, perfect, parties',
  },
  {
    emoji: '🔢',
    keyword: '1234',
    desc: 'input symbol for numbers symbol',
  },
  {
    emoji: '🎉',
    keyword: 'Party',
    desc: 'party popper, celebration, confetti, birthday, congratulations',
  },
]

function App() {
  return (
    <main className="page">
      <header className="header">
        <h1>Emoji Finder</h1>
        <p className="subtitle">Find emoji by keywords</p>
        <input type="text" placeholder="search any emoji by keywords" />
      </header>

      <section className="cards">
        {cards.map((card) => (
          <div className="card" key={card.emoji}>
            <span className="emoji">{card.emoji}</span>
            <span className="keyword">{card.keyword}</span>
            <p className="desc">{card.desc}</p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default App