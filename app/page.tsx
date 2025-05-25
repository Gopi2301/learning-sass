import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
    <h1 className='text-2xl underline'>Popular Components</h1>
    <section className='home-section'>
    <CompanionCard 
      id ="123" 
      name ="Neura the Brainy Explorer"
      topic = "Neural Network of the Brain"
      subject = "science"
      duration = {45}
      color = "#ffda6e"
    />
    <CompanionCard 
      id ="1234" 
      name ="County the Number wizard"
      topic = "Neural Network of the Brain"
      subject = "Maths"
      duration = {30}
      color = "#e5d0ff"
    />
    <CompanionCard 
      id ="12345" 
      name ="Verba the Verbal Explorer"
      topic = "Language"
      subject = "English"
      duration = {45}
      color = "#BDE7FF"
    />
    </section>
    <section className='home-section'>
      <CompanionList 
        title = "Recently completed sessions"
        companions ={recentSessions}
        classNames="w-2/3 max-lg:w-full "
      />
      <CTA />
    </section>
    </main>

  )

}

export default Page