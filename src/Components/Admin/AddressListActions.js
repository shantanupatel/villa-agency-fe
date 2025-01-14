import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Stack } from "react-bootstrap";

export const AddressListActions = (params) => {
  // console.log(params);

  const handleClickEvent = (data) => {
    params.clicked(data);
  };

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <div>
          <FontAwesomeIcon
            icon={faPenToSquare}
            title="Edit"
            onClick={() =>
              handleClickEvent({
                rowData: params.data,
                event: "edit",
              })
            }
          />
        </div>
        {/* <div>
          <FontAwesomeIcon
            icon={faTrashCan}
            title="Delete"
            onClick={() =>
              handleClickEvent({
                id: params.data.id,
                event: "delete",
              })
            }
          />
        </div> */}
      </Stack>
    </>
  );
};
