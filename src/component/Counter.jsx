import React from 'react';
import "./style.css";
import { useSelector, useDispatch } from "react-redux"
import { Increament, Decreament } from './redux/reducer';

const Counter = () => {

    // here data has value 0 which is initial value from store
    const data = useSelector(state => state.value)

    const dispatch = useDispatch();

    const Addition = () => {
        // console.log("add clicked");
        dispatch(Increament())
    }

    const Substraction = () => {
        // console.log("sub clicked");
        dispatch(Decreament());
    }

    return (
        <div className='counter'>
            <div className='container py-5'>
                <h2 className='counter-text fs-1 text-center'>Counter Using Redux-Toolkit</h2>
                <div className='d-flex flex-column justify-content-center align-items-center my-4'>
                    <input type="text" disabled value={data} className='text-center fs-1 rounded px-3 fw-bold my-4' />
                    <div className='d-flex'>
                        <button className="btn-add mx-2 fw-bold rounded" onClick={Addition}>+ Add</button>
                        <button className="btn-add mx-2 fw-bold rounded" onClick={Substraction}>- Sub</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter