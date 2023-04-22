import React, { useState } from 'react'
import './DropDownMenu.css'

function DropDownMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const dropdownClasses = isDropdownOpen
    ? 'dropdown-container dropdown-open'
    : 'dropdown-container'

  return (
    <div className="dropdown-menu">
      <button type="button" className="menu-button" onClick={toggleDropdown}>
        <img
          alt="Mas Informacion"
          src="src/assets/more.png"
          className="hamburger"
        />
      </button>
      <div className={dropdownClasses}>
        <ul className="dropdown-list">
          <li>AJUSTES</li>
          <li className="list2">Temas</li>
          <li className="list2">Todos los ajustes</li>
          <li className="list2">Atajos de búsqueda !Bang</li>
          <li>ESENCIALES DE PRIVACIDAD</li>
          <li className="list2">Búsqueda Privada</li>
          <li className="list2">App y Extensión</li>
          <li>POR QUÉ PRIVACIDAD</li>
          <li className="list2">Blog sobre Privacidad</li>
          <li className="list2">Boletín Informativo de Privacidad</li>
          <li className="list2">Ayuda a Difundir la Privacidad</li>
          <li>SABER MÁS</li>
          <li className="list2">Sobre Nosotros</li>
          <li className="list2">Política de Privacidad</li>
          <li className="list2">Oportunidades de trabajo</li>
          <li className="list2">kit de Prensa</li>
          <li>MANTÉN EL CONTACTO</li>
          <li className="list2">Twitter</li>
          <li className="list2">Reddit</li>
          <li className="list2">Ayuda</li>
        </ul>
      </div>
    </div>
  )
}
export default DropDownMenu
