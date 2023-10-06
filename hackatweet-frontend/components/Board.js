import styles from '../styles/Board.module.css';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {logout} from '../reducers/user'
import Tweet from './Tweet';
import Link from 'next/link'


import Hashtags from './hashtags';


function Board() {

const router = useRouter()
const dispatch= useDispatch()
const user= useSelector(state=>state.user.value)
//redirection si non loggé
if(!user.token){router.push('/')}

const [msg, setMsg] = useState('')
const [tweetsData, setTweetsData] = useState([])
const [error, setError] = useState('');
const userFrame=<div>    

        <Image 
                src='/logo.png'
                width={50}
                height={50}
                alt='user Avatar'
        />

        <div>
            <h2>${user.email}</h2>
            <p>@{user.firstname}</p>
        </div>
    </div>

//on mount => fetch all tweets & store them in into tweetsData state
useEffect(()=>{
    fetch('https://hackatweet-backend-rho.vercel.app/tweets')
    .then(response=>response.json())
    .then(data=>{
        const newData = data.slice(1)
        setTweetsData(newData)   
    })  
},[])

const tweets = tweetsData.map((data,i)=>      
{
    //isLikedByUser={isLikedByUser} add this bellow when liking handled
  return <Tweet key={i} {...data} />;
})

const handleLogout=()=>{
    console.log('logout clicked')
    dispatch(logout())
    router.push('/')
}

// à modifier, actuellement bloque totalement le champ lors du dépassement de la limite
const handleMsgChange = (event) => {
    const text = event.target.value;

    if (msg.length < 280) {
        setMsg(text);
        setError('');
      } else {
        setError('Character limit reached');
      }
  };
const message = <input onChange={handleMsgChange} value={msg} className={styles.message} placeholder={'Type your amazing ideas to share with the world, make it short tho'}/>

//ajout d'un tweet en passant le contenu de l'input
const handleAddTweet= (message) =>{
    if(user.token){
        fetch('https://hackatweet-backend-rho.vercel.app/tweets/'),
          {
             method : 'POST',
             headers : {'Content-Type' : 'application/json'},
             body: JSON.stringify({user :user.email, message})
          }
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
}
    console.log(user)
  return (
    <main className={styles.main}>
        <div className={styles.left}>
        <Link href="/">
        <Image 
            src='/logo.png'
            width={100}
            height={100}
            alt='logo'
            />
        </Link>
            <div>
                {userFrame}
                <button onClick={()=>handleLogout()}>Logout</button>
            </div>
        </div>
        <div className={styles.middle}>
            <div className={styles.top}>
            <h1>Home</h1>
                {message}
                <p>{msg.length}/280</p>
                <div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button className={styles.tweetBtn} onClick={()=>handleAddTweet(msg)}>Tweet</button>
                </div>
            </div>

            <div>{tweets}</div>
        </div>
        <div className={styles.right}>

        <Hashtags />
        
        </div>
    </main>
  );
}

export default Board;
