import styles from '../styles/Board.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTweet } from '../reducers/tweets';
import {like, unLike} from '../reducers/tweets'
import Image from 'next/image'
const moment = require('moment');

 const Tweet= (props) =>{
    const user = useSelector(state=>state.user.value)
    const dispatch = useDispatch()

    const handleLike=()=>{
        //On like avec l'id de l'utilisateur (pros.useruid) & du tweet (props.tweetuid) route : /like/:tweetuid
        fetch(`https://hackatweet-backend-rho.vercel.app/tweets/like/${props.tweetuid}`,
        {
           method : 'PUT',
           headers : {'Content-Type' : 'application/json'},
           body: JSON.stringify({useruid : user.useruid})
        }
        )
        .then(response=>response.json())
        .then(data=>{
            console.log('Hej! I like that')
            console.log('data is :', data)
            if(data.token && data.likes.includes(user.useruid)){
                dispatch(unLike({ tweetuid: data.tweetuid, user: user.useruid}))
            }
            else{
                dispatch(like({ tweetuid: data.tweetuid, user: user.useruid}))
            }
        })
    }

    const handleDelete = () => {
        //on delete le tweet par props.tweetuid
        fetch(`https://hackatweet-backend-rho.vercel.app/tweets/${props.tweetuid}`,
        {
           method : 'DELETE',
        }
        )
        .then(response=>response.json())
        .then(data => {
            // console.log('result of delete : ', data)
            // console.log(data[1].tweetuid)
            if(data[0].type === 'success')
            dispatch(deleteTweet(data[1].tweetuid))
        } )
    }

    //mise en style conditionnelle du coeur
    let likeStyle = {}
    //check if tweet is liked by the user itself
    if(props.likes.includes(user.useruid)){
        likeStyle = {color : "#F51771"}
    }
    // check if tweet likes by at least one user at least
    else if(props.likes){
        likeStyle = {color: "#ffffff"}
    }
    else{
        likeStyle = {}
    }
    //formatage de la date
    const DateOfTweet = new Date(props.date)
    const elapsedTime = (Date.now() - DateOfTweet.getTime())
    const duration = moment.duration(elapsedTime)
    const formattedTime = `${Math.floor(duration.asHours())}Hours and ${duration.minutes()} minutes`;
    //formatage des hashtag
    const hash = props.hashtags.map(tag => tag= `#${tag} `)
    const nbLikes = props.likes.length
    // console.log('props',props)
        return(
        <>
        <div className={styles.userinfo}>
            <Image 
            src='/logo.png'
            width={50}
            height={50}
            alt='user Avatar'
            />        
            <p>{props.creator}</p>
            <p>{formattedTime}</p> 
        </div>

        <div className={styles.content}>
            <p>{props.message}</p>
                {/* à formater en ajoutant un espace (join(' ')) et un # devant chaque élément de hashtags */}
            <p>{hash}</p>
        </div>

        <div className={styles.actions}>
        <FontAwesomeIcon icon={faHeart} style={likeStyle} onClick={()=>handleLike()} />
        {nbLikes}
        <FontAwesomeIcon icon={faTrashCan} className={styles.trash} onClick={()=>handleDelete()} />
        </div>
        </>
    )
}

export default Tweet