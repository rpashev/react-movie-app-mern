import styles from "./UserFeedback.module.scss";

const UserFeedback = (props) => {
  return (
    <div className={styles.feedback}>
      <h2>Our Happy Customers</h2>
      <p className={styles.subtitle}>Check out what our users are saying about the service we offer.</p>
      <div className={styles.feedback_items}>
        <div className={styles.feedback_item}>
          <div className={styles.img}>
            <img
              src="https://randomuser.me/api/portraits/women/9.jpg"
              alt=""
              class="rounded-circle mb-3"
            />
          </div>
          <h3>Jane Doe</h3>
          <p>
            Best app ever! 10/10 would use again. I am so much happier now! Just
            kidding, this app ruined my life! I will sue the developer and take
            everthing he owns.
          </p>
        </div>

        <div className={styles.feedback_item}>
          <div className={styles.img}>
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt=""
              class="rounded-circle mb-3"
            />
          </div>
          <h3>John Doe Doe</h3>
          <p>
            Best app ever! 10/10 would use again. I am so much happier now! Just
            kidding, this app ruined my life! I will sue the developer and take
            everthing he owns.
          </p>
        </div>

        <div className={styles.feedback_item}>
          <div className={styles.img}>
            <img
              src="https://randomuser.me/api/portraits/women/14.jpg"
              alt=""
              class="rounded-circle mb-3"
            />
          </div>
          <h3>Rebecca James</h3>
          <p>
            Best app ever! 10/10 would use again. I am so much happier now! Just
            kidding, this app ruined my life! I will sue the developer and take
            everthing he owns.
          </p>
        </div>

        <div className={styles.feedback_item}>
          <div className={styles.img}>
            <img
              src="https://randomuser.me/api/portraits/men/19.jpg"
              alt=""
              class="rounded-circle mb-3"
            />
          </div>
          <h3>Ted Mosby</h3>
          <p>
            Best app ever! 10/10 would use again. I am so much happier now! Just
            kidding, this app ruined my life! I will sue the developer and take
            everthing he owns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserFeedback;
