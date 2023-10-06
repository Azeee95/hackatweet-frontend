import styles from '../styles/Board.module.css';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {logout} from '../reducers/user'
import Tweet from './Tweet';
import Link from 'next/link'
import {addTweet} from '../reducers/tweets'


import Hashtags from './hashtags';

function Board() {

const router = useRouter()
const dispatch= useDispatch()
const user= useSelector(state=>state.user.value)
const tweetsData = useSelector(state=>state.tweets)

const [msg, setMsg] = useState('')
const [error, setError] = useState('');

const userFrame=<div>    
        <Image 
                src='/logo.png'
                width={50}
                height={50}
                alt='user Avatar'
        />

        <div className={styles.userInfo}>
            <h2>{user.email}</h2>
            <p> {user.firstname}</p>
            <p></p>
        </div>
    </div>

//on mount => fetch all tweets & store them in into tweetsData state
useEffect(()=>{
    if(!user.token){router.push('/')}
    fetch('https://hackatweet-backend-rho.vercel.app/tweets')
    .then(response=>response.json())
    .then(data=>{
        const newData = data.slice(1)
        newData.map(e=>dispatch(addTweet(e)))
    })
},[])


const tweets = tweetsData.value.map((data,i)=>      
{
    console.log(data)
  return <Tweet key={i} {...data} className={styles.tweets} />;
})


const handleLogout=()=>{
    dispatch(logout())
    router.push('/')
}

// à modifier, actuellement bloque totalement le champ lors du dépassement de la limite, gère le changement de texte dans l'input & limite à 280 caractères
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

//ajout d'un tweet en DB en passant le mail et le message + ajout au reducer tweets du tweet
const handleAddTweet = (message) =>{
    console.log('add')
    if(user.token){
        console.log('has tokken')
        fetch('https://hackatweet-backend-rho.vercel.app/tweets/add',
          {
             method : 'POST',
             headers : {'Content-Type' : 'application/json'},
             body: JSON.stringify({email :user.email, message})
          })
        .then(res=>res.json())
        .then(data=>{
            // console.log('resp addTweet : ',data)
            if(data[2].type === 'success'){
                // console.log(data[3])
                dispatch(addTweet(data[3]))
            }
        })
    }
}
    console.log('tweets : ',tweets)
    // console.log(user.token)
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
                <button onClick={()=>handleLogout()} className={styles.tweetBtn}>Logout</button>
            </div>
        </div>
        <div className={styles.middle}>
            <div className={styles.top}>
            <h1>Home</h1>
                {message}
                <div className={styles.tweetCtn}>
                    <p>{msg.length}/280</p>
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
