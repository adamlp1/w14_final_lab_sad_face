import React, {Component} from 'react';

class StoryIndex extends Component{
    render(){
        if (!this.props.stories) return null;
        const storyArray = this.props.stories.map(story => {
            return (
            <li value={story.title} key={story.id}>{story.title}</li>
            )
        })

        if (storyArray.length === 0 ){
            console.log("there's nothing here yet")
        }

        return (
            <>
            <h1>this is the story index</h1>
            <h1>{storyArray}</h1>
            </>
        )
    }
}
export default StoryIndex;