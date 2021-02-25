// Code YouTubeDebugger Component Here

import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    constructor(){
        super()
        this.state={
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
          
    }

    handleClick = () =>{
        this.setState(previousState =>{
            return{
                settings:{
                    ...this.state.settings,
                    bitrate: 12
                }
            }
        })
    }

    handleResolution = () =>{
        console.log(this.state)
        this.setState({
            settings:{
                ...this.state.settings,
                video:{
                    resolution: '720p'
                }
            }
        })
    }


    render() {

        return (
            <div>
                <button className="bitrate" onClick={this.handleClick}>bitrate</button>
                <button className="resolution" onClick={this.handleResolution}>resolution</button>
            </div>
        )
    }
}
