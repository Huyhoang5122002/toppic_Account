import React, { useState, useEffect } from 'react';

import PageTitle from '../../components/Typography/PageTitle'
// import SectionTitle from '../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { mockFaculties, mockGenders  } from './components/index'; // Đường dẫn tới file mockData.js
import { Button } from '@windmill/react-ui'


// import { MailIcon } from '../icons'

function Profile() {

  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [faculties, setFaculties] = useState([]);

  const [selectedGender, setSelectedGender] = useState('');
  const [genders, setGenders] = useState([]);

  const defaultValue = "Information Technology";

  useEffect(() => {
    // Sử dụng mock data
    setFaculties(mockFaculties);
    setGenders(mockGenders);
  }, []);
  
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <PageTitle>Student Information</PageTitle>
       
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 flex flex-wrap items-center justify-center">
        {/* Hàng đầu tiên */}
        <div className="flex w-full mb-4">
          <Label className="w-1/2 mr-4">
            <span>Full Name</span>
            <Input className="mt-1" placeholder="Full name" />
          </Label>
      
          {/* Thêm label thứ hai ở đây */}
          <Label className="w-1/2">
            <span>Student ID</span>
            <Input className="mt-1" placeholder="ID" />
          </Label>
        </div>
      
        {/* Hàng thứ hai */}
        <div className="flex w-full mb-4">
          <Label className="w-1/2 mr-4">
            <span>Email</span>
            <Input className="mt-1" placeholder="Email" />
          </Label>
      
          <Label className="w-1/2">
            <span>Phone Number</span>
            <Input className="mt-1" placeholder="Phone number" />
          </Label>
        </div>                    
      
        {/* Hàng thứ ba */}
        <div className="flex w-full mb-4">
        <Label className="w-1/2 mr-4">
          <span>Faculty</span>
              <Select
                className="mt-1"
                value={selectedFaculty}
                onChange={(e) => setSelectedFaculty(e.target.value)}
              >
                {faculties.map((faculty) => (
                  <option key={faculty.id} value={faculty.id}>
                    {faculty.name}
                  </option>
                ))}
              </Select>
          </Label>
      
          <Label className="w-1/2">
            <span>Class</span>
            <Input className="mt-1" placeholder="e.g: 20110CLA3..." />
          </Label>
        </div>
        
        {/* Hàng thứ tư */}
        <div className="flex w-full mb-4">
          <Label className="w-1/2 mr-4">
            <span>Major</span>
            <Input
              className="mt-1"
              value={defaultValue}
              readOnly
            />
          </Label>

          <Label className="w-1/2">
             <span>Academic Year</span>
                <div className="relative" style={{ width: "100%" }}>
                  <DatePicker
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Select date"
                    // onChange={(date) => setStartDate(date)} // Handle date change (use state if needed)
                    // Add any other props you need
                  />
                </div>
          </Label>

        </div>

        {/* Hàng 5 */}
        <div className="flex w-full mb-4">
        <Label className="w-1/2">
          <span>Date Of Birth</span>
            <div className="relative" style={{ width: "100%" }}>
              <DatePicker
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Select date"
                // onChange={(date) => setStartDate(date)} // Handle date change (use state if needed)
                // Add any other props you need
              />
            </div>
          </Label>
      
          <Label className="w-1/2">
          <span>Gender</span>
              <Select
                className="mt-1"
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
              >
                {genders.map((gender) => (
                  <option key={gender.id} value={gender.id}>
                    {gender.name}
                  </option>
                ))}
              </Select>
          </Label>
        </div>        

        {/* Hàng 6*/}
        <div className="flex w-full mb-4">
          <Label className="w-1/2 mr-4">
            <span>Citizen Identification Card</span>
            <Input className="mt-1" placeholder="XX-XXX-XXX" />
          </Label>
      
          <Label className="w-1/2">
            <span>Bank</span>
            <Input className="mt-1" placeholder="ABC" />
          </Label>
        </div>

        {/* Hàng 7*/}
        <div className="flex w-full">
          <Label className="w-full">    {/* full box */}
            <span>Adress</span>
            <Input className="mt-1" placeholder="e.g: 123 Street, City ..." />
          </Label>
        </div>
                
      </div>
      
      <div className="flex w-full items-end justify-end">
          <div className="px-1 my-1">
            <Button  className="bg-gray-300">
                <span className='ml-2/2'> Reset </span>
            </Button>
      </div>

      <div className="px-1 my-1">
      <Button>
          <span className='ml-2/2'> Update</span>
      </Button>
    </div>

    </div>     
  </div>
</div>
  )
}

export default Profile
