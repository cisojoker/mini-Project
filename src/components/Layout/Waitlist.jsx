import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Alert from './Alert';
import alertContext from '@/context/alert/alertContext';

const Waitlist = () => {

    const [credentials, setCredentials] = useState({ name: '', email: '' });
    const AlertContext = useContext(alertContext);
    const { showAlert } = AlertContext;
    const [loader, setLoader] = useState(false);
    const [ref, inView] = useInView({
        threshold: 0.5, // trigger animation when the element is 50% in view
        triggerOnce: true, // only trigger once
    });

    const listVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: 0.4,
            },
        },
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const getFirstName = (fullName) => {
        // split the full name string into an array of individual name parts
        const nameParts = fullName.split(' ');
        // return only the first name (the first item in the array)
        return nameParts[0];
    }

    function isValidEmail(email) {
        // regular expression pattern for email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        const response = await fetch(`https://clipsurf.onrender.com/${credentials.email}&${getFirstName(credentials.name)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        setCredentials({ name: '', email: '' });
        const json = await response.json()
        if (json.status === 'success') {
            showAlert('success', 'You have been added to the waitlist!')
        } else {
            showAlert('failure', 'Something went wrong. Please try again.')
        }
        setLoader(false);
    }

    const managehandleSubmit = (e) => {
        e.preventDefault();
        if (credentials.name === '' || credentials.email === '') {
            showAlert('failure', 'Please fill in all the fields.')
        }
        else if (credentials.name.length < 3) {
            showAlert('failure', 'Please enter a valid name.')
        }
        else if (!isValidEmail(credentials.email)) {
            showAlert('failure', 'Please enter a valid email address.')
        }
        else {
            handleSubmit(e);
        }
    }

    return (
        <>
            <Alert />
            <motion.div
                ref={ref}
                variants={listVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                id='waitlist' className="container rounded-xl space-y-5 lg:space-x-6 bg-[rgba(255,255,255,0.2)] lg:mx-auto lg:w-3/4 p-10 my-10 text-white flex flex-col lg:flex-row items-center justify-center">
                <div className="fomo">
                    <Image src='/assets/waitlist.png' width={500} height={500} alt='fomo' />
                </div>
                <form className='flex flex-col w-full  lg:w-1/2 space-y-8' action="">
                    <p className=' font-jost text-center lg:text-left text-2xl lg:text-4xl'>Don&apos;t miss out on the <span className=' text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>future of video search</span> - join our waitlist today and be the first to experience the power of AI!</p>
                    <motion.input
                        whileFocus={{ y: -2, scale: 1.05, boxShadow: '0 0 10px rgba(255,255,255,0.1)' }}
                        required onChange={onChange} value={credentials.name} className='p-4 rounded-lg w-full outline-none bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)]' type="text" name="name" id="name" placeholder='Enter you name' />
                    <motion.input
                        whileFocus={{ y: -2, scale: 1.05, boxShadow: '0 0 10px rgba(255,255,255,0.1)' }}
                        required onChange={onChange} value={credentials.email} className='p-4 rounded-lg w-full outline-none bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)]' type="email" name="email" id="email" placeholder='Enter your email' />
                    <motion.button
                        title='Submit'
                        onClick={managehandleSubmit}
                        whileHover={{ y: -3, scale: 1.05, boxShadow: '0 0 10px rgba(255,255,255,0.2)' }}
                        className={`overflow-hidden h-12 flex items-center justify-center border border-[rgba(255,255,255,0.4)] before:-translate-x-[40rem] hover:before:translate-x-0 before:block before:absolute before:-inset-3 before:skew-x-[30deg] relative before:bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 px-4 rounded-md before:transition-all before:duration-500`}>
                        {loader && <Image className='relative mr-2 h-10 w-10' src='https://samherbert.net/svg-loaders/svg-loaders/three-dots.svg' width={500} height={500} alt='clip' />}
                        {!loader && <span className={`relative font-roboto text-lg transition-all duration-500`}>Submit</span>}
                    </motion.button>
                </form>
            </motion.div>
        </>
    )
}

export default Waitlist
