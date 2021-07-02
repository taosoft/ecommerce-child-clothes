import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        //paddingTop: "56.25%", // 16:9
        height: 450,
        width: "100%",
        objectFit: "cover",
    },
    cardContent: {
        flexGrow: 1,
    },
    button: {
        width: "100%",
        height: 400,
        maxWidth: 300,
    },
}));

export default function Product(props) {
    const classes = useStyles();
    const [redirect, setRedirect] = useState(false)

    const handleAddShoppingCart = (event) => {
        event.stopPropagation();
        event.preventDefault();
        props.addToCart();
    };

    if(redirect) {
        return <Redirect push to={"/products"} />
    }

    return (
        <Card className={classes.card}>
            {props.redirect && (
                <IconButton aria-label="delete" className={classes.margin} size="small" onClick={() => setRedirect(true)}>
                    <ArrowBackIcon fontSize="inherit" />
                </IconButton>
                )
            }
            <CardMedia
                className={classes.cardMedia}
                src={props.image}
                title={props.title}
                component="img"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h4">
                    {props.title}
                </Typography>
                <Typography gutterBottom variant="h5">
                    {props.description}
                </Typography>
                <Typography variant="body1">${props.price}</Typography>
            </CardContent>
            <CardActions>
                <IconButton
                    aria-label="Agregar a carrito"
                    onClick={(event) => handleAddShoppingCart(event)}
                    onMouseDown={(event) => event.stopPropagation()}
                >
                    <AddShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
