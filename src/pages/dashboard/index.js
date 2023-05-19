import React,{useState} from "react";
import { Box, useTheme,Typography,MenuItem, Button } from "@mui/material";
import { DataGrid} from "@mui/x-data-grid";

import Snackbar from '@mui/material/Snackbar';



const DashboardDefault = () => {

    let orders = {}
    const [open, setOpen] = useState(false);
    const handleButtonClick = () => {
      setOpen(true);
    };
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    const columns = [
        {
            field: "id",
            headerName: "Order No",
            flex: 1,
            renderCell: ({ row: { id } })=>{
              return (
                    <MenuItem onClick={()=>{show_order(id)}}>{id}</MenuItem>
              );
            }
          },
      // { field: "id", headerName: "Order No",flex:1},
      { field: "fullname", headerName: "User Name",flex:1},
      { field: "contact_no", headerName: "User Mobile No",flex:1},
      { field: "email", headerName: "User Email",flex:1},
      { field: "Airport__code", headerName: "Airport Code",flex:1},
      // { field: "city", headerName: "Airport City",flex:1},
      { field: "final_price", headerName: "Order Value",flex:1},
      { field: "discount", headerName: "Discount",flex:1},
      { field: "Status Messages__slug", headerName: "Order Status",flex:1},
      { field: "created_at", headerName: "Order Date and Time",flex:1},
      { field: "delivery_time", headerName: "Delivery Time",flex:1},
      // { field: "partner", headerName: "Partner code",flex:1},
      { field: "store_order_id", headerName: "Store Order Id",flex:1},
      { field: "Retailers__store_name", headerName: "Retailers storename",flex:1},
      { field: "Airport__name", headerName: "Airport Name",flex:1},
      {
        headerName: "Edit",
        flex: 1,
        renderCell: ({ row: { id } })=>{
          return (
            <Box
                    m="0"
                    display="flex"
                    justifyContent="center  "
                    gap="10px"
            >
              <Button variant="contained" size="small" startIcon={<EditIcon />} onClick={()=>{edit_order(id)}}>Edit</Button>
            </Box>
           
          );
        }
      },
    ];

    return (
        <Box m="20px">
          <Box
            m="40px 0 0 0"
            height="75vh"
            width="100%"
            overflow="auto"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: `blue`,
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: `blue`,
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: `blue`,
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: `blue`,
              },
              "& .MuiCheckbox-root": {
                color: `blue`,
              },
            }}
          >
            <DataGrid rows={orders} columns={columns} />
          </Box>
          
        </Box>
      );
};

export default DashboardDefault;
