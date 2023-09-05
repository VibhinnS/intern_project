import React from 'react';
import Navbar from '../../components/navbar/Navbar'
import Menu from '../../components/menu/Menu'
import Home from '../home/Home'
const Main = () => {
  return (
    <div className="main" style={{cursor: 'default'}}>
        <Navbar />
        <div className="container">
        <div className="menuContainer">
            <Menu />
        </div>
        <div className='contentContainer'>
        <Home />
        </div>
        </div>
    </div>
  )
}

export default Main
