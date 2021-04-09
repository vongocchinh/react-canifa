import React, { useState } from "react";
import "./styles.scss";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import Bar from "./Varbar/Bar";
import ProductSearchItem from "./Product.Search.item";
import Sort from './sort/Sort';

export default function ProductSearch() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageNew] = useState(12);
  var data = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
  ];
  const onChangePagination = (e, value) => {
    setCurrentPage(value);
  };
  const show = (data) => {
    var result = null;
    var pageLast = currentPage * currentPageNew;
    var pageFirst = pageLast - currentPageNew;
    data = data.slice(pageFirst, pageLast);
    result = data.map((value, key) => {
      return <ProductSearchItem key={key} />;
    });
    return result;
  };

  return (
    <>
      <div className="container">
        <div className="container-product-search-layout">
          <div className="product-navbar">
            <Bar />
          </div>
          <div className="product-search-cart">
            <div className="category-sort-product-search">
            <Sort />
            </div>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                {show(data)}
              </Grid>
            </Grid>
            <div className="Pagination">
              <Pagination
                size="small"
                color="primary"
                page={currentPage}
                count={Math.ceil(data.length / currentPageNew)}
                onChange={onChangePagination}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
