import Header from '@/components/Header/Header'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full h-full text-[#E5E9F0]'>
      <Header />
      <div className='p-[27px] mt-[25%]'>
        <p className='text-base font-light tracking-wider'>Hi all. I am</p>
        <h1 className='text-7xl font-light'>Lucas Gerard</h1>
        <p className='text-[#43D9AD] text-xl text-light'>&gt; Front-end developer</p>
      </div>
      <div className='p-[27px] mt-[30%]'>
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <p className='text-[#607B96] text-sm'>// find my profile on Github:</p>
        <p className='mt-[12px] text-sm'>
          <span className='text-[#4D5BCE]'>const </span> 
          <span className='text-[#43D9AD]'>githubLink </span> = 
          <Link className='text-[#E99287]' href='https://github.com/Raisery'> https://</Link>
        </p>
        <Link className='text-sm text-[#E99287]' href='https://github.com/Raisery'>github.com/Raisery</Link>
      </div>
    </div>
  )
}
