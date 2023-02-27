class Game {
  constructor() {
    this.tickIdentifier = null;
    this.messageEl = document.getElementById("message");
  }

  init(settings, status, board, snake, menu, food) {
    this.settings = settings;
    this.status = status;
    this.board = board;
    this.snake = snake;
    this.menu = menu;
    this.food = food;
  }

  pressKeyHandler(event) {
    switch (event.key) {
      case "ArrowUp":
        this.snake.changeDirection("up");
        break;
      case "ArrowDown":
        this.snake.changeDirection("down");
        break;
      case "ArrowLeft":
        this.snake.changeDirection("left");
        break;
      case "ArrowRight":
        this.snake.changeDirection("right");
        break;
    }
  }

  run() {
    /* 	let game = this;
		let newStartFn = this.start.bind(game); */ // тоже самое, что и this.start.bind(this)
    this.menu.addButtonsClickListeners(
      this.start.bind(this),
      this.pause.bind(this)
    );
    document.addEventListener("keydown", this.pressKeyHandler.bind(this));
  }

  start() {
    if (this.status.isPaused()) {
      this.status.setPlaying();
      this.tickIdentifier = setInterval(
        this.doTick.bind(this),
        1000 / this.settings.speed
      );
    }
  }

  pause() {
    if (this.status.isPlaying()) {
      this.status.setPaused();
      clearInterval(this.tickIdentifier);
    }
  }

	isGameLost() {
		if (this.board.isNextStepToWall(this.snake.body[0]) || this.board.isNextStepToSnake(this.snake.body[0])) {
			clearInterval(this.tickIdentifier);
			this.setMessage('Вы проиграли =o(');
			return true;
		}
		return false;
	}

	isGameWon() {
		if (this.snake.body.length == this.settings.winLength) {
			clearInterval(this.tickIdentifier);
			this.setMessage('Вы выиграли =o)');
			return true;
		}
		return false;
	}

  /**
   * Этот метод запускается каждую секунду и осуществляет:
   * 1. перемещение змейки
   * 2. проверяет проиграна / выиграна игра
   * 3. увеличивает размер змейки, если она ест еду
   * 4. заново отрисовывает положение змейки и еды
   */
  doTick() {
    this.snake.performStep();
		if (this.isGameLost()) {
			return;
		}
		if (this.isGameWon()) {
			return;
		}
		if (this.board.isheadOnFood()) {
			this.snake.increaseBody();
			this.food.setNewFood();
		}
    this.board.clearBoard();
    this.food.setFood();
    this.board.renderSnake();
  }

	setMessage(text) {
		this.messageEl.innerText = text;
	}
}
