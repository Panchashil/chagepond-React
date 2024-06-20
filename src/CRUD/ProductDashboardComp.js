import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const ProductDashboardComp = () => {
    const [itemData,setItemData] = useState([]);

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = ()=>{
        axios.get(`http://localhost:8888/products`).then((res)=>{
            // console.log(res.data);
            setItemData(res.data)
        }).catch((error)=>{})
    }

    const deleteRecord = (id)=>{
        if(window.confirm(`Are You Sure To Delete Record With Id:${id}`)){
            axios.delete(`http://localhost:8888/products/${id}`).then(()=>{
                window.alert("Record Delete Successfully");
                fetchData();
               }).catch((error)=>{})
        }
    }
    return (
        <div>
            <h2>This is Product Dashboard Component</h2>
            <Link to="/maindashboard/productadd" className='btn btn-primary mb-2'>
            <AddIcon></AddIcon>Add</Link>

            <table className='table table-hover table-striped '>
              <thead>
                <tr className='table-dark'>
                    <th>Sr.No</th><th>Name</th><th>Price</th><th>Company</th><th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                itemData.length > 0 && itemData.map((val,index)=>{
                        return <tr>
                            <td>{index+1}</td>
                            <td>{val.pname}</td>
                            <td>{val.price}</td>
                            <td>{val.company}</td>
                            <td>
                                <Link to={`/maindashboard/productedit/${val.id}`} className='btn btn-outline-success btn-sm'>
                                <EditIcon></EditIcon>
                               </Link> |
                                <button type='button' onClick={()=>deleteRecord(val.id)} className='btn btn-outline-danger btn-sm'>
                                    <DeleteOutlineIcon></DeleteOutlineIcon>
                                </button>
                            </td>
                        </tr>
                    })
                }
              </tbody>
            </table>
        </div>
    )
}

export default ProductDashboardComp
