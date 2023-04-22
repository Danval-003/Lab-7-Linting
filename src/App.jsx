import React from 'react'
import './App.css'
import Buscador from './components/Buscador/Buscador'
import MainInfoBlocks from './components/info_blocks/main_infoBlocks'

import LastImage from './components/LastImage/LastImage'
import Onboarding from './components/Onboarding/Onboarding'
import FAQ from './components/FAQ/FAQ'
import DropDownMenu from './components/DropDownMenu/DropDownMenu'
import SocialMedia from './components/SocialMedia/SocialMedia'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SocialMedia />
        <DropDownMenu />
      </header>
      <div>
        <Buscador />
      </div>
      <div>
        <div className="fondo">
          <svg
            className="content-info__curve"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1438 134"
          >
            <path
              d="M1438 1442H0V31.001S438.105 0 719 .001c280.896 0 719 31 719 31V1442z"
              fill="currentColor"
            />
          </svg>
        </div>
        <MainInfoBlocks className="mainInfo" />
      </div>
      <div>
        <Onboarding />
      </div>
      <div>
        <LastImage />
      </div>
      <div>
        <FAQ />
      </div>
    </div>
  )
}

export default App
