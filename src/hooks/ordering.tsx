import React from 'react';
import { IrentHistory, IrentHistoryAll } from '../global';

interface IUseOrdering {
	sortedItems: IrentHistory[] | IrentHistoryAll[];
	requestSort: (sortKey: keyof IrentHistory) => void;
}

interface ISortCriteria {
	key: keyof IrentHistory;
	direction: 'ascending' | 'descending';
}

export const useOrdering = (value: IrentHistory[]): IUseOrdering => {
	const [sortConfig, setSortConfig] = React.useState<ISortCriteria>({ key:'class', direction: 'descending' });

	const sortedItems = React.useMemo(() => {
		const sortedProducts = [...value];

		if (sortConfig) {
			sortedProducts.sort((a, b) => {
				const aValue = a[sortConfig.key];
				const bValue = b[sortConfig.key];			
				
				if (aValue > bValue) {
					return sortConfig.direction === 'descending' ? -1 : 1;
				}
				if (aValue < bValue) {
					return sortConfig.direction === 'descending' ? 1 : -1;
				}
			});
		}
		return sortedProducts;
	}, [value, sortConfig]);
	
	const requestSort = (key: keyof IrentHistory) => {
		let direction: 'ascending' | 'descending' = 'ascending';
		if (sortConfig) {
			if (sortConfig.key === key) {
				direction = sortConfig.direction == 'descending'? 'ascending' : 'descending';
			}else{
				direction = sortConfig.direction == 'ascending'? 'descending' : 'ascending';
			}
		}
		setSortConfig({ key, direction });
	};
	
	return {
		requestSort,
		sortedItems,
	};
};