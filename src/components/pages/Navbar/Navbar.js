import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user)
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  }
  const { pathname } = useLocation()
  console.log(pathname)

  return (
    <div class='drawer  drawer-end ' >
      <input id='my-drawer-3' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content flex flex-col'>
        <div class='w-full navbar bg-blue-200 fixed top-0 z-50 lg:px-20'>
          {<label for="my-drawer-2" tabindex="0" class="btn btn-ghost btn-circle drawer-button lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>}
          <div class='flex-1 px-2 mx-2 text-2xl'><Link to='/'>RIPARA..</Link> </div>
          <div class='flex-none lg:hidden'>
            <label for='my-drawer-3' class='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                class='inline-block w-6 h-6 stroke-current'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </label>
          </div>
          <div class='flex-none hidden lg:block'>
            <ul class='menu menu-horizontal gap-x-2'>
              <li>
                <NavLink to='/' className='rounded-lg'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/myPortfolio' className='rounded-lg'>
                  My Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to='/blogs' className='rounded-lg'>
                  BLOGS
                </NavLink>
              </li>
              <li>
                <NavLink to='/contact' className='rounded-lg'>
                  Contact
                </NavLink>
              </li>
              <li>
                <li>{user ? <button onClick={logout} className="btn btn-active btn-ghost">Sign Out</button>
                  : <NavLink to='/login' className='rounded-lg'>
                    Login
                  </NavLink>}</li>

              </li>
              <li>
                {user && <NavLink to='/dashboard' className='rounded-lg'>
                  Dashboard
                </NavLink>}
              </li>
              {user &&
                <div class="dropdown dropdown-end">
                  <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                      <img src={user?.photoURL ? user?.photoURL : 'USER'} />
                    </div>
                  </label>
                  <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li className="text-center mx-auto ">{user && <button onClick={logout} className="btn btn-active btn-error">Sign Out</button>}
                    </li>
                    <li className="text-center mx-auto "><a>{user.displayName}  </a></li>

                  </ul>
                </div>
              }
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div class='drawer-side'>
        <label for='my-drawer-3' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-80 bg-base-100'>
          <li>
            <NavLink to='/' className='rounded-lg'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/myPortfolio' className='rounded-lg'>
              My Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='rounded-lg'>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' className='rounded-lg'>
              Login
            </NavLink>
          </li>
          <li>
            {user && <NavLink to='/dashboard' className='rounded-lg'>
              Dashboard
            </NavLink>}
          </li>
          {user &&
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src={user?.photoURL ? user?.photoURL : 'USER'} />
                </div>
              </label>
              <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>{user && <button onClick={logout} className="btn btn-active btn-ghost">Sign Out</button>}
                </li>
              </ul>
            </div>
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;