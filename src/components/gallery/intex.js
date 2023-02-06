import React from "react";
import {
  itemDataIntersport,
  itemData4f_spot,
  itemDataUA,
  itemData_rest,
} from "../../localData";
import { StyledDivGallery } from "./StyledGallery";

const Gallery = () => {
  return (
    <>
      <StyledDivGallery>
        <div className="gallery">
          {itemDataUA.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </div>
      </StyledDivGallery>
      <StyledDivGallery>
        <div className="gallery">
          {itemData4f_spot.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </div>
      </StyledDivGallery>
      <StyledDivGallery>
        <div className="gallery">
          {itemDataIntersport.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </div>
      </StyledDivGallery>
      <StyledDivGallery>
        <div className="gallery">
          {itemData_rest.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </div>
      </StyledDivGallery>
    </>
  );
};

export default Gallery;
