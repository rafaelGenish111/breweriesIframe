import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Breweries from './components/Breweries'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exect Component={Breweries} />
      </Routes>
    </Router>
  )
}
