import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router';

const TopScroll = () => {
    const {pathname}=useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
    }, [pathname]);
  return (
    <>
      <Outlet/>
    </>
  )
}

export default TopScroll
