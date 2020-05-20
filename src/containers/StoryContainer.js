import React from 'react';
import StoryIndex from '../components/StoryIndex';

class StoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
    }
  }

  componentDidMount(){

    const url = "https://hacker-news.firebaseio.com/v0/topstories.json"
    const allTopStories = []
    
    fetch(url)
    .then(res => res.json()) 

    .then(topStoriesIds => {
        console.log("startingMap")
        const tenStoryIds = topStoriesIds.slice(0,15)
        tenStoryIds.forEach( id => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => res.json()) 
            .then((data) => {
              console.log("fetched individual data")
              allTopStories.push(data)
            }) 
            .catch(err => console.err(err)) 
        })
        
    })
    .catch(err => console.err(err))

    this.setState({stories: allTopStories})
    
  }

  render() {
    return(
        <>
        <h1>Story Container</h1>
        <StoryIndex
        stories={this.state.stories}>
        </StoryIndex>
      </>
    )
  }
}

export default StoryContainer;