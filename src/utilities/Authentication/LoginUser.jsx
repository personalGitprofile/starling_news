import { Link } from "react-router-dom";


const LoginUser = () => {
    return (
//         <div>
           
// <body className="bg-gray-100 min-h-screen flex items-center justify-center ">

//     <div className="bg-white p-8 rounded shadow-md max-w-md w-full mx-auto">
//         <h2 className="text-2xl font-semibold mb-4">Inscription</h2>

//         <form action="#" method="POST">
           
//             <div className="grid grid-cols-2 gap-4">
//                 <div>
//                     <label for="firstName" className="block text-sm font-medium text-gray-700">Prénom</label>
//                     <input type="text" id="firstName" name="firstName" className="mt-1 p-2 w-full border rounded-md"/>
//                 </div>
//                 <div>
//                     <label for="lastName" className="block text-sm font-medium text-gray-700">Nom</label>
//                     <input type="text" id="lastName" name="lastName" className="mt-1 p-2 w-full border rounded-md"/>
//                 </div>
//             </div>

    
//             <div className="mt-4">
//                 <label for="email" className="block text-sm font-medium text-gray-700">Adresse email</label>
//                 <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md"/>
//             </div>

          
//             <div className="mt-4">
//                 <label for="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
//                 <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md"/>
//             </div>

       
//             <div className="mt-6">
//                 <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">S'inscrire</button>
//             </div>
//         </form>
//     </div>

// </body>
        //         </div>
        
        <div className="w-6/12 bg-base-200 mx-auto py-24">
        
        <div className=" ">
        <h2 className="text-center py-4 font-bold text-3xl text-[#456787]">Login</h2>
          <div className="card bg-base-100   ">
            <form className="card-body ">
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
            <p className="text-center p-3">New user? Please <Link to='/registration' className="font-semibold">Registration</Link></p>
      </div>
    );
};

export default LoginUser;