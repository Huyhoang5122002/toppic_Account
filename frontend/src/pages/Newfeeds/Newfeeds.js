import React, { useState, useEffect } from 'react'

import PageTitle from '../../components/Typography/PageTitle'

import { Link } from 'react-router-dom';


import {
  Table,

  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,

  Pagination,
} from '@windmill/react-ui'

import response from './components/index'
// make a copy of the data, for the second table
const response2 = response.concat([])

function Newfeeds() {

  // setup pages control for every table
  const [pageTable1, setPageTable1] = useState(1)
  const [pageTable2, setPageTable2] = useState(1)

  // setup data cho mỗi page
  const [dataTable1, setDataTable1] = useState([])
  const [dataTable2, setDataTable2] = useState([])

  // setup số trang
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChangeTable1(p) {
    setPageTable1(p)
  }



  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable1(response.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage))
  }, [pageTable1])

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
  }, [pageTable2])

  return (
    <>
    <div className="flex flex-col items-center justify-center">

      <PageTitle>News Feed</PageTitle>

      <TableContainer className="mb-8">
      
        <Table className="border">

            <TableBody >   {/*dataTable1 dưới dạng các hàng trong một bảng 
                            map để lặp qua mỗi phần tử trong dataTable1 */}
              {dataTable1.map((guest, i) =>  (   
                <TableRow key={i}> 
                  <TableCell>
                      <div>
                        <Link to={`/detailfeed/${guest.id}`}> {/* Tạo liên kết đến trang chi tiết */}

                          <p className="font-semibold">{guest.content}</p>
                        </Link>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{guest.description}</p>
                      </div>

                  </TableCell>


                </TableRow>
              ))}

              </TableBody>
         
        </Table>

        {/* tinh tong page */}
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable1}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    
    </div>

    </>

  )
}

export default Newfeeds
