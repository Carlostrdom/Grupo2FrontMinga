import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchcategory } from "../../store/action/actioncategory/actioncategory";
const Carousel = () => {
  const { category, loading, error } = useSelector(
    (state) => state.categoryStore
  );
  console.log(category);

  const [currentSlide, setCurrentSlide] = useState(0);
  let dispatch = useDispatch();

  useEffect(() => {
    if (category.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % category.length);
      }, 5000);

      return () => clearInterval(interval);
    }
    dispatch(fetchcategory());
  }, [category]);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % category.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + category.length) % category.length);
  };

  return (
    <div className="relative w-[80%] h-[60vh] max-w-6xl mx-auto my-16 hidden md:block">
      <div className="bg-orange-500 rounded-xl shadow-xl h-[44.4vh] overflow-visible relative">
        <div className="grid grid-cols-12 h-full  px-10 ]">
          <div className="col-span-3 flex items-center">
            {category.length > 0 && category[currentSlide] && (
              <img
                src={category[currentSlide].cover_photo}
                alt="Left"
                className=" h-[50vh] absolute object-cover rounded-lg "
              />
            )}
          </div>

          <div className="col-span-4 relative flex justify-center">
            <div className="absolute -top-12">
              {category.length > 0 && category[currentSlide] && (
                <img
                  src={category[currentSlide].character_photo}
                  alt="Center"
                  className=" flex h-[40vh] object-cover rounded-lg shadow-xl"
                />
              )}
            </div>
          </div>

          <div className="col-span-5 flex flex-col justify-center text-white pr-8">
            {category.length > 0 && category[currentSlide] ? (
              <>
                <h2 className="text-3xl font-bold mb-4">
                  {category[currentSlide].name}
                </h2>
                <p className="text-lg">{category[currentSlide].description}</p>
              </>
            ) : (
              <p className="text-lg">Cargando...</p>
            )}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-full transition-colors duration-300 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-full transition-colors duration-300 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {category.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
