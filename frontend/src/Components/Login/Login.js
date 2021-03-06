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
import { loginUser, selectIsLoading, selectIsLogged, selectLoginFailed } from '../../app/stores/authSlice';
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
  const isLogged = useSelector(selectIsLogged);
  const hasFailed = useSelector(selectLoginFailed);

  const search = useLocation().search;
  const confirmation = new URLSearchParams(search).get('confirmation');

  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  useEffect(() => {
    if(confirmation) {
      setOpen(true)
    }
  }, [])

  useEffect(() => {
    if(hasFailed) setOpenError(true)
  }, [hasFailed])

  const emailRef = useRef('')
  const passwordRef = useRef('') 

  const validarCampos = (email, password) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!password || !email) return false;
    else if(!re.test(email)) return false;
    else return true;
  }

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
          Inicio de sesi??n
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
            label="Contrase??a"
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
            onClick={() => validarCampos(emailRef.current.value, passwordRef.current.value) ? dispatch(loginUser(emailRef.current.value, passwordRef.current.value)) : setOpenError(true)}
          >
            Ingresar
          </Button>
          <Grid container justify="space-between">
            <Grid item>
              <Link to="/singup" variant="body2">
                ??No est??s registrado? Registrese.
              </Link>
            </Grid>
            <Grid item >
              <Link to="/" variant="body2">
                Volver a la p??gina.
              </Link>
            </Grid>
          </Grid>
          <Grid container style={{justifyContent: "center"}}>
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
          <Grid container style={{justifyContent: "center"}}>
            <Grid item>
              <Collapse in={openError}>
                <Alert
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpenError(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  Email y/o contrase??a incorrectos
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