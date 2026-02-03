import React from 'react'

const Main = () => {
    const name ='Alice'
    const age = 23

    const numbers =[10,20,30,40]
    const obj ={
        city:'seoul',
        hobby:'programing'
    }
    const isLoggin=false
    return (
        <div>
            <p>
                {isLoggin? "로그인 되었습니다":"로그아웃입니다."}
            </p>
            <h2>main 입니다</h2>
            <p>내 이름은 {name}입니다.</p>
            <p>내 나이는 {age}살 입니다.</p>
            <p>배열 꺼내서 하나만 넣어보기 {numbers[1]}</p>
            <p>
                나는 {obj.city}에서 살고 내 취미 {obj.hobby}는 입니다.
            </p>
        </div>
    )
}

export default Main
