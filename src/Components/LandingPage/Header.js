// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import CustomizedMenus from './Menu'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     }
//   },
//   toolbar: {
//     borderBottom: `1px solid ${theme.palette.divider}`,
//   },
//   toolbarTitle: {
//     flex: 1,
//   },
//   toolbarSecondary: {
//     justifyContent: 'space-between',
//     overflowX: 'auto',
//   },
//   toolbarLink: {
//     padding: theme.spacing(1),
//     flexShrink: 0,
//   },
// }));

// export default function Header(props) {
//   const classes = useStyles();
//   const { title } = props;

//   const handleSearchClick = (event) => {
//     const text = document.getElementById("standard-basic").value

//     if(text === "") alert('No escribió nada')
//     else alert(text)

//     window.location.reload(false);
//   }
  

//   return (
//     <React.Fragment>
//       <Toolbar className={classes.toolbar}>
//         <CustomizedMenus />
//         <Typography
//           component="h2"
//           variant="h5"
//           color="inherit"
//           align="center"
//           noWrap
//           className={classes.toolbarTitle}
//         >
//           {title}
//         </Typography>
//         <IconButton onClick={handleSearchClick}>
//           <SearchIcon />
//         </IconButton>
//         <form className={classes.root} noValidate autoComplete="off">
//           <TextField id="standard-basic" label="Search" /> 
//         </form>
//       </Toolbar>
//     </React.Fragment>
//   );
// }

// Header.propTypes = {
//   sections: PropTypes.array,
//   title: PropTypes.string,
// };

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header({title}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={()=>alert('sss')}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" align="center" noWrap>
            {title}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
