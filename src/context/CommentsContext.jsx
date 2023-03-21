import { useState, useContext, useEffect, createContext } from 'react';
const commentsContext = createContext();
export const useCommentsRegistered = () => {
	const comContext = useContext(commentsContext);
	if (!comContext) throw new Error('There is no comments provider');
	return comContext;
};
export function CommentsContextProvider({ children }) {
	const [commentsRegistered, setCommentsRegistered] = useState(false);
	return (
		<commentsContext.Provider
			value={{ commentsRegistered, setCommentsRegistered }}
		>
			{children}
		</commentsContext.Provider>
	);
}
