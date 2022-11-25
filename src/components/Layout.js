import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

//Outlet is the same as children
const Layout = () => {
  return (
    <>
      <Header />
      <div className=''>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Robots Posts
            </h2>
            <p className='mt-4 text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde et
              architecto aspernatur incidunt voluptas! Nemo placeat amet
              assumenda, quia est beatae maxime quo corrupti repellendus velit,
              aliquid qui modi excepturi.
            </p>

            <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
