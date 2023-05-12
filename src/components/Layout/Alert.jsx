import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import alertContext from '@/context/alert/alertContext'

export default function Alert() {

    const AlertContext = useContext(alertContext);
    const { alert } = AlertContext;

    return (
        alert && <div className='w-full flex justify-center'>
            <div className="alert z-50 mx-2 lg:mx-0 flex items-center justify-center animate-alert fixed p-2 py-3 -top-40 translate-y-44 rounded-lg bg-white">
                {(alert.type === 'success' || alert.type === 'Successful') && <FontAwesomeIcon className='bg-green-400 w-4 h-4 mr-4 text-white p-1 rounded-full' icon={faCheck} />}
                {alert.type === 'failure' || alert.type === 'Failed' && <FontAwesomeIcon className='bg-red-500 px-[0.4rem] py-1 lg:w-4 lg:h-4 mr-4 text-white lg:p-1 rounded-full' icon={faXmark} />}
                <p>{alert.msg}</p>
            </div>
        </div>

    )
}

