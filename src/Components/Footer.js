
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
    },
  }));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
                Copyright © Ecommerce - Ropa para chicos {new Date().getFullYear()}
            </Typography>
        </footer>
    )
}
