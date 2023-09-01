import { useRef, useState } from "react"
import { youtube_parser } from "./utils";
import axios from "axios";

function App() {
  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputUrlRef);
    console.log(inputUrlRef.current.value);
    const youtubeID = youtube_parser(inputUrlRef.current.value);
    console.log(youtubeID);

    const options = {
      method: 'GET',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      params: {
        id: youtubeID
      },
      headers: {
        'X-RapidAPI-Key': '0a3d849cedmshc6ee1c457cfc9adp1eefc3jsn74d2c60a2643',
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
      }
    };
    
    axios(options)
    .then(res =>  {
      setUrlResult(res.data.link)
      console.log(res)})
    .catch(err => console.log(err))

    console.log(urlResult);

    inputUrlRef.current.value = '';
  }

  return (
    <div className="app">
    <span className="logo">youtube2mp3</span>
    <section className="content">
      <h1 className="content_title">YouTube to MP3 Converter</h1>
      <p className="content_description">
        Transform YouTube videos into MP3s in just a few clicks!
      </p>

      <form onSubmit={handleSubmit} className="form">
        <input ref={inputUrlRef} placeholder="Paste a YouTube video URL link..." className="form_input" type="text" />
        <button type="submit" className="form_button">Search</button>
      </form>

      {urlResult ? <a href={urlResult} className="download_btn">Download MP3</a> : ''}
      
    </section>
    </div>
  )
}

export default App
