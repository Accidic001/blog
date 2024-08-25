import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
        <footer>
       <div class="row copyright">
  <div class="footer-menu">
  <Link to="/about">About</Link>
  <a href="/">Terms Of Service</a>

  </div>
   <p>Copyright. All rights Reserved &copy; 2024</p>
   <p>made with &hearts; love &hearts;  by Accidic</p>
</div>

        </footer>

  )
}

export default Footer