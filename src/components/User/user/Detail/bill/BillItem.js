import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
function BillItem(props) {
  const { row } = props;
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.calories}</TableCell>
      <TableCell align="right">{row.fat}</TableCell>
      <TableCell align="right">{row.carbs}</TableCell>
      <TableCell align="right">
        <Link to="/">{row.protein}</Link>
      </TableCell>
    </TableRow>
  );
}
export default BillItem;
