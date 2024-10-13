import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

const reviews = [
  {
    id: 1,
    star: 5,
    name: "John Doe",
    userImage: "https://example.com/user-images/john-doe.jpg",
    review: "Renting the Toyota Camry was an amazing experience!",
  },
  {
    id: 2,
    star: 4,
    name: "Jane Smith",
    userImage: "https://example.com/user-images/jane-smith.jpg",
    review: "The Honda Civic I rented was clean and well-maintained.",
  },
  {
    id: 3,
    star: 3,
    name: "Emily Johnson",
    userImage: "https://example.com/user-images/emily-johnson.jpg",
    review: "I rented a Ford Mustang, it had a few minor issues.",
  },
  {
    id: 4,
    star: 5,
    name: "Michael Brown",
    userImage: "https://example.com/user-images/michael-brown.jpg",
    review: "The Tesla Model 3 was in pristine condition!",
  },
  {
    id: 5,
    star: 4,
    name: "Sarah Davis",
    userImage: "https://example.com/user-images/sarah-davis.jpg",
    review: "Rented a BMW X5 for a family trip, and it was perfect!",
  },
];

const Review = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="py-9 ">
        <p className="flex justify-center text-center md:text-3xl font-bold mb-12">
          What our customers are <br /> saying about us
        </p>
        <div className="w-full">
          <Slider {...settings}>
            {reviews.map((review) => (
              <div key={review.id} className="p-2">
                <div className="bg-white h-64  p-4 flex flex-col justify-between  shadow-lg rounded-lg border">
                  <div className=" mb-4">
                    {[...Array(review.star)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">
                        &#9733;
                      </span>
                    ))}
                    {[...Array(5 - review.star)].map((_, i) => (
                      <span key={i} className="text-gray-300 text-xl">
                        &#9733;
                      </span>
                    ))}
                  </div>

                  <div>
                    <p className="text-center text-sm text-gray-600 line-clamp-3 overflow-hidden">
                      {review.review}
                    </p>
                  </div>
                  <div>
                    <Separator className="my-4"/>
                    <div className="flex items-center ">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <h3 className="font-bold text-lg text-center ml-8">
                        {review.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Review;
