import React,{ Component } from  'react';







    class Searchbar extends Component {

        constructor (props){
            super(props)
            this.state={term:'' }

        }



        render() {


            return (
              <div className='search-bar'>
                <input
                    value={this.state.term}

                    onChange={event => this.oninputchange(event.target.value)

                }/>



              </div>



            );

        }

        oninputchange (term){

            this.setState({term:term});
            this.props.onsearch(term);


        }




    }





    export default Searchbar;

