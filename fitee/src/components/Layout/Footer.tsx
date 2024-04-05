import React from "react";
import { Container, Grid, Typography, IconButton } from "@mui/material";
import { Instagram, LinkedIn, Facebook } from "@mui/icons-material";

export const Footer = () => {
  return (
    <div className="w-full bg-[#c2a5f9]">
      <Container>
        <Grid container className="flex flex-col items-center">
          <Grid item xs={12}>
            <div className="flex justify-center">
              <IconButton>
                <Instagram />
              </IconButton>
              <IconButton>
                <LinkedIn />
              </IconButton>
              <IconButton>
                <Facebook />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
