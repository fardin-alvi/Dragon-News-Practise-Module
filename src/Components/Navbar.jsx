import { Link, NavLink } from "react-router-dom";
import userimage from '../assets/user.png';
import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
const Navbar = () => {
    const { user, logout } = useContext(Authcontext)
    console.log(user);
    return (
        <div className="flex justify-between items-center ">
            <div className="">{user?.email}</div>
            <div className="flex gap-x-5 text-lg ml-16 ">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/carear'>Carear</NavLink>
            </div>
            <div className="flex gap-x-2 items-center">
                {
                    user && user?.email ?
                        <div className="flex flex-col items-center">
                            <img className="w-10" src={user?.photoURL} alt="" />
                            <p>{user?.displayName}</p>
                        </div> : <img src={userimage} alt="" />
                }
                {
                    (user && user?.email) ? <Link onClick={logout} to="/auth/login" className="bg-black text-white px-5 py-2">Log Out</Link> : <Link to="/auth/login" className="bg-black text-white px-5 py-2">Log In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;