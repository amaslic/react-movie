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


	  useEffect(() => {
		  fetch(movie_API+"movie/"+data.id+"/credits?api_key="+api_key).then((res) => res.json()).then((data) => setMovieDetails(data) );
	  }, [])

   const openModal = function() {
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



  );
}

export default MovieModal;
