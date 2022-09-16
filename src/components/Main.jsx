import React from 'react'
import MainCard from './MainCard'
import GrowTogether from '../assets/illustration-grow-together.svg'
import FlowConverse from '../assets/illustration-flowing-conversation.svg'
import YourUsers from '../assets/illustration-your-users.svg'

const Main = () => {
  return (
    <main>
      <MainCard 
        image={GrowTogether} 
        forAlt='grow together'
        heading='Grow Together'
        para='Generate a meaningful discussions with
        your audience and build a strong, loyal
        community. Think of the insightful conversations
        you miss out on with a feedback form.'/>
    </main>
  )
}

export default Main