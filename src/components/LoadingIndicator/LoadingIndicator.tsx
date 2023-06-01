import React from 'react';
import {usePromiseTracker} from "react-promise-tracker";


const LoadingIndicator = () => {

    const {promiseInProgress} = usePromiseTracker();

    return (

        <h1>
            {promiseInProgress && 'Async calls'}
        </h1>
    );
};

export default LoadingIndicator;