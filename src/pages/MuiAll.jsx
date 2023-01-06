import React, { useEffect, useState } from "react";
import {
  Badge,
  Box,
  FormControlLabel,
  Grid,
  Rating,
  Slider,
  Switch,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
// Mui Icon List
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CottageIcon from "@mui/icons-material/Cottage";
import LogoutIcon from "@mui/icons-material/Logout";

const MuiAll = () => {
  const [rating, setRating] = useState(0.5);
  const [slider, setSlider] = useState(0);
  const [switchVal, setSwitchVal] = useState(false);
  const [badge, setBadge] = useState(Number(1));

  console.log("rating:", rating);
  console.log("slider:", slider);
  console.log("switchVal:", switchVal);
  console.log("badge:", badge);

  //   Rating handleSubmit

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* Mui Rating Demo */}
        <Grid className="rating-main" md={6} item>
          <Typography component="div" variant="div">
            <Typography
              component="h5"
              variant="h5"
              sx={{
                textDecoration: "underline",
                letterSpacing: "2px",
                m: 3,
              }}
            >
              * Mui Rating Demo
            </Typography>

            <Typography
              component="div"
              variant="div"
              sx={{
                m: 3,
              }}
            >
              <Typography className="rating-info" component="h6" variant="h6">
                Selected Rating {rating}
              </Typography>
              <Rating
                name="simple-controlled"
                value={Number(rating)}
                precision={0.5}
                size="large"
                onChange={(e) => setRating(e.target.value)}
              />
            </Typography>
          </Typography>
        </Grid>
        {/* Mui Slider Demo */}
        <Grid className="slider-main" md={6} item>
          <Typography component="div" variant="div">
            <Typography
              component="h5"
              variant="h5"
              sx={{
                textDecoration: "underline",
                letterSpacing: "2px",
                m: 3,
              }}
            >
              * Mui Slider Demo
            </Typography>
            <Typography
              component="div"
              variant="div"
              sx={{
                m: 3,
              }}
            >
              <Typography className="slider-info" component="h6" variant="h6">
                Slider Value {slider}
              </Typography>
              <Slider
                value={Number(slider)}
                size="large"
                step={5}
                color="secondary"
                onChange={(e) => setSlider(e.target.value)}
              />
            </Typography>
          </Typography>
        </Grid>
        {/* Switch Demo */}
        <Grid className="switch-main" md={6} item>
          <Typography component="div" variant="div">
            <Typography
              component="h5"
              variant="h5"
              sx={{
                textDecoration: "underline",
                letterSpacing: "2px",
                m: 3,
              }}
            >
              * Mui Switch Demo
            </Typography>

            <Typography
              component="div"
              variant="div"
              sx={{
                m: 3,
              }}
            >
              <FormControlLabel
                label="switch"
                control={
                  <Switch
                    size="large"
                    color="success"
                    inputProps={{ "aria-label": "Switch A" }}
                    onChange={(e) => setSwitchVal(!switchVal)}
                  />
                }
              />
            </Typography>
          </Typography>
        </Grid>
        {/* Badge Demo */}
        <Grid className="badge-main" md={6} item>
          <Typography component="div" variant="div">
            <Typography
              component="h5"
              variant="h5"
              sx={{
                textDecoration: "underline",
                letterSpacing: "2px",
                m: 3,
              }}
            >
              * Mui Badge Demo
            </Typography>

            <Typography
              component="div"
              variant="div"
              sx={{
                m: 3,
              }}
            >
              <Typography className="badge-info" component="h6" variant="h6">
                Click on Message Box To Change Badge Value {badge}
              </Typography>

              <Badge badgeContent={badge} color="success" max={10}>
                <MailIcon
                  color="success"
                  sx={{
                    fontSize: "60px",
                  }}
                  onClick={(e) => setBadge(badge + 1)}
                />
              </Badge>
            </Typography>
          </Typography>
        </Grid>
        {/* Icon Demo */}
        <Grid className="icon-main" md={6} item>
          <Typography component="div" variant="div">
            <Typography
              component="h5"
              variant="h5"
              sx={{
                textDecoration: "underline",
                letterSpacing: "2px",
                m: 3,
              }}
            >
              * Mui Icon Demo
            </Typography>

            <Typography
              component="div"
              variant="div"
              sx={{
                m: 3,
              }}
            >
              <FacebookIcon
                color="primary"
                sx={{
                  fontSize: "50px",
                }}
              />
              <InstagramIcon
                color="primary"
                sx={{
                  fontSize: "50px",
                }}
              />
              <WhatsAppIcon
                color="secondary"
                sx={{
                  fontSize: "50px",
                }}
              />
              <TwitterIcon
                color="success"
                sx={{
                  fontSize: "50px",
                }}
              />
              <LinkedInIcon
                color="warning"
                sx={{
                  fontSize: "50px",
                }}
              />
              <CottageIcon
                color="action"
                sx={{
                  fontSize: "50px",
                }}
              />
              <LogoutIcon
                color="dark"
                sx={{
                  fontSize: "50px",
                  color: "yellow",
                }}
              />
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MuiAll;
