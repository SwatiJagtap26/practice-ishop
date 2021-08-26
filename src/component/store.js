import React, { Component }  from 'react'; 
import './../style/store.css';
import Sidebar from './store comp/sidebar';
import Prices from './store comp/prices';
import Color from './store comp/color';
import Brand from './store comp/brand';
import Subheader from './store comp/subheader';
import Card1 from './store comp/card1';
 class Store extends Component{
   render (){
     return(
       <>
       <div>
            <Subheader />
            <div className="store-mainpage">
              <div className="storepage1">
                <Sidebar />
                <Prices />
                <Color />
                <Brand />
              </div>
              <div className="Storepage2">
                <Card1 />
              </div>
            </div>
        </div>
       </>
     );
 }
}
 export default Store;