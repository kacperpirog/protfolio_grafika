import React, { useState } from "react";
import {
  itemData_DTP,
  itemData_LP,
  itemData_Sm,
  itemData_Wiz,
} from "../../localData";
import { StyledDivGallery2 } from "./StyledGallery";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(itemData_DTP[0]);
  const [selectedImageLp, setSelectedImageLp] = useState(itemData_LP[0]);
  const [selectedImageSm, setSelectedImageSm] = useState(itemData_Sm[0]);
  const [selectedImageWiz, setSelectedImageWiz] = useState(itemData_Wiz[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const handleImageClickLp = (image) => {
    setSelectedImageLp(image);
  };
  const handleImageClickSm = (image) => {
    setSelectedImageSm(image);
  };
  const handleImageClickWiz = (image) => {
    setSelectedImageWiz(image);
  };
  return (
    <>
      <StyledDivGallery2>
        <div className="gallery">
          <img src={selectedImage.img} alt={selectedImage.title} />
          <div>
            <h3>DTP</h3>
          </div>
          <div className="thumbnails">
            {itemData_DTP.map((image) => (
              <img
                key={image.id}
                src={image.img}
                alt={image.title}
                onClick={() => handleImageClick(image)}
                className={image.id === selectedImage.id ? "active" : ""}
              />
            ))}
          </div>
        </div>
      </StyledDivGallery2>
      <StyledDivGallery2>
        <div className="gallery">
          <img src={selectedImageLp.img} alt={selectedImageLp.title} />
          <div>
            <h3>Loading page</h3>
          </div>
          <div className="thumbnails">
            {itemData_LP.map((image) => (
              <img
                key={image.id}
                src={image.img}
                alt={image.title}
                onClick={() => handleImageClickLp(image)}
                className={image.id === selectedImageLp.id ? "active" : ""}
              />
            ))}
          </div>
        </div>
      </StyledDivGallery2>
      <StyledDivGallery2>
        <div className="gallery">
          <img src={selectedImageSm.img} alt={selectedImageSm.title} />
          <div>
            <h3>Social media</h3>
          </div>
          <div className="thumbnails">
            {itemData_Sm.map((image) => (
              <img
                key={image.id}
                src={image.img}
                alt={image.title}
                onClick={() => handleImageClickSm(image)}
                className={image.id === selectedImageSm.id ? "active" : ""}
              />
            ))}
          </div>
        </div>
      </StyledDivGallery2>
      <StyledDivGallery2>
        <div className="gallery">
          <img src={selectedImageWiz.img} alt={selectedImageWiz.title} />
          <div>
            <h3>Wizualizacje</h3>
          </div>
          <div className="thumbnails">
            {itemData_Wiz.map((image) => (
              <img
                key={image.id}
                src={image.img}
                alt={image.title}
                onClick={() => handleImageClickWiz(image)}
                className={image.id === selectedImageWiz.id ? "active" : ""}
              />
            ))}
          </div>
        </div>
      </StyledDivGallery2>
    </>
  );
};

export default Gallery;
