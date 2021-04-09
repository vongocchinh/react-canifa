import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
export default function ProductSearchItem(){
    return (
        <Grid  item>
          <Link to="/product">
            <Paper className="card-product-item">
              <div className="img-product-item-card">
                <img
                  src="https://www.nazafu.com/images/thumbs/2018/06/ao-vest-den-1103-20.jpg"
                  alt="###"
                />
              </div>
              <div className="option-product-item-card">
                <div className="option-product-item-card-name">
                  <p>
                    Lorem Ipsum is simply dummy is simply dummy Lorem Ipsum is
                    simply dummy Lorem Ipsum is simply dummy.{" "}
                  </p>
                </div>
                <div className="option-product-item-card-price">
                  <p>20.00$</p>{" "}
                  <p>
                    <del>50.00$</del>
                  </p>
                </div>
              </div>
            </Paper>
          </Link>
        </Grid>
    )
}