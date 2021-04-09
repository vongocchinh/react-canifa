import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from '@material-ui/icons/Delete';
export default function CartItem() {
  return (
    <>
      <tr>
        <td>1</td>
        <td>ÁO THUN CROPTOP RÚT DÂY TRƠN FORM RỘNG</td>
        <td>
          <div>
            <img className="img-table-cart" alt="###" src="https://cf.shopee.vn/file/4613a5422ee201f446d1c4c78e9894e3" />
          </div>
        </td>
        <td>36,900,000 đ</td>
        <td>
          <div>
            <span>
              <AddIcon className="AddIcon" />
            </span>
            <p className="quantity">999</p>
            <span>
              <RemoveIcon className="RemoveIcon" />
            </span>
          </div>
        </td>
        <td>36,900,000 đ</td>
        <td><DeleteIcon className="DeleteIcon" fontSize="small" /></td>
      </tr>

    </>
  );
}
