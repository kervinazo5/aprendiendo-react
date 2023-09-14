import React from 'react'
import Twitter from './components/Twitter'
import './index.css'

function App() {
  const formatUserName = (userName) => `@${userName}` 
  return (
    <section className='app'>
    <Twitter formatUserName={formatUserName}  userName="midudev" initialIsFollowing={true}>
      Kervin Hernandez
    </Twitter>
    <Twitter formatUserName={formatUserName}  userName="pheralb">
      Pablo Ángel Durán
    </Twitter>
    </section>
  )
}

export default App