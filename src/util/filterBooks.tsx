import { Ibooks } from 'global';
import { bookWithoutAccent } from './bookWithoutAccent';
import { convertDate } from './convertDate';

export const filterBooks = (
	search: string,
	filter: string,
	books: Ibooks[] | [],
	setCopyBooks: React.Dispatch<React.SetStateAction<[] | Ibooks[]>>
) => {
	if (search == '' && filter == '') {
		setCopyBooks(books);
	} else if (search !== '' && filter !== '') {
		switch (filter) {
		case 'genre':
			setCopyBooks(
				books.filter((book:Ibooks) => {					
					let genre = book.genre.toLowerCase();
					genre = bookWithoutAccent(genre);					
					if (genre.includes(bookWithoutAccent(search).toLowerCase())) {
						return genre;
					}
				})
			);
			break;

		case 'author':
			setCopyBooks(
				books.filter((book:Ibooks) => {
					let author = book.author.toLowerCase();
					author = bookWithoutAccent(author);
					if (author.includes(bookWithoutAccent(search).toLowerCase())) {
						return author;
					}
				})
			);
			break;

		case 'systemEntryDate':
			setCopyBooks(
				books.filter((book:Ibooks) => {
					let systemEntryDate = book.systemEntryDate;
					systemEntryDate = convertDate(systemEntryDate);				
					if (systemEntryDate.includes(search)) {
						return systemEntryDate;
					}
				})
			);
			break;

		default:
			break;
		}
	} else {
		setCopyBooks(
			books.filter((book:Ibooks) => {
				let title = book.title.toLowerCase();
				title = bookWithoutAccent(title);
				if (title.includes(search)) {
					return title;
				}
			})
		);
	}
};
