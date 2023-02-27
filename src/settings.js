class Settings {
	/**
	 * 
	 * @param {Object} params - Параметры игры
	 * @param {number} params.rowsCount - количество строк игрового поля
	 * @param {number} params.colsCount - количество столбцов игрового поля
	 * @param {number} params.speed - скорость перемещения змейки
 	 * @param {number} params.winLength - какую длину надо наесть, чтобы выиграть
	 * @throws {Error} если переданы неверные настройки выбрасывается соответствующая ошибка  
	 */
	init(params) {
		let defaultParams = {
			rowsCount: 10,
			colsCount: 10,
			speed: 2,
			winLength: 50,
		};
		Object.assign(defaultParams, params);  // asign копирует и перезаписывает свойства крайнего правого объекта в объект, который левее его, и так далее (если их больше (можно передавать сколько угодно объектов))(копирует с заменой)

		if (defaultParams.rowsCount < 10 || defaultParams.rowsCount > 30) {
			throw new Error('Неверные настройки, значение rowsCount должно быть в диапазоне от 10 до 30');
		}
		this.rowsCount = defaultParams.rowsCount; // если не споткнулись об проверку, то передаем значения в объект

		if (defaultParams.colsCount < 10 || defaultParams.colsCount > 30) {
			throw new Error('Неверные настройки, значение colsCount должно быть в диапазоне от 10 до 30');
		}
		this.colsCount = defaultParams.colsCount;
		
		if (defaultParams.speed < 1 || defaultParams.speed > 10) {
			throw new Error('Неверные настройки, значение speed должно быть в диапазоне от 1 до 10');
		}
		this.speed = defaultParams.speed;

		if (defaultParams.winLength < 5 || defaultParams.winLength > 50) {
			throw new Error('Неверные настройки, значение winLength должно быть в диапазоне от 5 до 50');
		}
		this.winLength = defaultParams.winLength;

	}
}