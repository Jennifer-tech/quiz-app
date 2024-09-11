import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home'
import LoginPage from './components/Login'
import { initializeApp } from 'firebase/app';
import { config } from '../src/config/firebase';

initializeApp(config.firebaseConfig)


export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage} />
        <Route path='/login' element = {<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export deafult LoginPage;