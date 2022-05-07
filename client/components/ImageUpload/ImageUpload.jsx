import styles from './ImageUpload.module.scss';

export default function ImageUpload() {
  return (
    <div class={styles.container}>
      <label class={styles.label} for="img_upload">Choose file</label>
      <input class={styles.input} type="file" accept="image/jpeg, image/png, image/webp" id="img_upload" />
      <span class={styles.filename_display} id="img_upload">None</span>
    </div>
  );
}
