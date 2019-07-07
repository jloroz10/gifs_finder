import React,{Component} from 'react';

import GifsList from '../GifsList'
import axios from 'axios';

import PageLoading from '../../pages/PageLoading';

import PageError from '../../pages/PageError';

class GifContainer extends React.Component{
   
   
    constructor(props){
        super(props);
        this.state={
          loading:false,
          error:null,
          value:'',
          offset:0,
          title:'',
          ocultar:true,
          gifs:[]
        }
      }

    updateValue = e =>{
        
        this.setState({
            value:e.target.value
        })
      }

    actualizarTexto = e =>{
        this.setState({
            value:e.target.value,
        })
      
     
    }
    prueba = (e)=>{
        if(e.keyCode ==13)
            this.buscarGifs();
        // console.log(e.keyCode);
    }
    buscarGifs = async() =>{
              
        this.setState({loading:true,
                        error:null,
                        gifs:[],
                        offset:0});
        console.log('title '+this.state.title); 
        try{ 
            const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.value}&api_key=PSmzBafotsxbJZm9P7okSI7uHia0CjXV&limit=24&offset=${this.state.offset}`)
            if(response.data.data.length>0){
                this.setState({
                            loading:false,
                            gifs:response.data.data,
                            ocultar:false,
                            title:this.state.value,
                            offset: this.state.offset+24
                            })
                }
            //  console.log(response);
             else{
                 console.log("no data")
                this.setState({
                    loading:false,
                    ocultar:true,
                    title:'',
                    gifs:[]
                })
            }
            // console.log(this.state.gifs);
        }catch(e){
            this.setState({loading:false,
                error:e.message,value:''})
        
        }
    }
    MostrarMas = async() =>{
        this.setState({loading:true,
                       error:null,
                       title:this.state.value})
        try{ 
            const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.title}&api_key=PSmzBafotsxbJZm9P7okSI7uHia0CjXV&limit=24&offset=${this.state.offset}`)
            this.setState({
                           loading:false,
                           gifs:[].concat(this.state.gifs,response.data.data),
                           ocultar:false,
                           value:'',
                           offset: this.state.offset+24
                        })
            // console.log(response);
            console.log(this.state.gifs);
        }catch(e){
            this.setState({loading:false,
                error:e.message,value:''})
        
        }
    }
    componentDidMount = async()=>{
        this.setState({loading:true,error:null})
        try{ 
            const response = await axios.get('http://api.giphy.com/v1/gifs/trending?api_key=PSmzBafotsxbJZm9P7okSI7uHia0CjXV&limit=21');
            console.log(response);
            this.setState({
                           loading:false,
                           gifs:[].concat(this.state.gifs,response.data.data),
                           ocultar:true,
                           title:'trendy',
                           value:'',
                           offset: this.state.offset+24
                        })
            // console.log(response);
            console.log(this.state.gifs);
        }catch(e){
            this.setState({loading:false,
                error:e.message,value:''})
        
        }
    }
    render(){
        if(this.state.loading){
            return <PageLoading />
        }
        if(this.state.error){
            return (
                <div className="container d-flex r flex-column align-items-center mt-5"> 
                <h1>GIFS FINDER</h1>
                <div className="input-group input-group-lg mb-5">
                    <input  onKeyUp = {this.prueba}  value={this.state.value}  onChange={this.actualizarTexto} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-md"/>
                    <div className="input-group-prepend">
                        <button onClick={this.buscarGifs} className="input-group-text" id="inputGroup-sizing-lg">Search</button>
                    </div>
                </div>
                <PageError error_msg={this.state.error} />
            </div> 
            );
        }
        if(this.state.gifs.length==0){
            return (

                <div className="container d-flex r flex-column align-items-center mt-5"> 
                  <h1>GIFS FINDER</h1>
                <div className="input-group input-group-lg mb-5">
                    <input  onKeyUp = {this.prueba}  value={this.state.value}  onChange={this.actualizarTexto} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-md"/>
                    <div className="input-group-prepend">
                        <button onClick={this.buscarGifs} className="input-group-text" id="inputGroup-sizing-lg">Search</button>
                    </div>
                </div>
                <h3>No Data</h3>
            </div> 
            );
        }
        return(
            <div className="container d-flex r flex-column align-items-center mt-5">  
                   <h1>GIFS FINDER</h1> 
                <div className="input-group input-group-lg mb-5">
                    
                    <input  onKeyUp = {this.prueba}  value={this.state.value}  onChange={this.actualizarTexto} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-md" placeholder="search gifs"/>
                    <div className="input-group-prepend">
                        <button onClick={this.buscarGifs} className="input-group-text" id="inputGroup-sizing-lg">Search</button>
                    </div>
                </div>
                <h2>{this.state.title}</h2> 
                {/* <h1>{this.state.value}</h1> */}
                <GifsList mostrarMas={this.MostrarMas} gifs={this.state.gifs} ocultar={this.state.ocultar}/>
            </div>
        );
    }
  
}
export default GifContainer;