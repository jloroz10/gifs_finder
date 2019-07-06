import React from 'react';
import './styles/PageError.css';

const PageError = (props) =>{
    return(
        // <h1 className="pageLoading">Loading...</h1>
        // {props.error_msg}
        <div className="pageError d-flex flex-row text-danger">
            <h1>Error: {props.error_msg}</h1>
        </div>
      
    )
}

export default PageError;