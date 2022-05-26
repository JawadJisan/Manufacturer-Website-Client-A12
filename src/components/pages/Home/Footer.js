import React from 'react';
import { FcShop } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import './Footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <footer class="footer px-10 py-14 bg-base-200 text-base-content">
                <div>
                    <Link to='/'><FcShop className='iconss' /></Link>
                    <p>RIPARA<br />ALL TOOLS AND PARTS <br /> SOLUTION IN ENTIRE PLANET</p>
                </div>
                <div>
                    <span class="footer-title">Information</span>
                    <a class="link link-hover">Site Map</a>
                    <a class="link link-hover">Speciais</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Privacy Policy</a>
                </div>
                <div>
                    <span class="footer-title">My Account</span>
                    <a class="link link-hover">Checkout</a>
                    <a class="link link-hover">Login</a>
                    <a class="link link-hover">Order Status</a>
                </div>
                <div>
                    <span class="footer-title">Sign Up For Newsletters
                    </span>
                    <div class="form-control w-80">
                        <label class="label">
                            <span class="label-text">Enter your email address</span>
                        </label>
                        <div class="relative">
                            <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                            <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div>
                    <span class="footer-title">Social</span>
                    <div class="grid grid-flow-col gap-4">
                        <BsFacebook className='iconnn' />
                        <FaTwitter className='iconnn' />
                        <AiFillYoutube className='iconnn' />

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;