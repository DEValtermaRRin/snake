class Food {
	constructor() {
		this.x = null;
		this.y = null;
	}

	/**
	 * 
	 * @param {Settings} settings объект настроек
	 * @param {Snake} snake объект змейки 
	 * @param {Board} board объект игрового поля
	 */
	init(settings, snake, board) {
		this.settings = settings;
		this.snake = snake;
		this.board = board;
	}

	/**
	 * Метод устанавливает на игровом поле еду по текущим координатам
	 */
	setFood() {
		this.board.renderFood(this);
	}

	setNewFood() {
		const food = this.generateRandomCoordinates();
		this.board.renderFood(food);
	}

	/**
	 * Метод генерирует новый объект еды со случайным положением на игровом поле
	 * @returns {generateNewRandomFood}
	 */
	generateRandomCoordinates() {
		while (true) {
			this.x = Math.floor(Math.random() * this.settings.colsCount) + 1;
			this.y = Math.floor(Math.random() * this.settings.rowsCount) + 1;
			let cell = this.board.getCellEl(this.x, this.y);

			if (cell.classList.contains('snakeBody')) {
				continue;
			}
			return this;
		}
	}

	
}