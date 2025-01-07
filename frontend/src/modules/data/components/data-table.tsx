import { FC } from "react";
import styled from "styled-components";
import { Data } from "../../../models/data";

const Table = styled.table`
  border-spacing: 0;

  th,
  td {
    text-align: left;
    padding: 16px 8px;
  }

  th {
    background-color: #d2d2d2;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

interface DataTableProps {
  data: Data[];
}

export const DataTable: FC<DataTableProps> = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Password</th>
          <th>Street</th>
          <th>City</th>
          <th>Zip</th>
          <th>Birthday</th>
          <th>About Me</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.user.email}>
            <td>{item.user.email}</td>
            <td>{item.user.password}</td>
            <td>{item.street}</td>
            <td>{item.city}</td>
            <td>{item.zip}</td>
            <td>{item.birthday}</td>
            <td>{item.aboutMe}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
