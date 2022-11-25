import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

//Outlet is the same as children
const Layout = () => {
  return (
    <>
      <Header />
      <div className='bg-gray-300'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
            <h2 className='text-2xl font-bold text-gray-900'>Collections</h2>

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
