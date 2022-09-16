import React from 'react'
import MainCard from './MainCard'
import GrowTogether from '../assets/illustration-grow-together.svg'
import FlowConverse from '../assets/illustration-flowing-conversation.svg'
import YourUsers from '../assets/illustration-your-users.svg'

const Main = () => {
  return (
    <main className='mx-auto w-full p-8 flex flex-col justify-around gap-8'>
      <MainCard 
        image={GrowTogether} 
        forAlt='grow together'
        heading='Grow Together'
        para='Generate a meaningful discussions with
        your audience and build a strong, loyal
        community. Think of the insightful conversations
        you miss out on with a feedback form.'
      />

      <MainCard
        image={FlowConverse}
        forAlt='flowing conversations'
        heading='Flowing Conversations'
        para="You wouldn't paginate a conversation
        in real life, so why do it online? Our
        threads have just-in-time loading for a
        more natural flow."
      />

      <MainCard 
        image={YourUsers}
        forAlt="your users"
        heading='Your Users'
        para="It takes no time at all to integrate
        Huddle with your app's
        authentication solution. This means, 
        once signed in to your app, your
        users can start chatting immediately."
      />

    </main>
  )
}

export default Main