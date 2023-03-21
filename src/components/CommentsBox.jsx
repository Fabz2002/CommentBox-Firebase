import { useCommentsRegistered } from '../context/CommentsContext';
function CommentsBox() {
	const { commentsRegistered } = useCommentsRegistered();
	return (
		<div
			className="h-3/4  w-full bg-center bg-cover opacity-80 bg-[url('../../img/CommentsBackground.jpg')]
         "
		>
			{commentsRegistered ? <CommentsContent /> : <NoComments />}
		</div>
	);
}
function CommentsContent() {
	return <div className='text-white'>nashe</div>;
}
function NoComments() {
	return (
		<div className='text-white container text-center h-1/2  bg-transparent'>
			No hay comentarios{' '}
		</div>
	);
}
export default CommentsBox;
