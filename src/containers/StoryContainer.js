import React from 'react';

class StoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: [],
    }
  }

  componentDidMount(){

    //all of the story ids
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json"
    
    fetch(url) //asking to get all the story ids
    .then(res => res.json()) //promising to return json when they've been fetched

    .then(topStoriesIds => {
        const allTopStories = []
        topStoriesIds.map( id => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`) //then we're taking each id and adding it into the story item url
            .then(res => res.json()) //then we'll turn it into a json object
            .then(data => allTopStories.push(data)) //then we'll push it into the alltopstories array
            .catch(err => console.err(err)) 
            return allTopStories // finally we'll return all of the top stories
        }) 
        console.log(allTopStories)
    })
    .catch(err => console.err(err))

    
  }

  

  render() {
    return(
      <h1>Ariane</h1>
    )
  }
}

export default StoryContainer;