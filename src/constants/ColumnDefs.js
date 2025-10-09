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

export const SocialIconsListColumnDefs = [
  { field: "id", headerName: "ID", maxWidth: 50 },
  {
    field: "",
    cellRenderer: AddressListActions,
    cellRendererParams: {
      clicked: handleAddressAction,
    },
    width: 100,
  },
  {
    field: "platformName",
    headerName: "Platform",
    editable: true,
  },
  {
    field: "profileUrl",
    headerName: "Profile URL",
    editable: true,
    width: 300,
  },
  {
    field: "displayName",
    headerName: "Display Name",
    editable: true,
    width: 300,
  },
  {
    field: "createdDate",
    headerName: "Created Date",
  },
];

export const SocialPlatformsListColumnDefs = [
  { field: "id", headerName: "ID", maxWidth: 50 },
  {
    field: "",
    cellRenderer: AddressListActions,
    cellRendererParams: {
      clicked: handleAddressAction,
    },
    width: 100,
  },
  {
    field: "platformName",
    headerName: "Name",
    editable: true,
  },
  {
    field: "baseUrl",
    headerName: "Base URL",
    editable: true,
  },
  {
    field: "createdDate",
    headerName: "Created Date",
  },
  {
    field: "updatedDate",
    headerName: "Updated Date",
  },
];

function handleAddressAction(val) {
  console.log(val);
}
