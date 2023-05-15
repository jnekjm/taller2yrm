import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { baseDatos } from '../config/firebase';
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';
import Objeto from '../components/Objeto';






export default function Home(){
    const navigation = useNavigation ();
    
    const [objeto, setObjetos] = React.useState([]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight:  () => <RN.Button title='Agregar' onPress={() =>navigation.navigate('Agregar')}/>
        })
    }, [])
    
    React.useEffect(() => {
        const collectionRef =collection(baseDatos, 'objetos');
        const q = query(collectionRef, orderBy('creadoEn', 'desc'))
       

        const desuscribir = onSnapshot (q, QuerySnapshot => {
            setObjetos(
                QuerySnapshot.docs.map(doc => ({
                    id: doc.id,
                    imagen: doc.data().imagen,
                    nombre: doc.data().nombre,
                    descripcion: doc.data().descripcion,
                    precio: doc.data().precio,
                    vendido: doc.data().vendido,
                    creadoEn: doc.data().creadoEn,

                }))

            )
            
            
        })
        return desuscribir;
    }, [])
    return (
        <>
        <RN.Text>Objetos</RN.Text>
       {objeto.map(objeto => <Objeto key={objeto.id}{...objeto}/>)}
        </>
    )



}


