import React from 'react'
import './menuButton.scss'
export const MenuButon = ({openMenu,setOpenMenu,altColor,secondaryColor}) => {
  return (
    <>
    <div className={"menuButton " + (openMenu && "active")}>
      <div className="container" style={{}}>
        <div className="right">
          <div className="subMenu" onClick={() => setOpenMenu(!openMenu)}>
            <span className="top"></span>
            <span className="mid"></span>
            <span className="but"></span>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
