/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const employees = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "Admin",
    status: "Active",
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "Admin",
    status: "Active",
    createdAt: "2024-01-01",
  },
  {
    id: 3,
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "Admin",
    status: "Active",
    createdAt: "2024-01-01",
  },
  {
    id: 4,
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "Admin",
    status: "Active",
    createdAt: "2024-01-01",
  },
  {
    id: 5,
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "Admin",
    status: "Active",
    createdAt: "2024-01-01",
  },
  {
    id: 6,
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "Admin",
    status: "Active",
    createdAt: "2024-01-01",
  },
  {
    id: 7,
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "Admin",
    status: "Active",
    createdAt: "2024-01-01",
  },
  {
    id: 8,
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "Admin",
    status: "Active",
    createdAt: "2024-01-01",
  },
  {
    id: 9,
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "Admin",
    status: "Active",
    createdAt: "2024-01-01",
  },
  {
    id: 10,
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "Admin",
    status: "Active",
    createdAt: "2024-01-01",
  },
];

const EmployeeTable = () => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name:</TableHead>
          <TableHead>Email:</TableHead>
          <TableHead>Role:</TableHead>
          <TableHead>Status:</TableHead>
          <TableHead>Date:</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>{employee.role}</TableCell>
            <TableCell>{employee.status}</TableCell>
            <TableCell>{employee.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default EmployeeTable;
