import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import Generate from './components/pages/Generate'
import Home from './components/pages/Home'
import VirtualCard from './components/pages/VirtualCard'

function App() {

  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/generate" element={<Generate />} />
      <Route path="/:path" element={<VirtualCard />} />
    </Routes>
   </Router>
  )
}

export default App
