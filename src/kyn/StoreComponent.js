import React from "react";
import { Component } from "react";
import StoreService from "./StoreService";


class StoreComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={stores:[]}
    }


    componentDidMount(){
        StoreService.getAllStores()
        .then(res=>this.setState({stores:res.data}))
    }


    render(){
        return(

            <div className="row">

               <div class="card-group">


               {this.state.stores.map( store =>      
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Store Name: {store.name} </h5>
                    <p class="card-text">Store Phone Number : {store.phone_number} </p>
                    <p class="card-text">Store Email  : {store.email}</p>
                    <p class="card-text">Store Address  : {store.address}</p>
                    </div>
                </div>
               )}


</div>
            </div>
        )
    }

}

export default StoreComponent