import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { addMovies } from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await movieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err", err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovie();
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
