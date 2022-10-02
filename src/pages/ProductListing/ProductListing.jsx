import axios from 'axios';
import './ProductListing.css';
import React, { useEffect, useState } from 'react';
import { CardView } from '../../components/cardView/CardView';



const ProductListing = ({filterData,setNotify}) => {
   
    const [Data,setData] = useState([]);
    
    useEffect(() => {
        (async() => {
            try{
                const {data} = await axios.get('https://api-generator.retool.com/dlCIKT/data');
                setData(data);
            }catch(err){
                console.log(err);
            }
        })()
    },[]);

    const getfilterData = () => {
        let newData = Data
        if(filterData==='col1'){
            const data = Data.filter(e => e[filterData]);
            newData = data
        }else if(filterData==='F'){
            const data = Data.filter(e => e[filterData]);
            newData = data
        }else if(typeof filterData==='string'){
            const data = Data.filter(e => e['GROUP']===filterData);
            newData = data
        }else if (Array.isArray(filterData)){
            const data = Data.filter(e => e['FOOD NAME'].toLowerCase().includes(filterData[0].toLowerCase()));
            newData = data
        }else{
            newData = Data;
        }
        return newData;
    };

  return (
    <div className='ProductListing-body d-flex flex-wrap justify-content-evenly'>
      {getfilterData()?.map(e => <CardView data={e} setNotify={setNotify}/> )}
    </div>
  )
};

export default ProductListing
