import React from 'react';
import { Ibooks, IrentHistory, MainModalProps } from '../../../global';
import { getBookId } from '../../../services/api';
import { StyleRentHistory } from '../style';
import { convertDate } from '../../../util/convertDate';
import ImgFilter from '../../../assets/tabela-filtro.png';
import { useOrdering } from '../../../hooks/ordering';

interface IRowfilter {
	id: string;
	onClick: () => void;
}

const RentHistoryBookModal = ({ bookId }: MainModalProps) => {

	const rentKeyOf = ['studentName', 'class', 'withdrawalDate', 'deliveryDate'];
	
	const [newHistory, setNewHistory] = React.useState<IrentHistory[]>([]);
	const { requestSort, sortedItems } = useOrdering(newHistory);
	const [isRotated, setIsRotated] = React.useState({
		studentName: false,
		class: false,
		withdrawalDate: false,
		deliveryDate: false
	});

	React.useEffect(() => {
		getBookId(bookId)
			.then((res: Ibooks) => {
				const rent: IrentHistory[] = [];
				const { rentHistory } = res;
				rentHistory.map((history) => {
					rent.push({
						studentName: history.studentName,
						class: history.class,
						withdrawalDate: history.withdrawalDate,
						deliveryDate: history.deliveryDate
					});
				});
				setNewHistory(rent);
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
				<div className='box-title'>
					<h1>Histórico de empréstimos do livro</h1>
				</div>
				<div id="box-table">
					<table>
						<thead>
							<tr className="line-thead">
								<th className="title-thead-border-left">Aluno</th>
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
							{sortedItems?.map((product: IrentHistory) => (
								<tr key={product.studentName + product.class}>
									<td>{product.studentName}</td>
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
			<ProductTable/>		
		</StyleRentHistory>
	);
};

export default RentHistoryBookModal;