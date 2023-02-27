class Board {
	constructor() {
		this.boardEl = document.getElementById('game');
	}

	init(settings, snake) {
		this.settings = settings;
		this.snake = snake;
	}

	/**
	 * Метод отрисовывает игровое поле
	 */
	renderBoard() {
		this.boardEl.innerHTML = ''; // очищаем поле
		// заново отрисовываем поле
		for (let row = 0; row < this.settings.rowsCount; row++) {
			let tr = document.createElement('tr');
			this.boardEl.appendChild(tr);

			for (let col = 0; col < this.settings.colsCount; col++) {
				let td = document.createElement('td');
				tr.appendChild(td);
			}
		}
	}
	/**
	 * Метод отрисовывает змейку на доске
	 */
	renderSnake() {
		const snakeBodyElems = this.getSnakeBodyElems(this.snake.body);
		if (snakeBodyElems) {
			snakeBodyElems.forEach(function(tdEl) {
				tdEl.classList.add('snakeBody');
			});
		}
	}

	clearBoard() {
		const tdElems = document.querySelectorAll('td');
		tdElems.forEach((td) => {
			td.className = '';
		});
	}

	/**
	 * Получаем ячейку таблицы
	 * @param {number} x координата по оси х
	 * @param {number} y координата по оси у
	 * @returns {HTMLTableCellElement} тег td
	 */
	getCellEl(x, y) {
		return this.boardEl.querySelector(`tr:nth-child(${y}) td:nth-child(${x})`);
	}

	/**
	 * 
	 * @param {array} bodyCoords координаты тела змейки 
	 * @returns [] тела змейки
	 */
	getSnakeBodyElems(bodyCoords) {
		if (bodyCoords.length > 0) {
			let bodyElems = [];
			for (let value of bodyCoords) {
				let elem = this.getCellEl(value.x, value.y);
				bodyElems.push(elem);
			}
			return bodyElems;
		}
		return null;
	}
	/**
	 * 
	 * @param {Food} coords будущее расположение еды на поле
	 * @param {Food} coords.x координата x
	 * @param {Food} coords.y координата y
	 */
	renderFood(coords) {
		const foodCell = this.getCellEl(coords.x, coords.y);
		foodCell.classList.add('food');
	}

	isheadOnFood() {
		return this.boardEl.querySelector('.food').classList.contains('snakeBody');
	}

	/**
	 * Являится ли следующий шаг - шагом в стену
	 * @param {Object} nextCellCoords координаты ячейки, куда змейка собирается сделать шаг
	 * @param {Object} nextCellCoords.x
	 * @param {Object} nextCellCoords.y 
	 * @returns 
	 */
	isNextStepToWall(nextCellCoords) {
		let nextCell = this.getCellEl(nextCellCoords.x, nextCellCoords.y);
		return nextCell === null; 
	}

	isNextStepToSnake(nextCellCoords) {
		let nextCell = this.getCellEl(nextCellCoords.x, nextCellCoords.y);
		if (nextCell.classList.contains('snakeBody')) {
			return true;
		}
	}
}