import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useRef } from "react";

export default function GridComponent(props) {
  const gridHeight = useRef(
    props.rowData && props.rowData.length > 10 ? "500px" : "300px"
  );

  return (
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{ height: gridHeight.current }} // the grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={props.rowData}
        columnDefs={props.colDefs}
        rowSelection="multiple"
      />
    </div>
  );
}
