import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";

const Login = () => {
    const navigate = useNavigate('')
    const { login, setUser } = useContext(Authcontext)
    const [error,seterror] = useState('')
    const location = useLocation()
    console.log(location);
    const handlelogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        login(email, password)
            .then(res => {
                const user = res.user
                setUser(user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => {
                console.log(err);
                seterror("Credential is Incorrect")
            })

    }
    return (
        <div>
            <div className="card bg-base-100 max-h-screen mx-auto mt-20 max-w-md shrink-0 shadow-2xl">
                <h1 className="text-center text-xl font-medium font-popins my-6">Login Your Account</h1>
                <hr className="w-96 mx-auto"/>
                <form onSubmit={handlelogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <p className="text-red-500 text-lg">{error}</p>
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <h1>Don't Have an Account ? </h1>
                        <Link className="text-red-500" to='/auth/register'>Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;