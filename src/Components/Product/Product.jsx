import React from 'react'
import "./Product.css"

import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/scss/image-gallery.scss";
// import "react-image-gallery/styles/css/image-gallery.css";


const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

function Product() {
  return (
    <div className='product-image-div'>
    <ImageGallery items={images} thumbnailPosition={"left"} showPlayButton={false}  showFullscreenButton={false} />
    </div>
  )
}

export default Product