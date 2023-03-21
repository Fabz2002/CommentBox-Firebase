import CommentsBox from './CommentsBox';
import CommentsForm from './CommentsForm';
import { useState } from 'react';
import { CommentsContextProvider } from '../context/CommentsContext';
function Comments() {
	return (
		<section className='bg-white h-screen'>
			<CommentsContextProvider>
				<CommentsBox />
				<CommentsForm />
			</CommentsContextProvider>
		</section>
	);
}

export default Comments;
