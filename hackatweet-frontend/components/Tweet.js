
import styles from '../styles/Board.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';

 const Tweet= (props) =>{
    return(
        <>
        <div className={styles.userinfo}>
        <Image 
                src='/logo.png'
                width={50}
                height={50}
                alt='user Avatar'
        />
        <p>{props.username}</p>
        <p>{props.firstname}</p>
        </div>

        <div className={styles.content}>
            <p>{props.message}</p>
            <p>{props.tags}</p>
        </div>

        <div className={styles.actions}>
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faTrashCan} style={{color: "#ffffff",}} />
        </div>
        </>
    )
}

export default Tweet