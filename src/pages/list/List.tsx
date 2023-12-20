import { useState, useEffect, Fragment } from 'react';

import { Container, Typography, Button } from '@mui/material'
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

import CreateList from './CreateList';
import ShowList from './ShowList';

import { initialListData } from '../../data/listData';

import { useLocation, Link, useParams } from 'react-router-dom';
import { apiPost } from '../../services/api_service';
import { iListUser } from '../../data/listData';
import useAuth from '../../hooks/useAuth';


const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

// ------------------------COMPONENT----------------------------------------------------------------

const List = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(initialListData.users.length < 1);
  // const [list, setList] = useState(initialListData);
  const [err, setErr] = useState('');
  const { list, setList } = useAuth();

  const listId = useParams();

  useEffect(() => {
    console.log(list);
    const getList = async () => {
      console.log('Running API call to get list')
      const body = listId;
      console.log(body)
      const slug = "list/find";
      apiPost(slug, body).then((res) => {
        if (res?.message === "success") {
          setList(res.data);
        } else if (res?.error) {
          setErr(res.error);
        } else {
          setErr("There was an error processing your request");
        }
        setIsLoading(false);
      });
    };
    // Checks if list has been uploaded -- 1234 is placeholder, which means it has not.
    if (list._id === "1234") {
      getList();

      return () => {
        setList(initialListData);
        setErr('')
        setIsLoading(true);
      };
    } else if (!listId) {
      setErr("Please enter your list name and access code to view this page.");
    }
    setIsLoading(false);
  }, []);


    const handleCreate = () => {
      setIsCreating(!isCreating);
    };
  
  
  const handleSubmitList = (users: iListUser[]) => {
    const prevList = list;
    setList({ ...list, users: users });
    if (users.length > 0) {
      const slug = "list/create";
      const body = { ...list, users: users };
      console.log(body);
      apiPost(slug, body).then((res) => {
        console.log(res);
        if (res?.message === "success") {
          console.log("Success saving list");
        } else if (res?.error) {
          setList(prevList);
          console.log(res);
          setErr(res.error);
        } else {
          setList(prevList);
          setErr("There was an error processing your request");
        }
      });
    }
  };


  if (isLoading) {
      return (
          <Container>
              Loading list...
      </Container>
    )
  }

  if (err) {
    return <Container>
      {err}
      <Link to={'/'}><Button>Return Home</Button></Link>
    </Container>;
  }
  
  return (
    <Container>
      <Typography variant="h2">{list.title}</Typography>
      {isCreating && <CreateList list={list} handleCreate={handleCreate} handleSubmitList={handleSubmitList} />}
      {!isCreating && (
        <>
          <ShowList list={list} />
          {list.users.length > 0 ? (
            <HtmlTooltip
              title={
                <Fragment>
                  <Typography color="inherit">Caution!</Typography>
                  {"Editing your list will cause your list to be re-created."}
                </Fragment>
              }
            >
              <Button
                onClick={() => {
                  handleCreate();
                }}
              >
                Edit list
              </Button>
            </HtmlTooltip>
          ) : (
            <Button
              onClick={() => {
                handleCreate();
              }}
            >
              Edit list
            </Button>
          )}
        </>
      )}
    </Container>
  );
}

export default List
