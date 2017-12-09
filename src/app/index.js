/**
 * Created by shivam on 3/12/17.
 */

console.log("done");




var React = require('react');
var ReactDOM = require('react-dom');


import  l from 'lodash';



import  Searchbar from  './components/searchbar';

import  YTSearch  from  'youtube-api-search';

import  { Component } from  'react';

import  Videolist from  './components/video_list';

import  Videodetail from  './components/video_detaiils'


class MyComponent extends React.Component {

    render() {
        return (<div>
        <Searchbar />

       "hello shivam here good morninfg "


        </div>

        )
    }
}
const Api_Key='AIzaSyBosE39jDr4U9AeWIFIFpbFlAfOz6PiZRM';


class App extends Component {

    constructor (props){
        super(props)
      this.state={videos: [] ,

           selectedvideo:null

      }


       this.videosearch('sex');


    }





  render (){
      const Videosearchi= l.debounce((term)=> {this.videosearch(term)},650);



      return (
      <div>




          <Searchbar  onsearch={Videosearchi}  />

          <Videodetail video={this.state.selectedvideo}   />

          <Videolist  videos={this.state.videos}  onvideoselect={selectedvideo =>{

              this.setState({ selectedvideo })

          } }     />


      </div>




       );
  }

 videosearch (term){

     YTSearch ({ key:Api_Key,term:term },(videos) =>{

         this.setState({videos:videos,
             selectedvideo:videos[0]

         })

         console.log(this.state)


     });

 }




}



const Appn = () => {




}


ReactDOM.render(<App />,document.getElementById('hello'));





