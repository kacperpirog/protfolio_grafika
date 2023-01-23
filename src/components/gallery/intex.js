import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  itemDataIntersport,
  itemData4f_spot,
  itemDataUA,
  itemData_rest,
} from "../../localData";
import { StyledDivGallery } from "./StyledGallery";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
// import ListSubheader from "@mui/material/ListSubheader";
// import IconButton from "@mui/material/IconButton";
// import InfoIcon from "@mui/icons-material/Info";

const Gallery = () => {
  return (
    <StyledDivGallery>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemDataUA.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData4f_spot.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemDataIntersport.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData_rest.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </StyledDivGallery>
  );
};

export default Gallery;
