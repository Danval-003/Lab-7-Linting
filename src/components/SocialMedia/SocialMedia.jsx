import React, { useState } from 'react'
import './SocialMedia.css'

function SocialMedia() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="social-media">
      <button type="button" className="socialButton" onClick={toggleDropdown}>
        <img
          src="src/assets/loudspeaker.png"
          alt="redes sociales"
          className="horn"
        />
        <img
          src="src/assets/flechaAbajo.png"
          className="horn"
          alt="Show Social media"
        />
      </button>
      {isDropdownOpen && (
        <div className="social-media-dropdown">
          <ul className="social-media-list">
            <li>
              <img
                src="src/assets/Twitter.png"
                className="imageList"
                alt="Twitter Logo"
              />
              Twitter
            </li>
            <li>
              <img
                src="src/assets/reddit.png"
                className="imageList"
                alt="Reddit"
              />
              Reddit
            </li>
            <li>
              <img
                src="src/assets/blog.png"
                className="imageList"
                alt="Blog Logo"
              />
              Blog
            </li>
            <li>
              <img
                src="src/assets/newsletter.png"
                className="imageList"
                alt="Noticias"
              />
              Newsletter
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default SocialMedia
