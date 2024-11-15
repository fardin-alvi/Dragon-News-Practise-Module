import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Provider/AuthProvider';

const Register = () => {
    const navigate = useNavigate('')
    const { createNewuser, setUser, updateprofile } = useContext(Authcontext)
    const [error, seterror] = useState({})
    const handleregister = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const photoUrl = form.get('photoUrl')
        console.log(name, email, password, photoUrl);
        if (name.length < 5) {
            seterror({ ...error, name: "must be more than 5 character" })
            return
        }
        createNewuser(email, password)
            .then(res => {
                const user = res.user
                setUser(user);
                navigate('/');
                updateprofile({ displayName: name, photoURL: photoUrl })
                    .then(() => navigate('/'))
                .catch(err => console.log(err.message))
            })
            .catch(error => {
            console.log(error.message);
        })
        
    }
    return (
        <div>
            <div className="card bg-base-100 max-h-screen mx-auto mt-20 max-w-md shrink-0 shadow-2xl">
                <h1 className="text-center text-xl font-medium font-popins my-6">Register Your Account</h1>
                <hr className="w-96 mx-auto" />
                <form onSubmit={handleregister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input name='photoUrl' type="url" placeholder="Enter Your Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label flex gap-x-2">
                            <input type="checkbox" required name="" id="" />
                            <p className="label-text-alt link link-hover">Accept Terms & Condition</p>
                        </label>
                        {
                            error?.name && (<p className='text-red-600 text-lg'>{error.name}</p>)
                        }
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <h1>Already Have an Account ? </h1>
                        <Link className="text-red-500" to='/auth/login'>Log in</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;