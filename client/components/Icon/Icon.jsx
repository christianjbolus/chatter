import { BsChatDotsFill, BsTrash } from 'react-icons/bs';
import { BiPlus } from 'react-icons/bi';
import { AiOutlineRedo, AiOutlineLogin } from 'react-icons/ai';
import { BsHeart } from 'react-icons/bs';
import { FiEdit, FiPower } from 'react-icons/fi';
import {
  IoArrowBackOutline,
  IoChatbubbleOutline,
  IoPersonOutline,
  IoPersonAddOutline,
  IoWarning,
} from 'react-icons/io5';
import styles from './Icon.module.scss';

export default function Icon({ name, className }) {
  switch (name) {
    case 'Back':
      return <IoArrowBackOutline className={styles[className]} />;
    case 'Logo':
      return <BsChatDotsFill className={styles[className]} />;
    case 'Reply':
      return <IoChatbubbleOutline className={styles[className]} />;
    case 'Rechat':
      return <AiOutlineRedo className={styles[className]} />;
    case 'Like':
      return <BsHeart className={styles[className]} />;
    case 'Edit':
      return <FiEdit className={styles[className]} />;
    case 'Delete':
      return <BsTrash className={styles[className]} />;
    case 'Login':
      return <AiOutlineLogin className={styles[className]} />;
    case 'Logout':
      return <FiPower className={styles[className]} />;
    case 'Profile':
      return <IoPersonOutline className={styles[className]} />;
    case 'SignUp':
      return <IoPersonAddOutline className={styles[className]} />;
    case 'Plus':
      return <BiPlus className={styles[className]} />;
    case 'Warning':
      return <IoWarning className={styles[className]} />;
  }
}
