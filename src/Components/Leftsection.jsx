import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Leftsection = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategory(data.data.news_category))
    }, [])

    return (
        <div>
            <p className="font-semibold">All category</p>
            <div className="flex flex-col gap-y-2 mt-3">
                {
                    category.map(cate => (
                        <NavLink to={`/category/${cate.category_id}`} className="btn">{cate.category_name}</NavLink>
                    ))
                }
            </div>
            
        </div>
    );
};

export default Leftsection;