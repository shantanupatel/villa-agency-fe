export const AddressListColumnDefs = [
  {
    field: "id",
    headerName: "ID",
    maxWidth: 50,
  },
  {
    field: "street",
    headerName: "Street",
    editable: true,
    minWidth: 100,
  },
  {
    field: "city",
    headerName: "City",
    /* type: "number", */
    editable: true,
  },
  {
    field: "state",
    headerName: "State",
    editable: true,
    maxWidth: 100,
  },
  {
    field: "zip",
    headerName: "Zip",
    maxWidth: 100,
  },
  {
    field: "country",
    headerName: "Country",
    maxWidth: 100,
  },
  {
    field: "createdDate",
    headerName: "Created Date",
  },
];

export const EnquiryListColumnDefs = [
  { field: "id", headerName: "ID", maxWidth: 50 },
  {
    field: "fullname",
    headerName: "Name",
    editable: true,
  },
  {
    field: "email",
    headerName: "Email Address",
    editable: true,
  },
  {
    field: "subject",
    headerName: "Subject",
    editable: true,
  },
  {
    field: "message",
    headerName: "Message",
  },
  {
    field: "source",
    headerName: "Source",
  },
  {
    field: "createdDate",
    headerName: "Created Date",
  },
];
