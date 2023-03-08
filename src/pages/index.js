import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
// import logo from '../../public/logo.png'
import {AiFillLinkedin, AiFillGithub, AiFillYoutube} from 'react-icons/ai'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lesliee Cruz Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 bg-orange-50">
        <section className="min-h-screen ">
        <nav className='py-10 mb-12 flex justify-between'>
          {/* <img src= {logo}></img> */}
          <h1 className='text-5xl  text-black font-rochester'>lesliee<span className="text-rose-400">cruz</span></h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
            <li><a className=" bg-gradient-to-r from-rose-400 to-pink-600 text-white px-4 py-2 rounded-md ml-8" href='$'>Resume</a></li>
          </ul>
        </nav>

        <div className='text-center'>
          <h2>Lesliee Cruz</h2>
          <h3>Developer and Designer</h3>
          <p>with a passion for designing and developing engaging, entertaining user experiences. Currently working at Brigham Young University - Idaho as Full-Stack Developer. 👩🏻‍💻</p>
        </div>
        <div>
        <a href='#'><AiFillLinkedin/></a>
        <a href='#'><AiFillGithub/></a>
        <a href='#'><AiFillYoutube/></a>
        
        </div>
        </section>
         
      </main>
    </>
  )
}
