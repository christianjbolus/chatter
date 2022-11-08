import { useState } from 'react';
import styles from './ImageUpload.module.scss';


export default function ImageUpload({ value, handleChange }) {

  return (
    <div className={styles.container}>
      <img
        className={styles.profile_pic}
        src={value}
      />
      <label className={styles.label} htmlFor="img_upload">
        Choose file
      </label>
      <input
        className={styles.input}
        type="file"
        accept="image/jpeg, image/png, image/webp"
        id="img_upload"
        onChange={handleChange}
      />
    </div>
  );
}
