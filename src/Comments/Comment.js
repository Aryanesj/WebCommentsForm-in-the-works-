import React from 'react'

const Comment = ({ comment }) => {
	return (
		<div className='comment'>
			<div className='comment-image-container'>
				<img src="/user-icon.png" alt="user" />
			</div>
			<div className='comment-right-part'>
				<div className='comment-content'>
					<div className='comment-author'>{comment.username}</div>
					<div>{comment.createdAt}</div>
				</div>
				<div className='comment-text'>{comment.body}</div>
			</div>
		</div>
	)
}

export default Comment