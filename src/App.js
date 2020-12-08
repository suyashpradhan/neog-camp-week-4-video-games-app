import React, { useState } from "react";
import { database } from "./Database.js";
import "./styles.css";

let databaseArray = Object.keys(database);

export default function App() {
  const [selectedGame, setSelectedGame] = useState("All Games");

  function gameClickHandler(game) {
    setSelectedGame(game);
  }

  return (
    <div>
      <div className="banner">
        <h1 className="header title">The Games Store</h1>
        <h2 className="header subTitle">Collection of Video Games</h2>
      </div>
      <main className="main">
        <div className="wrapper">
          <ul className="games-collection">
            {databaseArray.map((game, index) => {
              return (
                <li
                  onClick={() => gameClickHandler(game)}
                  key={index}
                  className="games-collection-list button"
                >
                  {game}
                </li>
              );
            })}
          </ul>

          {database[selectedGame].map((game) => {
            return (
              <div className="game">
                <div className="left-wrapper">
                  <img src={game.poster} className="poster" alt="poster"></img>
                </div>
                <div className="right-wrapper">
                  <h1 className="game-title">{game.title}</h1>
                  <p className="game-description">{game.description}</p>
                  <h3 className="game-developer">
                    Developer: {game.developer}
                  </h3>
                  <h4 className="game-availability">
                    Available On: {game.availableOn}
                  </h4>
                  <h2 className="game-rating">Ratings: {game.rating}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <footer>
          <div className="wrapper">
            <h2 className="footer-text">
              <a href="https://github.com/suyashpradhan" target="_blank">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/733/733609.svg"
                  alt="icon"
                  className="social-icon"
                ></img>
              </a>
            </h2>
          </div>
        </footer>
      </main>
    </div>
  );
}
