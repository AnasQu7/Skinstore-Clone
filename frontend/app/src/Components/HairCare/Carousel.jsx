import { Image, Text, Grid } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const carousel = [
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/23/SS-Batching-Christmas-Category_Banner-EG1180x450_4-082423.jpg",
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/03/1207-STDCRE-44662-SS-MH-Beauty-Bag-Amend-1180x450-V1-050203.jpg",
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/10/original-New_Project_%283%29-085610.jpg",
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/Shot6-1180x450-095455.jpeg",
];

export default function App() {
  return (
    <>
      <Grid
        bg="black"
        m="auto"
        textAlign="center"
        mb="2"
        color="white"
        _hover={{
          color: "black",
          bg: "white",
        }}
      >
        <Text p="2" fontSize={20} fontWeight="700">
          25% off with code REPLAY + free Holiday Beauty Bag (worth $170) @
          $150+ | SHOP NOW {">"}
        </Text>
      </Grid>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        w={"100%"}
      >
        <SwiperSlide>
          <Image src={carousel[0]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
