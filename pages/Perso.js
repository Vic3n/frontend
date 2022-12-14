import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import '../App.js';
import assets from '../data/assets/assets.js';

const Perso = ({addToCart}) => {
    const [total,setTotal] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);
    const [isChecked7, setIsChecked7] = useState(false);
    const [isChecked8, setIsChecked8] = useState(false);
    const [isChecked9, setIsChecked9] = useState(false);
    const [isChecked10, setIsChecked10] = useState(false);
    const [isChecked11, setIsChecked11] = useState(false);
    const [isChecked12, setIsChecked12] = useState(false);
    const [isChecked13, setIsChecked13] = useState(false);
    const [isChecked14, setIsChecked14] = useState(false);
    const [isChecked15, setIsChecked15] = useState(false);
    const [isChecked16, setIsChecked16] = useState(false);
    const [masaPi,setMasaPi] = useState(false);
    const [tamanio, setTamanio] = useState(false);
   

    const handleOnChange = () => {
        if(isChecked === false){
            setIsChecked(true);
            setIsChecked1(false);
        }else{
            setIsChecked(!isChecked);
        }
    };

    const handleOnChange1 = () => {
        if(isChecked1 === false){
            setIsChecked1(true);
            setIsChecked(false);
        }else{
            setIsChecked1(!isChecked);
        }
    };

    const handleOnChange2 = () => {
        if(isChecked2 === false){
            if(isChecked3 === true){
                setTotal(total-200);
            }else if(isChecked4 === true){
                setTotal(total-400);
            }else{
                setTotal(total+100);
                setTamanio("individual");
            }
            setIsChecked2(true);
            setIsChecked3(false);
            setIsChecked4(false);
        }else{
            setIsChecked2(!isChecked2);
            setTotal(total-100);
        }
    };

    const handleOnChange3 = () => {
        if(isChecked3 === false){
            if(isChecked2 === true){
                setTotal(total+200);
            }else if(isChecked4 === true){
                setTotal(total-200);
            }else{
                setTotal(total+300);
                setTamanio("mediana");
            }
            setIsChecked3(true);
            setIsChecked2(false);
            setIsChecked4(false);
        }else{
            setIsChecked3(!isChecked3);
            setTotal(total-300);
        }
    };

    const handleOnChange4 = () => {
        if(isChecked4 === false){
            if(isChecked2 === true){
                setTotal(total+400);
            }else if(isChecked3 === true){
                setTotal(total+200);
            }else{
                setTotal(total+500);
                setTamanio("familiar");
            }
            setIsChecked4(true);
            setIsChecked2(false);
            setIsChecked3(false);
        }else{
            setIsChecked4(!isChecked4);
            setTotal(total-500);
        }
    };

    const handleOnChange5 = () => {
        if(isChecked5 === false){
            setIsChecked5(true);
            setTotal(total+2500);
        }else{
            setIsChecked5(false);
            setTotal(total-2500);
        }
    }

    const handleOnChange6 = () => {
        if(isChecked6 === false){
            setIsChecked6(true);
            setTotal(total+2000);
        }else{
            setIsChecked6(false);
            setTotal(total-2000);
        }
    }

    const handleOnChange7 = () => {
        if(isChecked7 === false){
            setIsChecked7(true);
            setTotal(total+900);
        }else{
            setIsChecked7(false);
            setTotal(total-900);
        }
    }

    const handleOnChange8 = () => {
        if(isChecked8 === false){
            setIsChecked8(true);
            setTotal(total+1500);
        }else{
            setIsChecked8(false);
            setTotal(total-1500);
        }
    }

    const handleOnChange9 = () => {
        if(isChecked9 === false){
            setIsChecked9(true);
            setTotal(total+1700);
        }else{
            setIsChecked9(false);
            setTotal(total-1700);
        }
    }

    const handleOnChange10 = () => {
        if(isChecked10 === false){
            setIsChecked10(true);
            setTotal(total+1500);
        }else{
            setIsChecked10(false);
            setTotal(total-1500);
        }
    }

    const handleOnChange11 = () => {
        if(isChecked11 === false){
            setIsChecked11(true);
            setTotal(total+750);
        }else{
            setIsChecked11(false);
            setTotal(total-750);
        }
    }

    const handleOnChange12 = () => {
        if(isChecked12 === false){
            setIsChecked12(true);
            setTotal(total+500);
        }else{
            setIsChecked12(false);
            setTotal(total-500);
        }
    }

    const handleOnChange13 = () => {
        if(isChecked13 === false){
            setIsChecked13(true);
            setTotal(total+500);
        }else{
            setIsChecked13(false);
            setTotal(total-500);
        }
    }

    const handleOnChange14 = () => {
        if(isChecked14 === false){
            setIsChecked14(true);
            setTotal(total+700);
        }else{
            setIsChecked14(false);
            setTotal(total-700);
        }
    }

    const handleOnChange15 = () => {
        if(isChecked15 === false){
            setIsChecked15(true);
            setTotal(total+900);
        }else{
            setIsChecked15(false);
            setTotal(total-900);
        }
    }

    const handleOnChange16 = () => {
        if(isChecked16 === false){
            setIsChecked16(true);
            setTotal(total+500);
        }else{
            setIsChecked16(false);
            setTotal(total-500);
        }
    }

    const generateOrder = () => {
        alert('Pizza agregada al carrito.');
        let order = {
            'id': 'Personalizada',
            'name': 'Personalizada',
            'image': null,
            'preparation': 'Pizza personalizada',
            'size': tamanio,
            'qty': 1,
            'price': total
        }
        addToCart(order);
        
    }

    const masa = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Tipo de masa</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <div>
            <div className="normal">
                <input
                type="checkbox"
                id="normal"
                name="normal"
                value="Normal"
                checked={isChecked}
                onChange={handleOnChange}
                />
                Normal
            </div>
            <div className="result">
                {isChecked ? "" : ""}
            </div>
            </div>

            <div>
            <div className="delgada">
                <input
                type="checkbox"
                id="delgada"
                name="delgada"
                value="Delgada"
                checked={isChecked1}
                onChange={handleOnChange1}
                />
                Delgada
            </div>
            <div className="result">
                {isChecked1 ? "" : ""}
            </div>
            </div>
            </Grid>
        </Grid>
        </>
    )

    const tamano = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Tamaño de masa</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <div>
            <div className="individual">
                <input
                type="checkbox"
                id="individual"
                name="individual"
                value="individual"
                checked={isChecked2}
                onChange={handleOnChange2}
                />
                Individual
            </div>
            <div className="result">
                {isChecked2 ? "" : ""}
            </div>
            </div>

            <div>
            <div className="mediana">
                <input
                type="checkbox"
                id="mediana"
                name="mediana"
                value="mediana"
                checked={isChecked3}
                onChange={handleOnChange3}
                />
                Mediana
            </div>
            <div className="result">
                {isChecked3 ? "" : ""}
            </div>
            </div>

            <div>
            <div className="familiar">
                <input
                type="checkbox"
                id="familiar"
                name="familiar"
                value="familiar"
                checked={isChecked4}
                onChange={handleOnChange4}
                />
                Familiar
            </div>
            <div className="result">
                {isChecked4 ? "" : ""}
            </div>
            </div>
            </Grid>
        </Grid>
        </>
    )

    const carnes = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Carnes</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <div>
            <div className="mechada">
                <input
                type="checkbox"
                id="mechada"
                name="mechada"
                value="mechada"
                checked={isChecked5}
                onChange={handleOnChange5}
                />
                Mechada
            </div>
            <div className="result">
                {isChecked5 ? "" : ""}
            </div>
            </div>

            <div>
            <div className="pepperoni">
                <input
                type="checkbox"
                id="pepperoni"
                name="pepperoni"
                value="pepperoni"
                checked={isChecked6}
                onChange={handleOnChange6}
                />
                Pepperoni
            </div>
            <div className="result">
                {isChecked6 ? "" : ""}
            </div>
            </div>

            <div>
            <div className="jamon">
                <input
                type="checkbox"
                id="jamon"
                name="jamon"
                value="jamon"
                checked={isChecked7}
                onChange={handleOnChange7}
                />
                Jamón
            </div>
            <div className="result">
                {isChecked7 ? "" : ""}
            </div>
            </div>

            <div>
            <div className="tocino">
                <input
                type="checkbox"
                id="tocino"
                name="tocino"
                value="tocino"
                checked={isChecked8}
                onChange={handleOnChange8}
                />
                Tocino
            </div>
            <div className="result">
                {isChecked8 ? "" : ""}
            </div>
            </div>

            <div>
            <div className="pollo">
                <input
                type="checkbox"
                id="pollo"
                name="pollo"
                value="pollo"
                checked={isChecked9}
                onChange={handleOnChange9}
                />
                Pollo
            </div>
            <div className="result">
                {isChecked9 ? "" : ""}
            </div>
            </div>

            <div>
            <div className="salchilla">
                <input
                type="checkbox"
                id="salchilla"
                name="salchilla"
                value="salchilla"
                checked={isChecked10}
                onChange={handleOnChange10}
                />
                Salchilla
            </div>
            <div className="result">
                {isChecked10 ? "" : ""}
            </div>
            </div>
            </Grid>
        </Grid>
        </>
    )

    const verduras = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Verduras</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <div>
            <div className="choclo">
                <input
                type="checkbox"
                id="choclo"
                name="choclo"
                value="choclo"
                checked={isChecked11}
                onChange={handleOnChange11}
                />
                Choclo
            </div>
            <div className="result">
                {isChecked11 ? "" : ""}
            </div>
            </div>

            <div>
            <div className="aceitunas">
                <input
                type="checkbox"
                id="aceitunas"
                name="aceitunas"
                value="aceitunas"
                checked={isChecked12}
                onChange={handleOnChange12}
                />
                Aceitunas
            </div>
            <div className="result">
                {isChecked12 ? "" : ""}
            </div>
            </div>

            <div>
            <div className="pina">
                <input
                type="checkbox"
                id="pina"
                name="pina"
                value="pina"
                checked={isChecked13}
                onChange={handleOnChange13}
                />
                Piña
            </div>
            <div className="result">
                {isChecked13 ? "" : ""}
            </div>
            </div>

            <div>
            <div className="pimenton">
                <input
                type="checkbox"
                id="pimenton"
                name="pimenton"
                value="pimenton"
                checked={isChecked14}
                onChange={handleOnChange14}
                />
                Pimenton
            </div>
            <div className="result">
                {isChecked14 ? "" : ""}
            </div>
            </div>

            <div>
            <div className="cebolla">
                <input
                type="checkbox"
                id="cebolla"
                name="cebolla"
                value="cebolla"
                checked={isChecked15}
                onChange={handleOnChange15}
                />
                Cebolla
            </div>
            <div className="result">
                {isChecked15 ? "" : ""}
            </div>
            </div>

            <div>
            <div className="tomate">
                <input
                type="checkbox"
                id="tomate"
                name="tomate"
                value="tomate"
                checked={isChecked16}
                onChange={handleOnChange16}
                />
                Tomate
            </div>
            <div className="result">
                {isChecked16 ? "" : ""}
            </div>
            </div>
            </Grid>
        </Grid>
        </>
    )

    return (
        <Grid container spacing={0} className="mt-2">
            <Grid item xs={12} sm={7}>
            <Image class="BannerArma" src={assets[5].imagen} />
            </Grid>
            <Grid item xs={12} sm={5}>
            <h1>¡Escoge los ingredientes!</h1>
                {masa}{tamano}{carnes}{verduras}
            
            <h2> Total: ${total}</h2>

            <a href="/" >Volver</a> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button onClick={generateOrder} variant="contained" color="success" className="mt-4 mb-4">Agregar pizza al carrito</Button>
            </Grid>
        </Grid>



    )
}

export default Perso;