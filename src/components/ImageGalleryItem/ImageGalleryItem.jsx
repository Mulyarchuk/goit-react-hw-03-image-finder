import React from "react";
import css from "./ImageGalleryItem.module.css";
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({webformatURL, index, onClick})=>{
<li className={css.ImageGalleryItem} onClick={()=>onClick(index)}>
  <img src={webformatURL} alt="" className={css.ImageGalleryImage}/>
</li>
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    openModal: PropTypes.func,
  };