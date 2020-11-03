import React from 'react'
import Add from '../Add/Add'
import Head from '../Head/Head'
import './Showfilms.css'





function Showfilms(props) {
    console.log(props.location.state.item)
    const { title, description, rate ,durl} = props.location.state.item  
    return (
        <div className="ShowBloc">
            <div className="tete">
              <Head />
              <Add style={{color: "#fff"}}/>
           </div>
           <div className="ShowBloc">
               <div className="Showdrama">
               <iframe
                 title="react-summet"
                  width="756"
                  height="400"
                  src={durl}
                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen />
                   <div className="Showdescrip">
                      <h1>{title}</h1>
                      <h5>SUMMARY</h5>
                      <p>{description}</p>
                      
                          <h5>RATING</h5>
                          <h6>{rate}</h6>
                      

                   </div>            
                </div>  
           </div>
            
        </div>
    )
}


export default Showfilms

