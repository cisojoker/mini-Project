import { SignIn } from '@clerk/nextjs'
import { motion } from "framer-motion"
import React from 'react'

const Signin = () => {
    return (
        <>
            <div className='lg:h-screen mb-5 overflow-hidden lg:pl-40 w-full flex flex-col lg:flex-row justify-center items-center'>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="image lg:w-1/2">
                    <img className='lg:w-full w-full my-14 lg:my-0 animate-up-down lg:pb-10 lg:pr-10' src='/assets/waitlist.png' width={200} height={200} alt='login' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="login lg:w-1/2">
                    <SignIn
                        appearance={{
                            elements: {
                                logoBox: 'hidden',
                                card: " bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.1)]",
                                formButtonPrimary: 'border-2 border-white hover:-translate-y-1 transition-all duration-500 overflow-hidden hover:bg-transparent bg-transparent h-12 flex items-center justify-center before:-translate-x-[40rem] before:-z-10 hover:before:translate-x-0 before:block before:absolute before:-inset-3 before:skew-x-[30deg] relative before:bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 px-4 rounded-md before:transition-all before:duration-500',
                                headerTitle: 'text-transparent text-2xl bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500',
                                headerSubtitle: 'text-white',
                                socialButtonsBlockButton: 'border border-[rgba(255,255,255,0.3)] text-white rounded-md py-4',
                                dividerLine: 'bg-white',
                                dividerText: 'text-white',
                                identityPreview: 'border border-[rgba(255,255,255,0.3)] text-white rounded-full py-2',
                                identityPreviewText: 'text-white',
                                identityPreviewEditButton: 'hover:text-pink-500 transition-all duration-300 text-white',
                                formHeaderTitle: 'text-white',
                                formHeaderSubtitle: 'text-white',
                                formFieldInput: 'p-4 rounded-lg mt-2 w-full text-white outline-none bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)]',
                                formFieldLabel: 'text-white',
                                footerActionText: 'text-white',
                                headerBackIcon: 'text-white',
                                headerBackLink: 'text-white',
                                otpCodeFieldInput: 'text-white rounded-xl px-2 bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)]',
                                alternativeMethodsBlockButton: 'border border-[rgba(255,255,255,0.3)] text-white rounded-md py-4',
                                alternativeMethodsBlockButtonText: 'text-white',
                                formFieldAction__password: 'hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500  hover:text-transparent hover:bg-clip-text text-white',
                                formResendCodeLink: 'hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500  hover:text-transparent hover:bg-clip-text text-white underline',
                                footerActionLink: 'hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500  hover:text-transparent hover:bg-clip-text text-white',
                            }
                        }}
                    />
                </motion.div>
            </div>
        </>
    )
}

export default Signin
