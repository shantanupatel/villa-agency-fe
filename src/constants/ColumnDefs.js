import { AddressListActions } from "Components/Admin/AddressListActions";

export const AddressListColumnDefs = [
  {
    field: "",
    width: 50,
    checkboxSelection: true,
  },
  {
    field: "",
    cellRenderer: AddressListActions,
    cellRendererParams: {
      clicked: handleAddressAction,
    },
    width: 100,
  },
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "street",
    headerName: "Street",
    editable: true,
    // minWidth: 100,
    filter: true,
  },
  {
    field: "city",
    headerName: "City",
    /* type: "number", */
    editable: true,
    filter: true,
  },
  {
    field: "state",
    headerName: "State",
    editable: true,
    maxWidth: 100,
    filter: true,
  },
  {
    field: "zip",
    headerName: "Zip",
    width: 100,
    filter: true,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
    filter: true,
    resizable: true,
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

function handleAddressAction(val) {
  console.log(val);
}
