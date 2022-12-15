import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Flex,
    Button,
    Box,
    Spacer,
    Text,
    Image,
  } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useState } from 'react';
  import { BsMinecartLoaded } from 'react-icons/bs';
  
function Cart() {
  const [cartData , setCartData] = useState([{
    "id": 1048,
    "brand": "colourpop",
    "name": "Lippie Pencil",
    "price": "5.0",
    "price_sign": "$",
    "currency": "CAD",
    "image_link": "https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769",
    "product_link": "https://colourpop.com/collections/lippie-pencil",
    "website_link": "https://colourpop.com",
    "description": "Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!",
    "rating": null,
    "category": "pencil",
    "product_type": "lip_liner",
    "tag_list": [
    "cruelty free",
    "Vegan"
    ],
    "created_at": "2018-07-08T23:45:08.056Z",
    "updated_at": "2018-07-09T00:53:23.301Z",
    "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1048.json",
    "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/048/original/open-uri20180708-4-13okqci?1531093614",
    "product_colors": [
    {
    "hex_value": "#B28378",
    "colour_name": "BFF Pencil"
    },
    {
    "hex_value": "#A36B5E",
    "colour_name": "951 Pencil"
    },
    {
    "hex_value": "#966A60",
    "colour_name": "Beeper Pencil"
    },
    {
    "hex_value": "#8F5954",
    "colour_name": "Oh Snap Pencil"
    },
    {
    "hex_value": "#975348",
    "colour_name": "Curvii Pencil"
    },
    {
    "hex_value": "#865B69",
    "colour_name": "Lumiere Pencil"
    },
    {
    "hex_value": "#8E474D",
    "colour_name": "Bumble Pencil"
    },
    {
    "hex_value": "#5F2820",
    "colour_name": "BFF Pencil 3"
    },
    {
    "hex_value": "#C095BC",
    "colour_name": "Brills Pencil"
    },
    {
    "hex_value": "#743A6A",
    "colour_name": "Are N Be Pencil"
    },
    {
    "hex_value": "#965564",
    "colour_name": "Contempo Pencil"
    },
    {
    "hex_value": "#BF2C7E",
    "colour_name": "Heart On Pencil"
    },
    {
    "hex_value": "#CE435D",
    "colour_name": "Trixie Pencil"
    },
    {
    "hex_value": "#DA6952",
    "colour_name": "Chi Chi Pencil"
    },
    {
    "hex_value": "#A33C37",
    "colour_name": "Clique Pencil"
    },
    {
    "hex_value": "#C23D3C",
    "colour_name": "Frenchie Pencil"
    },
    {
    "hex_value": "#AF4051",
    "colour_name": "Bossy Pencil"
    },
    {
    "hex_value": "#914B4C",
    "colour_name": "Wild Nothing Pencil"
    },
    {
    "hex_value": "#6D414B",
    "colour_name": "Dopey Pencil"
    },
    {
    "hex_value": "#4D2D28",
    "colour_name": "Toolips Pencil"
    },
    {
    "hex_value": "#361927",
    "colour_name": "Mamacita Pencil"
    },
    {
    "hex_value": "#714B41",
    "colour_name": "Pitch Pencil"
    },
    {
    "hex_value": "#762F50",
    "colour_name": "LBB Pencil"
    },
    {
    "hex_value": "#8C4A47",
    "colour_name": "Love Bug Pencil"
    },
    {
    "hex_value": "#702E2D",
    "colour_name": "Poison Pencil"
    },
    {
    "hex_value": "#93283C",
    "colour_name": "Bichette Pencil"
    },
    {
    "hex_value": "#653E44",
    "colour_name": "Dukes Pencil"
    },
    {
    "hex_value": "#5C3357",
    "colour_name": "Leather Pencil"
    },
    {
    "hex_value": "#242225",
    "colour_name": "Bull Chic Pencil"
    },
    {
    "hex_value": "#B5716A",
    "colour_name": "Brink Pencil"
    },
    {
    "hex_value": "#B0516F",
    "colour_name": "I Heart This Pencil"
    },
    {
    "hex_value": "#542328",
    "colour_name": "Ellarie Pencil"
    },
    {
    "hex_value": "#DFAC9B",
    "colour_name": "Toy Pencil"
    },
    {
    "hex_value": "#AB7164",
    "colour_name": "BFF Pencil 2"
    }
    ]
    },
    {
    "id": 1047,
    "brand": "colourpop",
    "name": "Blotted Lip",
    "price": "5.5",
    "price_sign": "$",
    "currency": "CAD",
    "image_link": "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076",
    "product_link": "https://colourpop.com/collections/lippie-stix?filter=blotted-lip",
    "website_link": "https://colourpop.com",
    "description": "Blotted Lip Sheer matte lipstick that creates the perfect popsicle pout! Formula is lightweight, matte and buildable for light to medium coverage.",
    "rating": null,
    "category": "lipstick",
    "product_type": "lipstick",
    "tag_list": [
    "cruelty free",
    "Vegan"
    ],
    "created_at": "2018-07-08T22:01:20.178Z",
    "updated_at": "2018-07-09T00:53:23.287Z",
    "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1047.json",
    "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/047/original/open-uri20180708-4-e7idod?1531087336",
    "product_colors": [
    {
    "hex_value": "#b72227",
    "colour_name": "Bee's Knees"
    },
    {
    "hex_value": "#BB656B",
    "colour_name": "Brain Freeze"
    },
    {
    "hex_value": "#8E4140",
    "colour_name": "Drip"
    },
    {
    "hex_value": "#A12A33",
    "colour_name": "On a Stick"
    },
    {
    "hex_value": "#904550",
    "colour_name": "Ice Cube"
    },
    {
    "hex_value": "#452222",
    "colour_name": "Lolly"
    },
    {
    "hex_value": "#7C3F35",
    "colour_name": "Candyfloss"
    }
    ]
    },
    {
      "id": 1044,
      "brand": "boosh",
      "name": "Lipstick",
      "price": "26.0",
      "price_sign": "$",
      "currency": "CAD",
      "image_link": "https://cdn.shopify.com/s/files/1/1016/3243/products/LIPBALM_LID_grande.jpg?v=1496848378",
      "product_link": "https://www.boosh.ca/collections/all",
      "website_link": "https://www.boosh.ca/",
      "description": "All of our products are free from lead and heavy metals, parabens, phthalates, artificial colourants, and synthetic fragrances.  Boosh lipstick glides on smoothly for clean & protective SPF coverage. They are filled with hydrating oils and butters to preserve and enhance your lips natural surface. Organic sweet orange oil gives a light and cheerful scent.",
      "rating": null,
      "category": "lipstick",
      "product_type": "lipstick",
      "tag_list": [
      "Chemical Free",
      "Organic"
      ],
      "created_at": "2018-07-08T17:32:28.088Z",
      "updated_at": "2018-09-02T22:52:06.669Z",
      "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1044.json",
      "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/044/original/data?1531071233",
      "product_colors": [
      {
      "hex_value": "#CB4975",
      "colour_name": "Babs"
      },
      {
      "hex_value": "#B6636F",
      "colour_name": "Bobbie"
      },
      {
      "hex_value": "#B37072",
      "colour_name": "Rosie"
      },
      {
      "hex_value": "#C6727C",
      "colour_name": "Ellie"
      },
      {
      "hex_value": "#AF2257",
      "colour_name": "Dahlia"
      },
      {
      "hex_value": "#573F53",
      "colour_name": "Kat"
      },
      {
      "hex_value": "#875672",
      "colour_name": "Brie"
      },
      {
      "hex_value": "#BC88A5",
      "colour_name": "Emmy"
      },
      {
      "hex_value": "#BB8A88",
      "colour_name": "Dusty rose"
      },
      {
      "hex_value": "#8D5C58",
      "colour_name": "Kylie"
      },
      {
      "hex_value": "#C86775",
      "colour_name": "Leah"
      },
      {
      "hex_value": "#F8D7D6",
      "colour_name": "Lip Plumping Balm"
      },
      {
      "hex_value": "#8F6065",
      "colour_name": "Luna"
      },
      {
      "hex_value": "#C79289",
      "colour_name": "Nova"
      },
      {
      "hex_value": "#9D3F47",
      "colour_name": "Ruby"
      }
      ]
      },
      {
      "id": 1043,
      "brand": "deciem",
      "name": "Serum Foundation",
      "price": "6.7",
      "price_sign": "$",
      "currency": "CAD",
      "image_link": "https://3bc01d2807fb1bc0d25c-a86d2521f1af8989841b9619f5314be5.ssl.cf1.rackcdn.com/products/market-img/rdn-serum-foundation-30-r-30ml.png?v=6ab9fcb8ca2abb9828afcf9dcdad9f94",
      "product_link": "https://deciem.com/product/rdn-serum-foundation-30-r-30ml",
      "website_link": "https://deciem.com/",
      "description": "Serum Foundations are lightweight medium-coverage formulations available in a comprehensive shade range across 21 shades. These foundations offer moderate coverage that looks natural with a very lightweight serum feel. They are very low in viscosity and are dispensed with the supplied pump or with the optional glass dropper available for purchase separately if preferred. ",
      "rating": null,
      "category": "liquid",
      "product_type": "foundation",
      "tag_list": [
      "water free",
      "cruelty free",
      "alcohol free",
      "oil free",
      "silicone free",
      "Vegan",
      "Gluten Free"
      ],
      "created_at": "2018-07-06T23:16:12.698Z",
      "updated_at": "2018-09-02T22:52:06.882Z",
      "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1043.json",
      "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/043/original/open-uri20180706-4-nszgw9?1530919194",
      "product_colors": [
      {
      "hex_value": "#f4e5d6",
      "colour_name": "1.0P"
      },
      {
      "hex_value": "#f3e8d1",
      "colour_name": "1.0N"
      },
      {
      "hex_value": "#f3e8d1",
      "colour_name": "1.0NS"
      },
      {
      "hex_value": "#f2d7ba",
      "colour_name": "1.1P"
      },
      {
      "hex_value": "#efdbba",
      "colour_name": "1.1N"
      },
      {
      "hex_value": "#f0d5af",
      "colour_name": "1.2N"
      },
      {
      "hex_value": "#e5c5a1",
      "colour_name": "1.2P"
      },
      {
      "hex_value": "#e6c796",
      "colour_name": "1.2Y"
      },
      {
      "hex_value": "#e6c796",
      "colour_name": "1.2YG"
      },
      {
      "hex_value": "#e3be8e",
      "colour_name": "2.0P"
      },
      {
      "hex_value": "#e5cb9f",
      "colour_name": "2.0N"
      },
      {
      "hex_value": "#dcc399",
      "colour_name": "2.0YG"
      },
      {
      "hex_value": "#ddb279",
      "colour_name": "2.1P"
      },
      {
      "hex_value": "#dcad6d",
      "colour_name": "2.1Y"
      },
      {
      "hex_value": "#d59c62",
      "colour_name": "3.0R"
      },
      {
      "hex_value": "#d19e61",
      "colour_name": "3.0Y"
      },
      {
      "hex_value": "#b3754a",
      "colour_name": "3.1R"
      },
      {
      "hex_value": "#c28651",
      "colour_name": "3.1Y"
      },
      {
      "hex_value": "#916C4F",
      "colour_name": "3.2N"
      },
      {
      "hex_value": "#8E6346",
      "colour_name": "3.2R"
      },
      {
      "hex_value": "#664A37",
      "colour_name": "3.3N"
      }
      ]
      },
      {
      "id": 1042,
      "brand": "deciem",
      "name": "Coverage Foundation",
      "price": "6.9",
      "price_sign": "$",
      "currency": "CAD",
      "image_link": "https://3bc01d2807fb1bc0d25c-a86d2521f1af8989841b9619f5314be5.ssl.cf1.rackcdn.com/products/market-img/rdn-coverage-foundation-33-n-30ml.png?v=daa322f179d80e450613c75826602292",
      "product_link": "https://deciem.com/product/rdn-coverage-foundation-33-n-30ml",
      "website_link": "https://deciem.com/",
      "description": "Coverage Foundations are full-coverage formulations available in a comprehensive shade range across 21 shades. These foundations contain higher pigment levels than our Serum Foundations but still offer a smooth finish that avoids the heavy makeup look that can make skin appear more aged. The texture is that of a lightweight, non-oily cream.",
      "rating": null,
      "category": "liquid",
      "product_type": "foundation",
      "tag_list": [
      "water free",
      "cruelty free",
      "alcohol free",
      "oil free",
      "silicone free",
      "Vegan",
      "Gluten Free"
      ],
      "created_at": "2018-07-06T22:27:54.541Z",
      "updated_at": "2018-09-02T22:52:06.865Z",
      "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1042.json",
      "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/042/original/open-uri20180706-4-1e74943?1530916234",
      "product_colors": [
      {
      "hex_value": "#f4e5d6",
      "colour_name": "1.0P"
      },
      {
      "hex_value": "#f3e8d1",
      "colour_name": "1.0N"
      },
      {
      "hex_value": "#f3e8d1",
      "colour_name": "1.0NS"
      },
      {
      "hex_value": "#f2d7ba",
      "colour_name": "1.1P"
      },
      {
      "hex_value": "#efdbba",
      "colour_name": "1.1N"
      },
      {
      "hex_value": "#f0d5af",
      "colour_name": "1.2N"
      },
      {
      "hex_value": "#e5c5a1",
      "colour_name": "1.2P"
      },
      {
      "hex_value": "#e6c796",
      "colour_name": "1.2Y"
      },
      {
      "hex_value": "#e6c796",
      "colour_name": "1.2YG"
      },
      {
      "hex_value": "#e3be8e",
      "colour_name": "2.0P"
      },
      {
      "hex_value": "#e5cb9f",
      "colour_name": "2.0N"
      },
      {
      "hex_value": "#dcc399",
      "colour_name": "2.0YG"
      },
      {
      "hex_value": "#ddb279",
      "colour_name": "2.1P"
      },
      {
      "hex_value": "#dcad6d",
      "colour_name": "2.1Y"
      },
      {
      "hex_value": "#d59c62",
      "colour_name": "3.0R"
      },
      {
      "hex_value": "#d19e61",
      "colour_name": "3.0Y"
      },
      {
      "hex_value": "#b3754a",
      "colour_name": "3.1R"
      },
      {
      "hex_value": "#c28651",
      "colour_name": "3.1Y"
      },
      {
      "hex_value": "#916C4F",
      "colour_name": "3.2N"
      },
      {
      "hex_value": "#8E6346",
      "colour_name": "3.2R"
      },
      {
      "hex_value": "#664A37",
      "colour_name": "3.3N"
      }
      ]
      },
      {
      "id": 1041,
      "brand": "zorah biocosmetiques",
      "name": "Liquid Liner",
      "price": "0.0",
      "price_sign": "$",
      "currency": "USD",
      "image_link": "https://www.purpicks.com/wp-content/uploads/2018/06/Zorah-Biocosmetiques-Liquid-Liner.png",
      "product_link": "https://www.purpicks.com/product/zorah-biocosmetiques-liquid-liner/",
      "website_link": "https://purpicks.com/",
      "description": "<strong>12 hours of long-lasting</strong> intense color, transfer-free (leaves no trace on crease above the eyelid) <strong>Pure Light Capture®</strong> <strong>minerals</strong> deliver color and radiance. Silky lines and refreshingly light, Pure Argan eyeliner leaves a weightless feel on the eyelids.<p align='LEFT'>Natural cosmetic certified by Ecocert Greenlife according to Ecocert Standard available at: http://cosmetiques.ecocert.com</p>98% of the total ingredients are from natural origin 5% of total ingredients are from organic farming",
      "rating": null,
      "category": "liquid",
      "product_type": "eyeliner",
      "tag_list": [
      "purpicks",
      "EcoCert"
      ],
      "created_at": "2018-06-30T19:19:32.312Z",
      "updated_at": "2018-09-02T22:52:06.723Z",
      "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1041.json",
      "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/041/original/open-uri20180630-4-1huiv9y?1530390387",
      "product_colors": [
      {
      "hex_value": "#000000",
      "colour_name": "Black"
      }
      ]
      },
      {
      "id": 1040,
      "brand": "zorah biocosmetiques",
      "name": "Eyeshadow",
      "price": "0.0",
      "price_sign": "$",
      "currency": "USD",
      "image_link": "https://www.purpicks.com/wp-content/uploads/2018/02/Ombre-Amazonie-CC.png",
      "product_link": "https://www.purpicks.com/product/zorah-eyeshadow/",
      "website_link": "https://purpicks.com/",
      "description": "<strong>Product Description</strong>Anti-aging formula made with organic Pure Argan oil and Pure Light Capture<sup>®</sup> pigments. 24 Hour crease-free intensity (no build-up increase of eyelid), no running. Pure Light Capture® pigments deliver color and luminosity. Silky and refreshingly light feel, Pure Argan eyeshadow is weightless on the eyelids. Pure Argan eyeshadow <strong>soothes</strong>, <strong>hides redness </strong>and <strong>slows the appearance of the signs of aging on the skin.</strong><p align='LEFT'>Natural cosmetic certified by Ecocert Greenlife according to Ecocert Standard available at: http://cosmetiques.ecocert.com</p>100% of the total ingredients are from natural origin5% of total ingredients are from organic farming",
      "rating": null,
      "category": "",
      "product_type": "eyeshadow",
      "tag_list": [
      "purpicks",
      "EcoCert"
      ],
      "created_at": "2018-06-30T19:19:32.252Z",
      "updated_at": "2018-09-02T22:52:06.714Z",
      "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1040.json",
      "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/040/original/open-uri20180630-4-1afkyee?1530390386",
      "product_colors": [
      {
      "hex_value": "#966A54",
      "colour_name": "Sahara"
      },
      {
      "hex_value": "#6B7475",
      "colour_name": "Evrest"
      },
      {
      "hex_value": "#444446",
      "colour_name": "Casablanca"
      }
      ]
      },
      {
        "id": 1044,
        "brand": "boosh",
        "name": "Lipstick",
        "price": "26.0",
        "price_sign": "$",
        "currency": "CAD",
        "image_link": "https://cdn.shopify.com/s/files/1/1016/3243/products/LIPBALM_LID_grande.jpg?v=1496848378",
        "product_link": "https://www.boosh.ca/collections/all",
        "website_link": "https://www.boosh.ca/",
        "description": "All of our products are free from lead and heavy metals, parabens, phthalates, artificial colourants, and synthetic fragrances.  Boosh lipstick glides on smoothly for clean & protective SPF coverage. They are filled with hydrating oils and butters to preserve and enhance your lips natural surface. Organic sweet orange oil gives a light and cheerful scent.",
        "rating": null,
        "category": "lipstick",
        "product_type": "lipstick",
        "tag_list": [
        "Chemical Free",
        "Organic"
        ],
        "created_at": "2018-07-08T17:32:28.088Z",
        "updated_at": "2018-09-02T22:52:06.669Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1044.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/044/original/data?1531071233",
        "product_colors": [
        {
        "hex_value": "#CB4975",
        "colour_name": "Babs"
        },
        {
        "hex_value": "#B6636F",
        "colour_name": "Bobbie"
        },
        {
        "hex_value": "#B37072",
        "colour_name": "Rosie"
        },
        {
        "hex_value": "#C6727C",
        "colour_name": "Ellie"
        },
        {
        "hex_value": "#AF2257",
        "colour_name": "Dahlia"
        },
        {
        "hex_value": "#573F53",
        "colour_name": "Kat"
        },
        {
        "hex_value": "#875672",
        "colour_name": "Brie"
        },
        {
        "hex_value": "#BC88A5",
        "colour_name": "Emmy"
        },
        {
        "hex_value": "#BB8A88",
        "colour_name": "Dusty rose"
        },
        {
        "hex_value": "#8D5C58",
        "colour_name": "Kylie"
        },
        {
        "hex_value": "#C86775",
        "colour_name": "Leah"
        },
        {
        "hex_value": "#F8D7D6",
        "colour_name": "Lip Plumping Balm"
        },
        {
        "hex_value": "#8F6065",
        "colour_name": "Luna"
        },
        {
        "hex_value": "#C79289",
        "colour_name": "Nova"
        },
        {
        "hex_value": "#9D3F47",
        "colour_name": "Ruby"
        }
        ]
        },
        {
        "id": 1043,
        "brand": "deciem",
        "name": "Serum Foundation",
        "price": "6.7",
        "price_sign": "$",
        "currency": "CAD",
        "image_link": "https://3bc01d2807fb1bc0d25c-a86d2521f1af8989841b9619f5314be5.ssl.cf1.rackcdn.com/products/market-img/rdn-serum-foundation-30-r-30ml.png?v=6ab9fcb8ca2abb9828afcf9dcdad9f94",
        "product_link": "https://deciem.com/product/rdn-serum-foundation-30-r-30ml",
        "website_link": "https://deciem.com/",
        "description": "Serum Foundations are lightweight medium-coverage formulations available in a comprehensive shade range across 21 shades. These foundations offer moderate coverage that looks natural with a very lightweight serum feel. They are very low in viscosity and are dispensed with the supplied pump or with the optional glass dropper available for purchase separately if preferred. ",
        "rating": null,
        "category": "liquid",
        "product_type": "foundation",
        "tag_list": [
        "water free",
        "cruelty free",
        "alcohol free",
        "oil free",
        "silicone free",
        "Vegan",
        "Gluten Free"
        ],
        "created_at": "2018-07-06T23:16:12.698Z",
        "updated_at": "2018-09-02T22:52:06.882Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1043.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/043/original/open-uri20180706-4-nszgw9?1530919194",
        "product_colors": [
        {
        "hex_value": "#f4e5d6",
        "colour_name": "1.0P"
        },
        {
        "hex_value": "#f3e8d1",
        "colour_name": "1.0N"
        },
        {
        "hex_value": "#f3e8d1",
        "colour_name": "1.0NS"
        },
        {
        "hex_value": "#f2d7ba",
        "colour_name": "1.1P"
        },
        {
        "hex_value": "#efdbba",
        "colour_name": "1.1N"
        },
        {
        "hex_value": "#f0d5af",
        "colour_name": "1.2N"
        },
        {
        "hex_value": "#e5c5a1",
        "colour_name": "1.2P"
        },
        {
        "hex_value": "#e6c796",
        "colour_name": "1.2Y"
        },
        {
        "hex_value": "#e6c796",
        "colour_name": "1.2YG"
        },
        {
        "hex_value": "#e3be8e",
        "colour_name": "2.0P"
        },
        {
        "hex_value": "#e5cb9f",
        "colour_name": "2.0N"
        },
        {
        "hex_value": "#dcc399",
        "colour_name": "2.0YG"
        },
        {
        "hex_value": "#ddb279",
        "colour_name": "2.1P"
        },
        {
        "hex_value": "#dcad6d",
        "colour_name": "2.1Y"
        },
        {
        "hex_value": "#d59c62",
        "colour_name": "3.0R"
        },
        {
        "hex_value": "#d19e61",
        "colour_name": "3.0Y"
        },
        {
        "hex_value": "#b3754a",
        "colour_name": "3.1R"
        },
        {
        "hex_value": "#c28651",
        "colour_name": "3.1Y"
        },
        {
        "hex_value": "#916C4F",
        "colour_name": "3.2N"
        },
        {
        "hex_value": "#8E6346",
        "colour_name": "3.2R"
        },
        {
        "hex_value": "#664A37",
        "colour_name": "3.3N"
        }
        ]
        },
        {
        "id": 1042,
        "brand": "deciem",
        "name": "Coverage Foundation",
        "price": "6.9",
        "price_sign": "$",
        "currency": "CAD",
        "image_link": "https://3bc01d2807fb1bc0d25c-a86d2521f1af8989841b9619f5314be5.ssl.cf1.rackcdn.com/products/market-img/rdn-coverage-foundation-33-n-30ml.png?v=daa322f179d80e450613c75826602292",
        "product_link": "https://deciem.com/product/rdn-coverage-foundation-33-n-30ml",
        "website_link": "https://deciem.com/",
        "description": "Coverage Foundations are full-coverage formulations available in a comprehensive shade range across 21 shades. These foundations contain higher pigment levels than our Serum Foundations but still offer a smooth finish that avoids the heavy makeup look that can make skin appear more aged. The texture is that of a lightweight, non-oily cream.",
        "rating": null,
        "category": "liquid",
        "product_type": "foundation",
        "tag_list": [
        "water free",
        "cruelty free",
        "alcohol free",
        "oil free",
        "silicone free",
        "Vegan",
        "Gluten Free"
        ],
        "created_at": "2018-07-06T22:27:54.541Z",
        "updated_at": "2018-09-02T22:52:06.865Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1042.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/042/original/open-uri20180706-4-1e74943?1530916234",
        "product_colors": [
        {
        "hex_value": "#f4e5d6",
        "colour_name": "1.0P"
        },
        {
        "hex_value": "#f3e8d1",
        "colour_name": "1.0N"
        },
        {
        "hex_value": "#f3e8d1",
        "colour_name": "1.0NS"
        },
        {
        "hex_value": "#f2d7ba",
        "colour_name": "1.1P"
        },
        {
        "hex_value": "#efdbba",
        "colour_name": "1.1N"
        },
        {
        "hex_value": "#f0d5af",
        "colour_name": "1.2N"
        },
        {
        "hex_value": "#e5c5a1",
        "colour_name": "1.2P"
        },
        {
        "hex_value": "#e6c796",
        "colour_name": "1.2Y"
        },
        {
        "hex_value": "#e6c796",
        "colour_name": "1.2YG"
        },
        {
        "hex_value": "#e3be8e",
        "colour_name": "2.0P"
        },
        {
        "hex_value": "#e5cb9f",
        "colour_name": "2.0N"
        },
        {
        "hex_value": "#dcc399",
        "colour_name": "2.0YG"
        },
        {
        "hex_value": "#ddb279",
        "colour_name": "2.1P"
        },
        {
        "hex_value": "#dcad6d",
        "colour_name": "2.1Y"
        },
        {
        "hex_value": "#d59c62",
        "colour_name": "3.0R"
        },
        {
        "hex_value": "#d19e61",
        "colour_name": "3.0Y"
        },
        {
        "hex_value": "#b3754a",
        "colour_name": "3.1R"
        },
        {
        "hex_value": "#c28651",
        "colour_name": "3.1Y"
        },
        {
        "hex_value": "#916C4F",
        "colour_name": "3.2N"
        },
        {
        "hex_value": "#8E6346",
        "colour_name": "3.2R"
        },
        {
        "hex_value": "#664A37",
        "colour_name": "3.3N"
        }
        ]
        },
        {
        "id": 1041,
        "brand": "zorah biocosmetiques",
        "name": "Liquid Liner",
        "price": "0.0",
        "price_sign": "$",
        "currency": "USD",
        "image_link": "https://www.purpicks.com/wp-content/uploads/2018/06/Zorah-Biocosmetiques-Liquid-Liner.png",
        "product_link": "https://www.purpicks.com/product/zorah-biocosmetiques-liquid-liner/",
        "website_link": "https://purpicks.com/",
        "description": "<strong>12 hours of long-lasting</strong> intense color, transfer-free (leaves no trace on crease above the eyelid) <strong>Pure Light Capture®</strong> <strong>minerals</strong> deliver color and radiance. Silky lines and refreshingly light, Pure Argan eyeliner leaves a weightless feel on the eyelids.<p align='LEFT'>Natural cosmetic certified by Ecocert Greenlife according to Ecocert Standard available at: http://cosmetiques.ecocert.com</p>98% of the total ingredients are from natural origin 5% of total ingredients are from organic farming",
        "rating": null,
        "category": "liquid",
        "product_type": "eyeliner",
        "tag_list": [
        "purpicks",
        "EcoCert"
        ],
        "created_at": "2018-06-30T19:19:32.312Z",
        "updated_at": "2018-09-02T22:52:06.723Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1041.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/041/original/open-uri20180630-4-1huiv9y?1530390387",
        "product_colors": [
        {
        "hex_value": "#000000",
        "colour_name": "Black"
        }
        ]
        },
        {
        "id": 1040,
        "brand": "zorah biocosmetiques",
        "name": "Eyeshadow",
        "price": "0.0",
        "price_sign": "$",
        "currency": "USD",
        "image_link": "https://www.purpicks.com/wp-content/uploads/2018/02/Ombre-Amazonie-CC.png",
        "product_link": "https://www.purpicks.com/product/zorah-eyeshadow/",
        "website_link": "https://purpicks.com/",
        "description": "<strong>Product Description</strong>Anti-aging formula made with organic Pure Argan oil and Pure Light Capture<sup>®</sup> pigments. 24 Hour crease-free intensity (no build-up increase of eyelid), no running. Pure Light Capture® pigments deliver color and luminosity. Silky and refreshingly light feel, Pure Argan eyeshadow is weightless on the eyelids. Pure Argan eyeshadow <strong>soothes</strong>, <strong>hides redness </strong>and <strong>slows the appearance of the signs of aging on the skin.</strong><p align='LEFT'>Natural cosmetic certified by Ecocert Greenlife according to Ecocert Standard available at: http://cosmetiques.ecocert.com</p>100% of the total ingredients are from natural origin5% of total ingredients are from organic farming",
        "rating": null,
        "category": "",
        "product_type": "eyeshadow",
        "tag_list": [
        "purpicks",
        "EcoCert"
        ],
        "created_at": "2018-06-30T19:19:32.252Z",
        "updated_at": "2018-09-02T22:52:06.714Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1040.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/040/original/open-uri20180630-4-1afkyee?1530390386",
        "product_colors": [
        {
        "hex_value": "#966A54",
        "colour_name": "Sahara"
        },
        {
        "hex_value": "#6B7475",
        "colour_name": "Evrest"
        },
        {
        "hex_value": "#444446",
        "colour_name": "Casablanca"
        }
        ]
        },])
        const [cartTotal, setCartTotal] = useState(0)
        function toggleTotal(){
          let sum = 0
          cartData.forEach((e)=>{
               sum += (+e.price)
          })
          console.log(sum)
          setCartTotal(sum)
        }
        useEffect(()=>{
            toggleTotal()
        },[])
  return (
    <Popover trigger='hover'>
  <PopoverTrigger>
    <Flex  alignItems='center' >
        <Box display="flex" alignItems="center" h="30px">
        <BsMinecartLoaded size="20px"/> 
        <Box h="100%">
        <Text top="0px" right="0px" px="3.5px" h="13px" color="white" fontSize="8px" bg="black" borderRadius="50%">{cartData.length}</Text>
        </Box>
        </Box>
        <Text display={{lg:"initial",md:"none",sm:"none",base:'none'}}>
        Cart
        </Text>
        </Flex>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader >
      {cartData.length!==0?<Flex my="17px" justifyContent='space-between'>
        <Text>{`${cartData.length} ${(cartData.length>1)?"items":"item"} in cart`}</Text>
        <Text fontWeight='bold'>${cartTotal}</Text>
      </Flex>:""}
    <Button colorScheme='teal' variant='outline'>View Cart</Button>
    </PopoverHeader>
    <PopoverBody>
      <Box maxH='75vh' overflowX='hidden' overflowY='scroll'>

     {cartData.length===0? "there is no items in cart":
     cartData.map((e)=>{
      return(<Box gap="10px" display='flex' p={6}>
      <Flex justifyContent='center' h="80px" w="80px" alignItems='center'>
      <Image h="100%" alt={e.image_link} src={e.api_featured_image}/>
      </Flex>
      <Box>
        <Text>{e["name"]}</Text>
        <Text fontWeight="bold">{`${e["price_sign"]}${e["price"]}`}</Text>
        <Text>Quantity: {e["quantity"]?e["quantity"]:1}</Text>
      </Box>
     </Box>)})
     }
     </Box>
    </PopoverBody>
  </PopoverContent>
</Popover>
  )
}

export default Cart