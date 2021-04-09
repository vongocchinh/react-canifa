import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from "react-bootstrap";
export default function Sort() {
  const onSort = (sortBy, sortValue) => {
    var sort = {
      sortBy: sortBy,
      sortValue: sortValue,
    };
    // this.props.onSortRedux(sort);
  };
  return (
    <>
    <span class="custom-dropdown big">
    <select>
        <option>A-Z</option>
        <option>Z-A</option>
        <option>Giá:Từ Thấp Đến Cao</option>
        <option>Giá:Từ Cao Đến Thấp</option>
    </select>
</span>
    </>
  );
}
