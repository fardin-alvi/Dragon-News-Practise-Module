import React from 'react';
import swimming from '../assets/swimming.png'
import classpic from '../assets/class.png'
import  playground from '../assets/playground.png'
const Qzone = () => {
    return (
        <div className='bg-base-200 px-3 py-2'>
            <h1 className='font-semibold'>Q Zone</h1>
            <div className='flex flex-col gap-y-2 mt-3'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-3 pt-3">
                        <img
                            src={swimming}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <h2 className="font-semibold text-center">Swimming</h2>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-3 pt-3">
                        <img
                            src={classpic}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <h2 className="font-semibold text-center">Class</h2>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-3 pt-3">
                        <img
                            src={playground}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <h2 className="font-semibold text-center">Playground</h2>
                </div>
            </div>
        </div>
    );
};

export default Qzone;