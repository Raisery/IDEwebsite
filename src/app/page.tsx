import Game from '@/components/Game/Game'
import Header from '@/components/Header/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full h-full text-[#E5E9F0] flex flex-col'>
      <Header />
      <div className='w-full h-full place-self-center overflow-hidden relative lg:flex lg:flex-col justify-center xl:max-w-[1280px]'>
        <div className='p-[27px] mt-[25%] md:mt-auto lg:max-w-[45%] lg:m-0'>
          <p className='text-base font-light tracking-wider'>Hi all. I am</p>
          <h1 className='text-7xl font-light'>Lucas Gerard</h1>
          <p className='text-[#43D9AD] text-xl text-light'>&gt; Front-end developer</p>
        </div>
        <div className='hidden md:flex w-[80%] mx-auto h-[40%] mt-6 mb-6 lg:flex-row lg:absolute lg:w-[50%] lg:h-[60%] lg:right-[5%] lg:top-[50%] lg:translate-y-[-50%]'>
          <Game />
        </div>
        <Github />
      </div>      
    </div>
  )
}

const Github = () => {
  return (
    <div className='p-[27px] mt-[30%] md:mt-0'>
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <p className='text-[#607B96] text-sm md:hidden'>// find my profile on Github:</p>
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <p className='text-[#607B96] text-sm hidden md:block'>// complete the game to continue</p>
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <p className='text-[#607B96] text-sm hidden md:block'>// you can also see it on my Github page</p>
        <p className='mt-[12px] text-sm'>
          <span className='text-[#4D5BCE]'>const </span> 
          <span className='text-[#43D9AD]'>githubLink </span> = 
          <Link className='text-[#E99287]' href='https://github.com/Raisery'> https://</Link>
        </p>
        <Link className='text-sm text-[#E99287]' href='https://github.com/Raisery'>github.com/Raisery</Link>
      </div>
  )
}

