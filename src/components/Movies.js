import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const api_key = "bdf0f907bb713c41c8b7db8bbae0e3a1";
const movie_API = "https://api.themoviedb.org/3/";
const img_api = "https://image.tmdb.org/t/p/w1280";

Modal.setAppElement("#root");

function Movies(params) {
  const data = params.data;
  const [ modalIsOpen, setIsOpen ] = useState(false);
  const [ movieDetails, setMovieDetails ] = useState([]);
  let movieId = 0;


  	  useEffect(() => {
		  if(modalIsOpen)
  		  	fetch(movie_API+"movie/"+movieId+"/credits?api_key="+api_key).then((res) => res.json()).then((data) => setMovieDetails(data) );
  	  }, [modalIsOpen])

     const openModal = function() {
		 movieId = data.id;
      setIsOpen(true);
    }

    const afterOpenModal = function() {

  	  console.log(movieDetails);
    }

    const closeModal = function(e){
  	e.stopPropagation();
      setIsOpen(false);
    }

  return (

	    <div className="item-card" onClick={openModal}>
	      <div className="item-image">
	        <img src={img_api + data.poster_path} alt={data.original_title} />
	      </div>
	      <div className="item-info">
	        <h5>{data.title}</h5>
	        <h6>{data.vote_average}</h6>
	      </div>
		  <Modal
			 isOpen={modalIsOpen}
			 onAfterOpen={afterOpenModal}
			 onRequestClose={closeModal}
			 className="item-modal"
		   >
		 <div className="modal-image">
		   <img src={img_api + data.poster_path} alt={data.original_title} />
		 </div>
		 <div className="modal-info">
		   <h1>{data.title}</h1>
		   <h4>Original title: {data.original_title}</h4>
		   <p>{data.overview}</p>
		 </div>
		</Modal>
	    </div>




  );
}

export default Movies;
