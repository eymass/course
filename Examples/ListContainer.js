import React, {useState, useEffect} from 'react';
import fetchSource from 'fetchSource';

const ListContainer = ({ type, Translate, Component }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // fetching logic
        // ....
        fetchSource(type);
        setData(data);
    }, []);

    return (
        <div>
            <Component data={data} Translate={Translate[type]} />
        </div>
        );
};




const HomePage = ({ Translate }) => {

    return (
        <div>
            <ListContainer type="shoes" Translate={Translate} Component={Shoes} />
            <ListContainer type="shirts" Translate={Translate} Component={Shirts} />
        </div>
        );
};























ListContainer();
HomePage();
