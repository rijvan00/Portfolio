import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://github.com/rijvan00/Notes_web-app"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="images/thumbs/notes.jfif" alt="final-capstone" />
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Online Notes Taking App</h3>
                      <p>
                        &#9734; App that use proper authentication to allow
                        users to create, edit, and delete notes.
                        <br />
                        &#9734; App that allows users to create and save notes.
                        <br />
                        &#9734; Users can also modify note's title and content.
                        <br />
                        &#9734; Users can also delete notes.
                        <br />
                        &#9734; App created using Firebase.
                        <br />
                        &#9734; App created using HTML, CSS, and Javascript.
                        <br />
                        &#9734; App created using Firebase Authentication.
                        <br />
                        &#9734; App created using Firebase Database.
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a
                            href="https://rijvan00.github.io/Notes_web-app/"
                            className="button project-button"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Demo
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/rijvan00/Notes_web-app"
                            className="button project-button brands"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github icon"></i>View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-javascript-plain technology"></i>
                        <i className="devicon-html5-plain technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>

              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://github.com/rijvan00/chat"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="images/thumbs/chat.png" alt="final-capstone" />
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Online Chat Application</h3>
                      <p>
                        &#9734; App that use allows users to chat with each
                        other.
                        <br />
                        &#9734; App that allows users to enter name at the time
                        of joining the chat.
                        <br />
                        &#9734; When someone enters the room it auto emit a
                        message to all the users of the room.
                        <br />
                        &#9734; When someone leaves the room it auto emit a
                        message to all the users of the room.
                        <br />
                        &#9734; App created using socket io.
                        <br />
                        &#9734; App created using HTML, CSS, and Javascript.
                        <br />
                        &#9734; App created using Node.js and Express.js.
                        <br />
                        &#9734; App created using well mannered chat room.
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a
                            href="https://letschatkare.herokuapp.com/"
                            className="button project-button"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Demo
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/rijvan00/chat"
                            className="button project-button brands"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github icon"></i>View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-nodejs-plain technology"></i>
                        <i className="devicon-express-original colored technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>

              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://github.com/rijvan00/dicegame"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="images/thumbs/dice.png" alt="final-capstone" />
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Online Chat Application</h3>
                      <p>
                        &#9734; App creat using HTML, CSS, and Javascript.
                        <br />
                        &#9734; It a simple dice game.
                        <br />
                        &#9734; It is a two player game.
                        <br />
                        &#9734; It is created using DOM manipulation.
                        <br />
                        &#9734; App that work when click play button. It just
                        displat the random number.
                        <br />
                        &#9734; The player whose number is greater than the
                        other player wins the game.
                        <br />
                        &#9734; If both the players get the same number then it
                        is a draw.
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a
                            href="https://rijvan00.github.io/dicegame/"
                            className="button project-button"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Demo
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/rijvan00/dicegame"
                            className="button project-button brands"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github icon"></i>View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-nodejs-plain technology"></i>
                        <i className="devicon-express-original colored technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>

              <ul className="actions">
                <li className="wide-button">
                  <a
                    href="https://github.com/rijvan00"
                    className="button portfolio-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Full Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
