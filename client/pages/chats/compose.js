import { /*useContext,*/ useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, TextArea } from '../../components';
import { IoArrowBackOutline } from '@react-icons/all-files/io5/IoArrowBackOutline';
import styles from '../../styles/Compose.module.css';
import icons from '../../styles/Icon.module.css';
// import { UserContext } from '../contexts';

export default function ChatCreate({ handleCreate }) {
  const [chat, setChat] = useState({
    content: '',
  });
  // const currentUser = useContext(UserContext);
  const router = useRouter();

  const { content } = chat;

  const handleChange = e => {
    const { value } = e.target;
    setChat({ content: value });
  };

  // const handleCreate = () => {}

  return (
    <>
      <div className={styles.container}>
        <div className={styles.nav}>
          <IoArrowBackOutline
            className={icons.back_arrow}
            onClick={() => router.back()}
          />
        </div>
        <div className={styles.form_group}>
          {/* <Link href={`/users/${currentUser?.username}`}> */}
            <img
              className={styles.profile_pic}
              // src={currentUser?.profile_pic}
              // alt={currentUser?.username}
            />
          {/* </Link> */}
          <form className={styles.form}>
            <TextArea
              className="chat"
              name="content"
              value={content}
              handleChange={handleChange}
              placeholder="What's up?"
              rows="4"
              maxLength="280"
            />
          </form>
        </div>
        <div className={styles.footer}>
          <p className={styles.counter}>{content.length}/280</p>
          <div className={styles.submit}>
            <Button
              className={!content ? 'btn disabled' : 'btn sm'}
              // onClick={() => handleCreate(chat)}
              disabled={!content}
            >
              Chat
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
