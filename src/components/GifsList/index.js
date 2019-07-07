import React,{Component} from 'react';
import '../styles/GifsList.css';

import {Link} from 'react-router-dom';

class GifsList extends Component{
    state={
        ocultar:true
    }
    render(){
        return(
           <div className="contanier d-flex flex-column justify-content-center align-items-center">
               <div className="row" >      
                {
                    this.props.gifs.map(gif =>{
                        return( 
                            <div key={gif.id} className="col-6 col-md-4">
                                    <img className="imagenes" src={gif.images['fixed_height'].url}/>
                                </div>
                        );  

                    })
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                         <button  type="button" onClick={this.props.mostrarMas} className={`btn btn-secondary `+(this.props.ocultar==true?'ocultar':'')}>Ver Mas</button>
                    
                    </div>
                </div>
               
           </div>
        )
    }
}
export default GifsList;