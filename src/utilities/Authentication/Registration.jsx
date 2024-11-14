import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Registration = () => {

    const{creatUser}=useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('text');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password)
        
        // create user
        creatUser(email, password)
            .then(result => {
            console.log(result.user)
            })
            .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className="md:w-6/12 bg-base-200 mx-auto py-24">
        
        <div className=" ">
        <h2 className="text-center py-4 font-bold text-3xl text-[#456787]">Registration</h2>
          <div className="card bg-base-100   ">
            <form onSubmit={handleRegister} className="card-body ">
              <div className="form-control">
                <label className="">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="text" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-[#456787] hover:bg-teal-950">Registration</button>
              </div>
            </form>
          </div>
            </div>
            <p className="text-center p-3">Already have an account ? Please <Link to='/login' className="font-semibold">Login</Link></p>
      </div>
    );
};

export default Registration;