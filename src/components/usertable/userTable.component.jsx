import React, { useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { Stack, Input, Button, useColorModeValue } from '@chakra-ui/react';
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
      name: '',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta) => {
          const [id] = tableMeta.rowData;

          return (
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              flex={'1 0 auto'}
              _hover={{ bg: 'blue.500' }}
              _focus={{ bg: 'blue.500' }}
            >
              Block
            </Button>
          );
        },
      },
    },
    {
      name: '',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta) => {
          const [verified] = tableMeta.rowData;
          console.log(verified);
          return verified === false ? (
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              flex={'1 0 auto'}
              _hover={{ bg: 'blue.500' }}
              _focus={{ bg: 'blue.500' }}
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
