import React from "react";

type CategoryProps = {
  title: string;
  images: string[];
};

const PortfolioGallery: React.FC<CategoryProps> = ({ title, images }) => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title} ${index + 1}`}
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioGallery;
