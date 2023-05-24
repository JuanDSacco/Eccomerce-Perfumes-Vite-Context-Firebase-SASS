import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore,collection,getDocs,query,where} from 'firebase/firestore';
import ItemList from '../../components/ItemList/ItemList';

const ItemListContainer = () => {

    const [data,setData] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'items')

        if(id){
            const queryFilter = query(queryCollection, where('categoria', '==', id))
            getDocs(queryFilter)
            .then(res => setData(res.docs.map(data => ({id:data.id, ...data.data()}))))
        }else{
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(data => ({id: data.id, ...data.data()}))))
        }
    },[id])

    return(
        <>
            <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;