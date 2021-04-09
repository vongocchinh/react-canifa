import React, { useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import ReactStars from "react-rating-stars-component";

// import { useForm } from 'react-hook-form';

export default function ReviewForm(props) {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    star: "",
    danhgia: "",
  });
  const [star, setStar] = useState(0);
  const handleClose = () => {
    props.handleClose(false);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const onChangeStar = (value, e) => {
    setStar(value);
  };
  const onSubmit = (e) => {
    props.handleClose(false);
    e.preventDefault();
    var dataForm = {
      username: inputs.username,
      inputs: inputs.danhgia,
      email: inputs.email,
      star: star,
    };
    console.log(dataForm);
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <DialogContent>
          <div className="DialogContent-div">
            <input
              name="username"
              type="text"
              placeholder="Tên khách hàng"
              onChange={onChange}
            />
          </div>
          <div className="DialogContent-div">
            <input
              name="email"
              type="text"
              placeholder="Email khách hàng"
              onChange={onChange}
            />
          </div>
          <div className="DialogContent-div">
            <ReactStars
              count={5}
              size={30}
              activeColor="#ffd700"
              onChange={onChangeStar}
              name="ratting"
            />
          </div>
          <div className="DialogContent-div">
            <textarea
              name="danhgia"
              type="text"
              placeholder="Đánh giá"
              onChange={onChange}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <input
            className="sb-form-review"
            onClick={handleClose}
            defaultValue="Disagree"
          />
          <input className="sb-form-review" type="submit" value="Agree" />
        </DialogActions>
      </form>
    </>
  );
}
