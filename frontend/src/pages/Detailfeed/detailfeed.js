// Detailfeed.js
import React from 'react';
import { useParams } from 'react-router-dom';
import response from '../Newfeeds/components/index';
import PageTitle from '../../components/Typography/PageTitle'


import {
  Table,
  TableContainer,

  Pagination,
} from '@windmill/react-ui'

function Detailfeed() {
  const { id } = useParams();
  const selectedPost = response.find(post => post.id === parseInt(id));

  if (!selectedPost) {
    return <div>The article does not exist</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
      <PageTitle>News Feed</PageTitle>
      
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 flex flex-wrap items-center justify-center">
            <div className="flex w-full mb-4">
              <div>
                <h1>{selectedPost.content}</h1>
                  <p>{selectedPost.description}</p>
              </div>

            </div>
        </div>
       
      </div>
    
    </>
    
  )
}

export default Detailfeed;
