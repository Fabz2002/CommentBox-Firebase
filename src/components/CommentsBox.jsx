import { useCommentsRegistered } from '../context/CommentsContext';
import CardComment from './CardComment';
function CommentsBox() {
	const { commentsRegistered } = useCommentsRegistered();
	return (
		<div
			className="h-3/4  w-full bg-center bg-cover opacity-80 bg-[url('../../img/CommentsBackground.jpg')]
         "
		>
			{!commentsRegistered ? <CommentsContent /> : <NoComments />}
		</div>
	);
}
function CommentsContent() {
	return <CardComment comment={'hola'} name={'titulo'} />;
}
function NoComments() {
	return <div className='text-white  text-center '>No hay comentarios </div>;
}
export default CommentsBox;
