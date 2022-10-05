import React from "react";
import MovieCard from "../components/movieCard";
import SampleMovie from "./sampleData";

export default {
  title: "Home Page/MovieCard",
  component: MovieCard,
};

export const Basic = () => {
  const movie = SampleMovie;
  movie.title = "Something Random";
  return (
    <MovieCard
      movie={SampleMovie}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
  return (
    <MovieCard
      movie={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";