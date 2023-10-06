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

const user= useSelector(state=>state.user.value)
const tweetsData = useSelector(state=>state.tweets.value)

let hashtagsDisplay = [];

tweetsData.map((item, i) => {

  item.hashtags.map((item2) => {

    hashtagsDisplay.push(item2);

  })

  })
  
console.log('Kodzo Duplicated ', hashtagsDisplay);

function removeDuplicates(arr) {

  let unique = [];
  arr.forEach(element => {
      
    if (!unique.includes(element)) {
          unique.push(element);
      }
  });
  return unique;
}

const hashtagsFinal = removeDuplicates(hashtagsDisplay);

console.log(hashtagsFinal);



// console.log('Kodzo Tweets ', tweets);
// console.log('Kodzo User ', user);

const hastagsDisplay2 = [

    {
      name: 'standards',
      tweets: 10,

    },

    {
        name: 'comes',
        tweets: 2,
  
      },

      {
        name: 'papa',
        tweets: 15,
  
      },

      {
        name: 'maman',
        tweets: 1,
  
      },
    

]

  return (
    <main className={styles.main}>
        
    <ul role="list" className="divide-y divide-gray-100">
      {hastagsDisplay2.map((hashtag) => (
        <li key={hashtag.name} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{hashtag.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{hashtag.tweets}</p>
            </div>
          </div>

        </li>

      ))}

    </ul>


    </main>
  );
}

export default Hashtags;
