import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../../store/actions/index';
import '../style/ReduxExample.css';

import { Button } from 'antd';

export default function Redux() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <div className="ReduxBox">
            <h1>{counter}</h1>
            <Button type="primary" onClick={() => dispatch(increment())}>+</Button>
            <Button onClick={() => dispatch(decrement())}>-</Button>
        </div>
    )
}
