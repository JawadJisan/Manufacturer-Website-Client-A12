import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-[100px]' >
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center ">
                        <h1 class="text-2xl text-center font-bold">Different ways to manage a state in a React application?</h1>
                        <ul>
                            <li className='p-2 m-2 text-lg'>Local (UI) state – Local state is data we manage in one or another component.</li>
                            <p>Local state is most often managed in React using the useState hook.</p>
                            <li className='p-2 m-2 text-lg'>Global (UI) state – Global state is data we manage across multiple components.</li>
                            <p>Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                            <li className='p-2 m-2 text-lg'>Server state – Data that comes from an external server that must be integrated with our UI state.</li>
                            <p>Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>
                            <li className='p-2 m-2 text-lg'>URL state – Data that exists on our URLs, including the pathname and query parameters.</li>
                            <p className=''>URL state is often missing as a category of state, but it is an important one.
                            </p>
                        </ul>
                    </div>
                    <div className='bg-base-100 m-20 p-14 rounded-2xl'>
                        <h1 className='text-center text-2xl font-serif font-bold'> How will you improve the performance of a React Application?</h1>
                        <ul>
                            <li className='p-2 m-2 text-lg'>* Single-File Builds</li>
                            <li className='p-2 m-2 text-lg'>* Using: Brunch, Browserify, Rollup, webpack</li>
                            <li className='p-2 m-2 text-lg'>* Profiling Components with the DevTools Profiler</li>
                            <li className='p-2 m-2 text-lg'>* Keeping component state local where necessary</li>
                            <li className='p-2 m-2 text-lg'>* Memoizing React components to prevent unnecessary re-renders</li>
                            <li className='p-2 m-2 text-lg'>* Code-splitting in React using dynamic import()</li>
                            <li className='p-2 m-2 text-lg'>* Windowing or list virtualization in React</li>
                            <li className='p-2 m-2 text-lg'>* Virtualize Long Lists</li>
                            <li className='p-2 m-2 text-lg'>* Avoid Reconciliation</li>
                            <li className='p-2 m-2 text-lg'>* shouldComponentUpdate In Action</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='divider'></div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content grid">
                    <div className='bg-base-100 m-20 p-14 rounded-2xl  grid-cols-6'>
                        <h1 className='text-center text-2xl font-serif font-bold'> How does prototypical inheritance work?</h1>
                        <ul>
                            <p>Prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                            <li className='p-2 m-2 text-lg'>* All JavaScript objects inherit properties and methods from a prototype:

                            </li>
                            <li className='p-2 m-2 text-lg'>* Date objects inherit from Date.prototype.
                            </li>
                            <li className='p-2 m-2 text-lg'>* Array objects inherit from Array.prototype.
                            </li>
                            <li className='p-2 m-2 text-lg'>* Player objects inherit from Player.prototype.
                            </li>
                            <p>The Object.prototype is on top of the prototype inheritance chain. ​ Date objects, Array objects, and Player objects all inherit from Object.prototype.

                            </p>
                        </ul>
                    </div>
                    <div class="text-center grid-cols-6 ">
                        <h1 class="text-2xl text-center font-bold">Why we not set the state directly in React.</h1>
                        <ul>
                            <li className='p-2 m-2 text-lg'>If We update it directly, calling the setProducts() afterward may just replace the update you made </li>

                            <li className='p-2 m-2 text-lg'>When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                            </li>
                            <li className='p-2 m-2 text-lg'> If we do that We will lose control of the state across all components.
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
            {/*  */}
            <div className='bg-base-100 m-20 p-14 rounded-2xl mx-20'>
                <h1 className='text-center text-3xl p-5 m-5 text-blue-400 font-bold'>What is a unit test?</h1>
                <p className='text-center text-lg'>UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
                </p>
                <h1 className='text-4xl m-5 p-4 text-red-600 text-center'>Why should write unit tests?</h1>
                <ul className='text-left'>
                    <li className='p-2 m-2 text-lg'>Unit tests help to fix bugs early in the development cycle and save costs.
                    </li>
                    <li className='p-2 m-2 text-lg'>It helps the developers to understand the testing code base and enables them to make changes quickly
                    </li>
                    <li className='p-2 m-2 text-lg'>Good unit tests serve as project documentation
                    </li>
                    <li className='p-2 m-2 text-lg'>Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again.
                    </li>
                    <li className='p-2 m-2 text-lg'>The earlier a problem is identified, the fewer compound errors occur.
                    </li>
                    <li className='p-2 m-2 text-lg'>Costs of fixing a problem early can quickly outweigh the cost of fixing it later.
                    </li>
                    <li className='p-2 m-2 text-lg'>Debugging processes are made easier.
                    </li>
                </ul>
            </div>
            <div>
          
            </div>
        </div>
    );
};

export default Blogs;