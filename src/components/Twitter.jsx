import React, { useState } from 'react'
import './twitter.css'


function Twitter({userName,children,initialIsFollowing}) {

    const [isFollowing,setIsFollowing] = useState(initialIsFollowing)

    const img = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-info-button is-following': 'tw-followCard-info-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing) 
    }

  return (
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img  
            className='tw-followCard-avatar'
            alt="img avatar" 
            src={img}/>
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-info-span'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={(handleClick)}>
            <span className='tw-followCard-text'> {text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
  )
}

export default Twitter