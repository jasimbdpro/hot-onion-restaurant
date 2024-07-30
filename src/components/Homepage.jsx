import React, { useEffect, useState } from 'react';

const Homepage = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('/fakedata/fake-data.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
    }, [])
    return (
        <div>
            <img src="vite.svg" alt="" />
            <p>homepage</p>
        </div>
    );
};

export default Homepage;