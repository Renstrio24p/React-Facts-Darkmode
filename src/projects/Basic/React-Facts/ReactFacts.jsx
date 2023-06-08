import React from 'react'
import Navbar from './components/Navbar'
import './styles.css'
import Main from './components/Main'


export default function ReactFacts() {
    const [darkmode, setDarkmode] = React.useState(false)

    React.useEffect(()=>{
      document.title = 'React Facts'
  })

    function DarkmodeToggler() {
        setDarkmode(prevMode => !prevMode)
    }

  return (
    <div>
        <Navbar darkmode={darkmode} _DarkmodeToggler={DarkmodeToggler}/>
        <Main darkmode={darkmode} />
    </div>
  )
}
