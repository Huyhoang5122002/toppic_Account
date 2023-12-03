import React, { useState,useEffect  } from 'react';
import ReactPaginate from 'react-paginate';
import ResultItem from '../components/Reference/ResultItem'; // Đường dẫn đến component ResultItem
import Header from '../components/Header';
import projectApi from '../api/projectAPI';
// const results = [
//     {
//         id: 1,
//         title: 'Chế tạo mô hình máy uốn ống sử dụng con lăn để giảm ma sát',
//         imageUrl: 'https://thuvienso.hcmute.edu.vn/images/libedu/document/thumbnail/2023/20231114/hcmute/thehoangthk/80x100/hcmute_1699936564.jpg',
//         description: 'Thiết kế và chế tạo máy kiểm tra tốc độ vòng quay đạt chuẩn của các dạng cốc bi trong ngành công nghiệp băng tải cho công ty Intech Group: Ðồ án tốt nghiệp ngành Công nghệ kỹ thuật cơ khí/ Nguyễn Trí Hưng, Nguyễn Hiếu Lễ, Nguyễn Hoàng Vũ; Phan Thanh Vũ ( Giảng viên hướng dẫn )--Tp. Hồ Chí Minh: Đại học Sư phạm Kỹ thuật Tp. Hồ Chí Minh, 2023 Call.',
//         date: '01/01/2023',
//         downloadLink: 'link_tai_xuong_1.zip',
//     },
//     {
//         id: 2,
//         title: 'Nghiên cứu, thiết kế, chế tạo bàn vẽ tranh cát',
//         imageUrl: 'https://thuvienso.hcmute.edu.vn/images/libedu/document/thumbnail/2023/20231114/hcmute/thehoangthk/80x100/hcmute_1699936564.jpg',
//         description: 'Thiết kế và chế tạo máy kiểm tra tốc độ vòng quay đạt chuẩn của các dạng cốc bi trong ngành công nghiệp băng tải cho công ty Intech Group: Ðồ án tốt nghiệp ngành Công nghệ kỹ thuật cơ khí/ Nguyễn Trí Hưng, Nguyễn Hiếu Lễ, Nguyễn Hoàng Vũ; Phan Thanh Vũ ( Giảng viên hướng dẫn )--Tp. Hồ Chí Minh: Đại học Sư phạm Kỹ thuật Tp. Hồ Chí Minh, 2023 Call.',
//         date: '01/01/2023',
//         downloadLink: 'link_tai_xuong_1.zip',
//     },
//     {
//         id: 3,
//         title: 'Nghiên cứu, thiết kế và chế tạo Robot chơi đàn Piano',
//         imageUrl: 'https://thuvienso.hcmute.edu.vn/images/libedu/document/thumbnail/2023/20231114/hcmute/thehoangthk/80x100/hcmute_1699936564.jpg',
//         description: 'Thiết kế và chế tạo máy kiểm tra tốc độ vòng quay đạt chuẩn của các dạng cốc bi trong ngành công nghiệp băng tải cho công ty Intech Group: Ðồ án tốt nghiệp ngành Công nghệ kỹ thuật cơ khí/ Nguyễn Trí Hưng, Nguyễn Hiếu Lễ, Nguyễn Hoàng Vũ; Phan Thanh Vũ ( Giảng viên hướng dẫn )--Tp. Hồ Chí Minh: Đại học Sư phạm Kỹ thuật Tp. Hồ Chí Minh, 2023 Call.',
//         date: '01/01/2023',
//         downloadLink: 'link_tai_xuong_1.zip',
//     },
//     {
//         id: 4,
//         title: 'Thiết kế và chế tạo máy kiểm tra tốc độ vòng quay đạt chuẩn của các dạng cốc bi trong ngành công nghiệp băng tải cho công ty Intech Group',
//         imageUrl: 'https://thuvienso.hcmute.edu.vn/images/libedu/document/thumbnail/2023/20231114/hcmute/thehoangthk/80x100/hcmute_1699936564.jpg',
//         description: 'Thiết kế và chế tạo máy kiểm tra tốc độ vòng quay đạt chuẩn của các dạng cốc bi trong ngành công nghiệp băng tải cho công ty Intech Group: Ðồ án tốt nghiệp ngành Công nghệ kỹ thuật cơ khí/ Nguyễn Trí Hưng, Nguyễn Hiếu Lễ, Nguyễn Hoàng Vũ; Phan Thanh Vũ ( Giảng viên hướng dẫn )--Tp. Hồ Chí Minh: Đại học Sư phạm Kỹ thuật Tp. Hồ Chí Minh, 2023 Call.',
//         date: '01/01/2023',
//         downloadLink: 'link_tai_xuong_1.zip',
//     },
//     {
//       id: 5,
//       title: 'Nghiên cứu tối ưu hóa mặt bằng để nâng cao năng suất trong nhà máy ly nhựa quấn giấy',
//       imageUrl: 'https://thuvienso.hcmute.edu.vn/images/libedu/document/thumbnail/2023/20231114/hcmute/thehoangthk/80x100/hcmute_1699936564.jpg',
//       description: 'Thiết kế và chế tạo máy kiểm tra tốc độ vòng quay đạt chuẩn của các dạng cốc bi trong ngành công nghiệp băng tải cho công ty Intech Group: Ðồ án tốt nghiệp ngành Công nghệ kỹ thuật cơ khí/ Nguyễn Trí Hưng, Nguyễn Hiếu Lễ, Nguyễn Hoàng Vũ; Phan Thanh Vũ ( Giảng viên hướng dẫn )--Tp. Hồ Chí Minh: Đại học Sư phạm Kỹ thuật Tp. Hồ Chí Minh, 2023 Call.',
//       date: '01/01/2023',
//       downloadLink: 'link_tai_xuong_1.zip',
//     },
//     {
//       id: 6,
//       title: 'Nghiên cứu tối ưu hóa mặt bằng để nâng cao năng suất trong nhà máy ly nhựa quấn giấy',
//       imageUrl: 'https://thuvienso.hcmute.edu.vn/images/libedu/document/thumbnail/2023/20231114/hcmute/thehoangthk/80x100/hcmute_1699936564.jpg',
//       description: 'Thiết kế và chế tạo máy kiểm tra tốc độ vòng quay đạt chuẩn của các dạng cốc bi trong ngành công nghiệp băng tải cho công ty Intech Group: Ðồ án tốt nghiệp ngành Công nghệ kỹ thuật cơ khí/ Nguyễn Trí Hưng, Nguyễn Hiếu Lễ, Nguyễn Hoàng Vũ; Phan Thanh Vũ ( Giảng viên hướng dẫn )--Tp. Hồ Chí Minh: Đại học Sư phạm Kỹ thuật Tp. Hồ Chí Minh, 2023 Call.',
//       date: '01/01/2023',
//       downloadLink: 'link_tai_xuong_1.zip',
//     },
//     {
//       id: 7,
//       title: 'Nghiên cứu tối ưu hóa mặt bằng để nâng cao năng suất trong nhà máy ly nhựa quấn giấy',
//       imageUrl: 'https://thuvienso.hcmute.edu.vn/images/libedu/document/thumbnail/2023/20231114/hcmute/thehoangthk/80x100/hcmute_1699936564.jpg',
//       description: 'Thiết kế và chế tạo máy kiểm tra tốc độ vòng quay đạt chuẩn của các dạng cốc bi trong ngành công nghiệp băng tải cho công ty Intech Group: Ðồ án tốt nghiệp ngành Công nghệ kỹ thuật cơ khí/ Nguyễn Trí Hưng, Nguyễn Hiếu Lễ, Nguyễn Hoàng Vũ; Phan Thanh Vũ ( Giảng viên hướng dẫn )--Tp. Hồ Chí Minh: Đại học Sư phạm Kỹ thuật Tp. Hồ Chí Minh, 2023 Call.',
//       date: '01/01/2023',
//       downloadLink: 'link_tai_xuong_1.zip',
//     },
//     // Thêm các kết quả khác vào đây
//   ];
  const Reference = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const resultsPerPage = 5; // Số kết quả trên mỗi trang
    const totalResults = results?.length || 0;
    const pageCount = Math.ceil(totalResults / resultsPerPage);
    const MAX_DISPLAY_PAGES = 5; // Số trang tối đa được hiển thị trước khi thêm "..."
  
    const handlePageClick = (page) => {
      setCurrentPage(page.selected + 1);
    };
  
    const startIndex = Math.max(0, Math.min((currentPage - 1) * resultsPerPage, totalResults - resultsPerPage));
    const endIndex = Math.min(startIndex + resultsPerPage, totalResults);
    const displayedResults = results?.slice(startIndex, endIndex) || [];
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await projectApi.published();
          console.log(response)
          setResults(response);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []); 
  
    // Use useEffect to handle changes in results
    useEffect(() => {
      // Do something when results change, if needed
      console.log('Results have been updated:', results);
    }, [results]);
    return (
      <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
        <div>
          <Header/>
        </div>
        <div className="flex-1 mt-10">
          <div className="grid grid-cols-5">
            <div className="col-span-1"></div>
            <div className="col-span-3 flex flex-col relative">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>

              <header className="py-4 text-black bg-white text-center">
                <h1 className="text-2xl font-bold text-blue-500">Tài liệu tham khảo</h1>
              </header>
              <div className="flex justify-between items-center p-4 text-gray-600">
              <div>
                Kết quả {startIndex + 1} - {endIndex} trong tổng số {totalResults}
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="border border-gray-300 p-2 rounded-md"
                />
                <button className="ml-2 bg-blue-500 text-white p-2 rounded-md">
                  Tìm kiếm
                </button>
              </div>
            </div>
              {displayedResults.map((result, index) => (
                <ResultItem key={index} {...result} className="m-5" />
              ))}
              <div className="mb-5 justify-end ml-auto">
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a
                    href="#"
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                      currentPage === 1 ? 'cursor-not-allowed' : ''
                    }`}
                    disabled={currentPage === 1}
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.707 16.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L6.414 10H17a1 1 0 010 2H6.414l4.293 4.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  {[...Array(Math.min(pageCount, MAX_DISPLAY_PAGES))].map((_, index) => {
                    const pageNumber = index + 1;
                    const isCurrent = pageNumber === currentPage;
                    return (
                      <a
                        key={index}
                        href="#"
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                          isCurrent ? 'z-10 bg-blue-500 text-white cursor-not-allowed' : ''
                        }`}
                        aria-current={isCurrent ? 'page' : undefined}
                        disabled={isCurrent}
                      >
                        {pageNumber}
                      </a>
                    );
                  })}
                  {pageCount > MAX_DISPLAY_PAGES && currentPage < pageCount - MAX_DISPLAY_PAGES + 1 && (
                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
                  )}
                  {[...Array(Math.min(pageCount, MAX_DISPLAY_PAGES))].map((_, index) => {
                    const pageNumber = pageCount - MAX_DISPLAY_PAGES + index + 1;
                    const isCurrent = pageNumber === currentPage;
                    return (
                      <a
                        key={index}
                        href="#"
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                          isCurrent ? 'z-10 bg-blue-500 text-white cursor-not-allowed' : ''
                        }`}
                        aria-current={isCurrent ? 'page' : undefined}
                        disabled={isCurrent}
                      >
                        {pageNumber}
                      </a>
                    );
                  })}
                  <a
                    href="#"
                    onClick={() => setCurrentPage((prev) => Math.min(pageCount, prev + 1))}
                    className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
                      currentPage === pageCount ? 'cursor-not-allowed' : ''
                    }`}
                    disabled={currentPage === pageCount}
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H3a1 1 0 010-2h10.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
              </>
              )}
              <h3>Tin tức nổi bật</h3>
            </div>
            <div className="col-span-1"></div>
            
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Reference;