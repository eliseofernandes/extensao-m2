import React from "react";
import { AddAPhoto } from "@material-ui/icons";

import { Paper, MenuList, MenuItem, ListItemIcon, Typography } from "@material-ui/core";
import generateImg from "../../utils/GenerateImg";

function HomePage() {
 

  return (
    <div class="container">    

      <Paper>
        <MenuList>
          <MenuItem  onClick={generateImg()} dense>  
              <ListItemIcon>
                <AddAPhoto fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Print street View</Typography>
            </MenuItem>          
        </MenuList>
      </Paper>     
    </div>
  );
}

export default HomePage;
