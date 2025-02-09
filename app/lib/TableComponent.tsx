import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import React from "react";
import { TableNode } from "./ViewBuilder";

const TableComponent: React.FC<TableNode> = (props) => {
  return (
    <Table removeWrapper className="w-full heroui-table">
      {/* Table Headers */}
      <TableHeader>
        {props.columns.map((col) => (
          <TableColumn key={col.key}>{col.title}</TableColumn>
        ))}
      </TableHeader>

      {/* Table Body */}
      <TableBody>
        {props.rows.map((row, index) => (
          <TableRow key={index}>
            {props.columns.map((col) => (
              <TableCell key={col.key}>{row[col.key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
