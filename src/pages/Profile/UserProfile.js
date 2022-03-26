import { useState, useContext } from "react";
import Button from "../../components/UI/Button";
import styles from "./UserProfile.module.scss";

import axios from "axios";
import AuthContext from "../../context/user-context";
import { useAxios } from "../../custom-hooks/use-axios";

const UserProfile = (props) => {
  const [selectedImage, setSelectedImage] = useState();
  const { image, token, updateImage, email, watchlist, seenlist, username } =
    useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [preview, setPreview] = useState(null);

  const { sendRequest: updateProfile } = useAxios();

  const uploadAvatar = async () => {
    if (!selectedImage) {
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", "at8uczqk");

    let response;

    const url = "https://api.cloudinary.com/v1_1/rpashev/image/upload";
    let updatedImage;
    try {
      response = await axios.post(url, formData);

      updatedImage = await updateProfile({
        url: "/user-profile",
        method: "POST",
        data: { image: response.data.url },
        headers: { Authorization: "Bearer " + token },
      });

      if (updatedImage?.image) {
        updateImage(updatedImage.image);
      } else {
        throw new Error("Could not update profile!");
      }
    } catch (error) {
      setError(error.message || "Could not update profile!");
    }

    setPreview(null);
    setIsLoading(false);
  };

  const imageChangeHandler = (event) => {
    setError(null);

    if (!event.target.files[0]) {
      return;
    }
    setSelectedImage(event.target.files[0]);
    const previewUrl = URL.createObjectURL(event.target.files[0]);
    setPreview(previewUrl);
  };

  return (
    <div className={styles["profile-page"]}>
      <h1>User Profile</h1>
      <div className={styles.content}>
        <div className={styles["user-image"]}>
          <div className={styles.avatar}>
            <img src={preview || image} alt="avatar"></img>
          </div>
          <div className={styles.controls}>
            <label htmlFor="file-upload" className={styles.customlabel}>
              <span className={styles.field}>Upload avatar...</span>
              <span className={styles.filebtn}>Browse</span>
            </label>
            <input
              type="file"
              onChange={imageChangeHandler}
              className={styles.fileinput}
              id="file-upload"
            ></input>
            <Button onClick={uploadAvatar}>Save changes</Button>
          </div>
          {error && !isLoading && <p className={styles.error}>{error}</p>}
          {isLoading && <p>Saving...</p>}
        </div>
        <div className={styles.info}>
          <h2>Username: {username}</h2>
          <p>Your email: {email} </p>
          <p>
            Movies in watchlist: <span>{watchlist.length}</span>
          </p>
          <p>
            Movies marked as watched: <span>{seenlist.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
