import React from 'react'
import Twitter from './components/Twitter'
import './index.css'

const users = [
  {
  id: 1,
  userName: 'midudev',
  name: 'Miguel Angel Duran',
  isFollowing: true
},
{
  id: 2,
  userName: 'pheralb',
  name: 'Pablo Hernandez',
  isFollowing: false
},
{
  id: 3,
  userName: 'TMChein',
  name: 'Tomas',
  isFollowing: true
}
]

function App() {
  return (
    <section className='app'>
      {
        users.map(user => {
          const {id,userName,name,isFollowing} = user
          return <Twitter key={id}
          userName={userName}
          isFollowing={isFollowing}
          >
            {name}
          </Twitter>
        })
      }
    </section>
  )
}

export default App