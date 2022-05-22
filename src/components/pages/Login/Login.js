import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const [newUser, setNewUser] = useState(true);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

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
    let from = location.state?.from?.pathname || "/";

    // const [token] = useToken(user || guser);

    // useEffect(() => {
    //     if (token) {

    //         // navigate(from, { replace: true });
    //     }
    // }, [token])

    let signInError;

    const onSubmit = async data => {
        console.log(data)
        if (newUser) {
            await createUserWithEmailAndPassword(data.email, data.password);
            await updateProfile({ displayName: data.name });
        }
        else if(!newUser){
            await signInWithEmailAndPassword(data.email, data.password);
        }
    };
    if (loading || gloading) {
        return <p>...</p>
    }
    if (error || gerror) {
        signInError = <p className='firebaseErr'>{error?.message || gerror?.message} </p>
    }

    return (
        <div className="login-contain">
            <div className={newUser ? "login-container right-panel-active" : "login-container"} id="container">
                <div className={newUser ? "form-container sign-up-container" : "form-container sign-in-container"}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <h1>{newUser ? "Create Account" : "Sign in"}</h1>
                        <div className="social-container">
                            <Link to='' className="social">
                                <p>FB</p>
                            </Link>
                        </div>
                        <span>{newUser ? "or use your email for registration" : "or use your account"}</span>
                        {newUser &&
                            <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },

                            })}
                        />}
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },

                            })}
                        />
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },

                            })}
                        />

                        {!newUser && <Link to=''>Forgot your password?</Link>}
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