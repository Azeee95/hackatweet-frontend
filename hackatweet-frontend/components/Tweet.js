
import styles from '../styles/Board.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';

 const Tweet= (props) =>{
    const handleLike=()=>{
        //On like avec l'id de l'utilisateur (pros.useruid) & du tweet (props.tweetuid)
    }

    const handleDelete = (props)=>{
        //on delete le tweet par props.tweetuid
    }

    return(
        <>
        <div className={styles.userinfo}>
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