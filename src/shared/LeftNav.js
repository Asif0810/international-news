import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setcategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setcategories(data))
    }, [])
    return (
        <div>
            <h2>left nav</h2>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/:${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;