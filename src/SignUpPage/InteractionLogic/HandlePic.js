import { useState } from "react";

function HandlePic({id}) {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
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
            <img
              id={id}
              src={URL.createObjectURL(image)}
              alt="Preview"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default HandlePic;
