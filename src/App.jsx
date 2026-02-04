import './App.css'
import Button from './components/Button'
import Main from './components/Main'
import Section from './components/Section'
function App() {

  const sectionData={
    content:'섹션에 전달 되는 데이터',
    bgColor:'skyblue'
  }

  return (
    <div>
      {/* <Section data={sectionData}/> */}
      <Section {...sectionData}/>
      <hr/>
      <Main content='메인 영역입니다1' bgColor='pink' />
      <Main content='메인 영역입니다2' bgColor='pink' />
      <Main  bgColor='pink' />
      <hr/>
      <Button text={'메일'} color={'red'}/>
      <Button text={'케페'} color={'blue'}>
        <span>자식요소 blue</span>

      </Button>
      <Button text={'블로그'} color={'green'} >
        <span>자식요소 green</span>
      </Button>
      <Button text={'블로그'}  />
      <h1>hello react</h1>
    </div>
  )
}

export default App
