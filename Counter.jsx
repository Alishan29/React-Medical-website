import React, { useState } from 'react';
import Button from './Button';

function Counter() {

    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <Button text="➕ Increase" handleClick={increase} />
            <Button text="➖ Decrease" handleClick={decrease} />
            <Button text="🔁 Reset" handleClick={reset} />

        </div>
    )
}

export default Counter
