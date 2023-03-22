import { comment } from 'postcss';
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
			className="h-[400px]  md:min-h-screen  w-full bg-center bg-cover opacity-80 bg-[url('../../img/CommentsBackground.jpg')]
         "
		>
			<div className='flex'>
				{comments ? (
					comments.map((com, index) => {
						return (
							<CardComment key={index} name={com.name} comment={com.comment} />
						);
					})
				) : (
					<NoComments />
				)}
			</div>
		</section>
	);
}

function NoComments() {
	return (
		<div className='h-3/4  w-full flex flex-col gap-10 items-center justify-center  text-white  text-center '>
			<h1 className='text-2xl sm:text-4xl'>No hay comentarios aún</h1>
			<p className='text-gray-500 text-2xl'>Deja tu comentario 👇</p>
		</div>
	);
}
export default CommentsBox;
