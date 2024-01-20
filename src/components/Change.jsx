import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

export default function Change(props) {
  const { columns, rows, cells, data } = props;
  return (
    <Paper style={{ width: "100%" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns?.map((column) => {
                const { id, label } = column;
                return <TableCell key={id}>{label}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => {
              return (
                <TableRow key={row.id}>
                  {columns?.map((node) => {
                    const label = row[node.name];
                    const Cell = cells?.[node.viewType] || TableCell;
                    return <Cell key={node.id}>{label}</Cell>;
                  })}
                </TableRow>
              );
            })}
            {data && (
              <>
                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>{data.subTotal}</TableCell>
                  <TableCell align="right">{data.invoicePrice}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{data.tax}</TableCell>
                  <TableCell align="right">{data.percent}</TableCell>
                  <TableCell align="right">{data.invoiceTax}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>{data.total}</TableCell>
                  <TableCell align="right">{data.totalPrice}</TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
