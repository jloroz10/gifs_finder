import React,{Component} from 'react';
import '../styles/GifsList.css';

class GifsList extends Component{
    state={
        ocultar:true
    }
    render(){
        return(
           <div className="contanier">
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
                <input type="button"  onClick={this.props.mostrarMas} className={this.props.ocultar==true?'ocultar':''} value="Ver Mas" />
           </div>
        )
    }
}
export default GifsList;