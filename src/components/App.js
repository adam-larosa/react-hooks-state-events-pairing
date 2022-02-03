
import videoData from "../data/video.js";

import { useState } from 'react'

import Video from './Video'
import InfoSection from './InfoSection'
import LikeButtons from './LikeButtons'
import CommentsContainer from './CommentsContainer'

function App() {

	const [videoState, setVideoState] = useState(videoData)
 
	const [showComments, setShow] = useState(true)

	const vanishComments = () => {
		setShow( !showComments )
	}


	return (
		<div className="App">

			<Video embedUrl={videoData.embedUrl} title={videoData.title} />

			<InfoSection header={videoData.title} number={videoData.views} 
				date={videoData.createdAt} />
			
			<LikeButtons upvotes={videoData.upvotes} 
				downvotes={videoData.downvotes} />

			<button onClick={vanishComments}>
				{showComments ? "Hide" : "Show"} Comments
			</button>

			<hr/>

			{ showComments ? 
				<CommentsContainer comments={videoData.comments}/> :
				null
			}

			
			

		</div>
	);
}

export default App;
