import styles from '../styles/Home.module.css';
import Image from 'next/image'
// import SignupModal from './SignupModal';
// import SigninModal from './SigninModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/user'
//adresse backend https://hackatweet-backend-rho.vercel.app/
// import Link from 'next/link'
import { useRouter } from 'next/router';


function Home() {
  const dispatch = useDispatch()
  const router = useRouter()
  //sign-up functions
  const [firstname, setFirstname] = useState('')
  const [emailUp, setEmailUp] = useState('')
  const [passwordUp, setPasswordUp] = useState('')

  const handleSignup = () => {
    console.log(firstname)
    console.log(emailUp)
    console.log(passwordUp)
      fetch('https://hackatweet-backend-rho.vercel.app/users/signup',
      {
         method : 'POST',
         headers : {'Content-Type' : 'application/json'},
         body: JSON.stringify({firstname, email : emailUp, password : passwordUp})
      }
      )
      .then(res=>res.json())
      .then(data=>{
         if (data[0].type === 'success' ) {
            console.log(data)
             dispatch(login({ email: data[1].email, token: data[1].token }));
             setFirstname('')
             setEmailUp('');
             setPasswordUp('');
             router.push('/board')
            }
 
     })
 }
 
//signIn functions
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 
 const handleSignin = () => {
      fetch('https://hackatweet-backend-rho.vercel.app/users/signin',
      {
         method : 'POST',
         headers : {'Content-Type' : 'application/json'},
         body: JSON.stringify({email, password})
      }
      )
      .then(res=>res.json())
      .then(data=>{
         if(data[0].type === 'success' ) {
             dispatch(login({ email, token: data[1].token }));
             setEmail('');
             setPassword('');
             router.push('/board')
         }
 
     }   )
 }


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
          <h2>Sign up :</h2>
          <input type='text' placeholder='Firstname' onChange={ (e) =>setFirstname(e.target.value)} value={firstname}/>
          <input type='email' placeholder='Email' onChange={ (e) =>setEmailUp(e.target.value)} value={emailUp}/>
          <input type='password' placeholder='Password' onChange={ (e) =>setPasswordUp(e.target.value)} value={passwordUp}/>
        </div>

        <div> 
          <h2>Sign in :</h2>
          <input type='email' placeholder='Email' onChange={ (e) =>setEmail(e.target.value)} value={email}/>
          <input type='password' placeholder='Password' onChange={ (e) =>setPassword(e.target.value)} value={password}/>
        </div>

      </div>
      </main>
    </div>
  );
}

export default Home;
