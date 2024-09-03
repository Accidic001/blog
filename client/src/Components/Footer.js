import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
        <footer>
       <div className="row copyright">
  <div className="footer-menu">
  <Link to="/about">About</Link>
  <Link href="/">Terms Of Service</Link>

  </div>
   <p>Copyright. All rights Reserved &copy; 2024</p>
   <p>made with &hearts; love &hearts;  by Accidic</p>
</div>

        </footer>

  )
}

export default Footer