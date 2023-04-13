import React from 'react'

const Waitlist = () => {
    return (
        <>
            <div id='waitlist' className="container rounded-xl space-y-5 lg:space-x-6 bg-[rgba(255,255,255,0.2)] lg:mx-auto lg:w-3/4 p-10 text-white flex flex-col lg:flex-row items-center justify-center">
                <p className='lg:w-1/2 font-jost text-4xl'>Don&apos;t miss out on the <span className=' text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>future of video search</span> - join our waitlist today and be the first to experience the power of AI!</p>
                <form className='flex flex-col w-full  lg:w-1/2 space-y-8' action="">
                    <input required className='p-4 rounded-lg w-full outline-none bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)]' type="text" name="name" id="name" placeholder='Enter you name' />
                    <input required className='p-4 rounded-lg w-full outline-none bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)]' type="email" name="email" id="email" placeholder='Enter your email' />
                    <button className={`overflow-hidden border border-[rgba(255,255,255,0.4)] before:-translate-x-[18rem] hover:before:translate-x-0 before:block before:absolute before:-inset-3 before:skew-x-[30deg] relative inline-block before:bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 px-4 rounded-md before:transition-all before:duration-500`}>
                        <span className={`relative font-roboto text-lg transition-all duration-500`}>Submit</span>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Waitlist
