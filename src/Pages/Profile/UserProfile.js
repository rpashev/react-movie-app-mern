import { useState } from "react";
import Button from "../../components/UI/Button";
import styles from "./UserProfile.module.scss";

import axios from "axios";
import { useContext } from "react/cjs/react.development";
import AuthContext from "../../context/user-context";

const UserProfile = (props) => {
  const [selectedImage, setSelectedImage] = useState();
  const ctx = useContext(AuthContext);
  console.log(ctx.image)

  const uploadAvatar = async () => {
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", "at8uczqk");

    let response;

    const url = "https://api.cloudinary.com/v1_1/rpashev/image/upload";
    try {
      response = await axios.post(url, formData);
    } catch (err) {
      console.log(err);
    }

    console.log(response);
  };
  return (
    <div className={styles["profile-page"]}>
      <h1>User Profile</h1>
      <div className={styles.avatar}>
        <img src={ctx.image} alt="avatar"></img>
      </div>
      <div>
        <input
          type="file"
          onChange={(event) => setSelectedImage(event.target.files[0])}
        ></input>
        <Button onClick={uploadAvatar}>Upload</Button>
      </div>
    </div>
  );
};

export default UserProfile;
