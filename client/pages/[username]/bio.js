import React from 'react';

export default function Bio() {
  return (
    <div>
      <div className={styles.stripe}></div>
      <div className={styles.container}>
        <div className={styles.form}>
          <h2 className={styles.heading}>Your profile</h2>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleRegister();
            }}
          >
            <FormInput
              label="Display name"
              name="display_name"
              value={display_name}
              handleChange={handleChange}
              errMessage={errors.display_name}
            />
            <FormInput
              label="Profile pic"
              name="profile_pic"
              value={profile_pic}
              handleChange={handleChange}
              placeholder="Optional"
            />
            <TextArea
              className="auth"
              label="Bio"
              name="bio"
              value={bio}
              rows="5"
              maxLength="160"
              handleChange={handleChange}
              placeholder="Optional"
            />
            <div className={styles.submit}>
              <Button className="btn auth">Submit</Button>
            </div>
          </form>
          <p className={styles.redirect}>
            <Link href="/chats">
              <a className={styles.link}>Skip</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
