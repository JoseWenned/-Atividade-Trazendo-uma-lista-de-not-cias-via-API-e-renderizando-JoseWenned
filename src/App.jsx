import { useState } from "react"
// import { Api } from "./services/api"

export const App = () => {

  const [newsList, setNews] = useState([])

  const listNews = async () => {

    const reponse = await fetch("https://blog-fake-api.onrender.com/news")
    const json = await reponse.json()
    setNews(json)

  }


  return (
    <div>  
      <ul>
        {newsList.map((news) => (
          <li key={news.id}>
            <h3>{news.title}</h3>
            <p>{news.content}</p>
            <h1>{news.author}</h1>
          </li>
        ))}
      </ul>

      <button onClick={listNews}>Click</button>
    </div>
  )
}


