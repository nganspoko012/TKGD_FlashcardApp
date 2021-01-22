import React, { useState } from 'react';
import '../Course/Courses.css';
import '../Flashcard/Flashcard.test.css';
import {
  Button,
  Grid,
  makeStyles,
  Paper,
  Input,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Learn from '../Learn/Learn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  itemPaper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  previewPaper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper className={classes.paper}>Mặt trước</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>Mặt sau</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>Preview</Paper>
      </Grid>
    </React.Fragment>
  );
}



function AddFlashCard() {
  const classes = useStyles();

  const [front, setFront] = useState(['a large pig, brown, or black farm animal with short legs', 'Pig.png']);
  const [back, setBack] = useState(['Pig.png', 'Pig', '(noun)', '/Pig/', 'Con heo']);
  const [addFrontInput, setAddFrontInput] = useState('');
  const [addBackInput, setAddBackInput] = useState('');

  const handleChangeAddFrontInput = (e) => {
    setAddFrontInput(e.target.value);
  }

  const handleChangeAddBackInput = (e) => {
    setAddBackInput(e.target.value);
  }

  const handleAddFrontField = () => {
    if (addFrontInput != '') {
      setFront([...front, addFrontInput]);
    }
  }

  const handleAddBackField = () => {
    if (addBackInput != '') {
      setBack([...back, addBackInput]);
    }
  }

  const RenderList = ({ list }) => {
    return list.map((i, index) =>
      <Grid item xs key={index} style={{ margin: 5 }}>
        <Paper className={classes.itemPaper}>{i}</Paper>
      </Grid>
    );
  }

  const Front = () => {
    return (
      <Grid item xs={4}>
        <RenderList list={front} />
        <Grid
          item
          xs
          align="right"
          style={
            { marginTop: 20 }
          }
        >
          <Input
            placeholder="Thêm trường"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleAddFrontField}>
                  <AddBoxIcon />
                </IconButton>
              </InputAdornment>
            }
            onChange={handleChangeAddFrontInput}
          />
        </Grid>
      </Grid>
    );
  }

  const Back = () => {
    return (
      <Grid item xs={4}>
        <RenderList list={back} />
        <Grid
          item
          xs
          align="right"
          style={
            { marginTop: 20 }
          }
        >
          <Input
            placeholder="Thêm trường"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleAddBackField}>
                  <AddBoxIcon />
                </IconButton>
              </InputAdornment>
            }
            onChange={event => setAddBackInput(event.target.value)}
          />
        </Grid>
      </Grid>
    );
  }

  const Preview = () => {
    const history = useHistory();

    return (
      <Grid item xs={4}>
        <Grid item xs={12} align="center">
          <Paper className={classes.previewPaper}>
            Mặt trước
            {(front).map((i, index) => 
              <p key={index}>{i}</p>
            )}
          </Paper>
        </Grid>
        <Grid
          item
          xs
          align="center"
          style={
            { marginTop: 20 }
          }
        >
          <Button variant="contained" color="primary" onClick={() => history.replace('/courses')}>
            Tạo thẻ
          </Button>
        </Grid>
      </Grid>
    );
  }


  return (
    <div className="content-container">
      <div className="my-courses-container">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={3}
          style={
            { margin: 10 }
          }
        >
          <Header />
          <Front />
          <Back />
          <Preview />
        </Grid>
      </div>
    </div>
  );
}

export default AddFlashCard;