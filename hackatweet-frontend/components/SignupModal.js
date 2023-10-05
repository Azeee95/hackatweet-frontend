import styles from '../styles/SignupModal.module.css';
import Image from 'next/image'
import { login } from '../reducers/user';
import { useDispatch } from 'react-redux';

//adresse backend https://hackatweet-backend-rho.vercel.app/


import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function SignupModal(props) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(props.isVisible)
  const cancelButtonRef = useRef(null)

const handleSignIn = () =>{
    dispatch(login())
    setOpen(!props.isVisible)
}
console.log('props.isVisible : ',props.isVisible)

console.log('open : ',open)
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={()=>setOpen(true)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All of your data will be permanently
                          removed. This action cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => handleSignIn()}
                    ref={cancelButtonRef}
                  >
                    Sign in
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SignupModal

// function SignupModal() {
//     const dispatch = useDispatch()
//     const [firstname, setFirstname] = useState('')
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     const handleSignup = () => {
//         fetch('https://hackatweet-backend-rho.vercel.app/users/signup',
//         {
//            method : 'POST',
//            headers : {'Content-Type' : 'application/json'},
//            body: JSON.stringify({firstname, username,password})
//         }
//         )
//         .then(res=>res.json())
//         .then(data=>{
//            if (data) {
//                dispatch(login({ username: username, token: data.token }));
//                setSignUpUsername('');
//                setSignUpPassword('');
//                setSignupModalVisible(false)
//            }
   
//        })
   
//    }


//   return (
//     <div>
//         <div className="fixed pin flex items-center">
//         <div className="fixed pin bg-black opacity-75 z-10"></div>

//         <div className="relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8">
//             <div className="shadow-lg bg-white rounded-lg p-8">
//                 <div className="flex justify-end mb-6">
//                     <button>
//                         <span className="mr-2">Close</span>
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
//                         <label className="block text-sm font-bold mb-2" for="firstName">
//                             Firstname
//                         </label>
//                         <input className="shadow appearance-none border rounded w-full py-2 px-3 text-white" id="firstName" type="text" placeholder="Firstame" onChange={ (e) =>setFirstname(e.target.value)} value={firstname}/>
//                     </div>

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
//                             <button className="bg-white text-black font-bold  rounded-xl w-4/5 border-b-4" type="button" onClick={()=>handleSignup()}>
//                                 Sign In
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//         </div>
//     </div>
//   );
// }

// export default SignupModal;
