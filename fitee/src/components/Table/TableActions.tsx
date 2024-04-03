import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tooltip from "@mui/material/Tooltip";

interface TableActionsProps {
  rowName: string;
  handleView: (name: string) => void;
  handleDelete: (name: string) => void;
}

const TableActions = ({
  rowName,
  handleView,
  handleDelete,
}: TableActionsProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls={`menu-${rowName}`}
        aria-haspopup="true"
        onClick={(event) => handleMenuOpen(event)}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id={`menu-${rowName}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >
        <Tooltip title="View Is Currently Disabled">
          <span>
            <MenuItem disabled onClick={() => handleView(rowName)}>
              View
            </MenuItem>
          </span>
        </Tooltip>

        <MenuItem onClick={() => handleDelete(rowName)}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default TableActions;
