/** Отвечает за кнопки старт и пауза */
class Menu {
	constructor() {
		this.startBtnEl = document.getElementById('startBtn');
		this.pauseBtnEl = document.getElementById('pauseBtn');
	}

	/**
	 * 
	 * @param {Function} startBtnClickHandler 
	 * @param {Function} pauseBtnClickHandler 
	 */
	addButtonsClickListeners(startBtnClickHandler, pauseBtnClickHandler) {
		this.startBtnEl.addEventListener('click', startBtnClickHandler);
		this.pauseBtnEl.addEventListener('click', pauseBtnClickHandler);
	}
}