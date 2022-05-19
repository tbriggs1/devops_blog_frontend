import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import server from '../static/images/serverless.png';
import packer from '../static/images/packer.png';


const Futurework = () => {
    const itemData = [
        {
          img: packer,
          title: 'Packer',
        },
        {
          img: server,
          title: 'Serverless',
        },
      ];

    return (
        <main className='current-work-main'>
            <h1>Currently Learning</h1>
            <ImageList sx={{ width: 450, height: 450 }} cols={2} rowHeight={164} className='ui-list'>
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

export default Futurework;

          