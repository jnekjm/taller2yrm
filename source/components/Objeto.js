import * as React from 'react';
import * as RN from 'react-native';
import {AntDesign } from '@expo/vector-icons'
import { baseDatos } from '../config/firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';


export default function Objeto ({
    
    id,
    imagen,
    nombre,
    descripcion,
    precio,
    vendido,
}) { 

    const editar =() => {
        const docRef = doc(baseDatos, 'objetos', id);
        updateDoc (docRef, {
            vendido: true,
        });
    };

    const Eliminar = ()=> {
        const docRef = doc(baseDatos, 'objetos', id);
        deleteDoc(docRef);
    };

    return(
        
        <RN.View style= {styles.ObjetoContainer}>
            <RN.View style= {styles.conEliminar}>
                  <RN.Text style={styles.imagen}>{imagen}</RN.Text>
                  <AntDesign onpress={Eliminar} name='delete' siza={25} />
            </RN.View>
             <RN.Text style={styles.nombre}>{nombre}</RN.Text>
             <RN.Text style={styles.descripcion}>{descripcion}</RN.Text>
             <RN.Text style={styles.precio}>${precio}</RN.Text>
             {vendido ? ( 
                <RN.TouchableOpacity style={styles.button}>
                    <RN.Text style={styles.button}>Cargado</RN.Text>
                </RN.TouchableOpacity>
             ) : (
                <RN.TouchableOpacity 
                 style={styles.button}
                 onpress={editar}>
                    <RN.Text style = {styles.button}>Cargar</RN.Text>
                </RN.TouchableOpacity>
             )}
        </RN.View>   

    );

}

const styles = RN.StyleSheet.create({
    ObjetoContainer: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',

    },

    nombre: {
        fontSize: 34,
        fontWeight: '700',
    },

    descripcion: {
        fontSize: 20,
        fontWeight: '700',
    },

    imagen: {
        fontSize: 100,
        borderWidth: 5,
        borderColor: '#ddd',
        borderRadius: 20,
        padding: 10,
        marginVertical: 5,

    },

    

    conEliminar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        
        

    },

    button: {
        borderRadius: 50,
        color: 'blue',
        backgroundColor: '#ddd'
        
        
        
    },
});