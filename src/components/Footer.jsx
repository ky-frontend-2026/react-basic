import React from 'react'
import "./style/Footer.css"

const Footer = () => {

    const footerMenu =[
    { label: "contact us", path: "/contact" },
    { label: "affiliates", path: "/affiliates" },
    { label: "help", path: "/help" },
    { label: "follow us", path: "/follow" }
  ]

  return (
    <footer>
        <ul>
            {footerMenu.map((m,i)=>(

            <li key={i}>
                {m.label}
            </li>
            ))}
        </ul>
    </footer>
  )
}

export default Footer