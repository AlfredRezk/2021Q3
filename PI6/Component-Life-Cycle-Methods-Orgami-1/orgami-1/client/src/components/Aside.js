import React from 'react'
import Link from './Link'
import '../assets/workshop-styles.css';

const Aside = () => {
  return (
    <aside className='Aside'>
      <ul>
        { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, i) => <Link num={ num } key={ i}/>)}
      </ul>
  </aside>
  )
}

export default Aside