import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function AddressForm(props) {
  const getBase64 = file => {
    return new Promise(resolve => {
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();
      // Convert the file to base64 text
      reader.readAsDataURL(file);
      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const handleImage = e => {  
    e.preventDefault();
    getBase64(e.target.files[0])
      .then(res => {
        props.image(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos del producto
      </Typography>
      <Grid container justify="flex-start" spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            type="string"
            name="title"
            label="Titulo"
            onChange={(e)=>props.title(e.target.value)}
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            type="string"
            name="description"
            label="Descripción"
            onChange={(e)=>props.description(e.target.value)}
            fullWidth
            autoComplete="description"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="price"
            type="number"
            name="price"
            label="Precio"
            onChange={(e)=>props.price(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        $
                    </InputAdornment>
                ),
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="stock"
            type="number"
            name="stock"
            label="Stock"
            onChange={(e)=>props.stock(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="file"
            inputProps={{type:'file',accept:'.png, .jpg'}}
            name="file"
            onChange={(e) => handleImage(e)}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}