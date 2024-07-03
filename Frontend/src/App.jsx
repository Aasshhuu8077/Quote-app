import React, { Fragment } from 'react'
import MainNavi from './Components/Mainnavigation/MainNavi'
import {Routes,Route} from 'react-router-dom'
import AllQuotes from './Components/Pages/AllQuotes'
import NewQuotes from './Components/Pages/NewQuotes'
import ShowQuotes from './Components/Pages/ShowQuotes'

function App() {
  return (
    <Fragment>
      <MainNavi/>
      <main>
        <Routes>
        <Route path = '/' element={<AllQuotes/>}/>
        <Route path = '/new' element={<NewQuotes/>}/>
        <Route path = '/quotes/:id' element={<ShowQuotes/>}/>
        </Routes>
       
      </main>
    </Fragment>
  )
}

export default App