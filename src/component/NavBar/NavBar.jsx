import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Link from './Link';

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Products", path: "/products" },
  { id: 3, name: "About Us", path: "/about" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Blog", path: "/blog" }
];

const NavBar = () => {


  const [open, setOpen] = useState(false)


  const links = navigationData.map(route => <Link key={route.id} route={route} />)

  return (
    <nav className='flex justify-between  items-center lg:mx-20 mx-7 mt-5 cursor-pointer'>

      <span className='flex gap-2 items-center ' onClick={() => setOpen(!open)}>
        {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}

        <ul className={`md:hidden absolute duration-1000  ${open ? 'top-14' : '-top-40'}`}>
          {
            links
          }
        </ul>

        <h1>my nav</h1>
      </span>

      <ul className='md:flex hidden justify-center gap-10 cursor-pointer'>
        {
          links
        }
      </ul>
      <button className=' bg-blue-500 p-2 rounded-lg cursor-pointer'>Sign in</button>


    </nav>
  );
};

export default NavBar;