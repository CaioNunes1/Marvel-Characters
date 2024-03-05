import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../src/pages/Home.tsx';
import Characters from '../src/pages/Characters.tsx';
import Search from '../src/pages/Search.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<App />}>
          <Route index element={<Home/>}/>
          <Route path="character/:id" element={<Characters/>}/>
          <Route path="search" element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  </React.StrictMode>,
)
