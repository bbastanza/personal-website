import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PortfolioCard from "../components/IndividualComponents/PortfolioCard"
import twitterSS from "../images/twitterss.png"
import snakeSS from "../images/snakess.png"
import swapiSS from "../images/swapiss.png"
import stockSS from "../images/stockss.png"

const Portfolio = () => {
  const twitterData = {
    title: "Twitter Showcase App",
    description:
      "This is a full-stack web app to view date from the Twitter API. The back end server is built in ASP.NET Core C# and the front end client is built in React JS. I built this app to learn the complexities of building a web application from top to bottom and to further my knowledge of C#, .Net, React, Bootstrap and to learn how to seperate conserns between back end development and front end development.",
    image: twitterSS,
    link: "https://twittershowcase.azurewebsites.net/",
    github: "https://github.com/bbastanza/Twitter-Showcase",
  }
  const swapiData = {
    title: "Star Wars API App",
    description:
      "I constructed this application in React JS and using data from the swapi.dev. Building this app I was able to learn more about React and how to work with external api data. There were a lot of new things to tackle in this project. I am starting to build tougher applications that are a bit closer to real world projects. I know this isn't a massive project, but being comfortable with http protocol is invaluable. ",
    image: swapiSS,
    link: "https://bb-star-wars-api.herokuapp.com/",
    github: "https://github.com/bbastanza/Star-Wars-API",
  }

  const snakeData = {
    title: "Frozen Snake Game",
    description:
      "This is my take on the classic Snake game with the theme from Disney's Frozen and built in vanilla JavaScript. While building this project, I was pushed to be creative with complex game logic. There are many things in Javascript that make this concept approachable, but it still provided a fair share of problems. At first glance this game seams incredibly simple, but after diving in I really started to see its complexity.",
    image: snakeSS,
    link: "https://bbastanza.github.io/Frozen-Snake-Game/",
    github: "https://github.com/bbastanza/Frozen-Snake-Game",
  }

  const stockData = {
    title: "Dream Trader",
    description:
        "Dream Trader is a full stack web application utilizing a .Net Core Backend, React JS Frontend and a PostgreSQL database. The project uses stock data from the iexcloud.io api and makes user transactions based on real stock data and user input. The purpose of building this application was to learn to make a complex web application using a database and to dive deeper into ASP.NET, while continuing to polish my React JS skills.",
    image: stockSS,
    link: "https://dreamtrader.azurewebsites.net/",
    github: "https://github.com/bbastanza/Fantasy-Stock-Trader",
  }

  return (
    <Layout>
      <SEO title="Portfolio" />
      <h1
        style={{
          padding: "20px 20px 0 20px",
          textDecoration: "underline",
          textDecorationThickness: 5,
          color: "#313131",
          whiteSpace: "nowrap",
        }}
      >
        Portfolio
      </h1>
      <div style={{ textAlign: "center" }}>
        <PortfolioCard data={stockData} />
        <hr />
        <PortfolioCard data={twitterData} />
        <hr />
        <PortfolioCard data={swapiData} />
        <hr />
        <PortfolioCard data={snakeData} />
      </div>
    </Layout>
  )
}

export default Portfolio
