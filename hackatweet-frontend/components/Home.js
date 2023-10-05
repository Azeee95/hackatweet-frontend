import styles from '../styles/Home.module.css';
import Image from 'next/image'
import SignupModal from './SignupModal';
import SigninModal from './SigninModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
//adresse backend https://hackatweet-backend-rho.vercel.app/
import Link from 'next/link'



function Home() {
  const dispatch = useDispatch()

  //sign-up functions
  const [firstname, setFirstname] = useState('')
  const [usernameUp, setUsernameUp] = useState('')
  const [passwordUp, setPasswordUp] = useState('')

  const handleSignup = () => {
      fetch('https://hackatweet-backend-rho.vercel.app/users/signup',
      {
         method : 'POST',
         headers : {'Content-Type' : 'application/json'},
         body: JSON.stringify({firstname, usernameUp, passwordUp})
      }
      )
      .then(res=>res.json())
      .then(data=>{
         if (data) {
             dispatch(login({ username: usernameUp, token: data.token }));
             setFirstname('')
             setSignUpUsername('');
             setSignUpPassword('');
             
         }
 
     })
 }
//signIn functions
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 
 const handleSignin = () => {
      fetch('https://hackatweet-backend-rho.vercel.app/users/signin',
      {
         method : 'POST',
         headers : {'Content-Type' : 'application/json'},
         body: JSON.stringify({username, password})
      }
      )
      .then(res=>res.json())
      .then(data=>{
         if(data) {
             dispatch(login({ username: username, token: data.token }));
             setSignUpUsername('');
             setSignUpPassword('');
         }
 
     }   )
 }

  // const [signUpModalVisible, setsignUpModalVisible] = useState(false)
  // const [signInModalVisible, setsignInModalVisible] = useState(false)
  
  // const showSignupModal=()=>{
  //   console.log('clic , turn visible')
  //   setsignUpModalVisible(!signUpModalVisible)
  //   console.log('signupVisible? :',signUpModalVisible)
  // }
  
  // const showSigninModal=()=>{
  //   setsignInModalVisible(!signInModalVisible)
  // }

  //   const signIn = <SigninModal ={signInModalVisible}/>
    // const signUp = <SignupModal isSignupVisible={ signUpModalVisible}/> 


  return (
    <div>      
      <main className={styles.main}>

      <div className={styles.left}>
        <Image 
            src='/logo.png'
            width={350}
            height={350}
            alt='logo'
        />
      </div>
      <div className={styles.right}>
        <div className={styles.elemsContainer}>
          <Image 
          src='/logo.png'
          width={100}
          height={100}
          alt='logo'
          />
          <h1>See what's happening</h1>
          <h2>Join hackatweet today.</h2>
          <button className={styles.signup} onClick={()=>handleSignup()}>Sign up</button>
          <p className={styles.acc}>Already have an account?</p>
          <button className={styles.signin} onClick={()=>handleSignin()}>Sign in</button>
        </div>

        <div className={styles.signupFields}>
          <h2>Sign Up</h2>
          <input type='text' placeholder='Firstname' onChange={ (e) =>setFirstname(e.target.value)} value={firstname}/>
          <input type='text' placeholder='Username' onChange={ (e) =>setUsernameUp(e.target.value)} value={usernameUp}/>
          <input type='password' placeholder='Password' onChange={ (e) =>setPasswordUp(e.target.value)} value={passwordUp}/>
        </div>

        <div> 
          <h2>Sign Up</h2>
          <input type='text' placeholder='Username' onChange={ (e) =>setUsername(e.target.value)} value={username}/>
          <input type='password' placeholder='Password' onChange={ (e) =>setPassword(e.target.value)} value={password}/>
        </div>

      </div>
      </main>
    </div>
  );
}

export default Home;
