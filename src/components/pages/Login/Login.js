import React, { useEffect, useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'
import { FaFacebook,FaGoogle,FaGithub  } from "react-icons/fa";
import useToken from '../../Hooks/useToken';


const Login = () => {
    const [newUser, setNewUser] = useState(true);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
      );

      const emailRef = useRef('');
      const forgotPassword = async () =>{
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            console.log('Check Your Email')
        }
        else{
            // toast('Please Enter Your Email')
        }
    }


    const { register, formState: { errors }, handleSubmit, reset  } = useForm();

    const [updateProfile, updating, uerror] = useUpdateProfile(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


  

    let signInError;

    const onSubmit = async data => {
        console.log(data)
        if (newUser) {
            await createUserWithEmailAndPassword(data.email, data.password);
            await updateProfile({ displayName: data.name });
            reset()
        }
        else if (!newUser) {
            await signInWithEmailAndPassword(data.email, data.password);
            reset()
        }
    };


     /* issue token */
     const [token] = useToken(googleUser || createUser || user);

     useEffect(() => {
        if (token) {

            // navigate(from, { replace: true });
        }
    }, [token])
    if(googleUser || gitUser || facebookUser || user || createUser ){
        navigate(from, {replace: true});

    }


    if (loading || googleLoading) {
        return <p>...</p>
    }
    if (error || googleError || uerror || createError) {
        signInError = <p className='font-semibold bg-slate-400 rounded-full' >{error?.message || createError?.message || googleError?.message || uerror?.message} </p>
    }

    return (
        <div className="login-contain ">
            <div className={newUser ? "login-container right-panel-active" : "login-container"} id="container">
                <div className={newUser ? "form-container sign-up-container" : "form-container sign-in-container"}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <h1>{newUser ? "Create Account" : "Sign in"}</h1>
                        <div className="social-container">
                            <span onClick={()=> signInWithGoogle()} className="social"><FaGoogle/> </span>
                            <span onClick={()=>signInWithFacebook()} className="social"><FaFacebook/> </span>
                            <span onClick={()=>signInWithGithub()} className="social"><FaGithub/> </span>
                        </div>
                        <span>{newUser ? "or use your email for registration" : "or use your account"}</span>

                        {newUser &&
                            /* Input Name */
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },

                                })}
                            />}
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message} </span>}
                        </label>
                        {/* Input Email */}

                        <input ref={emailRef} type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/,
                                    message: 'Provide a Valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message} </span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message} </span>}
                        </label>
                        {/* Input Password */}
                        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be six charecter or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message} </span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message} </span>}


                        </label>

                        {!newUser && <Link to=''>Forgot your password?</Link>}
                        {signInError}
                        <button type="submit">{newUser ? "Sign Up" : "Sign In"}</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={() => setNewUser(false)}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={() => setNewUser(true)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;