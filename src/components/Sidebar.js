import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarksOutlinedIcon from '@material-ui/icons/BookmarksOutlined';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Button } from '@material-ui/core';

function Sidebar() {
          return (
                    <div className='sidebar'>
                              <TwitterIcon className='sidebar__logo' style={{ color: '#00b9ff'}}/>
                              <SidebarOption Icon = {HomeIcon} text='Home' active/>
                              <SidebarOption Icon = {ExploreOutlinedIcon} text='Explore'/>
                              <SidebarOption Icon = {NotificationsNoneOutlinedIcon} text='Notifactions'/>
                              <SidebarOption Icon = {MailOutlineOutlinedIcon} text='Messages'/>
                              <SidebarOption Icon = {BookmarksOutlinedIcon} text='Bookmarks'/>
                              <SidebarOption Icon = {SubjectOutlinedIcon} text='Lists'/>
                              <SidebarOption Icon = {PersonOutlineOutlinedIcon} text='profile'/>
                              <SidebarOption Icon = {MoreHorizOutlinedIcon} text='More'/>

                              <Button variant="outlined" className='sidebar__tweetButton' fullWidth>Tweet</Button>
                    </div>
          )
}

export default Sidebar
