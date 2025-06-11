import React from 'react'
import "./App.css";
import MyTable from './components/MyTable';
import { Route, Routes } from 'react-router-dom';
import FetchingData from './components/FetchingData';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MyTable/>}/>
        <Route path='/fetch' element={<FetchingData/>}/>
      </Routes>
    </div>
  )
}

export default App