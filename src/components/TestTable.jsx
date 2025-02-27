import { useMemo } from "react";
import { MantineReactTable } from "mantine-react-table";

export const data = [
  {
    firstName: "Dylan",
    lastName: "Murray",
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
    subRows: [
      {
        firstName: "Ervin",
        lastName: "Reinger",
        address: "566 Brakus Inlet",
        city: "South Linda",
        state: "West Virginia",
        subRows: [
          {
            firstName: "Jordane",
            lastName: "Homenick",
            address: "1234 Brakus Inlet",
            city: "South Linda",
            state: "West Virginia",
          },
        ],
      },
      {
        firstName: "Brittany",
        lastName: "McCullough",
        address: "722 Emie Stream",
        city: "Lincoln",
        state: "Nebraska",
      },
    ],
  },
  {
    firstName: "Raquel",
    lastName: "Kohler",
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
    subRows: [
      {
        firstName: "Branson",
        lastName: "Frami",
        address: "32188 Larkin Turnpike",
        city: "Charleston",
        state: "South Carolina",
      },
    ],
  },
];

const TestTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },

      {
        accessorKey: "address",
        header: "Address",
      },
      {
        accessorKey: "city",
        header: "City",
      },

      {
        accessorKey: "state",
        enableColumnOrdering: false,
        header: "State",
      },
    ],
    []
  );

  return (
    <MantineReactTable
      columns={columns}
      data={data}
      enableExpanding
      enableExpandAll //default
    />
  );
};

export default TestTable;
