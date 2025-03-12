import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Elegant Striped Flutter Sleeve Blouse",
    category: "women",
    image: p1_img,
    new_price: 45.0,
    old_price: 70.0,
  },
  {
    id: 2,
    name: "Casual Overlap Collar Peplum Top",
    category: "women",
    image: p2_img,
    new_price: 60.0,
    old_price: 95.0,
  },
  {
    id: 3,
    name: "Floral V-Neck Ruffle Sleeve Blouse",
    category: "women",
    image: p3_img,
    new_price: 55.0,
    old_price: 85.0,
  },
  {
    id: 4,
    name: "Bohemian Print Summer Peplum Shirt",
    category: "women",
    image: p4_img,
    new_price: 72.0,
    old_price: 110.0,
  },
  {
    id: 5,
    name: "Lace Detail Long Sleeve Chiffon Top",
    category: "women",
    image: p5_img,
    new_price: 49.0,
    old_price: 79.0,
  },
  {
    id: 6,
    name: "Casual Solid Color Button-Down Blouse",
    category: "women",
    image: p6_img,
    new_price: 50.0,
    old_price: 80.0,
  },
  {
    id: 7,
    name: "Modern Puff Sleeve Peplum Shirt",
    category: "women",
    image: p7_img,
    new_price: 58.0,
    old_price: 90.0,
  },
  {
    id: 8,
    name: "Chic Wrap-Style V-Neck Blouse",
    category: "women",
    image: p8_img,
    new_price: 65.0,
    old_price: 100.0,
  },
  {
    id: 9,
    name: "Sleeveless Summer Ruffle Blouse",
    category: "women",
    image: p9_img,
    new_price: 40.0,
    old_price: 75.0,
  },
  {
    id: 10,
    name: "Elegant Satin Drape Blouse",
    category: "women",
    image: p10_img,
    new_price: 68.0,
    old_price: 105.0,
  },
  {
    id: 11,
    name: "Trendy High Neck Long Sleeve Blouse",
    category: "women",
    image: p11_img,
    new_price: 55.0,
    old_price: 85.0,
  },
  {
    id: 12,
    name: "Printed Smocked Waist Blouse",
    category: "women",
    image: p12_img,
    new_price: 62.0,
    old_price: 95.0,
  },

  {
    id: 13,
    name: "Men’s Classic Bomber Jacket",
    category: "men",
    image: p13_img,
    new_price: 90.0,
    old_price: 130.0,
  },
  {
    id: 14,
    name: "Stylish Slim-Fit Leather Jacket",
    category: "men",
    image: p14_img,
    new_price: 120.0,
    old_price: 180.0,
  },
  {
    id: 15,
    name: "Winter Fleece Zipper Jacket",
    category: "men",
    image: p15_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 16,
    name: "Men’s Casual Hooded Sweatshirt",
    category: "men",
    image: p16_img,
    new_price: 65.0,
    old_price: 90.0,
  },
  {
    id: 17,
    name: "Denim Trucker Jacket",
    category: "men",
    image: p17_img,
    new_price: 110.0,
    old_price: 160.0,
  },
  {
    id: 18,
    name: "Sporty Windbreaker Zip-Up",
    category: "men",
    image: p18_img,
    new_price: 75.0,
    old_price: 120.0,
  },
  {
    id: 19,
    name: "Corduroy Button-Up Jacket",
    category: "men",
    image: p19_img,
    new_price: 95.0,
    old_price: 140.0,
  },
  {
    id: 20,
    name: "Men's Lightweight Cotton Jacket",
    category: "men",
    image: p20_img,
    new_price: 80.0,
    old_price: 125.0,
  },
  {
    id: 21,
    name: "Plaid Flannel Jacket for Men",
    category: "men",
    image: p21_img,
    new_price: 85.0,
    old_price: 130.0,
  },
  {
    id: 22,
    name: "Classic Trench Coat",
    category: "men",
    image: p22_img,
    new_price: 130.0,
    old_price: 190.0,
  },
  {
    id: 23,
    name: "Rugged Cargo Jacket",
    category: "men",
    image: p23_img,
    new_price: 95.0,
    old_price: 145.0,
  },
  {
    id: 24,
    name: "Men's Sherpa Lined Denim Jacket",
    category: "men",
    image: p24_img,
    new_price: 110.0,
    old_price: 155.0,
  },

  {
    id: 25,
    name: "Boys' Hooded Cotton Sweatshirt",
    category: "kid",
    image: p25_img,
    new_price: 30.0,
    old_price: 50.0,
  },
  {
    id: 26,
    name: "Colorblocked Fleece Pullover",
    category: "kid",
    image: p26_img,
    new_price: 40.0,
    old_price: 60.0,
  },
  {
    id: 27,
    name: "Graphic Print Hoodie for Kids",
    category: "kid",
    image: p27_img,
    new_price: 35.0,
    old_price: 55.0,
  },
  {
    id: 28,
    name: "Boys’ Lightweight Zip-Up Jacket",
    category: "kid",
    image: p28_img,
    new_price: 50.0,
    old_price: 75.0,
  },
  {
    id: 29,
    name: "Winter Warm Hoodie for Kids",
    category: "kid",
    image: p29_img,
    new_price: 45.0,
    old_price: 65.0,
  },
  {
    id: 30,
    name: "Toddler Cotton Pullover",
    category: "kid",
    image: p30_img,
    new_price: 25.0,
    old_price: 40.0,
  },
  {
    id: 31,
    name: "Cozy Hooded Sherpa Jacket",
    category: "kid",
    image: p31_img,
    new_price: 55.0,
    old_price: 80.0,
  },
  {
    id: 32,
    name: "Kids’ Dinosaur Print Hoodie",
    category: "kid",
    image: p32_img,
    new_price: 38.0,
    old_price: 60.0,
  },
  {
    id: 33,
    name: "Boys' Camouflage Print Hoodie",
    category: "kid",
    image: p33_img,
    new_price: 42.0,
    old_price: 68.0,
  },
  {
    id: 34,
    name: "Soft Fleece Zip-Up Jacket",
    category: "kid",
    image: p34_img,
    new_price: 48.0,
    old_price: 70.0,
  },
  {
    id: 35,
    name: "Boys' Active Sports Hoodie",
    category: "kid",
    image: p35_img,
    new_price: 32.0,
    old_price: 55.0,
  },
  {
    id: 36,
    name: "Kids' Cartoon Character Sweatshirt",
    category: "kid",
    image: p36_img,
    new_price: 29.0,
    old_price: 45.0,
  },
];

export default all_product;
