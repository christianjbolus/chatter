import { useState } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { Button, FormInput, Icon, ImageUpload, TextArea } from '../../components';
import { getOneUser, updateUser } from '../../services/users';
import styles from '../../styles/AuthForm.module.scss';

export default function ProfileEdit(user) {
  const [formData, setFormData] = useState(user);
  const [errMessage, setErrMessage] = useState('');

  const router = useRouter();

  const { display_name, profile_pic, bio } = formData;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleUpdate = async () => {
    const userData = await updateUser(user.username, formData);
    if (userData.error) {
      setErrMessage(userData.error);
    } else {
      router.push(`/${user.username}`);
    }
  };

  return (
    <div>
      <div className={styles.stripe}></div>
      <div className={styles.container}>
        <div className={styles.form}>
        <div className={styles.nav}>
          <Button className="back" type="button" onClick={() => router.back()}>
            <Icon name="Back" className="back_arrow" />
          </Button>
        </div>
          <h2 className={styles.heading}>Edit your profile</h2>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <ImageUpload value={profile_pic}/>
            <FormInput
              label="Display name"
              name="display_name"
              value={display_name}
              handleChange={handleChange}
            />
            {/* <FormInput
              label="Profile pic"
              name="profile_pic"
              value={profile_pic}
              handleChange={handleChange}
            /> */}
            <TextArea
              className="auth"
              label="Bio"
              name="bio"
              value={bio}
              rows="5"
              maxLength="160"
              handleChange={handleChange}
            />
            <div className={styles.submit}>
              <Button className="btn auth">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { username } = context.params;
  const user = await getOneUser(username);
  const session = await getSession({ req: context.req });
  if (!session || session.currentUser.id !== user.id) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: user,
  };
}
