import { useState } from 'react'
import './index.css'
import About_me from './component/About_me'
import Languages from './component/Languages'
import My_projects from './component/My_projects'
import Contact from './component/Contact'
import Footer from './component/Footer'

document.addEventListener('scroll', (e) =>{
    console.log(e)
    let v = window.scrollY/window.innerHeight;
    v = parseInt(v+0.2);

    const elements = document.querySelector(".sidebar__list").querySelectorAll("li")

    Array.from(elements).map((element, index) => {
            element.classList.remove("ml-3")
            element.classList.remove("font-bold")
            if(v === index){
                element.classList.add("ml-3")
                element.classList.add("font-bold")
            }
        }
    )
});

function App() {
  return (
      <div className="font-My">
          <div className="fixed top-2/4 text-Last left-10">
            <ul className="list-disc sidebar__list">
                <li className="hover:text-gray-400 ml-3 font-bold"><a href="#aboutme">😀 About me</a></li>
                <li className="hover:text-gray-400"><a href="#languages">🧰 Languages</a></li>
                <li className="hover:text-gray-400"><a href="#myprojects">🗃 My projects</a></li>
                <li className="hover:text-gray-400"><a href="#contact">📨 Contact</a></li>
            </ul>
          </div>
        <div className="App grid grid-cols-2 grid-cols-[20%_60%_20%] bg-First">
            <div></div>
            <div>
                <About_me/>
                <Languages/>
                <My_projects/>
                <Contact/>
                <Footer/>
            </div>
            <div className="h-screen"></div>
        </div>
      </div>
  )
}

export default App
