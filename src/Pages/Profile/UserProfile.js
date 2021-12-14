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

  const { sendRequest: updateProfile } = useAxios();

  const uploadAvatar = async () => {

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", "at8uczqk");

    let response;

    const url = "https://api.cloudinary.com/v1_1/rpashev/image/upload";

    try {
      response = await axios.post(url, formData);

      let updatedImage = await updateProfile({
        url: "/user-profile",
        method: "POST",
        data: { image: response.data.url },
        headers: { Authorization: "Bearer " + token },
      });

      console.log(updatedImage);
      updateImage(updatedImage.image);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };
  return (
    <div className={styles["profile-page"]}>
      <h1>User Profile</h1>
      <div className={styles.avatar}>
        <img src={image} alt="avatar"></img>
      </div>
      <div>
        <input
          type="file"
          onChange={(event) => setSelectedImage(event.target.files[0])}
        ></input>
        <Button onClick={uploadAvatar}>Upload</Button>
        {isLoading && <p>Saving...</p>}
      </div>
    </div>
  );
};

export default UserProfile;
