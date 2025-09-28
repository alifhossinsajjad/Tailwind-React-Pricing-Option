import React from 'react';

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Products", path: "/products" },
  { id: 3, name: "About Us", path: "/about" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Blog", path: "/blog" }
];

const NavBar = () => {
    return (
        <nav>
           <ul className='flex justify-center items-center gap-10 my-10 shadow p-5'>
             {
                navigationData.map(route => <li key={route.id}>
                     <a href={route.path}>{route.name}</a>
                </li>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;