import { Link } from "react-router-dom";


const Registration = () => {
    return (
        <div className="w-6/12 bg-base-200 mx-auto py-24">
        
        <div className=" ">
        <h2 className="text-center py-4 font-bold text-3xl text-[#456787]">Registration</h2>
          <div className="card bg-base-100   ">
            <form className="card-body ">
              <div className="form-control">
                <label className="">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-[#456787] hover:bg-teal-950">Login</button>
              </div>
            </form>
          </div>
            </div>
            <p className="text-center p-3">Already have an account ? Please <Link to='/login' className="font-semibold">Login</Link></p>
      </div>
    );
};

export default Registration;