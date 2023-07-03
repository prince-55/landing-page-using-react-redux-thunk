import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Modal, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import './../styles/about.scss'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../redux/actions/userAction'
import { OPEN_PROFILE, CLOSE_PROFILE } from '../redux/constants/profileConstants';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import group94 from './../assets/group94.png'
import group95 from './../assets/group95.png'
import group96 from './../assets/group96.png'
import Carousel from 'react-material-ui-carousel'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';


function About() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector(state => state.userList);
  const open = useSelector(state => state.openModal.open);
  const selectedUser = useSelector(state => state.openModal.user);
  const { loading, users, error } = userList;

  useEffect(() => {
    dispatch(userAction())
  }, [dispatch])


  return (
    <>
      <Container id="about" className='mb-5'>
        <Box className="d-flex p-5">
          <div className='col-sm-12 col-md-10'>
            <Typography variant="h6">Users</Typography>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <Button className=' btn-see col-sm-12 col-md-2' 
                  onClick={() => navigate('/datatable', { state: userList })}>
                  See All</Button>
        </Box>
        {loading ? (<h3 style={{ textAlign: 'center' }}>Loading pls wait...</h3>) : error ? error 
        : <Grid container spacing={2}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center">
          {users?.slice(0, 4)?.map((user) => (
            <Grid item className='user-profile-grid'>
              <Card className="user-profile" key={user.created}>
                <CardMedia>
                  <Avatar
                    sx={{ width: 105, height: 105 }}>
                    {user.name.charAt(0)}{user.name.charAt(1)}
                  </Avatar>
                </CardMedia>
                <CardContent>
                  <Typography variaint="h3" sx={{ fontWeight: 700 }}>{user.name}</Typography>
                </CardContent>
                <CardActions>
                  <Button className='btn-profile' size="small" onClick={() => {
                    dispatch({
                      type: OPEN_PROFILE,
                      payload: user,
                    })
                  }}>See Profile</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>}
      </Container>

      <Modal
        open={open}
        onClose={() => dispatch({ type: CLOSE_PROFILE })}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card id="modal-box">
          <CloseIcon sx={{alignSelf: 'end',
                         marginRight: 2,
                        cursor:'pointer'}}
                    onClick={() => dispatch({ type: CLOSE_PROFILE })}/>
          <Avatar
            sx={{ width: 125, height: 125 }}>
            {selectedUser?.name.charAt(0)}{selectedUser?.name.charAt(1)}
          </Avatar>
          <Typography variaint="h3" sx={{ fontWeight: 700 }}>{selectedUser?.name}</Typography>
          <div className='d-flex justify-content-evenly'>
            <Typography variant='span'><MailIcon /> {selectedUser?.name}@gmail.com</Typography>
            <Typography variant='span'><PhoneIcon />+12345678 </Typography>
          </div>
          <Typography variant='h5'>Movies</Typography>
          <div className='w-100'>
            <Carousel>
              <div className='img-group'><img src={group94} alt="movie1" /></div>
              <div className='img-group'><img src={group95} alt="movie2" /></div>
              <div className='img-group'><img src={group96} alt="movie3" /></div>
            </Carousel>
          </div>
        </Card>
      </Modal>
    </>
  )
}

export default About