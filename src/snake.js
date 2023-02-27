class Snake {
  constructor() {
    this.possibleDirections = ["down", "up", "left", "right"];

    this.body = [
      {
        x: 1,
        y: 3,
      },
      {
        x: 1,
        y: 2,
      },
      {
        x: 1,
        y: 1,
      },
    ];

    this.direction = "down";
  }

	performStep() {
		let currentHeadCoords = this.body[0];
		let newHeadCoords = {
			x: currentHeadCoords.x,
			y: currentHeadCoords.y,
		};
		switch (this.direction) {
			case 'down':
				newHeadCoords.y++;
				break;
			case 'up':
				newHeadCoords.y--;
				break;
			case 'left':
				newHeadCoords.x--;
				break;
			case 'right':
			newHeadCoords.x++;
			break;
		}
		this.body.unshift(newHeadCoords); // добавляем новые координаты в начало массива (перемещаем голову змейки)
		this.body.pop(); // удаляем последний элемент массива (хвост змейки)
	}

	isPassedOppositeDirection(newDirection) {
		if (this.direction == 'down' && newDirection == 'up') {
			return true;
		}
		if (this.direction == 'up' && newDirection == 'down') {
			return true;
		}
		if (this.direction == 'left' && newDirection == 'right') {
			return true;
		}
		if (this.direction == 'right' && newDirection == 'left') {
			return true;
		}
		return false;
	}

	/**
	 * 
	 * @param {string} newDirection направление может быть "down", "up", "left", "right"
	 * @throws {Error} при передаче некорректного направления выбрасывается ошибка
	 */
	changeDirection(newDirection) {
		if (!this.possibleDirections.includes(newDirection)) {
			throw new Error('Gthtlfyj неверное направление. Вы передали:  ' + newDirection);
		}
		if (this.isPassedOppositeDirection(newDirection)) {
			return;
		}
		this.direction = newDirection;
	}

	/**
	 * Метод дублирует в массиве объектов, представляющих тело змейки, 
	 * последнюю ячейку, т.е. в массиве в конце оказывается 2 одинаковых объекта.
	 * Когда метод performStep в самом конце удаляет последний элемент массива, он
	 * удаляет сдублированный объект, таким образом тело змейки растет
	 */
	increaseBody() {
		let bodyLastCell = this.body[this.body.length - 1];
		let newBodyLastCell = {
			x: bodyLastCell.x,
			y: bodyLastCell.y,
		};
		this.body.push(newBodyLastCell);
	}
}
