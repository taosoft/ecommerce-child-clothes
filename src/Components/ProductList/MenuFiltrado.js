import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect({state}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    state(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
            autoWidth
            defaultValue="Precio: Mayor a Menor"
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            onChange={handleChange}
        >
            <MenuItem value={10}>Precio: Mayor a Menor</MenuItem>
            <MenuItem value={20}>Precio: Menor a Mayor</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
