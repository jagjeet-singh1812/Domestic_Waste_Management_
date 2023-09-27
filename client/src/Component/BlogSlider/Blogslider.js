import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./Blogslider.css";
import {motion} from "framer-motion"
const BlogSlider = () => {
  useEffect(() => {
    // Check if the Swiper library is loaded
    if (typeof Swiper !== "undefined") {
      const swiper = new Swiper(".blog-slider", {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        mousewheel: {
          invert: false,
        },
        pagination: {
          el: ".blog-slider__pagination",
          clickable: true,
        },
      });
    } else {
      console.error("Swiper library is not loaded.");
    }
  }, []);

  return (
    <>
      <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        exit={{opacity:0, transition:{duration:0,delay:0}}}
        transition={{delay:0.5,duration:2}}
        >

      <div className="blog-container">
        <div className="blog-slider">
          <div className="blog-slider__wrp swiper-wrapper">
            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img src="./drywaste.jpg" alt="" />
              </div>
              <div className="blog-slider__content">
                {/* <span className="blog-slider__code">26 September 2023</span> */}
                <div className="blog-slider__title">Dry Waste Management</div>
                <div className="blog-slider__text">
                  Dry waste management is an essential part of maintaining a
                  clean and sustainable environment. It involves the collection,
                  segregation, and proper disposal of dry waste materials such
                  as paper, cardboard, plastic, and glass. Effective dry waste
                  management practices help reduce the burden on landfills and
                  promote recycling and upcycling efforts.
                </div>
                <a href="#" className="blog-slider__button">
                  READ MORE
                </a>
              </div>
            </div>
            {/* Add more slider items here */}
          </div>
          <div className="blog-slider__pagination"></div>
        </div>

        <div className="blog-slider">
          <div className="blog-slider__wrp swiper-wrapper">
            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img src="./wetwaste.jpg" alt="" />
              </div>
              <div className="blog-slider__content">
                <div className="blog-slider__title">Wet Waste Management</div>
                <div className="blog-slider__text">
                  Wet waste management is crucial for maintaining hygiene and
                  preventing environmental pollution. It primarily consists of
                  organic materials like food scraps, kitchen waste, and garden
                  debris. Proper handling of wet waste includes composting,
                  which turns organic waste into nutrient-rich compost for soil
                  enrichment.
                </div>
                <a href="#" className="blog-slider__button">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
          <div className="blog-slider__pagination"></div>
        </div>
      </div>
      </motion.div>
    </>
  );
};

export default BlogSlider;
