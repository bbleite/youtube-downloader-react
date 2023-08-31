
function App() {

  return (
    <div className="app">
    <span>youtube2mp3</span>
    <section className="content">
      <h1 className="content_title">YouTube to MP3 Converter</h1>
      <p className="content_description">
        Transform YouTube videos into MP3s in just a few clicks!
      </p>

      <form className="form">
        <input placeholder="Paste a YouTube video URL link..." className="form_input" type="text" />
        <button type="submit" className="form_button">Search</button>
      </form>

      <a href="" className="download-btn"></a>


    </section>
    </div>
  )
}

export default App
