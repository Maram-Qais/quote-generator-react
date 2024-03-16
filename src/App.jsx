import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import QuoteFetcher from './QuoteFetcher'
import QuoteLoader from './QuoteLoader'
function App() {

  return (
    <>
    <QuoteLoader/>
    {/* <QuoteFetcher/> */}
     {/* <Counter/> */}
    </>
  )
}

export default App
