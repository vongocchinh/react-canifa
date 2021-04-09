/* eslint-disable react/jsx-no-duplicate-props */
import React,{} from "react";
import StarRatings from "react-star-ratings";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ReviewForm from './ReviewForm';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Reviews(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Cảm ơn khách hàng đã đánh giá sản phẩm.</DialogTitle>
        <ReviewForm handleClose={handleClose}/>
      </Dialog>
      <div className="main-section">
        <div className="add-view-review">
          <a href="###" onClick={handleClickOpen}> ADD NEW REVIEWS</a>
        </div>
        <div className="container-review-quantity">
          <div className="average-rating">
            <h2>2.5</h2>
            <StarRatings
              rating={2.5}
              starRatedColor="blue"
              numberOfStars={5}
              name="rating"
              starSpacing="0.5px"
              starWidthAndHeight="14px"
              className="StarRatings"
              starDimension="26px"
              starRatedColor="#E9E92B"
            />
            <p>Average Rating</p>
          </div>
          <div className="loader-ratting">
            <div className="progress" />
            <div className="progress-2" />
            <div className="progress-3" />
            <div className="progress-4" />
            <div className="progress-5" />
          </div>
          <div className="start-part">
            <StarRatings
              rating={1}
              starRatedColor="blue"
              numberOfStars={5}
              name="rating"
              starSpacing="0.5px"
              starWidthAndHeight="14px"
              className="StarRatings"
              starDimension="17px"
              starRatedColor="#E9E92B"
            />
            <br />
            <StarRatings
              rating={2}
              starRatedColor="blue"
              numberOfStars={5}
              name="rating"
              starSpacing="0.5px"
              starWidthAndHeight="14px"
              className="StarRatings"
              starDimension="17px"
              starRatedColor="#E9E92B"
            />
            <br />
            <StarRatings
              rating={3}
              starRatedColor="blue"
              numberOfStars={5}
              name="rating"
              starSpacing="0.5px"
              starWidthAndHeight="14px"
              className="StarRatings"
              starDimension="17px"
              starRatedColor="#E9E92B"
            />
            <br />
            <StarRatings
              rating={4}
              starRatedColor="blue"
              numberOfStars={5}
              name="rating"
              starSpacing="0.5px"
              starWidthAndHeight="14px"
              className="StarRatings"
              starDimension="17px"
              starRatedColor="#E9E92B"
            />
            <br />
            <StarRatings
              rating={5}
              starRatedColor="blue"
              numberOfStars={5}
              name="rating"
              starSpacing="0.5px"
              starWidthAndHeight="14px"
              className="StarRatings"
              starDimension="17px"
              starRatedColor="#E9E92B"
            />
          </div>
        </div>
        <div className="rating-part">
          <div className="comment-part">
            <div className="user-img-part">
              <div className="user-img">
                <img
                  alt="###"
                  src="https://i.pinimg.com/736x/6e/8c/93/6e8c93dd4308d633b6cab3e477471457.jpg"
                />
              </div>
              <div className="user-text">
                <p>vo ngoc chinh</p>
              </div>
            </div>
            <div className="comment">
              <StarRatings
                rating={5}
                starRatedColor="blue"
                numberOfStars={5}
                name="rating"
                starSpacing="0.5px"
                starWidthAndHeight="14px"
                className="StarRatings"
                starDimension="16px"
                starRatedColor="#E9E92B"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        </div>
        <div className="rating-part">
          <div className="comment-part">
            <div className="user-img-part">
              <div className="user-img">
                <img
                  alt="###"
                  src="https://i.pinimg.com/736x/6e/8c/93/6e8c93dd4308d633b6cab3e477471457.jpg"
                />
              </div>
              <div className="user-text">
                <p>vo ngoc chinh</p>
              </div>
            </div>
            <div className="comment">
              <StarRatings
                rating={5}
                starRatedColor="blue"
                numberOfStars={5}
                name="rating"
                starSpacing="0.5px"
                starWidthAndHeight="14px"
                className="StarRatings"
                starDimension="16px"
                starRatedColor="#E9E92B"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        </div>
        <div className="rating-part">
          <div className="comment-part">
            <div className="user-img-part">
              <div className="user-img">
                <img
                  alt="###"
                  src="https://i.pinimg.com/736x/6e/8c/93/6e8c93dd4308d633b6cab3e477471457.jpg"
                />
              </div>
              <div className="user-text">
                <p>vo ngoc chinh</p>
              </div>
            </div>
            <div className="comment">
              <StarRatings
                rating={5}
                starRatedColor="blue"
                numberOfStars={5}
                name="rating"
                starSpacing="0.5px"
                starWidthAndHeight="14px"
                className="StarRatings"
                starDimension="16px"
                starRatedColor="#E9E92B"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
