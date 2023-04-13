import React from 'react'

const Button = (props) => {
    return (
        <button className={`overflow-hidden border border-[rgba(255,255,255,0.4)] before:-translate-x-[12rem] hover:before:translate-x-0 before:block before:absolute before:-inset-3 before:skew-x-[30deg] relative inline-block before:bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 px-4 shadow-2xl hover:shadow-[rgba(255,255,255,0.3)] rounded-md before:transition-all before:duration-500`}>
            <span className='relative font-roboto text-lg transition-all duration-500'>{props.content}</span>
        </button>
    )
}

export default Button
