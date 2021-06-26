import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(1, 1),
        marginTop: 'auto',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      },
    // footer: {
    //   backgroundColor: theme.palette.background.paper,
    //   padding: theme.spacing(1),
    // },
  }));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
                Copyright © Ecommerce - Small World {new Date().getFullYear()}
            </Typography>
        </footer>
    )
}
