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
  const expenseData = {
    title: " React Expense Tracker",
    description:
      "Here is a simple expense tracker built in React JS. I started from scratch when building this app. I learned all about how React manipulates the virtual dom to display a web application. The syntax was very different from what I was used to. Now that I am comfortable with it I see how powerful it can be.",
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
