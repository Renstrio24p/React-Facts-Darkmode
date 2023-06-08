import React from 'react'
import { Join } from '../../../../assets/util/JoinClasses'

export default function Navbar(props) {
  return (
        <nav className={Join(["navbar",props.darkmode ? 'dark' : ''])}>
            <div className='left'>
                <img src="/src/images/React-Facts/react.png" alt="react-icon" />
                <h1 className='title'>ReactFacts</h1>
            </div>
            <div 
                className="toggler" 
            >
                <p className="toggler-light">Light</p>
                <div 
                    className="toggler-slider"
                    onClick={props._DarkmodeToggler}
                >
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
        </nav>
  )
}
