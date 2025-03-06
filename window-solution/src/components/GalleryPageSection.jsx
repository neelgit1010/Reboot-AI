import Image from "next/image"
import { useState } from "react";
import { IoEye } from "react-icons/io5";

const GalleryPageSection = () => {
  const images = [
    "/gallery/gallery10.jpg",
    "/gallery/gallery1.jpg",
    "/gallery/gallery0.jpg",
    "/gallery/gallery5.jpg",
    "/gallery/gallery2.jpg",
    "/gallery/gallery3.jpg",
    "/gallery/gallery6.jpg",
    "/gallery/gallery7.jpg",
    "/gallery/gallery8.jpg",
    "/gallery/gallery9.jpg",
    "/gallery/gallery4.jpg",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        <div className="flex flex-col gap-4">
          {images.slice(0, 4).map((image, index) => (
            <div className="relative" onClick={() => openModal(image)}>
              <Image
                key={index}
                src={image}
                alt={`Image ${index}`}
                width={400}
                height={400}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 bg-black opacity-0 text-transparent text-3xl hover:opacity-60 hover:text-white hover:cursor-pointer flex justify-center items-center">
                <IoEye size={40} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {" "}
          {images.slice(4, 7).map((image, index) => (
            <div className="relative" onClick={() => openModal(image)}>
              <Image
                key={index}
                src={image}
                alt={`Image ${index}`}
                width={400}
                height={400}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 bg-black opacity-0 text-transparent text-3xl hover:opacity-60 hover:text-white hover:cursor-pointer flex justify-center items-center">
                <IoEye size={40} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {" "}
          {images.slice(7, 11).map((image, index) => (
            <div className="relative" onClick={() => openModal(image)}>
              <Image
                key={index}
                src={image}
                alt={`Image ${index}`}
                width={400}
                height={400}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 bg-black opacity-0 text-transparent text-3xl hover:opacity-60 hover:text-white hover:cursor-pointer flex justify-center items-center">
                <IoEye size={40} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-all duration-700"
          onClick={closeModal}
        >
          <div className="relative w-[90%] max-w-2xl p-4 rounded-lg shadow-lg">
            <Image
              src={selectedImage}
              alt="Selected"
              width={600}
              height={600}
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryPageSection;