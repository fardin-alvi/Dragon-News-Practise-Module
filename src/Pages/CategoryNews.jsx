import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Components/Cards';

const CategoryNews = () => {
    const {data} = useLoaderData()
    return (
        <div className='space-y-3 px-2'>
            <h1 className='mb-3 text-lg font-semibold'>Dragon News Home</h1>
            {
                data.map(news => <Cards news={news} />)
            }      
        </div>
    );
};

export default CategoryNews;