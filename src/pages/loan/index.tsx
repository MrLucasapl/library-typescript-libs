import React from 'react';
import { Ibooks, IrentHistory } from 'global';
import { getAllBooks } from 'services/api';
import { StyleRentHistory } from './style';
import { convertDate } from 'util/convertDate';
import ImgFilter from 'assets/tabela-filtro.png';
import { useOrdering } from 'hooks/ordering';
import ComeBack from 'components/comeBack';
import Head from 'components/head';

interface IRowfilter {
	id: string;
	onClick: () => void;
}

interface IrentHistoryAll extends IrentHistory{
    title: string
}

const RentHistoryBook = () => {

	const rentKeyOf = ['studentName', 'class', 'title', 'withdrawalDate', 'deliveryDate'];
	
	const [Books, setBooks] = React.useState<IrentHistoryAll[]>([]);
	const { requestSort, sortedItems } = useOrdering(Books);
	const [isRotated, setIsRotated] = React.useState({
		studentName: false,
		class: false,
		withdrawalDate: false,
		deliveryDate: false
	});

	React.useEffect(() => {
		getAllBooks()
			.then((res: Ibooks[]) => {
				const rent: IrentHistoryAll[] = [];
				res.map(({ title, rentHistory }) => {
					rentHistory.map((history) => {
						rent.push({
							studentName: history.studentName,
							class: history.class,
							title: title,
							withdrawalDate: history.withdrawalDate,
							deliveryDate: history.deliveryDate
						});
						setBooks(rent);
						requestSort('studentName');
					});
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleClickImg = (id: string) => {
		const parseId = id as 'studentName' | 'class' | 'withdrawalDate' | 'deliveryDate';
		requestSort(parseId);
		
		setIsRotated((isRotated) => ({
			...isRotated,
			[id]: !isRotated[id],
			studentName: id === 'studentName' ? !isRotated[id] : false,
			class: id === 'class' ? !isRotated[id] : false,
			withdrawalDate: id === 'withdrawalDate' ? !isRotated[id] : false,
			deliveryDate: id === 'deliveryDate' ? !isRotated[id] : false
		}));
	};

	const RowFilter = ({ id, onClick }: IRowfilter) => {
		const rotation = isRotated[id] ? 'rotate(180deg)' : 'rotate(0deg)';
		return (
			<td id={id}>
				<div className="filter-td">
					<img
						id={id}
						src={ImgFilter}
						onClick={onClick}
						alt="imagem do filtro"
						style={{ transform: rotation }}
					/>
				</div>
			</td>
		);
	};

	function ProductTable() {
		return (
			<React.Fragment>
				<div id="box-table">
					<table>
						<thead>
							<tr className="line-thead">
								<th className="title-thead-border-left">Aluno</th>
								<th>Livro</th>
								<th>Turma</th>
								<th>Data da Retirada</th>
								<th className="title-thead-border-right">Data da Entrega</th>
							</tr>
						</thead>
						<tbody>
							{
								<tr>
									{rentKeyOf.map((id) => (
										<RowFilter key={id} id={id} onClick={()=>handleClickImg(id)} />
									))}
								</tr>
							}
							{sortedItems?.map((product: IrentHistoryAll) => (
								<tr key={product.studentName + product.class}>
									<td>{product.studentName}</td>
									<td>{product.title}</td>
									<td>{product.class}</td>
									<td>{convertDate(product.withdrawalDate)}</td>
									<td>{convertDate(product.deliveryDate)}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</React.Fragment>
		);
	}

	return (
		<StyleRentHistory>
			<Head
				title="Historico"
				content="private"
				description="A página mostra todos os empréstimos dos livros."
			/>
			<ComeBack
				to="/home"
				value="Cadastrar novo livro"
			/>
			<ProductTable/>		
		</StyleRentHistory>
	);
};

export default RentHistoryBook;