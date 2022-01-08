import { useState, useEffect } from 'react';
import { 
    Grid, 
    GridItem, 
    Stack,
    Button,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Skeleton,
    TableCaption
} from '@chakra-ui/react';
import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Link,
    Outlet
} from 'react-router-dom';
import $ from 'jquery';
import RowsDetsCrt from './RowsDetsCrt';

  const CertifyTable = () =>{

    const [ doctors, setDoctors ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);


    useEffect (
    () => {
        var urlEnd2 = 'http://localhost:8080/WebApplication1/NotCertified';
        $.ajax({
            url: urlEnd2,
            type: "GET",
            contentType: 'application/json',
            success: function (result) {
              console.log("Success");
              console.log(result);
                setDoctors(result);
                //setInfo(result)
                console.log(doctors);
                setIsLoaded(true);
            },
            error: function (result) {
                console.log("Fail");
                console.log(result)
                //var json = JSON.parse(result.responseText)
                //console.log(json)

                setIsLoaded(false);
            }
        });
    }
    ,
    []);


   



    return(
        <Table variant='striped' colorScheme='grey'>
          <Thead>
            <Tr>
              <Th>Action</Th>
              <Th>Id</Th>
              <Th>Username</Th>
              <Th>Name</Th>
              <Th>Date Of Birth</Th>
              <Th>Specialty</Th>
            </Tr>
          </Thead>
          {isLoaded ?
          <Tbody>
            
            {doctors.map(doctor => <RowsDetsCrt info={doctor} key={doctor.doctor_id} />)}
          </Tbody>
          :
          <Tbody>
            <Tr>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            </Tr>
            <Tr>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            </Tr>
            <Tr>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            </Tr>
            <Tr>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            </Tr>
            <Tr>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            </Tr>
            <Tr>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            </Tr>
            <Tr>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            </Tr>
            <Tr>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            <Td><Skeleton height='40px' w='100%' /></Td>
            </Tr>
          </Tbody>
  }
        </Table>
    )
  }
  export default CertifyTable;