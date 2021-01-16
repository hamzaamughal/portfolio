import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return <footer className="footer">
    <div>
      <SocialLinks styleClass="footer-links"></SocialLinks>
      <h4>copyright &#169; {new Date().getFullYear()}
        <span>Hamza Mughal WebDev</span> all rights reserved.
      </h4>
    </div>
  </footer>
}

export default Footer
