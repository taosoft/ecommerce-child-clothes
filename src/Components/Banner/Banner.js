import React from 'react';
import Carousel from "react-material-ui-carousel"
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button
} from '@material-ui/core';

function Banner({item, contentPosition}) {
    const totalItems = item.length ? item.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={12 / totalItems} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {item.Name}
                </Typography>

                <Typography className="Caption">
                    {item.Caption}
                </Typography>

                <Button variant="outlined" className="ViewButton">
                    View Now
                </Button>
            </CardContent>
        </Grid>
    )

    for (let i = 0; i < mediaLength; i++) {
        const media = (
            <Grid item xs={12 / totalItems} key={item.Items[i].Name}>
                <CardMedia
                    className="Media"
                    image={item.Items[i].Image}
                    title={item.Items[i].Name}
                >
                    <Typography className="MediaCaption">
                        {item.Items[i].Name}
                    </Typography>
                </CardMedia>
            </Grid>
        )
        items.push(media);
    }
        
    if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    } else { // contentPosition === 'left'
        items.unshift(content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items = [
    {
        Name: "Electronics",
        Caption: "Electrify your friends!",
        contentPosition: "left",
        Items: [
            {
                Name: "Macbook Pro",
                Image: "https://source.unsplash.com/featured/?macbook"
            },
            {
                Name: "iPhone",
                Image: "https://source.unsplash.com/featured/?iphone"
            }
        ]
    },
    {
        Name: "Home Appliances",
        Caption: "Say no to manual home labour!",
        contentPosition: "middle",
        Items: [
            {
                Name: "Washing Machine WX9102",
                Image: "https://source.unsplash.com/featured/?washingmachine"
            },
            {
                Name: "Learus Vacuum Cleaner",
                Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
            }
        ]
    },
    {
        Name: "Decoratives",
        Caption: "Give style and color to your living room!",
        contentPosition: "right",
        Items: [
            {
                Name: "Living Room Lamp",
                Image: "https://source.unsplash.com/featured/?lamp"
            },
            {
                Name: "Floral Vase",
                Image: "https://source.unsplash.com/featured/?vase"
            }
        ]
    }
]


function BannerExample() {
    return (
        <div style={{ marginTop: "50px", color: "#494949" }}>
            <h2>Example: Ropa de niños</h2>

            <Carousel>
            {
                items.map((item, index) => {
                    return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                })
            }
            </Carousel>
        </div>
    )
}

export default BannerExample;
