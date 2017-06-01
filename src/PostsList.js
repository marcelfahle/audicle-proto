import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
//import Spinner from 'react-spinkit';

import { getPostsByUser, removePost } from './store/posts/actions';
import { loadFileStart } from './store/audio_player/actions';

import Post from './Post';



const PostsWrapper = styled.div`
  //max-width: 700px;
  margin: 0 auto;
  padding-top: 44px;
  padding-bottom: 140px;
  //height: calc(100vh - 170px);
  //padding-bottom: 100px !important;
  //overflow-y: auto;
`;


const p = {
  "-KaRfEUDICY2BhX3WkMu" : {
    "author" : "Sacha Greif",
    "createdAt" : 1484392298660,
    "duration" : 62.746,
    "finished" : false,
    "location" : "https://audicle-storage.s3-eu-west-1.amazonaws.com/development/posts/bb55addfedf1015456ddb55821c43d5a.mp3",
    "position" : 0,
    "ssml" : "<speak>React’s Five Fingers of Death. Master these five concepts, then master React. <break time='0.5s'/>by 'Sacha Greif'<break time='1s'/><p>A few years ago, my friend Sean started telling me how this brand new front-end library called React was going to take over the web. At first I dismissed it as just another framework fad. But then I started hearing about React more and more, to the point where I felt like ignoring it just wasn’t an option anymore.<break time='0.8s' /></p> <p>Maybe you’re in the same position I was in: you’ve been hearing about React left and right, but actually sitting down and learning it feels like such a chore.<break time='0.8s' /></p> <p>The good news is that you can boil everything you need to know about React down to five key concepts.<break time='0.8s' /></p> <p>Now don’t get me wrong, this doesn’t mean I can turn you into a React master instantly. But at least you’ll understand all the major concepts, if you do decide to jump in.<break time='0.8s' /></p></speak>",
    "started" : false,
    "status" : "ready",
    "title" : "React’s Five Fingers of Death. Master these five concepts, then master React.",
    "url" : "https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3#.rhv8xow1o"
  },
  "-KaRfiwzIQ9g55b4WL_F" : {
    "author" : "Azat Mardan",
    "createdAt" : 1484392427787,
    "duration" : 85.943,
    "finished" : false,
    "location" : "https://audicle-storage.s3-eu-west-1.amazonaws.com/development/posts/0fd7aa9983266867842cf072b368e0b0.mp3",
    "position" : 0,
    "ssml" : "<speak>Beautiful APIs in Node <break time='0.5s'/>by 'Azat Mardan'<break time='1s'/><p>This post is on how to build beautiful APIs in Node.js. Great, and what is an API? The definition says Application Programming Interface, but what does it mean? It could mean on of the few things depending on the context:<break time='0.8s' /></p> <p>The main idea is that an API is a form of a contract between two or more entities (objects, classes, concerns, etc.). Your main goal as a Node engineer is to build beautiful API so that developers who consume your module/class/service won’t be cursing and sending you hate IM and mail. The rest of your code can be ugly but the parts which are public (mean for usage by other programs, and developers) need to be conventional, extendable, simple to use and understand, and consistent.<break time='0.8s' /></p> <p>Let’s see how to build beautiful APIs for which you can make sure other developer<break time='0.8s' /></p> <p>Most likely, you are not using core Node http module directly, but a framework like Express or Hapi. If not, then strongly consider using a framework. It will come with freebies like parsing and route organization. I’ll be using Express for my examples.<break time='0.8s' /></p></speak>",
    "started" : false,
    "status" : "ready",
    "title" : "Beautiful APIs in Node",
    "url" : "https://medium.com/software-engineering/beautiful-node-apis-eaf0b636cbe#.tb2ws0tah"
  },
  "-KiiGQX02k29cXcCZMqH" : {
    "author" : "Emin Inanc Unlu",
    "createdAt" : 1493277456714,
    "duration" : 66.273,
    "finished" : false,
    "location" : "https://audicle-storage.s3-eu-west-1.amazonaws.com/development/posts/9b64d999ff21c06e31c0a25483f77a97.mp3",
    "position" : 0,
    "ssml" : "<speak>Mastering Group Resizing Feature in Sketch <break time='0.5s'/>by 'Emin Inanc Unlu'<break time='1s'/><p>I was preparing a concept design for Sketch app to demonstrate my feature ideas. I used the beta version of Sketch (3.9) for that to try the new features and also to test my plugins to see if they are working still.<break time='0.8s' /></p> <p>After a while, I realized that the new feature called “group resizing” is really simple but yet powerful if you use it right.<break time='0.8s' /></p> <p>Of course, this simplicity comes with limited functionality compared to alternative layout systems like auto-layout. But still, until it’s improved or switched to something else, it will serve well I believe.<break time='0.8s' /></p> <p>It’s really easy to setup group resizing feature in a group. Select a layer or multiple layers inside the group and choose the appropriate resizing option, that’s it. You will understand it better in the examples later in the article if it seemed a little complicated.<break time='0.8s' /></p></speak>",
    "title" : "Mastering Group Resizing Feature in Sketch",
    "url" : "https://medium.com/sketch-app-sources/mastering-group-resizing-feature-in-sketch-38266286155"
  },
  "-KiiTWcmQlS4LAtiU9yI" : {
    "author" : "Quincy Larson",
    "createdAt" : 1493280889841,
    "duration" : 79.177,
    "finished" : false,
    "location" : "https://audicle-storage.s3-eu-west-1.amazonaws.com/development/posts/9403633cae034db6ad455c4c54fac305.mp3",
    "position" : 0,
    "ssml" : "<speak>The founder of Wikipedia is building a community-run news website <break time='0.5s'/>by 'Quincy Larson'<break time='1s'/><p>Back in 2001, Jimmy Wales co-founded Wikipedia with the mission of “empowering and engaging people around the world to collect and develop educational content under a free license or in the public domain.”<break time='0.8s' /></p> <p>Today he announced he’s creating a news website called WikiTribune. The site says: “We want to make sure that you read fact-based articles that have a real impact in both local and global events. And that stories can be easily verified and improved.”<break time='0.8s' /></p> <p>WikiTribune is a “living, breathing tool that’ll present accurate information with real evidence, so that you can confidently make up your own mind.”<break time='0.8s' /></p> <p>The website heavily emphasizes the role of a community of peers, instead of the traditional separation between journalists and their readers. “Articles are authored, fact-checked, and verified by professional journalists and community members working side by side as equals, and supported not primarily by advertisers, but by readers who care about good journalism enough to become monthly supporters.”<break time='0.8s' /></p></speak>",
    "started" : false,
    "status" : "ready",
    "title" : "The founder of Wikipedia is building a community-run news website",
    "url" : "https://medium.freecodecamp.com/the-founder-of-wikipedia-is-building-a-community-run-news-website-eaeb90de742"
  },
  "-Kik9txhAx6Yu2qdFtkg" : {
    "author" : "Quincy Larson",
    "createdAt" : 1493309300782,
    "duration" : 54.178,
    "finished" : false,
    "location" : "https://audicle-storage.s3-eu-west-1.amazonaws.com/development/posts/1acb727ba9107639a83139796917c26b.mp3",
    "position" : 0,
    "ssml" : "<speak>Inside Codeland — the most inclusive developer conference yet <break time='0.5s'/>by 'Quincy Larson'<break time='1s'/><p>I just got back from New York City, where I experienced a new kind of developer conference — one that emphasizes inclusion and encouragement above all else.<break time='0.8s' /></p> <p>Codeland was the vision of a single developer — Saron Yitbarek — and actualized through the hard work of dozens of volunteers and contributors.<break time='0.8s' /></p> <p>Saron runs the CodeNewbie community and hosts the weekly CodeNewbie podcast. For years, she’s helped non-traditional learners get into coding, then sustain motivation throughout their transition to software development.<break time='0.8s' /></p> <p>But organizing a two-day conference with dozens of speakers, panelists, and workshop leaders was an entirely different caliber of challenge.<break time='0.8s' /></p></speak>",
    "started" : false,
    "status" : "ready",
    "title" : "Inside Codeland — the most inclusive developer conference yet",
    "url" : "https://medium.freecodecamp.com/inside-codeland-the-most-inclusive-supportive-developer-conference-yet-5f01cadf0a42?source=linkShare-f2c1775594cb-1493309284"
  },
  "-KikC3yaZZpgSyUW_7qy" : {
    "author" : "Parker Thompson",
    "createdAt" : 1493309870183,
    "duration" : 59.481,
    "finished" : false,
    "location" : "https://audicle-storage.s3-eu-west-1.amazonaws.com/development/posts/3c47cd97eb4e8003056d1dfe0214c661.mp3",
    "position" : 0,
    "ssml" : "<speak>Final Investor Update <break time='0.5s'/>by 'Parker Thompson'<break time='1s'/><p>I got this note yesterday from a founder who has, over the years, become a good friend. I asked him if I could share it as an honest and raw reflection on shutting down, in contrast to the acquihire-dressed-up-as-victory announcements or self-serving post-mortems we often see when a startup doesn’t make it.<break time='0.8s' /></p> <p>To the team, you are the kind of people and these are the relationships that keep me motivated, and keep me from becoming cynical in a town and industry that makes it pretty easy to become so. Thank you for the things you’ve taught me along the way, they have been many.<break time='0.8s' /></p> <p>—<break time='0.8s' /></p> <p>This email will contain the final update on the status of [Company], and a brief collection of thoughts here at the end of this journey. Below my signature, you will find the last investor update email which outlined the situation<break time='0.8s' /></p></speak>",
    "started" : false,
    "status" : "ready",
    "title" : "Final Investor Update",
    "url" : "https://medium.com/@pt/final-investor-update-25c1bdfb20ec?source=linkShare-f2c1775594cb-1493309858"
  }
}










class PostsList extends React.Component {
  componentDidMount() {
    this.props.getPostsByUser( this.props.userId );
  }
  render() {
    // TODO: should be able to optimize that. put it in container?
    if (this.props.postsList.loading) {
      return <p>Hold your horses! We're almost there. Just checking something...</p>;
    }
    if (this.props.postsList.posts === null) {
      return <p>Oh Snap! Your Playlist is empty. You should add a few things.</p>;
    }

    const { posts } = this.props.postsList;
    //const posts = p;

    return (
      <PostsWrapper className="">
        { Object.keys( posts ).reverse().map( (key, i) => (
          <Post 
            key={i} 
            id={key}
            {...posts[key]}
            handleClick={this.props.loadFile}
            handleRemove={this.props.removePost}
          />
        )) }
      </PostsWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    postsList: state.posts.postsList,
    userId: state.user.user.uid
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPostsByUser: (userId) => dispatch( getPostsByUser( userId ) ),
    loadFile: (file, title) => dispatch( loadFileStart( file, title) ),
    removePost: (id) => dispatch( removePost( id )),
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
