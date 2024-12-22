import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import About from './Components/About/About'
import Project from './Components/Project/Project'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <>
    <div className="main bg-gray-50 min-h-[100vh] relative z-10 text-gray-950  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
    <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
    <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
     <NavBar/>
     <Home/>
     <About/>
     <Project/>
     <Experience/>
     <Contact/> 
     <Footer/>
     </div>
    </>
  )
}

export default App