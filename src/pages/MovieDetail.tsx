import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams() as { id: string } ;
  return (
    <div>MovieDetail { id }</div>
  )
}

export default MovieDetail