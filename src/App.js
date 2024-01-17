import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
// import { Feed } from '@mui/icons-material';
import SearchFeed from './components/SearchFeed';
import Feed from './components/Feed'
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import Videos from './components/Videos';
import VideoCard from './components/VideoCard';
import ChannelCard from './components/ChannelCard';



const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Box sx={{backgroundColor: '#000'}}>
      <Navbar/>
      <Routes>
        <Route  path="/"  exact element={<Feed/>}/>
        <Route  path="/video/:id"  element={<VideoDetail/>}/>
        <Route  path="/channel/:id"  element={<ChannelDetail/>}/>
        <Route  path="/search/:searchTerm"  element={<SearchFeed/>}/>
        

      </Routes>
       
     </Box>
     
    </BrowserRouter>

    </div>
  )
}

export default App

// rafce command for basic syntex
