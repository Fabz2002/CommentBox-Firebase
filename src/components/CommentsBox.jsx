import { useEffect, useState } from 'react';
import { useCommentsRegistered } from '../context/CommentsContext';
import CardComment from './CardComment';

function CommentsBox() {
	const { loadComments } = useCommentsRegistered();
	const [comments, setComments] = useState();
	async function loadingComments() {
		const comments = await loadComments();
		setComments(comments);
	}
	useEffect(() => {
		loadingComments();
	}, [comments]);

	return (
		<section
			className="h-[400px]  md:min-h-screen  w-full bg-center bg-cover opacity-80 bg-[url('../../img/CommentsBackground.jpg')] flex items-center justify-center flex-wrap
         "
		>
			{comments.length > 0 ? (
				comments.map((com, index) => {
					return (
						<CardComment key={index} name={com.name} comment={com.comment} />
					);
				})
			) : (
				<NoComments />
			)}
		</section>
	);
}

function NoComments() {
	return (
		<div className='flex  w-full items-center justify-center  text-white '>
			<p className='text-gray-500 text-2xl text-center self-center'>
				Deja tu comentario 👇
			</p>
		</div>
	);
}
export default CommentsBox;
