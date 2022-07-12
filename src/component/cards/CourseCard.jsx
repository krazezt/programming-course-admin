import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Modal,
  Paper,
  Grid,
} from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 500,
  p: 4,
};

export default function CourseCard(props) {
  const [open, setOpen] = React.useState(false);
  const course = props.course;
  console.log(course);
  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Paper style={modalStyle}>
          <Grid container spacing={3} pt={3} pl={3}>
            <Grid item xs={5} pr={3} height="100%">
              <img
                style={{
                  aspectRatio: "1/1",
                  width: "100%",
                  borderRadius: "10px",
                }}
                src={course.image}
              />
              <Typography align="center" variant="h4" component="h2">
                {course.name}
              </Typography>
              <Typography align="center" variant="h6" component="h2">
                {course.description}
              </Typography>
            </Grid>
            <Grid container item xs={7} pr={3}>
              <Grid item xs={12}>
                <Typography align="center" variant="h5">
                  Lessons
                </Typography>
                {course.lessons.map((item, index) => (
                  <Grid item xs={12} key={index} pt={3}>
                    <Paper elevation={1}>
                      <Typography align="left" variant="h6" pl={3}>
                        {item.name}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={course.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {course.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="medium"
            onClick={() => {
              setOpen(true);
            }}
          >
            View
          </Button>
        </CardActions>
      </Card>
    </>
  );
}