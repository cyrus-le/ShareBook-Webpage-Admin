import React, { useState } from "react";
import {
  TextField,
  Dialog,
  Typography,
  withStyles,
  IconButton,
  makeStyles,
  Grid,
  ThemeProvider,
  createMuiTheme,
  Card,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9d6838",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    // 16:9
  },
});

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "0 auto",
    // height: 500
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function Modal(props) {
  const { open, handleClose, book } = props;
  const classes = useStyles();
  return (
    <div>
      <Dialog
        className={classes.dialog}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="lg"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          TH??NG TIN CU???N S??CH
        </DialogTitle>
        <DialogContent dividers>
          {/* <FormControl> */}
          <ThemeProvider theme={theme}>
            <Grid container spacing={3}>
              <Grid item container xs={12} spacing={3}>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="filled-read-only-input"
                    label="M?? s??ch"
                    defaultValue={book?.bookId}
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="filled-read-only-input"
                    label="T??n cu???n s??ch"
                    defaultValue={book?.name}
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="filled-read-only-input"
                    label="Th??? lo???i"
                    defaultValue={book?.category.categoryName}
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="filled-read-only-input"
                    label="T??c gi???"
                    defaultValue={book?.author}
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="filled-read-only-input"
                    label="Gi??"
                    defaultValue={book?.price}
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="filled-read-only-input"
                    label="S??? trang"
                    defaultValue={book?.pageNum}
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                </Grid>
              </Grid>
              <Grid item container spacing={3} xs={12}>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="filled-read-only-input"
                    label="M?? t???"
                    multiline
                    defaultValue={book?.description}
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="filled-read-only-input"
                    label="????? m???i"
                    defaultValue={book?.quality}
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="filled-read-only-input"
                    label="Tr???ng th??i"
                    defaultValue={
                      book
                        ? book.checked === true
                          ? "???????c ch???p nh???n"
                          : "C???m"
                        : null
                    }
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                </Grid>
              </Grid>
              <Grid item container spacing={3} xs={12}>
                <Grid item xs={4}>
                  <Card className={classes.card}>
                    <CardHeader title="???nh t???ng th???" subheader="" />
                    <CardMedia
                      style={{ height: "30rem" }}
                      className={classes.media}
                      image={book?.totalImage}
                    />
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card className={classes.card}>
                    <CardHeader title="???nh m???t tr?????c" subheader="" />
                    <CardMedia
                      style={{ height: "30rem" }}
                      className={classes.media}
                      image={book?.frontSideImage}
                    />
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card className={classes.card}>
                    <CardHeader title="???nh m???t sau" subheader="" />
                    <CardMedia
                      style={{ height: "30rem" }}
                      className={classes.media}
                      image={book?.backSideImage}
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            {/* </FormControl> */}
          </ThemeProvider>
        </DialogContent>

        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
