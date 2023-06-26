import React, { useEffect, useState } from 'react'
import "./TrafficLight.css"
const TrafficLigh = () => {
    let [currentLight, setCurrentLight] = useState("red");

    function currentDuration(cl) {
        switch (cl) {
            case 'red':
                return 4000;
            case 'yellow':
                return 500;
            case 'green':
                return 3000;
            default:
                return 0;

        }
    }

    useEffect(() => {
        const user = setInterval(() => {

            setCurrentLight((prevLight) => {
                if (prevLight === "red")
                    return 'green';
                else if (prevLight === 'yellow')
                    return 'red';
                else if (prevLight === 'green')
                    return 'yellow'
            });



        }, currentDuration(currentLight))

        return () => {
            clearInterval(user);
        }

    }, [currentLight])
    return (
        <div className='outer-div'>
            <div className='traffie-light'>
                <div className={`light red ${currentLight === "red" ? "active" : ""}`}></div>
                <div className={`light yellow ${currentLight === "yellow" ? "active" : ""}`}></div>
                <div className={`light green ${currentLight === "green" ? "active" : ""}`}></div>
            </div>
        </div>

    )
}

export default TrafficLigh