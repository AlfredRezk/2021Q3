import React from 'react'
import '../assets/workshop-styles.css'
import Posts from './Posts';



const Main = ({ posts}) => {
  return (
    <main className='Main'>
      <h1>Soooooooooooo heading </h1>
      <Posts posts={ posts}/>
    </main>
  )
}

export default Main