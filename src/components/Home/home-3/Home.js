import React, { useState } from "react";
import "./styles.scss";
import Product from "./../../../asset/product/13-405x516.png";

// import { Link } from "react-router-dom";

// import { AnimateSharedLayout } from "framer-motion";
// import { motion, AnimatePresence } from "framer-motion";
// var items=[{
//   id:'1',
//   subtitle:"1",
//   title:"1"
// }]
function Home() {
  // const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <div id="container-3" className="container-body-there">
        <div className="container">
          <p className="container-body-there-title">Let's talk about us</p>
          <div className="container-body-there-product-person">
            <div className="container-body-there-product-column">
              <div className="container-body-there-product-row-top">
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="container-body-img-product-user"
                >
                  <img
                    alt="###"
                    src={Product}
                  />
                </div>
              </div>
              <div className="container-body-there-product-row-top-bottom">
                <h3>Henry Ford</h3>
                <p>PRODUCT MANAGER</p>
              </div>
              <div className="container-body-there-product-row-body">
                {/* <AnimateSharedLayout type="crossfade">
                  {items.map((item,key) => (
                    <motion.div key={key}
                      layoutId={item.id}
                      onClick={() => setSelectedId(item.id)}
                    >
                      <motion.h5>{item.subtitle}</motion.h5>
                      <motion.h2>{item.title}</motion.h2>
                    </motion.div>
                  ))}

                  <AnimatePresence>
                    {selectedId && (
                      <motion.div layoutId={selectedId}>
                        <motion.h5>aaaa</motion.h5>
                        <motion.h2>aaaa</motion.h2>
                        <motion.button onClick={() => setSelectedId(null)} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </AnimateSharedLayout> */}
                <p>
                  Teamwork is so important that it is virtually impossible for
                  you to reach the heights of your capabilities or make the
                  money that you want without becoming very good at it.
                </p>
              </div>
              <div className="container-body-there-product-row-option">
                <div className="container-option-icon">
                  <i className="fa fa-twitter" />
                  <i className="fa fa-empire" />
                  <i className="fa fa-linkedin" />
                </div>
              </div>
            </div>
            <div className="container-body-there-product-column">
              <div className="container-body-there-product-row-top">
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="container-body-img-product-user"
                >
                  <img
                    alt="###"
                    src={Product}
                  />
                </div>
              </div>
              <div className="container-body-there-product-row-top-bottom">
                <h3>Henry Ford</h3>
                <p>PRODUCT MANAGER</p>
              </div>
              <div className="container-body-there-product-row-body">
                <p>
                  Teamwork is so important that it is virtually impossible for
                  you to reach the heights of your capabilities or make the
                  money that you want without becoming very good at it.
                </p>
              </div>
              <div className="container-body-there-product-row-option">
                <div className="container-option-icon">
                  <i className="fa fa-twitter" />
                  <i className="fa fa-empire" />
                  <i className="fa fa-linkedin" />
                </div>
              </div>
            </div>
            <div className="container-body-there-product-column">
              <div className="container-body-there-product-row-top">
                <div
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="container-body-img-product-user"
                >
                  <img
                    alt="###"
                    src={Product}
                  />
                </div>
              </div>
              <div className="container-body-there-product-row-top-bottom">
                <h3>Henry Ford</h3>
                <p>PRODUCT MANAGER</p>
              </div>
              <div className="container-body-there-product-row-body">
                <p>
                  Hello world! A group becomes a team when each member is sure
                  enough of himself and his contribution to praise the skill of
                  the others. No one can whistle a symphony. It takes an
                  orchestra to play it. Hello world! Hello world! A group
                  becomes a team when each member is sure enough of himself and
                  his contribution to praise the skill of the others. No one can
                  whistle a symphony. It takes an orchestra to play it. Hello
                  world! Hello world! A group becomes a team when each member is
                  sure enough of himself and his contribution to praise the
                  skill of the others. No one can whistle a symphony. It takes
                  an orchestra to play it. Hello world! Teamwork is so important
                  that it is virtually impossible for you to reach the heights
                  of your capabilities or make the money that you want without
                  becoming very good at it .
                </p>
              </div>
              <div className="container-body-there-product-row-option">
                <div className="container-option-icon">
                  <i className="fa fa-twitter" />
                  <i className="fa fa-empire" />
                  <i className="fa fa-linkedin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
