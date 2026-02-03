import React from 'react'
import "./style/Aside.css"
const Aside = () => {
    const asideMenu =  [
    { label: "links 1", path: "#" },
    { label: "links 2", path: "#" },
    { label: "links 3", path: "#" },
    { label: "links 4", path: "#" },
    { label: "links 5", path: "#" },
    { label: "links 6", path: "#" }
  ]
  return (
    <aside>
        <ul>
            {asideMenu.map((menu,i)=>(
                <li key={i}>
                  🌐  {menu.label}                    
                </li>
            ))}
        </ul>
    </aside>
  )
}

export default Aside