import { useState } from "react";
import Button from "../../components/UI/Button";
import styles from "./UserProfile.module.scss";

import axios from "axios";
import { useContext } from "react/cjs/react.development";
import AuthContext from "../../context/user-context";
import { useAxios } from "../../custom-hooks/use-axios";

const UserProfile = (props) => {
  const [selectedImage, setSelectedImage] = useState();
  const { image, token, updateImage } = useContext(AuthContext);

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
      <div className={styles.avatar}>
        <img src={preview || image} alt="avatar"></img>
      </div>
      <div className={styles.controls}>
        <input type="file" onChange={imageChangeHandler}></input>
        <Button onClick={uploadAvatar}>Save changes</Button>
      </div>
      {error && !isLoading && <p className={styles.error}>{error}</p>}
      {isLoading && <p>Saving...</p>}
    </div>
  );
};

export default UserProfile;
