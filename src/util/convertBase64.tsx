export const convertBase64 = (file: File): Promise<string> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = function(event) {
			if (typeof event.target.result === 'string') {
				resolve(event.target.result);
			}
		};
		reader.onerror = function(error) {
			reject(error);
		};
		reader.readAsDataURL(file);
	});
};