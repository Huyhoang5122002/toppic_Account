// src/components/ResultItem.js
import React from 'react';
import './ResultItem.css';
import { buildImageUrl } from '../../constraints/common';
const ResultItem = ({id, title, description, time, file }) => {
  const handleTitleClick = () => {
    // Thêm logic xử lý khi title được click, ví dụ mở Reference detail
    console.log('Title clicked', id, title);
  };

  return (
      <div className="result-item relative mb-5 border p-1 shadow-md">
        <div className="data-column">
        <h3 onClick={handleTitleClick} className="text-lg w-full h-full">{title}</h3>
        </div>
        <div className="other-columns">
          <div className="custom-image-container my-3 mx-3">
            <div className="custom-child">
              <img src={buildImageUrl(file.image)} alt="Ảnh đại diện" className="w-full h-full object-cover rounded" />
            </div>
          </div>
          <div className= "mx-3 mt-4" >
            
            <p className="date">Khoa Công Nghệ Thông Tin</p>
            <p className="description">Mô tả: {description}</p>
            <p className="date text-red-500 text-sm">Thời gian thực hiện: {time.start}</p>
            <div className="relative">
                <a href={file.finallink} download>
                    <button className="bg-red-500 text-white px-1 py-1 rounded-full flex items-center justify-center w-1/10 ml-auto">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white ml-2 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                      <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
                    </svg>

                    <span className="ml-2 mr-3">Download</span>
                    </button>
                </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ResultItem;
