import React from "react";
import "./Footer.css"
function Footer() {
  return ( 
      <div>
          <footer>
              <ul class="git">
                  <a href="https://github.com/Ismaelgoncalvesdasil">
                      <li class="icon">
                          <span class="name">Ismael</span>
                          <span></span>
                      </li>
                  </a>
                  <a href="https://github.com/AdmaNogueira">
                  <li class="icon">
                      <span class="name">Adma</span>
                      <span><i class="fab fa-twitter"></i></span>
                  </li>

                  </a>
                  <a href="https://github.com/jeanvitor29">
                  <li class="icon">
                      <span class="name">Jean</span>
                      <span><i class="fab fa-instagram"></i></span>
                  </li>

                  </a>
                  <a href="https://github.com/vinicius170" >
                  <li class="icon">
                      <span class="name">Vinicius</span>
                  </li>

                </a>
              </ul>
          </footer>
      </div>
   );
}

export default Footer;