import TitleSection from '@/components/landing-page/title-section';
import React from 'react'

const HomePage = () => {
  return (
    <section>
        <div className='overflow-hidden px-4 sm:px-6 sm:flex sm:flex-col gap-4 md:justify-center md:items-center'>
          <TitleSection pill="✨ Your Workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"/>
        </div>
        <div className='bg-white
          p-[2px]
          mt-[6]
          reounded-xl
          bg-gradient-to-r
          from-primary
          to-brand-primaryBlue
          sm:w-[300px]

        '>
            <Button variant="btn-seceondary"></Button>
            
            
        </div>
    </section>
  )
}

export default HomePage;1