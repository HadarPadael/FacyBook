import { useState } from "react";
import ImageHelper from "./ImageHelper";

function HandlePic({ id, setData }) {
  const [image, setImage] = useState(null);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    setImage(file);
    const base64 = await ImageHelper.fileToBase64(file);
    const compressedPic = await ImageHelper.compressBase64(base64, 800, 800, 0.8);

    setData((prevData) => ({
      ...prevData,
      compressedPic,
    }));
  };

  return (
    <div>
      <div className="mb-3">
        <label id="InstructionLabel">please choose a profile picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="form-control"
          required
        />
      </div>
      <div className="col-12">
        {image && (
          <div>
            <img id={id} src={URL.createObjectURL(image)} alt="Preview" />
          </div>
        )}
      </div>
    </div>
  );
}

export default HandlePic;
