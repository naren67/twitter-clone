import React, { useEffect, useState } from 'react'
import './Feed.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddIcon from '@material-ui/icons/Add';
import { Avatar, Button } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import Post from './Post';
import db from '../firebase';
import FlipMove from 'react-flip-move';

function Feed() {

          const [posts, setPosts] = useState([]) 

          const [tweetText, setTweetText] = useState('')
          const [tweetImage, setTweetImage] = useState('')

          // console.log(tweetText)
          // console.log(tweetImage)

          useEffect(()=>{
              db.collection('posts').onSnapshot(snapshot=>(
                    setPosts(snapshot.docs.map(doc=> doc.data()))  
              ))       
          },[])

          //send tweet on pressing the button
          const sendTweet = (e)=>{
                    e.preventDefault()

                    db.collection('posts').add({
                              displayName : 'Ellen mark',
                              userName : 'ellenmaek',
                              verified : 'true',
                              text : tweetText,
                              image : tweetImage,
                              avatar : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png',
                    })

                    setTweetText('')
                    setTweetImage('')
          }

          // console.log(posts)

          return (
                    <div className='feed'>
                              <div className="feed__header">
                                        <p>Home</p>
                                         <div className="feed__headerStar">
                                         <AddIcon className='feed__headerStarIcon' style={{ fontSize: 16 }}/>      
                                         </div>
                              </div>

                              <div className="feed__input">
                                       <form action="">
                                       <div className="feed__avathar_Input">
                                                  <Avatar src=''/>
                                                  <div className="feed__connect">
                                                   <input value={tweetText} onChange={e=>setTweetText(e.target.value)} type="text" placeholder='Whats happening?'/>
                                                   <input value={tweetImage} onChange={e=>setTweetImage(e.target.value)} type="text" placeholder='add image URL'/>
                                                   <p><PublicOutlinedIcon style={{ fontSize: 20 }}/>Everyone can reply</p>
                                                  </div>
                                        </div>
                                        <div className="feed__options">
                                                  <div className="feed__optionsButtons">
                                                            <div className="feed__opt">
                                                            <ImageOutlinedIcon style={{ fontSize: 22 }} className='feed__icon'/>
                                                            </div>
                                                            <div className="feed__opt">
                                                            <GifOutlinedIcon style={{ fontSize: 22 }} className='feed__icon'/>
                                                            </div>
                                                            <div className="feed__opt">
                                                            <BarChartOutlinedIcon style={{ fontSize: 22 }} className='feed__icon'/>
                                                            </div>
                                                            <div className="feed__opt">
                                                            <SentimentSatisfiedOutlinedIcon style={{ fontSize: 22 }} className='feed__icon'/>
                                                            </div>
                                                            <div className="feed__opt">
                                                            <CalendarTodayOutlinedIcon style={{ fontSize: 22 }} className='feed__icon'/>
                                                            </div>        
                                                  </div>
                                                  
                                                  <button onClick={sendTweet} variant="outlined" className='feed__tweetButton' fullWidth>Tweet</button>
                                              
                                        </div>
                                       </form>
                              </div>

                              
                              <div className="feed__post">
                                    <FlipMove>
                                      {posts.map(post=>(
                                                  <Post
                                                  key={post.text}
                                                  displayName = {post.displayName}
                                                  userName = {post.userName}
                                                  verified = {post.verified}
                                                  text = {post.text}
                                                  image = {post.image}
                                                  avatar = {post.avatar}
                                                  />
                                      ))}
                                    </FlipMove>
                              </div>
                             
                    </div>
          )
}

export default Feed
