import { Link } from "react-router-dom";
import { Box, Button, Image, Text } from "@chakra-ui/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CardSlide() {
  let data = [
    {
      id: 1048,
      brand: "colourpop",
      name: "ISDIN Lambdapil Hair Density Supplement ",
      price: "61.0",
      price_sign: "$",
      currency: "CAD",
      image_link:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/13971508-1055005526336835.jpg",

      description:
        "Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!",
    },
    {
      id: 1047,
      brand: "colourpop",
      name: "ISDINCEUTICS Melaclear Advanced (1.7oz)ISDIN Gift",
      price: "175",
      price_sign: "$",
      currency: "CAD",
      image_link:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/13971534-6365005595451348.jpg",

      description:
        "Blotted Lip Sheer matte lipstick that creates the perfect popsicle pout! Formula is lightweight, matte and buildable for light to medium coverage.",
    },
    {
      id: 1046,
      brand: "colourpop",
      name: "ISDIN Mineral Brush Powder Facial Pollution ",
      price: "110",
      price_sign: "$",
      currency: "CAD",
      image_link:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/13971532-1305005593086226.jpg",

      description:
        "Lippie Stix Formula contains Vitamin E, Mango, Avocado, and Shea butter for added comfort and moisture. None of our Lippie formulas contain any nasty ingredients like Parabens or Sulfates.",
    },
    {
      id: 1045,
      brand: "colourpop",
      name: "NEST Fragrances Birchwood Pine 3-",
      price: "78.0",
      price_sign: "$",
      currency: "CAD",
      image_link:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12691024-3064813757049624.jpg",

      description:
        "Developed for the Selfie Age, our buildable full coverage, natural matte foundation delivers flawless looking skin from day-to-night. The oil-free, lightweight formula blends smoothly and is easily customizable to create the coverage you want. Build it up or sheer it out, it was developed with innovative soft-blurring pigments to deliver true color while looking and feeling natural. The lockable pump is easy to use and keeps your routine mess-free! As always, 100% cruelty-free and vegan.",
    },
    {
      id: 1044,
      brand: "boosh",
      name: "ISDIN Age Contour Night Face and Neck Cream ",
      price: "58.0",
      price_sign: "$",
      currency: "CAD",
      image_link:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/13971514-1605005527050079.jpg",
      product_link: "https://www.boosh.ca/collections/all",
      website_link: "https://www.boosh.ca/",
      description:
        "All of our products are free from lead and heavy metals, parabens, phthalates, artificial colourants, and synthetic fragrances.  Boosh lipstick glides on smoothly for clean & protective SPF coverage. They are filled with hydrating oils and butters to preserve and enhance your lips natural surface. Organic sweet orange oil gives a light and cheerful scent.",
    },
    {
      id: 1043,
      brand: "deciem",
      name: "Obagi Clinical Kinetin+ Hydrating Cream ",
      price: "60",
      price_sign: "$",
      currency: "CAD",
      image_link:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/13971533-1035005592609694.jpg",

      description:
        "Serum Foundations are lightweight medium-coverage formulations available in a comprehensive shade range across 21 shades. These foundations offer moderate coverage that looks natural with a very lightweight serum feel. They are very low in viscosity and are dispensed with the supplied pump or with the optional glass dropper available for purchase separately if preferred. ",
    },
    {
      id: 1042,
      brand: "deciem",
      name: "ISDIN Melatonik® Recovery Night Serum with  ",
      price: "6.9",
      price_sign: "$",
      currency: "CAD",
      image_link:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/13973773-1724997258190192.jpg",
      product_link:
        "https://deciem.com/product/rdn-coverage-foundation-33-n-30ml",
      website_link: "https://deciem.com/",
      description:
        "Coverage Foundations are full-coverage formulations available in a comprehensive shade range across 21 shades. These foundations contain higher pigment levels than our Serum Foundations but still offer a smooth finish that avoids the heavy makeup look that can make skin appear more aged. The texture is that of a lightweight, non-oily cream.",
    },
    {
      id: 1041,
      brand: "zorah biocosmetiques",
      name: "BIOEFFECT Hydration Heroes Set ",
      price: "139.0",
      price_sign: "$",
      currency: "USD",
      image_link:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/13890003-7054997222870475.jpg",

      description:
        "<strong>12 hours of long-lasting</strong> intense color, transfer-free (leaves no trace on crease above the eyelid) <strong>Pure Light Capture®</strong> <strong>minerals</strong> deliver color and radiance. Silky lines and refreshingly light, Pure Argan eyeliner leaves a weightless feel on the eyelids.<p align='LEFT'>Natural cosmetic certified by Ecocert Greenlife according to Ecocert Standard available at: http://cosmetiques.ecocert.com</p>98% of the total ingredients are from natural origin 5% of total ingredients are from organic farming",
    },

    {
      id: 1039,
      brand: "w3llpeople",
      name: " Christophe Robin Cleansing Purifying ",
      price: "53.0",
      price_sign: "$",
      currency: "USD",
      image_link:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12635437-9444884719322309.jpg",
      product_link:
        "https://www.purpicks.com/product/w3llpeople-realist-invisible-setting-powder/",
      website_link: "https://purpicks.com/",
      description:
        '<span style="font-weight: 400;">Keep it real with a polished, soft-focus look using this superfine, loose mineral powder. The healing properties of organic aloe help soothe and calm stressed out skin. Instantly minimize pores, soften imperfections, and creates a matte finish with superfine powder. Use by itself for an air-brushed look, or to set foundation for ultra-long wear.</span><span style="font-weight: 400;">* Set makeup or by itself for matte air-brushed effect</span><span style="font-weight: 400;">* Absorbs excess oil while softening fine lines</span><span style="font-weight: 400;">* Organic aloe creates radiant, rejuvenated skin</span><span style="font-weight: 400;">* Hypoallergenic, Chemical Free, Cruelty Free &amp; Noncomedogenic </span><span style="font-weight: 400;">* EWG Verified for non-toxic health and safety</span><span style="font-weight: 400;">* Free From: Parabens, Gluten, GMO, Phthalates, Sulfates, Fragrance, Pheonoxyethanol, Dimethicone, PEG, Propylene Glycol, Butylene Glycol, Lead, Mineral Oil, Talc</span>',
    },
    {
      id: 1038,
      brand: "sally b's skin yummies",
      name: "Christophe Robin Cleansing Thickening  ",
      price: "53.0",
      price_sign: "$",
      currency: "USD",
      image_link:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12635436-1174884720250929.jpg",
      product_link:
        "https://www.purpicks.com/product/sally-bs-skin-yummies-b-smudged/",
      website_link: "https://purpicks.com/",
      description:
        "Let your eyes naturally pop with our B Smudged, a subtle eye color that adds a tint of color to the base of your lashes. An organic, cream eye color, B Smudged eliminates the inevitable uneven line from traditional eyeliners, and does not require expert blending techniques of messy, powder-based shadows. Simply 'smudge' along lash line for color that stays in place for a long lasting look.",
    },
    {
      id: 1037,
      brand: "sally b's skin yummies",
      name: "Christophe Robin Luscious Curl Ritual",
      price: "38.0",
      price_sign: "$",
      currency: "USD",
      image_link:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12752678-1894894638558975.jpg",
      product_link:
        "https://www.purpicks.com/product/sally-bs-skin-yummies-b-glossy-lip-gloss/",
      website_link: "https://purpicks.com/",
      description:
        "Intensify your natural lip color with Sally B's B Glossy Lip Gloss, an organic lip gloss that adds a silky smooth hint of color and shimmer to lips. Formulated with 98% certified organic, moisture-rich ingredients our B Glossy Lip Gloss works to enrich lip health for lips that feel good and look even better.",
    },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
  };

  return (
    <Box>
      <Box>
        <Box id="main-slide">
          <Text pt="2.5%" fontSize="3rem" textAlign="center">
            New and Trending: ISDIN
          </Text>
          <Box>
            <Carousel
              responsive={responsive}
              arrows
              autoPlaySpeed={2000}
              draggable
              minimumTouchDrag={200}
              swipeable
              infinite
              autoPlay={true}
            >
              {data.map((el) => {
                return (
                  <Link>
                    <Box p={10} ml={100}>
                      <Image mb={10} src={el.image_link} />
                      <Box>
                        <Text>{el.name}</Text>
                        <Text fontWeight={500} mt={5}>
                          Price : ${el.price}
                        </Text>
                      </Box>
                      <Button
                        bgColor="black"
                        borderRadius="0px"
                        color="white"
                        mt="10"
                        w={"100%"}
                      >
                        QUICE BUY
                      </Button>
                    </Box>
                  </Link>
                );
              })}
            </Carousel>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CardSlide;
