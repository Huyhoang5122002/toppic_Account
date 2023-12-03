import React, { useState } from 'react';
import NotificationDetail from './NotificationDetail'; // Import NotificationDetail component
import LoadingSpinner from './NotificationLoading';
const NotificationTable = ({ data, itemsPerPage, currentPage, onPageChange, totalItems }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading, setLoading] = useState(false);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={`mx-1 px-3 py-2 rounded hover:bg-gray-200 cursor-pointer ${
            i === currentPage ? 'bg-gray-300' : ''
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pages;
  };

  const handleRowClick = (row) => {
    // Khi người dùng click vào một dòng, đặt trạng thái loading và sau đó giả mạo thời gian để tải dữ liệu
    setLoading(true);
    setTimeout(() => {
      setSelectedRow(row);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b col-span-2  text-left">Tiêu đề</th>
            <th className="py-2 px-4 border-b col-span-1  text-left">Ngày thông báo</th>
            <th className="py-2 px-4 border-b col-span-1  text-left">Người thông báo</th>
          </tr>
        </thead>
        <tbody>
          {data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((notification) => (
            <tr
              key={notification.id}
              className={`hover:bg-gray-100 transition-all ${selectedRow === notification ? 'bg-gray-300' : ''}`}
              onClick={() => handleRowClick(notification)}
            >
              <td className="py-2 px-4 border-b col-span-2 text-left">{notification.title}</td>
              <td className="py-2 px-4 border-b col-span-1 text-left">{notification.date}</td>
              <td className="py-2 px-4 border-b col-span-1 text-left">{notification.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <ul className="flex">
          <li
            className={`mr-1 px-3 py-2 rounded hover:bg-gray-200 cursor-pointer ${
              currentPage === 1 ? 'bg-gray-300' : ''
            }`}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Previous
          </li>
          {renderPagination()}
          <li
            className={`ml-1 px-3 py-2 rounded hover:bg-gray-200 cursor-pointer ${
              currentPage === totalPages ? 'bg-gray-300' : ''
            }`}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </li>
        </ul>
      </div>
        {loading ? (
              // Hiển thị hiệu ứng loading khi đang tải dữ liệu cho NotificationDetail
              <LoadingSpinner></LoadingSpinner>
            ) : (
              // Khi dữ liệu đã được tải xong, hiển thị NotificationDetail
              selectedRow && (
                <NotificationDetail
                  title={selectedRow.title}
                  content={selectedRow.detail}
                  attachment={selectedRow.attachment}
                />
              )
        )}
      </div>
  );
};

export default NotificationTable;
