import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Get_Blogs from '../api/Get_Blogs';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import ShareLink from 'react-linkedin-share-link'

import '../../static/styles/blog.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Blogs = ({setId}) => {
    const [name, setName] = useState([]);

  return (
      <main className='blog-main'>
        <Box  className='box-blog' sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Get_Blogs setName={setName} setId={setId}/>
                {name.map(d => (
                <Grid item xs={4} sm={6} md={3} key={d[0]}>
                        <Card sx={{ maxWidth: 345 }} className='blog-card'>
                        <CardMedia
                        component="img"
                        height="140"
                        image={d[4]}
                        alt="blog image"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='blog-title'>
                            {d[1]}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='blog-description'>
                            {d[3]}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Link onClick={() => setId([d[0], d[2]])} to={d[0]}><Button size="small">Read More</Button></Link>
                        </CardActions>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Box>
    </main>
  );
}

export default Blogs;


{/*  */}