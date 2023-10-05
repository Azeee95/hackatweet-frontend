import styles from '../styles/Board.module.css';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Tweet from './Tweet';
import Link from 'next/link'

function Board() {

const router = useRouter()
const dispatch= useDispatch()
const user= useSelector(state=>state.user.value)

const [msg, setMsg] = useState('')
const [tweetsData, setTweetsData] = useState([])
const [error, setError] = useState('');
const message = <input onChange={handleMsgChange} value={msg} className={styles.message} placeholder={'Type your amazing ideas to share with the world, make it short tho'}/>
const userFrame=<div>    

        <Image 
                src='/logo.png'
                width={50}
                height={50}
                alt='user Avatar'
        />

        <div>
            <h2>${user.username}</h2>
            <p>@{user.firstname}</p>
        </div>
    </div>

//on mount => fetch all tweets & store them in into tweetsData state
useEffect(()=>{
    fetch('')
    .then(response=>response.json())
    .then(data=>{
        const newData = data.slice(1)
        setTweetsData(newData)   
    })  
},[])

tweetsData.map((data,i)=>      
{
  return <Tweet key={i} {...data} isLikedByUser={isLikedByUser} />;
})

const handleLogout=()=>{
    dispatch(logout())
    router.push('/index')
}

const handleMsgChange = (event) => {
    const text = event.target.value;

    if (msg.length <= 280) {
        setMsg(text);
        setError('');
      } else {
        setError('Character limit reached');
      }
  };


console.log(msg)
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
                <button onClick={()=>{()=>handleLogout()}}>Logout</button>
            </div>
        </div>
        <div className={styles.middle}>
            <div className={styles.top}>
            <h1>Home</h1>
                {message}
                <p>{msg.length}/280</p>
                <div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button className={styles.tweetBtn}>Tweet</button>
                </div>
            </div>
            <div>{tweets}</div>
        </div>
        <div className={styles.right}>

        </div>
    </main>
  );
}

export default Board;
