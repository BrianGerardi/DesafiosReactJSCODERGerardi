import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';

const useStyle = makeStyles(
    {
        estiloTextoInicio: {
            border: 0,
            borderRadius: 3,
            height: 48,
            padding: '0 30px',
        }
    }
);

function TextoInicio() {
    const classes = useStyle();
    return (
        <div>
            <Typography className={classes.estiloTextoInicio}
                variant="h2" color="primary" >
                Texto de Prueba
            </Typography>
            <hr></hr>
            <Typography
                variant="body1" color="primary">
                Texto de Prueba Texto de Prueba Texto de Prueba Texto de Prueba Texto de Prueba Texto de Prueba Texto de Prueba Texto de Prueba Texto de Prueba 
            </Typography>
        </div>
    );
}
export default TextoInicio;