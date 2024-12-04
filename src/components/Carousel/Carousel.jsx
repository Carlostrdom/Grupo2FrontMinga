import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    leftImage: "https://s3-alpha-sig.figma.com/img/8856/dd5e/290b26e8ccd3b394d453600dc140c09b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9E~eoAgkKKBP8zT7kIg5AvK9QEyzAcSweRoJPM1OUZ8lbw6MTk-o7KWQn65ss3ruEkkNF~706FPLM5b2fixKxo1K14fFObHYmFJA5EJLZb1LNr13oAynHtbpSwhT8hCI7eY6k85a2bdvCjOCD7jjExdBo8NQTHIPh46XHB0IE-oKnOmbT-VnR1HvpHcSYuugNwss5YPAXxt9X8WqMmo9aSxwBODmnyzH3-IkEbnMMsTmW2uPLcPa0h5eYt9Vv2ojKUroE8s1stGHLtaNxa3yqgBeDk1OgMwM1oeLaLS9qEH2ETDribK5g6kj1V~NF9tCgBHaAT3Z6Ta2NKb2Bbiyg__",
    centerImage: "https://s3-alpha-sig.figma.com/img/b3fe/fdeb/7c848fa5944ce73c1e0b7c954bf88cad?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UowBsYUK7SsOsvJJtRLI3abuhQjlNEK7aLHaT~47pwGHwtSQRr9TbUtFXDWTLybN8OY2dySLMelvlT1QsKm3W9nSB6lv19kABnXhzY8v9GViukQcQRFipfiukFpRmVQvdP9nENEHxx7NPaoHbu-pGBoZbm~fQcA5JUdAhvON~L40iQRRID1nbV2CMW6JlbbdZ704vuXTVHLoQvC~s5H6FyDelv-V6xFKS6Lr4TIW2K~hpU-mInFVjsS1dSVoC-2og7wq7R~0xYl40IKK1CMVl0LH51zSseH59no0ntzrz~2-0ide4vu-DjuHa9T476Eeav6XukYrmqhlAPOyYs9n4g__",
    title: "Shonen",
    description: "Shonen is the manga aimed at adolescent boys. It features action, humor, and camaraderie within a collective or combat team."
  },
  {
    leftImage: "https://s3-alpha-sig.figma.com/img/7010/55a8/ad631c0e34af539abb86743a2cafbda1?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=afDZIigVOIi1aDh1F0QlVYrD6c4pTsh6FfRxrFC1piGH8-lhP735YXt1yVtRNzQbC0QOVhgHWU3ovNPPUw60Clig35Nq~PpiU~ymZIz1J4tKLK5aIARWyZLctzxbuqZTADjEzSzbK1G2vmVwipAHj7ElpDiaPVX6T~yjFfhIvies19wi5ll55JPUM-1yvDS2nn70DrBcL2LUPAKPmaUEy0-AdZ9Ke41QOi-NEq4~H-ehRqNLBM0EtEKcdkabnMMoHPrgZv~a6-zn6WtVjHVF4kZAcLB3TgDqQZW4-uLL1t5N2PTbgD41GZPujL0kVTdk~OjtzExHpK~szQFxSHXSDA__",
    centerImage: "https://s3-alpha-sig.figma.com/img/0b79/70a5/01731543bd32ac773a1b2fa236c42971?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bd2m7QcJyCsQrumWdBCHWBR9E8UL0JPRsNXdLefFJ4st8MUJf6uagMHjonK3UaZI0e1tnSP7-ig-px94YBA6BGjE6lZV7xMDlWu~XYNa8LZhldFsnyRuSPSLssrlME1aiAKsCYnOGllEBf-Of7pXgTVYB1kVgwnbj5SFsaKyV0d~qJFx22nemEZ2uGNqNN1nMryUSMb42tOl5B7-KxjWKiF~vRZ9iWeUOp8VVao53acwpJuerra7Ul7TD-n4Im02ab2ks8G4s0LN~gCbcBkrB1W55Nr7EslQyChuA-Us9mjDwzoYTVYwCuVXc2lU3mfTB0jm7qmC2bvq9yAYUbux1w__",
    title: "Shojo",
    description: "Shojo focuses on emotional relationships and is aimed at young girls."
  },
  {
    leftImage: "https://s3-alpha-sig.figma.com/img/74c1/1422/523fb73c0843c17b79f58c0508ca9f7a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oUkFdHoi5gV4bZGLJGwRYums6sPbdtkK5UQQkEiIGD68OegMtjeXxwZGHb7uWtgTBMWyQA9px-3SgK7G2CKvzyYz5mF8mJHFcYiJpWsv0URMaT~5ryyYG0GQuODyDMrbenpYzetNiYwrI0Q8AgSgp7vLs5kldZAQBHEHmxIAOIT5mm7N3JE8I-J3HfKsgZXcldcgFZi~wDEMhhOvpW0OinHThHdnQGAAIYFmYm1JufdP5g4699oM1dU-dgfib8XheTa3JKescJZvD6Gg1TuPqpE6xUpoTF8XgvpKAoPPjrepsn6YWfxLUuawwaU4GHVpiEsSO4N~Q8iccS3uU2IzPA__",
    centerImage: "https://s3-alpha-sig.figma.com/img/300d/6335/966c0fc9b1513215c1a4f71556951932?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T58Y-TVEAvpM4OXg7zlnRE8Xxp7bZSA2avD35mdp1jUA8pfJmwZddBWJgbKmNXPamqNatncdF1PFap1WwUZ1Yb7VILHt~F1npIFCQKvlhZFywM2OGh--fAWG2NlNVTl-ekLcBLMk~VDzgs3N2oeVnLEimTlkkq5XaVBsRdHyrn88iCtHQomFypLmQVPmInQsj2U8xVALUPTm-6R47LFiEW0QaqqtLgO4OD0UNInNVx~ADxZAFjGNgt2bc4MMc6iiCjrYdjgX3iPJ7PoxN2IYBqhrMQpoJ24i1xHjfk8nneZ0nfkKfYoMNCx3VLOwVmzL3fL8~OlOo~NDoKQyHZOhhQ__",
    title: "Seinen",
    description: "Seinen manga targets adult men, often featuring more complex themes and mature content."
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto my-16 hidden md:block">
      <div className="bg-orange-500 rounded-xl shadow-xl h-96 overflow-visible relative">
        <div className="grid grid-cols-12 h-full px-8">
         
          <div className="col-span-3 flex items-center">
            <img
              src={slides[currentSlide].leftImage}
              alt="Left"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

         
          <div className="col-span-4 relative flex justify-center">
            <div className="absolute -top-12">
              <img
                src={slides[currentSlide].centerImage}
                alt="Center"
                className="h-[400px] w-auto object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>

    
          <div className="col-span-5 flex flex-col justify-center text-white pr-8">
            <h2 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h2>
            <p className="text-lg">{slides[currentSlide].description}</p>
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
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;