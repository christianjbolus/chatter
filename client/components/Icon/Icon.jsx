import { BsChatDotsFill } from '@react-icons/all-files/bs/BsChatDotsFill';
import { BiPlus } from '@react-icons/all-files/bi/BiPlus';
import { IoChatbubbleOutline } from '@react-icons/all-files/io5/IoChatbubbleOutline';
import { AiOutlineRedo } from '@react-icons/all-files/ai/AiOutlineRedo';
import { BsHeart } from '@react-icons/all-files/bs/BsHeart';
import { FiEdit } from '@react-icons/all-files/fi/FiEdit';
import { AiOutlineLogin } from '@react-icons/all-files/ai/AiOutlineLogin';
import { FiPower } from '@react-icons/all-files/fi/FiPower';
import { IoPersonOutline } from '@react-icons/all-files/io5/IoPersonOutline';
import { IoPersonAddOutline } from '@react-icons/all-files/io5/IoPersonAddOutline';

export default function Icon({name, className}) {
  switch (name) {
    case 'Logo':
      return <BsChatDotsFill className={className}/>;
    case 'Reply':
      return <IoChatbubbleOutline className={className}/>;
    case 'Rechat':
      return <AiOutlineRedo className={className}/>;
    case 'Like':
      return <BsHeart className={className}/>;
    case 'Edit':
      return <FiEdit className={className}/>;
    case 'Login':
      return <AiOutlineLogin className={className}/>;
    case 'Logout':
      return <FiPower className={className}/>;
    case 'Profile':
      return <IoPersonOutline className={className}/>;
    case 'SignUp':
      return <IoPersonAddOutline className={className}/>;
    case 'Plus':
      return <BiPlus className={className}/>;
  }
}
