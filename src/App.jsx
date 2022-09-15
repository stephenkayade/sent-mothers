import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./components/pages/Home'))

const App = () => {
  return (
    <>
      <Router>
        <Suspense>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App