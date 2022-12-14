import { Image, Text, Grid } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const carousel = [
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/46/1130-STDCRE-44452-SS-MH-Q4-Photography-December-THG0035165-Batching-And-Artwork-P2-Shot-2-1180x450.jpeg-050446.jpg",
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
        <SwiperSlide>
          <Image src={carousel[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={carousel[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={carousel[3]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
