import React from "react";
import "./Footer.css"
function Footer() {
  return ( 
      <div>
          <footer>
              <ul className="git">
                  <a href="https://github.com/Ismaelgoncalvesdasil">
                      <li className="icon">
                          <span className="name">Ismael</span>
                      </li>
                  </a>
                  <a href="https://github.com/AdmaNogueira">
                  <li className="icon">
                      <span className="name">Adma</span>
                  </li>

                  </a>
                  <a href="https://github.com/jeanvitor29">
                  <li className="icon">
                      <span className="name">Jean</span>
                  </li>

                  </a>
                  <a href="https://github.com/vinicius170" >
                  <li className="icon">
                      <span className="name">Vinicius</span>
                  </li>

                </a>
              </ul>
          </footer>
      </div>
   );
}

export default Footer;