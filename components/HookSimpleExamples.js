import React, {useState} from 'react';

export default () => {
    const [counter, setCounter] = useState(0);

    return (<div>
        <button onClick={() => setCounter(counter+1)}>
            counter
        </button>
        <p>counter: {counter}</p>
    </div>)
}
