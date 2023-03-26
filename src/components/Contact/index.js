import React,{ useState, useEffect, useRef} from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [letterClass,setLetterClass] =  useState('text-animate');
    const form = useRef();

    useEffect(() => {
     setTimeout(() => {
        setLetterClass('text-animate-hover')
     }, 3000);
    }, [])
    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_in2zzml','template_pcxi3if',form.current,'qwVVGYKg0r-u6-ezV').
        then((result)=>{
            console.log(result.text)
            if(result.text === 'ok'){
                form.current.value ={}
            }
        },
        (error)=>{
            console.log(error)
        }
        )

    }

  return (
    <>
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ','M','e']} idx={15}   
                letterClass={letterClass} 
                />
            </h1>
            <p>
                I am interested in any opportunities - especially ambitious or
                large projects. However, if you have other request or question,
                don't hesitate to contact me using below form either.
            </p>
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required/>
                        </li>

                        <li className='half'>
                            <input type='email' name='email' placeholder='E-mail' required/>
                        </li>

                        <li >
                            <input type='text' name='subject' placeholder='Subject' required/>
                        </li>

                        <li>
                            <textarea placeholder='Message' name='message' required></textarea>
                        </li>

                        <li>
                            <input type={"submit"} className="flat-buttom" value={"SEND"}/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Contact