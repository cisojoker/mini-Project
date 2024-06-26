import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Description = () => {
  const [ref1, inView1] = useInView({
    threshold: 0.5, // trigger animation when the element is 50% in view
    triggerOnce: true, // only trigger once
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5, // trigger animation when the element is 50% in view
    triggerOnce: true, // only trigger once
  });
  const [ref3, inView3] = useInView({
    threshold: 0.5, // trigger animation when the element is 50% in view
    triggerOnce: true, // only trigger once
  });

  const listVariants1 = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
      },
    },
  };

  const listVariants2 = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
      },
    },
  };

  return (
    <>
      <div id="description" className="container py-12 lg:pt-24 px-7 lg:pl-48 ">
        <div className="features flex items-center justify-cente">
          <h1 className="text-7xl  lg:text-8xl text-center lg:text-left  font-jost font-bold text-white">
            Features
          </h1>
          <span className="h-[0.1rem] ml-4 w-full lg:w-[60%] mt-3 bg-white block"></span>
        </div>
        <div className="description flex flex-col space-y-10">
          <div className="list1 overflow-hidden w-full flex flex-col lg:flex-row items-center">
            <motion.div
              ref={ref1}
              variants={listVariants1}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              className="text order-2 lg:order-1 text-center lg:text-left font-jost text-white space-y-8 mt-12 lg:w-1/2"
            >
              <p className="relative text-5xl lg:text-7xl">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#E74A9F] relative inline-block">
                  <span className="relative text-white">Stress detection</span>
                </span>
                <span className="relative"> based on levels</span>
              </p>
              <p className=" text-3xl lg:text-4xl ">
                Our model detects stress on the basis of levels(0 to 4).
              </p>
            </motion.div>
            <motion.div
              ref={ref1}
              variants={listVariants2}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              className="img mt-10 lg:mt-0 order-1 lg:order-2 relative"
            >
              <Image
                className="relative animate-up-down"
                src="/assets/easySearch.png"
                width={500}
                height={500}
                alt="searchEasy"
              />
              {/* <Image className='absolute top-20 -z-10' src='/assets/blob.svg' width={500} height={500} alt='searchEasy' /> */}
            </motion.div>
          </div>
          <div className="list2 overflow-hidden w-full flex flex-col lg:flex-row items-center">
            <motion.div
              ref={ref2}
              variants={listVariants2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              className="text order-2 text-center lg:text-left lg:ml-14 font-jost text-white space-y-8 mt-12 lg:w-1/2"
            >
              <p className="relative text-5xl lg:text-7xl">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#E74A9F] relative inline-block">
                  <span className="relative text-white">User-friendly</span>
                </span>
                <span className="relative"> interface</span>
              </p>
              <p className=" text-3xl lg:text-4xl ">
                Easy-to-use interface allows you to quickly enter the details &
                get the results.
              </p>
            </motion.div>
            <motion.div
              ref={ref2}
              variants={listVariants1}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              className="img order-1 relative"
            >
              {/* <Image className='relative animate-up-down' src='/assets/userFriendly.png' width={500} height={500} alt='searchEasy' /> */}
              <Image
                className="relative animate-up-down lg:mr-10"
                src="/assets/UserFriendly.png"
                width={500}
                height={500}
                alt="searchEasy"
              />
            </motion.div>
          </div>
          <div className="list3 overflow-hidden w-full flex flex-col lg:flex-row items-center">
            <motion.div
              ref={ref3}
              variants={listVariants1}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              className="text order-2 lg:order-1 text-center lg:text-left font-jost text-white space-y-8 mt-12 lg:w-1/2"
            >
              <p className="relative text-5xl lg:text-7xl">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#E74A9F] relative inline-block">
                  <span className="relative text-white">Advanced</span>
                </span>
                <span className="relative"> recipe suggestion</span>
              </p>
              <p className=" text-3xl lg:text-4xl ">
                Recipe suggestion is in order to decrease the stress level
                effectively.
              </p>
            </motion.div>
            <motion.div
              ref={ref3}
              variants={listVariants2}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              className="img order-1 lg:order-2 relative"
            >
              <Image
                className="relative animate-up-down"
                src="/assets/advancedSearch.png"
                width={500}
                height={500}
                alt="searchEasy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
