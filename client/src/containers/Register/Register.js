import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link as RouterLink} from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import {registerUser} from '../../store/actions/usersActions';
import FormElement from '../../components/UI/Form/FormElement';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    marginBottom: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  header: {
    marginBottom: theme.spacing(2)
  }
}));

const Register = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const error = useSelector(state => state.users.registerError);

  const inputChangeHandler = e => {
    const {name, value} = e.target;

    setUser(prev => ({...prev, [name]: value}));
  };

  const submitFormHandler = e => {
    e.preventDefault();

    dispatch(registerUser({...user}));
  };

  const getFieldError = fieldName => {
    try {
      return error.errors[fieldName].message;
    } catch (e) {
      return undefined;
    }
  };

  return (
    <Container component="section" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.header}>
          Sign up
        </Typography>
        <Grid container spacing={1} direction="column" component="form" onSubmit={submitFormHandler}>
          <FormElement
            label="Username"
            type="text"
            onChange={inputChangeHandler}
            name="username"
            value={user.username}
            autoComplete="new-username"
            error={getFieldError('username')}
          />
          <FormElement
            label="Password"
            type="password"
            onChange={inputChangeHandler}
            name="password"
            value={user.password}
            autoComplete="new-password"
            error={getFieldError('password')}
          />
          <Grid item xs>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign up
            </Button>
          </Grid>
          <Grid item container justifyContent="flex-end">
            <Grid item>
              <Link component={RouterLink} variant="body2" to="/login">
                Already have an account? Sing in
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Register;