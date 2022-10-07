import { useState } from "react";
import { useDropzone } from "react-dropzone"
import { imageIcon } from "../../assets/images/icons";

export const Dropzone = () => {

    const { getRootProps, getInputProps, isDragActive } = useDropzone({});
    
    const [files, setFiles] = useState([])

  return (
      <div
        {...getRootProps()}
        className="dropzone-content mt-2 flex flex-col items-center justify-center image col-span-4"
      >
        <label htmlFor="logo" className="text-sm text-gray-800">
          Logo of company (64x64)
        </label>
        <input
          type="file"
          id="logo"
          name="logo"
          className="input-zone bg-red-500 h-10 w-20"
          {...getInputProps()}
        />
        <div className="contentImageInput flex flex-col items-center h-40 bg-gray-400">
          <img src={imageIcon} className="w-8" alt="" />
          <p>Drag and drop an image</p>
        </div>
      </div>
  );
}
