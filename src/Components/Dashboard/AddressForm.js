import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';


export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos del producto
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            type="string"
            name="title"
            label="Titulo"
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
            onChange={(e)=>console.log(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="file"
            inputProps={{type:'file',accept:'.png, .jpg'}}
            name="file"
            onChange={() => alert('uploaded')}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}