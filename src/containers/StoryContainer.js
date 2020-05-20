import React from 'react';

class StoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: [],
    }
  }

  componentDidMount(){

    const url = "https://hacker-news.firebaseio.com/v0/topstories.json"
    
    fetch(url)
    .then(res => res.json())
    .then(topStoriesIds => {
        const allTopStories = []
        topStoriesIds.map( id => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => res.json())
            .then(data => allTopStories.push(data))
            .catch(err => console.err(err))
            return allTopStories
        }) 
        console.log(allTopStories)
    })
    
    .catch(err => console.err(err))

    // then take the story id and add it to the end of the story detail url
    
  }

  

  render() {
    return(
      <h1>Ariane</h1>
    )
  }
}

export default StoryContainer;