import React from 'react';

const Links = ({route}) => {
    return (
        <li className='px-3 lg:mr-10 hover:bg-blue-400 '>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Links;