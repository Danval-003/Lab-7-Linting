import './infoBlocks.css'
import PropTypes from 'prop-types'
import React from 'react'

function InformationBlock({ img, title, text, link, text2 }) {
  return (
    <div className="info_Blocks">
      <img src={img} alt="bloque informativo" height="75px" />
      <h3>{title}</h3>
      <p>
        {text}
        <a href={link}> {text2}</a>
      </p>
    </div>
  )
}

InformationBlock.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
}

export default InformationBlock
