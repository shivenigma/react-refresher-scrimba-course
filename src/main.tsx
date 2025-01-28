import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router';
import ChefApp from './components/chef claude/ChefApp';
import ContactsList from './components/contact/ContactsList';
import Index from './components/index';
import ReactFacts from './components/react facts/ReactFacts'
import TravelJournal from './components/travel journal/TravelJournal';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/react-facts" element={<ReactFacts/>}/>
            <Route path="/travel-journal" element={<TravelJournal/>}/>
            <Route path="/contacts" element={<ContactsList/>}/>
            <Route path="/chef-claude" element={<ChefApp/>}/>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
