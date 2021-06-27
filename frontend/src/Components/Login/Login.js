import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link, Redirect, useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { loginUser, selectIsLoading } from '../../app/stores/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useRef, useState, useEffect } from 'react'
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#b53f3fb8',
    '&:hover': {
      backgroundColor: '#b53f3f'
    }
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isLogged = useSelector(selectIsLoading);

  const search = useLocation().search;
  const confirmation = new URLSearchParams(search).get('confirmation');

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(confirmation) {
      setOpen(true)
    }
  }, [])

  const emailRef = useRef('')
  const passwordRef = useRef('') 

  if(isLogged) {
    return <Redirect push to={"/"} />
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={emailRef}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            inputRef={passwordRef}
            autoComplete="current-password"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => dispatch(loginUser(emailRef.current.value, passwordRef.current.value))}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/singup" variant="body2">
                {"Todavía no tiene cuenta? Regístrese"}
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Collapse in={open}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  Su cuenta fue confirmada correctamente!
                </Alert>
              </Collapse>
            </Grid>
          </Grid>
        </form>
      </div>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}