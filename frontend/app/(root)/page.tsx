import InterviewList from '@/components/InterviewList';
import InterviewCard from '@/components/InterviewCard';
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
    <section className="card-cta mt-8">
  {/* Texto e botão à esquerda */}
  <div className="flex flex-col gap-4 max-w-lg">
    <h2 className="font-bold text-4xl text-primary">
      Comece uma conversa com a IA, pratique um novo idioma e receba feedback
    </h2>
    <p className="text-lg text-gray-400">
      Pratique a conversação em outro idioma de forma divertida e interativa.
    </p>
    <Button
      asChild
      className="btn max-sm:w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-lg shadow-sm transition"
    >
      <Link href="/interview">Comece a entrevista</Link>
    </Button>
  </div>
    <div className="flex-shrink-0">
    <Image
      src="/many-robos.png"
      alt="robo-dude"
      width={400}
      height={400}
      className="drop-shadow-lg"
    />
    </div>
     </section>

     <section className='flex flex-col gap-6 mt-8'>
      <h2 className='text-2xl font-semibold'>Suas Interações</h2>

      <div className='interviews-section'>
       <InterviewList interviews={dummyInterviews} />
      </div>
     </section>

    {/*} <section className='flex flex-col gap-6 mt-8'>
      <h2 className='text-2xl font-semibold'>Converse com o robo</h2>
      <div className='interviews-section'>
         <p>{dummyInterviews.map((interview) => (
          <InterviewCard {...interview} key={interview.id} />
        ))}</p>
      </div>
     </section>*/}

    </>
  );
};


export default Home