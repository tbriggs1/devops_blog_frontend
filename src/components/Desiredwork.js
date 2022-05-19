import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import kub from '../static/images/kub.png';
import django from '../static/images/django.png';
import ard from '../static/images/arduino.png.png';
import angular from '../static/images/angular.png';
import c from '../static/images/c.png';
import goland from '../static/images/goland.jpg';


const Desiredwork = () => {
    const itemData = [
        {
          img: kub,
          title: 'Kubernetes',
        },
        {
          img: django,
          title: 'Django',
        },
        {
          img: ard,
          title: 'Arduino',
        },
        {
          img: angular,
          title: 'Packer',
        },
        {
          img: c,
          title: 'C++',
        },
        {
          img: goland,
          title: 'Golang',
        },
      ];

    return (
        <main className='current-work-main'>
            <h1>Desired Skills</h1>
            <ImageList sx={{ width: 1000, height: 450 }} cols={6} rowHeight={164} className='ui-list'>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    className='work-img'
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
            </ImageList>
        </main>
      );
}

export default Desiredwork;

          
