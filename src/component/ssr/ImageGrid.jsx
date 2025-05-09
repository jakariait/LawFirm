import React from "react";
import Image from "next/image";

const ImageGrid = ({ images }) => {
  return (
    <div className="xl:container xl:mx-auto flex justify-around">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-20 justify-items-center">
        {images.map((image, index) => (
          <div key={index} className="relative w-64 h-64">
            <Image
              src={image.src}
              alt={image.alt || `Image ${index + 1}`}
              fill
              className="object-cover rounded"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
