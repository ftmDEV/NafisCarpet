import { useNavigate } from "react-router-dom";
import { Button, Container, Grid, Typography } from "@mui/material";
import landing from "../../assets/images/landing.jpg";
import { constant } from "../../utils/constant";
import { useStyles } from "./landing.style";
//** images */
// import background from "../../assets/images/back2.jpg";

const LandingPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/store");
  };
  return (
    <div className={classes.root}>
      <Container className={classes.section1}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
            <Typography variant="h1" style={{ padding: "50px 70px" }}>
              {constant.LANDING.MAIN_TITLE}
            </Typography>
            <Button className={classes.button} onClick={() => handleClick()}>
              <Typography variant="h4" className={classes.button}>
                {constant.LANDING.BUTTON}{" "}
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img alt="" src={landing} />
          </Grid>
        </Grid>
      </Container>
      <div>{/* <img alt="" src={background} /> */}</div>
      {/* <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          {constant.LANDING.OPTIONS.map((option) => (
            <Card key={option.id}>
              <CardContent>
                <Typography variant="h6">{option.title}</Typography>
                <Typography variant="subtitle2">
                  {option.description}
                </Typography>
                <Button className={classes.button}>{option.button}</Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid> */}
    </div>
  );
};

export default LandingPage;
