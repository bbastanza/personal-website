import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PortfolioCard from "../components/IndividualComponents/PortfolioCard"
import twitterSS from "../images/twitterss.png"
import snakeSS from "../images/snakess.png"
import swapiSS from "../images/swapiss.png"
import expenseSS from "../images/expensess.png"

const Portfolio = () => {
  const twitterData = {
    title: "Twitter Showcase App",
    description:
      "A full-stack web app to view date from the Twitter API. The back end server is built in ASP.NET Core C# and the front end client is built in React JS.",
    image: twitterSS,
    link: "https://twittershowcase.azurewebsites.net/",
    github: "https://github.com/bbastanza/Twitter-Showcase",
  }
  const swapiData = {
    title: "Star Wars API App",
    description:
      "A web application built in React JS using data from the Star Wars API. ",
    image: swapiSS,
    link: "https://bb-star-wars-api.herokuapp.com/",
    github: "https://github.com/bbastanza/Star-Wars-API",
  }

  const snakeData = {
    title: "Frozen Snake Game",
    description:
      "Classic Snake game with the theme from Disney's Frozen and built in JavaScript. ",
    image: snakeSS,
    link: "https://bbastanza.github.io/Frozen-Snake-Game/",
    github: "https://github.com/bbastanza/Frozen-Snake-Game",
  }
  const expenseData = {
    title: " React Expense Tracker",
    description: "An expense tracker built in React JS. ",
    image: expenseSS,
    link: "https://bb-expense-react.herokuapp.com/",
    github: "https://github.com/bbastanza/Expense-Tracker-React",
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
        <PortfolioCard data={twitterData} />
        <hr />
        <PortfolioCard data={swapiData} />
        <hr />
        <PortfolioCard data={snakeData} />
        <hr />
        <PortfolioCard data={expenseData} />
      </div>
    </Layout>
  )
}

export default Portfolio
