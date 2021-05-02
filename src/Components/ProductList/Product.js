import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    button: {
        width: '100%',
        height: 400,
        maxWidth: 300,
    }, 
}));
  
export default function Product( {price, description, title, quantity} ) {
    const classes = useStyles();

    const handleAddShoppingCart = (event) => {
        event.stopPropagation();
        event.preventDefault();
        alert('Added to Cart')
    }

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/featured/?clothes,kids"
                title={title}
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {price}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>                
                <IconButton  aria-label="Agregar a carrito" onClick={(event) => handleAddShoppingCart(event)} onMouseDown={event => event.stopPropagation()}>
                    <AddShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}