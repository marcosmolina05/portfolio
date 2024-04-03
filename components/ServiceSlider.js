//import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxVideo,
  RxArrowTopRight,
} from "react-icons/rx";

//import required modules"
import { FreeMode, Pagination } from "swiper";

// service data
const serviceData = [
  {
    icon: <RxRocket />,
    title: "Appointment Setter",
    description: "Gestionando tus citas para optimizar tu agenda y tu tiempo.",
  },
  {
    icon: <RxVideo />,
    title: "Content Mannager",
    description: "Experto en edición de video para potenciar tu marca.",
  },
  {
    icon: <RxDesktop />,
    title: "Web Developer",
    description: "Desarrollador web especializado en crear sitios efectivos."
  },
  {
    icon: <RxCrop />,
    title: "Marketing",
    description: "Estrategias efectivas para impulsar tu presencia en línea.",
  },
  // {
  //   icon: <RxPencil2 />,
  //   title: "Design",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
  // {
  //   icon: <RxReader />,
  //   title: "Copywriting",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{clickable:true}}
      modules={[ FreeMode, Pagination ]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={item.title +index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-2xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* {arrow} */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
