import { useState } from "react";
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Switch from "@mui/material/Switch";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function FormSignUp({ handleSubmit }) {
    /**
     * version 16.xx
     * no llamar hooks dentro de for, if o condiciones anidadas
     */
    // usar useEffect para conocer los valores en tiempo real de los input cuando hay cambios
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [prom, setProm] = useState(true);
    const [nov, setNov] = useState(false);
    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: ""
        }
    })

    function validarNombre(nombre) {
        if (nombre.length >= 3) {
            return { name: { error: false, message: '' } }
        } else {
            return { name: { error: true, message: 'Deben ser al menos 3 caracteres' } }
        }
    }

    return <form onSubmit={(e) => {
        // e.prevenDefault() : evita el comportamiento por defecto get post
        e.preventDefault();
        handleSubmit({ name, lastName, email, prom, nov })
    }}>
        <TextField onChange={(e) => { setName(e.target.value) }}
            id="name"
            margin="normal"
            fullWidth
            label="Nombre"
            value={name}
            error={errors.name.error}
            helperText={errors.name.error ? errors.name.message : ''}
            onBlur={(e) => {
                setErrors(validarNombre(e.target.value));
            }}
            variant="outlined" />
        <TextField
            id="lastName"
            margin="normal"
            fullWidth
            label="Apellidos"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            variant="outlined" />
        <TextField
            id="email"
            margin="normal"
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined" />
        <FormGroup>
            <FormControlLabel
                control={
                    <Switch
                        checked={prom}
                        onChange={
                            (e) => setProm(e.target.checked)
                        }
                    />
                }
                label="Promociones"
            />
            <FormControlLabel
                control={
                    <Switch
                        checked={nov}
                        onChange={
                            (e) => setNov(e.target.checked)
                        }
                    />
                }
                label="Novedades"
            />
        </FormGroup>
        <Button type="submit" variant="contained">Registrarse</Button>
    </form>
}

export default FormSignUp;