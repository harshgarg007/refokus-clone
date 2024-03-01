import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import goku from "../images/goku.png";
import valley from "../images/Valley.jpg";
import car from "../images/car.webp";
import hunter from '../images/hunter.jpg'


const Products = () => {
  var products = [
    {
      title: "Arqtile",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem lorem ipsum dolor lorem ipsum dolor loremlo",
      live: "true",
      case: false,
    },
    {
      title: "Ttr",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem lorem ipsum dolor lorem ipsum dolor loremlo",
      live: "true",
      case: false,
    },
    {
      title: "Year 22",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem lorem ipsum dolor lorem ipsum dolor loremlo",
      live: "true",
      case: true,
    },
    {
      title: "Yahoo!!",
      description:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem lorem ipsum dolor lorem ipsum dolor loremlo",
      live: "true",
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className=" mt-32 relative">
      {products.map((val, index) => (
        <Product val={val} key={index} mover={mover} count={index} />
      ))}
      <div className="w-full h-full  absolute top-0 pointer-events-none ">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 0.4 }}
          className="window absolute w-[32rem]  h-[23rem] mt-10  left-[23rem] bg-white overflow-hidden  "
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 0.4 }}
            className="window w-full  h-full  bg-violet-400 "
          >
           <img src={car} alt="" className="h-[23rem]" />
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 0.4 }}
            className="window w-full  h-full "
          >
          <img src={valley} alt="" className="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 0.4 }}
            className="window w-full  h-full bg-sky-400 "
          >
            <img src={goku} alt="" className="h-[23rem]" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 0.4 }}
            className="window w-full  h-full bg-violet-600 "
          >
            <img src={hunter} alt="" className="h-[23rem] " />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
