import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Navbar = () => {
  useGSAP(()=>{
    const navTween = gsap.timeline({
        ScrollTrigger : {
            trigger : "nav",
            start: "bottom top",
            //when our nav(which is at bottom) reaches the top(of the viewport), the animation starts
        }
    });
    navTween.fromTo("nav",{backgroundColor: "transparent"},{
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.out",
    });
  })

  return (
    <nav>
        <div>
            <a href="#home" className='flex items-center gap-2'>
                <img src="/images/logo.png" alt="logo" />
                <p>velvet Pour</p>
            </a>

            <ul>
                {navLinks.map((link) => (    
                    //using paranthesis here means automactically return..if curly braces are used then return keyword is needed
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
