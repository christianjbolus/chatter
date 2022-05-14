import { useState } from 'react';
import styles from './ImageUpload.module.scss';

export default function ImageUpload({ value }) {

  const [imgUrl, setImgUrl] = useState(value)

  const handleImgChange = e => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = e => {
      setImgUrl(e.target.result)
    }
  }
  return (
    <div className={styles.container}>
      <img
        className={styles.profile_pic}
        src={imgUrl}
      />
      <label className={styles.label} htmlFor="img_upload">
        Choose file
      </label>
      <input
        className={styles.input}
        type="file"
        accept="image/jpeg, image/png, image/webp"
        id="img_upload"
        onChange={handleImgChange}
      />
    </div>
  );
}
