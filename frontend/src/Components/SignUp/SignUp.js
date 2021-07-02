import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createUser, selectIsLoading, selectIsCreatedUser } from '../../app/stores/authSlice';
import { useRef, useState } from 'react';
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
    marginTop: theme.spacing(3),
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

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isCreatedUser = useSelector(selectIsCreatedUser);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(-1);

  const firstNameRef = useRef('')
  const lastNameRef = useRef('') 
  const emailRef = useRef('')
  const passwordRef = useRef('')   

  const validarCampos = (nombre, apellido, email, contraseña) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(!nombre) {
      setError(0);
      return false;
    }
    else if(!apellido) {
      setError(1);
      return false;
    }
    else if(!email) {
      setError(2);
      return false;
    }
    else if(!re.test(email)) {
      setError(3);
      return false;
    }
    else if(!contraseña) {
      setError(4);
      return false;
    }

    return true;
  };

  const textoError = (error) => {
    if(error === 0) return "Nombre inválido";
    else if(error === 1) return "Apellido inválido";
    else if(error === 2 || error === 3 ) return "Email inválido";
    else if(error === 4) return "Contraseña inválida";
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registro de usuario
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre"
                autoFocus
                inputRef={firstNameRef}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                autoComplete="lname"
                inputRef={lastNameRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                inputRef={emailRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                inputRef={passwordRef}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => validarCampos(firstNameRef.current.value, lastNameRef.current.value, emailRef.current.value, passwordRef.current.value) ? dispatch(createUser(firstNameRef.current.value, lastNameRef.current.value, emailRef.current.value, passwordRef.current.value)) : setOpen(true)}
          >
            Registrar
          </Button>
          <Grid container justify="space-between">
            <Grid item>
              <Link to="/" variant="body2">
                Volver a la página.
              </Link>
            </Grid>
            <Grid item>
              <Link to="/login" variant="body2">
                ¿Estás registrado? Inicie sesión.
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Collapse in={open}>
                <Alert
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(-1);
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  {textoError(error)}
                </Alert>
              </Collapse>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Collapse in={isCreatedUser}>
                <Alert>
                  Se envió un correo de verificación!
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