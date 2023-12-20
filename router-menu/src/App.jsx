import { Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';

import Nav from './components/Nav';

import './App.css'

const link = [
  {title: 'Главная', link: '/'},
  {title: 'Дрифт-такси', link: '/drift'},
  {title: 'Time attack', link: '/timeattack'},
  {title: 'Forza Karting', link: '/forza'}
]

function App() {
  return (
    <div className='app'>
      <Nav link={link} />
      <div className='page'>
        <Routes>
          <Route path='/' element= {<HomePage />} />
          <Route path='/drift' element= {<DriftPage />} />
          <Route path='/timeattack' element= {<TimeAttackPage />} />
          <Route path='/forza' element= {<ForzaPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
