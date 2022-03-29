import {Button, Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";

export default function Counter() {

    const [initialValue, setInitialValue] = useState(0)
    
    useEffect(() => {
        if (initialValue === 5 ){
            alert("Use effect calling when counter " + initialValue)
        }
    },[initialValue]);
    
    const handleIncrease = () => {
        setInitialValue(initialValue + 1)
    }

    const handleDecrease = () => {
        setInitialValue(initialValue - 1)
    }

    return <>
        <Row>
            <Col>
                <h1>Counter: {initialValue}</h1>
                <Button className="m-1" onClick={handleIncrease}>Increase</Button>
                <Button className="m-1" onClick={handleDecrease}>Decrease</Button>
            </Col>
        </Row>

    </>
}