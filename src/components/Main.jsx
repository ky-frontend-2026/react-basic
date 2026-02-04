import React from 'react'

const Main = ({content="기본 컨텐츠", bgColor}) => {
  return (
    <div
    style={{
        backgroundColor:bgColor,
        padding:'20px',
        marginBottom:'20px'
    }}
    >{content}</div>
  )
}

export default Main