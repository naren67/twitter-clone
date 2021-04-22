import { Avatar } from '@material-ui/core'
import React,{forwardRef} from 'react'
import './Post.css'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import firebase from 'firebase'


const Post = forwardRef(({displayName, userName, timestamp, verified, text, image, avatar, comment, retweet, heart, share}, ref)=>{
   return (
             <div className='post' ref={ref}>
                    <div className="post__header">
                    <div className="post__right">
                                 <Avatar src={avatar}/>
                            
                       </div>
                       <div className="feed__left">
                                <div className="post__imageSection">
                                <div className="feed__displayName">
                                           <p>{displayName} <span className='verified'>{verified && <CheckCircleOutlineIcon style={{ fontSize: 14 }}/>}</span> <span className='userName'>@{userName}</span> </p>
                                 </div>
                                 <div className="feed__text">
                                           <p>{text}</p>
                                 </div>
                                 <div className="post__time">
                                    <p>{new Date(timestamp ?.toDate()).toUTCString()}</p>
                                 </div>
                                 <div className="feed__imageSent">
                                           <img src={image} alt=""/>
                                 </div>
                                </div>
                                 <div className="post__commentSections">
                                 <div className="post__footer">
                              <div className="post__icon1">{<ChatBubbleOutlineRoundedIcon style={{ fontSize: 17 }}/>}</div>
                              <div className="post__icon2">{<RepeatRoundedIcon style={{ fontSize: 17 }}/>}</div>
                              <div className="post__icon3">{<FavoriteBorderRoundedIcon style={{ fontSize: 17 }}/>}</div>
                              <div className="post__icon4">{<ShareRoundedIcon style={{ fontSize: 17 }}/>}</div>
                                </div>
                                 </div>
                       </div>
                    </div>
                   
             </div>
   )
}
)
export default Post
