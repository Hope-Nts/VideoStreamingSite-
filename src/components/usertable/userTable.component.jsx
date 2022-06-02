import React, { useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { Stack, Input, Button, useColorModeValue } from '@chakra-ui/react';
import {
  blockUser,
  unBlockUser,
  verifyUser,
} from '../../utils/firebase/firebase.utils';
// const DateOfCreation = (props) => {
//   const date = props.date ? new Date(`${props.date}`) : "";
//   return <div>{date.toDateString()} </div>;
// };

export default function TicketTable(props) {
  const columns = [
    {
      name: 'id',
      label: 'ID',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'username',
      label: 'Username',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'userType',
      label: 'User Type',
      options: {
        filter: true,
        sort: false,
      },
    },

    {
      name: 'verified',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta) => {
          // const [serviceID, userId] = tableMeta.rowData;
          return <span> {`${value}`}</span>;
        },
      },
    },

    {
      name: 'blocked',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta) => {
          // const [serviceID, userId] = tableMeta.rowData;
          return <span> {`${value}`}</span>;
        },
      },
    },
    {
      name: 'blocked',
      label: 'Access',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta) => {
          const id = tableMeta.rowData[0];
          return value === false ? (
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              flex={'1 0 auto'}
              _hover={{ bg: 'blue.500' }}
              _focus={{ bg: 'blue.500' }}
              onClick={() => blockUser(id)}
            >
              Block
            </Button>
          ) : (
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              flex={'1 0 auto'}
              _hover={{ bg: 'blue.500' }}
              _focus={{ bg: 'blue.500' }}
              onClick={() => unBlockUser(id)}
            >
              Unblock
            </Button>
          );
        },
      },
    },
    {
      name: 'verified',
      label: 'Verify?',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta) => {
          const id = tableMeta.rowData[0];
          return value === false ? (
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              flex={'1 0 auto'}
              _hover={{ bg: 'blue.500' }}
              _focus={{ bg: 'blue.500' }}
              onClick={() => verifyUser(id)}
            >
              Verify
            </Button>
          ) : null;
        },
      },
    },
  ];

  const options = {
    filterType: 'checkbox',
    responsive: 'vertical',
    print: true,
    download: true,
  };

  return (
    <>
      {/* <IssueModal
        isModalVisible={modalVisible}
        ticketId={ticketId}
        issue={issue}
        handleModalVisibility={toggleModal}
      /> */}

      <MUIDataTable
        title={'Users'}
        data={props.data}
        columns={columns}
        options={options}
      />
    </>
  );
}
