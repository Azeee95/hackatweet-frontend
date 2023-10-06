
import styles from '../styles/Board.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTweet } from '../reducers/tweets';

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
            dispatch(deleteTweet(props.tweetuid))
        } )
    }

    // let likeStyle = ''
    // //check if tweet is liked by the user itself
    // if(props.isLikedbyUser){
    //     likeStyle = {color : red}
    // }
    // // check if tweet isLiked by at least one user at least
    // else if(props.isLikedbyUser){
    //     likeStyle = {color : white}
    // }
    // else{
    //     likeStyle = {''}
    // }

    return(
        <>
        <div className={styles.userinfo}>
            {/* Image pose problème lorsque appelé dans le composant ici */}
        {/* <Image 
                src='/logo.png'
                width={50}
                height={50}
                alt='user Avatar'
        /> */}
        <p>{props.creator}</p>
        <p>{props.firstname}</p>
        </div>

        <div className={styles.content}>
            <p>{props.message}</p>
                {/* à formater en ajoutant un espace (join(' ')) et un # devant chaque élément de hashtags */}
            <p>{props.hashtags}</p> 
        </div>

        <div className={styles.actions}>
        <FontAwesomeIcon icon={faHeart} onClick={()=>handleLike()} />
        <FontAwesomeIcon icon={faTrashCan} style={{color: "#ffffff"}} className={styles.trash} onClick={()=>handleDelete()} />
        </div>
        </>
    )
}

export default Tweet