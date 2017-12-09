
import  React from  'react';


const Videodetail=({video} ) => {


    if(!video){
        return (
            <div> is loading now </div>
        );
    }

    const videoId=video.id.videoId;
    // const url="http//www.youtube.com/embed"+videoid;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (

        <div className= "video-detail col-md-8">

            <div className= "embed-responsive embed-responsive-16by9">

                <iframe className="embed-responsive-item" src={url}>

                </iframe>


            </div>


            <div className='details'>
              <div>
                  {video.snippet.title}

              </div>
            <div>

                {video.snippet.description}
            </div>




            </div>









        </div>



    );



















}


export default  Videodetail;