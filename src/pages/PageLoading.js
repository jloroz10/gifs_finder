import React from 'react';
import './styles/PageLoading.css';

const PageLoading = () =>{
    return(
        // <h1 className="pageLoading">Loading...</h1>
        
        <div className="pageLoading d-flex flex-row">
             {/* <h3>Loading</h3> */}
             <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only">.</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only">.</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only">.</span>
            </div>
        </div>
      
    )
}

export default PageLoading;