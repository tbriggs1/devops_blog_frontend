import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import aws from '../static/images/aws.png';
import python from '../static/images/python.png';
import java from '../static/images/java.jpg';
import flask from '../static/images/flask.png';
import spring from '../static/images/spring.png';
import ansible from '../static/images/ansible.svg';
import docker from '../static/images/docker.webp';
import git from '../static/images/git.png';
import jenkins from '../static/images/jenkins.jpg';
import react from '../static/images/react.png';
import vagrant from '../static/images/Vagrant.png';
import terraform from '../static/images/terraform.svg';


const Currentwork = () => {
    const itemData = [
        {
          img: aws,
          title: 'AWS',
        },
        {
          img: python,
          title: 'Python',
        },
        {
          img: java,
          title: 'JAVA',
        },
        {
          img: flask,
          title: 'Flask',
        },
        {
          img: spring,
          title: 'Spring',
        },
        {
          img: ansible,
          title: 'Ansible',
        },
        {
          img: docker,
          title: 'Docker',
        },
        {
          img: git,
          title: 'git',
        },
        {
          img: jenkins,
          title: 'Jenkins',
        },
        {
          img: react,
          title: 'React',
        },
        {
          img: vagrant,
          title: 'Vagrant',
        },
        {
          img: terraform,
          title: 'Terraform',
        },
      ];

    return (
        <main className='current-work-main'>
            <h1>Current Skills</h1>
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

export default Currentwork;

