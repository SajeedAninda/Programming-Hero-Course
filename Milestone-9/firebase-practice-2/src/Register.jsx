import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebase.config";
const auth = getAuth(app);

const Register = () => {
    let [loginError, setLoginError] = useState("");
    let [registerSuccess, setRegisterSuccess] = useState("");
    let [showPass, setShowPass] = useState(false);

    let handleForm = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        if (password.length <= 5) {
            return alert("Password Should be more than 6 letters");
        }
        else if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/.test(password)) {
            alert("Please Provide one Capital Letter, One Number and One Symbol");
            return;
        }
        setLoginError("");
        setRegisterSuccess("");



        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setRegisterSuccess(user);
            })
            .catch((error) => {
                // const errorCode = error.code;
                console.log(error);
                setLoginError(error.message);
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass ? "text" : "password"} placeholder="password" name='password' required className="input input-bordered" />
                                <p className='cursor-pointer' onClick={() => { setShowPass(!showPass) }}>{showPass ? "Hide Password" : "Show Password"}</p>
                                <div className='flex gap-2 items-center'>
                                    <input type="checkbox" name="" id="terms" />
                                    <label htmlFor="" id='terms'>Accept our terms and Conditions</label>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            {
                                registerSuccess && <p className='text-green-400 text-xl mt-2'>Registration Succesful</p>
                            }
                            {
                                loginError && <p className='text-red-600 text-xl mt-2'>{loginError}</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;