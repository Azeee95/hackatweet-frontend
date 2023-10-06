import styles from '../styles/Board.module.css';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {logout} from '../reducers/user'
import Tweet from './Tweet';
import Link from 'next/link'

function Hashtags() {

const router = useRouter()
const dispatch= useDispatch()

const [hashtags, setHashtags] = useState([]);

useEffect(()=>{

  fetch('https://hackatweet-backend-rho.vercel.app/tweets/hashtags/all')
  .then(response=>response.json())
  .then(data=>{

    setHashtags(data);

  })  

},[])

  return (
    <main className={styles.main}>
        
    <ul role="list" className="divide-y divide-gray-100">
      {hashtags.map((hashtag) => (
        <li key={hashtag.name} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{hashtag.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{(hashtag.tweetuids).length} tweets</p>
            </div>
          </div>

        </li>

      ))}

    </ul>


    </main>
  );
}

export default Hashtags;
