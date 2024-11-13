import { Link } from "react-router-dom";
import { FaGoogle,FaGithub } from "react-icons/fa";


const Login = () => {
    return (
        <div className="">
            <Link><p className="items-center border border-red-700 p-3 flex gap-2 text-red-800 font-medium mb-2 rounded-md"><FaGoogle  className="text-green-800"/>Login With Google</p></Link>
            <Link><p className="items-center border border-red-700 p-3 flex gap-2 text-red-800 font-medium rounded-md "><FaGithub className="text-black"/>
            Login With Github</p></Link>
        </div>
    );
};

export default Login;