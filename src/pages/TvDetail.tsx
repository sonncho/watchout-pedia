import React from 'react';
import { useParams } from 'react-router-dom';

const TvDetail = () => {
  const { id } = useParams() as { id: string };
  
  return (
    <div>TvDetail {id}</div>
  )
}

export default TvDetail