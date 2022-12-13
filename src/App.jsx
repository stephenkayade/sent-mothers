import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./components/pages/Home'))
const About = React.lazy(() => import('./components/pages/About'))
const Partner = React.lazy(() => import('./components/pages/Partner')) 
const Testimonies = React.lazy(() => import('./components/pages/Testimonies')) 
const Contact = React.lazy(() => import('./components/pages/Contact')) 
const Events = React.lazy(() => import('./components/pages/Events'))

const App = () => {
  return (
    <>
      <Router>
        <Suspense>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/partner' element={<Partner />} />
            <Route path='/testimonies' element={<Testimonies />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/events' element={<Events />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App