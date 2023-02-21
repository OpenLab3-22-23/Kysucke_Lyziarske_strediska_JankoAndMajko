import React from "react";
import "./App.css";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { supabase } from "./supabase/supabaseClient";

export default function StarRating(props) {
    const [value, setValue] = React.useState(0);
    return (
      <div>
        <Box align="left"  component="fieldset" mb={3} borderColor="transparent">
          <Rating
            value={value}
            name="rating"
            onChange={(event, newValue) => {
              setValue(newValue);
              
            }}
            onClick={props.handleInputChange}
          />
        </Box>
      </div>
    )

    /*const { data , error } = await supabase
     .from('profiles')
     .update('description')*/
     
  }