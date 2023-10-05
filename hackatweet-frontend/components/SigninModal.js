// import styles from '../styles/SigninModal.module.css';
// import Image from 'next/image'
// import { useState } from 'react';

// //adresse backend https://hackatweet-backend-rho.vercel.app/



// function SigninModal() {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    
    // const handleSignin = () => {
    
    //      fetch('https://hackatweet-backend-rho.vercel.app/users/signin',
    //      {
    //         method : 'POST',
    //         headers : {'Content-Type' : 'application/json'},
    //         body: JSON.stringify({username, password})
    //      }
    //      )
    //      .then(res=>res.json())
    //      .then(data=>{
    //         if(data) {
    //             dispatch(login({ username: username, token: data.token }));
    //             setSignUpUsername('');
    //             setSignUpPassword('');
    //             setSignupModalVisible(false)
    //         }
    
    //     }   )
    // }

//   return (
//     <div>
//       <div style="height: 500px">
//         {/* <!-- height set to show correctly on TailwindComponents not required when used --> */}
//         <div className="fixed pin flex items-center">
//         <div className="fixed pin bg-black opacity-75 z-10"></div>

//         <div className="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8">
//             <div className="shadow-lg bg-white rounded-lg p-8">
//                 <div className="flex justify-end mb-6">
//                     <button>
//                         <span className="mr-2">X</span>
//                         <span>
//                             <i className="fa fa-times"></i>
//                         </span>
//                     </button>
//                 </div>
//                 <Image 
//                 src='/logo.png'
//                 width={100}
//                 height={100}
//                 alt='logo'
//                 />
//                 <h1 className="text-center text-2xl text-green-dark">Create your hackatweet account.</h1>

//                 <form className="pt-6 pb-2 my-2">
//                     <div className="mb-4">
//                     <label className="block text-sm font-bold mb-2" for="username">
//                             Username
//                         </label>
//                         <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white" id="username" type="text" placeholder="Username"onChange={ (e) =>setUsername(e.target.value)} value={username}/>
//                     </div>

//                     <div className="mb-6">
//                         <label className="block text-sm font-bold mb-2" for="password">
//                             Password
//                         </label>
//                         <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white mb-3" id="password" type="password" placeholder="Password" onChange={ (e) =>setPassword(e.target.value)} value={password} />
//                     </div>
//                     <div className="block md:flex items-center justify-between">
//                         <div>
//                             <button className="bg-white text-black font-bold  rounded-xl w-4/5 border-b-4" type="button" onClick={()=>handleSignin()}>
//                                 Sign In
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//         </div>
//         </div>
//     </div>

//   );
// }

// export default SigninModal;
