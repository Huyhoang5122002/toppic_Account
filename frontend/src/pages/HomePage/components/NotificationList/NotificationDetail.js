import React from 'react';
const NotificationDetail = ({ title, content, attachment }) => {
  return (
    <div className=" animate-pulse mt-4 p-4 bg-white border border-gray-200">
      <h2 className="text-lg font-bold mb-2">Nội dung thông báo: {title}</h2>
      <p dangerouslySetInnerHTML={{ __html: content }} />

      {attachment && (
        <div className="mt-2">
          <strong>File đính kèm:</strong>{' '}
          <a href={attachment.url} target="_blank" rel="noopener noreferrer">
            {attachment.fileName}
          </a>
        </div>
      )}
    </div>
  );
};

export default NotificationDetail;
