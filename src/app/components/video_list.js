
import  React from  'react';
//
// import  { Component } from  'react';

import  Videolist_item from  './videolist_itemss';




const videolist = function(props) {

    const narry=props.videos.map((video) =>{
// a function is passed with defination props.onvideo=funbody
          return (
            <Videolist_item  key={video.etag}  video={video}
            onvideoselect={props.onvideoselect}

            />

          );

    })






    return (

        <ul className= 'col-md-6  list-group'>


            {narry}



        </ul>


    );




};



export  default  videolist;