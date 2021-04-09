import React from "react";
import "./styles.scss";
import Grid from "@material-ui/core/Grid";
var data = [{ id: "1" }, { id: "2" }, { id: "3" }];
function Home() {
  return (
    <>
      <div id="container-3" className="container-body-there">
        <div className="container">
          <p className="container-body-there-title">House designer for the store</p>
          <div className="container-body-there-product-person">
            <Grid item className="root-3">
              <Grid container justify="center" spacing={6}>
                {showData(data)}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
const showData = (data) => {
  return data.map((value, key) => {
    return (
      <Grid className="container-body-there-product-column" item key={key}>
        <div >
          <div className="container-body-there-product-row-top">
            <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="container-body-img-product-user"
            >
              <img alt="###" src={"https://s3.amazonaws.com/creativetim_bucket/photos/125268/thumb.jpeg?1497799215"} />
            </div>
          </div>
          <div className="container-body-there-product-row-top-bottom">
            <h3>Henry Ford</h3>
            <p>PRODUCT MANAGER</p>
          </div>
          <div className="container-body-there-product-row-body">
            <p>
              Hello world! A group becomes a team when each member is sure
              enough of himself and his contribution to praise the skill of the
              others. No one can whistle a symphony. It takes an orchestra to
              play it. Hello world! Hello world! A group becomes a team when
              each member is sure enough of himself and his contribution to
              praise the skill of the others. No one can whistle a symphony. It
              takes an orchestra to play it. Hello world! Hello world! A group
              becomes a team when each member is sure enough of himself and his
              contribution to praise the skill of the others. No one can whistle
              a symphony. It takes an orchestra to play it. Hello world!
              Teamwork is so important that it is virtually impossible for you
              to reach the heights of your capabilities or make the money that
              you want without becoming very good at it .
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
      </Grid>
    );
  });
};
export default Home;
