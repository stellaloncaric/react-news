import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./Header/Header"
import reportWebVitals from './reportWebVitals';

import NavigationBar from "./NavigationBar/NavigationBar";
import TopStories from "./TopStories/TopStories";
import BusinessNews from "./BusinessNews/BusinessNews";
import EntertainmentNews from "./EntertainmentNews/EntertainmentNews";
import TechnologyNews from './TechnologyNews/TechnologyNews';
import SportsNews from './SportsNews/SportsNews';
import TopicBasedNews from './TopicBasedNews/TopicBasedNews';

import {BrowserRouter, Route, Navigate, Routes} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <div className='news-app-container'>
          <Header />
          <div className='news-container'>
            <BrowserRouter>
              <NavigationBar />
              <div className='news-section'>
                <Routes>
                  <Route path='/topstories' element={<TopStories/>} />
                  <Route path='/topics/business' element={<BusinessNews/>} />
                  <Route path='/topics/entertainment' element={<EntertainmentNews/>} />
                  <Route path='/topics/technology' element={<TechnologyNews/>} />
                  <Route path='/topics/sports' element={<SportsNews/>} />
                  <Route path='/topics/:name' element={<TopicBasedNews/>} />
                  <Route path='*' element={<Navigate to='/topstories'/>} />
                </Routes>
                </div>
              </BrowserRouter> 
            </div>
        </div> 
  </React.StrictMode>
);

reportWebVitals();
