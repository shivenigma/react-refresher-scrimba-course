import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router';
import Index from './components/index';
import ReactFacts from './components/React facts/ReactFacts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/react-facts" element={<ReactFacts/>}/>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
