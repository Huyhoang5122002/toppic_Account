import React,{ useState, useEffect } from 'react';
import NotificationTable from './NotificationTable';

const mockupData = [
  {
    id: 1,
    title: 'THÔNG BÁO Kết quả xét khen thưởng năm học 2022 - 2023',
    date: '01/01/2023',
    author: 'Giáo viên A',
    detail: `
    **Bold Text**  
    *Italic Text*  

    # Heading 1  
    ## Heading 2  

    - List item 1  
    - List item 2  
  `,
  attachment: {
  fileName: 'Ten_File.pdf',
  url: 'duong_dan_den_file.pdf',
  }
 },
  {
    id: 2,
    title: '[Tuần 4] Cuộc thi trực tuyến “Tuổi trẻ học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh” năm 2023',
    date: '02/01/2023',
    author: 'Giáo viên B',
    detail: `
    ## Hello World

    Bold **bold text**
    Italic _italicized text_
    Blockquote > blockquote
    Ordered List
    
    1. First item
    1. Second item
    1. Third item
    
    Unordered List
    
    - First item
    - Second item
    - Third item
    
    
    A note[^1]
    
    ---
    
    Link [link](https://www.example.com)
    
    Image ![alt text](https://retool.com/static/f7c3a4ef34744c92d441df532e8d3969/8ca30/revision-history.webp)
    
  `,
  attachment: {
  fileName: 'Ten_File.pdf',
  url: 'duong_dan_den_file.pdf',
  } 
  },  
  {
    id: 3,
    title: '[Tuần 2] Mời các bạn Sinh viên tham gia Cuộc thi trực tuyến “Tuổi trẻ học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh” năm 2023',
    date: '02/01/2023',
    author: 'Giáo viên B',
    detail: `
    **Bold Text**  
    *Italic Text*  

    # Heading 1  
    ## Heading 2  

    - List item 1  
    - List item 2  
  `,
  attachment: {
  fileName: 'Ten_File.pdf',
  url: 'duong_dan_den_file.pdf',
  } 
  },
  {
    id: 4,
    title: '[Tuần 1] - Tham gia thi trắc nghiệm trực tuyến được cộng điểm rèn luyện và giải thưởng',
    date: '02/01/2023',
    author: 'Giáo viên B',
    detail: `
    **Bold Text**  
    *Italic Text*  

    # Heading 1  
    ## Heading 2  

    - List item 1  
    - List item 2  
  ` ,
    attachment: {
    fileName: 'Ten_File.pdf',
    url: 'duong_dan_den_file.pdf',
    }
  },
  {
    id: 5,
    title: 'Thông báo về lịch học tuần đầu cho lớp Machine Learning (MALE431085E_03FIE)',
    date: '02/01/2023',
    author: 'Nguyễn Trần Thi Văn',
    detail: `
    **Bold Text**  
    *Italic Text*  

    # Heading 1  
    ## Heading 2  

    - List item 1  
    - List item 2  
  ` ,
  attachment: {
    fileName: 'Ten_File.pdf',
    url: 'duong_dan_den_file.pdf',
  }
   },
  
  {
    id: 6,
    title: 'V/v buổi học bù Design Patterns sáng 17/05',
    date: '02/01/2023',
    author: 'Nguyễn Trần Thi Văn',
    detail: '<p>Sinh viên 6 <strong class="font-bold italic">John Doe</strong> đã hoàn thành đăng ký môn học.</p>',
    attachment: {
      fileName: 'Ten_File.pdf',
      url: 'duong_dan_den_file.pdf',
    }
  },
  // Add more mockup data as needed
];

const Notification = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Số lượng dòng mỗi trang
  const totalItems = mockupData.length;
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    // Simulate a delay of 1 second for loading effect
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clear the timeout if the component unmounts or the data changes
    return () => clearTimeout(delay);
  }, []);

  return (
    <main className="h-full overflow-y-auto bg-gray-100" style={{ margin: '50px' }}>
      <div className="container grid grid-cols-3 gap-6 px-6 mx-auto mt-10">
        <header className="col-span-3 py-4 text-black bg-white text-center">
          <h1 className="text-2xl font-bold text-blue-500">Thông báo cá nhân</h1>
        </header>

        <section className="col-span-3 md:col-span-3">
          {loading ? (
            // Hiển thị hiệu ứng loading khi đang tải dữ liệu
            <div className="text-center mt-8">
              <p className="text-gray-600">Đang tải dữ liệu...</p>
            </div>
          ) : (
            // Khi dữ liệu đã được tải xong, hiển thị bảng dữ liệu
            <NotificationTable
              data={mockupData}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalItems={totalItems}
            />
          )}
        </section>
      </div>
    </main>
  );
};

export default Notification;