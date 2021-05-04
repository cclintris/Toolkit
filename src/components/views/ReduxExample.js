import React from "react";
import '../style/ReduxExample.css';

import { Button } from 'antd';

export default class Redux extends React.Component {
    render() {
        return (
            <div className="ReduxBox">
                <Button type="primary">+</Button>
                <Button>-</Button>
            </div>
        )
    }
}
