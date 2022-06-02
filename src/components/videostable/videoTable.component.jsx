import React, { useState } from 'react';
import MUIDataTable from 'mui-datatables';
import { Button, useColorModeValue } from '@chakra-ui/react';
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
      name: 'title',
      label: 'Title',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'url',
      label: 'URL',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'broadcaster',
      label: 'BroadCaster',
      options: {
        filter: true,
        sort: false,
      },
    },

    {
      name: '',
      label: '',
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta) => {
          return (
            <Button
              bg={'red.400'}
              rounded={'full'}
              color={'white'}
              flex={'1 0 auto'}
              _hover={{ bg: 'red.500' }}
              _focus={{ bg: 'red.500' }}
              // onClick={() => verifyUser(id)}
            >
              Delete
            </Button>
          );
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
        title={'Videos'}
        data={props.data}
        columns={columns}
        options={options}
      />
    </>
  );
}
