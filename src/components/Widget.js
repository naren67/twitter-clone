import React from 'react'
import './Widget.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { TwitterTimelineEmbed, 
          TwitterShareButton, 
          TwitterFollowButton, 
          TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Widget() {
          return (
                    <div className='widget'>
                              <div className="widget__input">
                                        <div className="widget__inputArea">
                                        <SearchRoundedIcon style={{ fontSize: 18 }}/>
                                        <input type="text"/>
                                        </div>
                              </div>

                              <div className="widget__widgetFromNpm">
                              <TwitterTimelineEmbed
  sourceType="profile"
  screenName="saurabhnemade"
  options={{height: 400}}
/>
                              <TwitterMomentShare
                                momentId={'650667182356082688'}
                              />
                              </div>
                    </div>
          )
}

export default Widget
