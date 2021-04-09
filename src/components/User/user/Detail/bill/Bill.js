/* eslint-disable array-callback-return */
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import BillItem from './BillItem';
function Bill() {
    const rows = [
        createData(1, 15955, "Đang giao", "No", "Chi tiết"),
        createData(2, 23755, "Đang xác nhận", "No", "Chi tiết"),
        createData(3, 2625, "Đang xác nhận", "No", "Chi tiết"),
      ];
      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      const show=(data)=>{
          return (
            data.map((row,key)=>{
                return <BillItem row={row} key={key} />
            })
          )
      }
  return (
    <TableContainer className="TableContainer" component={Paper}>
      <Table className="table-material" size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell align="right">Mã Đơn Hàng</TableCell>
            <TableCell align="right">Tình Trạng</TableCell>
            <TableCell align="right">Đã Giao</TableCell>
            <TableCell align="right">Xác Nhận</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {show(rows)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Bill;
