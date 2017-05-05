class Notification {
  constructor(container) {
    this.container = container;
    this.timeForAnimation = +container.dataset.timeForAnimation;
    this.timeToRemove = +container.dataset.timeToRemove;

    const MAX_SIZE = 3;
    this.notification = {};
    for (let i = 1; i <= MAX_SIZE; i += 1) this.notification[i] = undefined;
  }

  addNotification(type) {
    this.hideLastElement();
    this.changeRestElements();
    this.showNewNotification(type);
    console.log(this.notification);
  }

  hideLastElement() {
    const _this = this;
    const lastNumber = Object.keys(_this.notification).length;
    const element = _this.notification[lastNumber];
    if (element) {
      element.classList.add('hide');
      _this.notification[lastNumber] = undefined;
      setTimeout(() => {
        element.remove();
      }, _this.timeForAnimation);
    }
  }

  changeRestElements() {
    const _this = this;
    const elementNumbers = Object.keys(_this.notification).length;
    for (let index = elementNumbers; index > 0; index -= 1) {
      if (index !== elementNumbers) {
        const element = _this.notification[index];
        if (element) {
          element.classList.remove(`show-${index}`);
          const newIndex = index + 1;
          element.classList.add(`show-${newIndex}`);
          _this.notification[newIndex] = element;
        }
      }
    }
  }

  showNewNotification(type) {
    const _this = this;
    const newElement = _this.createNewNotification(type);
    _this.notification[1] = newElement;
    _this.container.appendChild(newElement);
    setTimeout(() => {
      newElement.classList.add('show-1');
    }, 0);

    setTimeout(() => {
      newElement.classList.add('hide');
    }, _this.timeToRemove);

    setTimeout(() => {
      newElement.remove();
    }, _this.timeForAnimation + _this.timeToRemove);
  }

  createNewNotification(type) {
    const _this = this;
    const idealElement = _this.container.querySelector(`[data-notification-type="${type}"]`);
    const newElement = idealElement.cloneNode(true);
    const closer = newElement.querySelector('.js-notification-closer');

    closer.addEventListener('click', (event) => {
      const notification = event.currentTarget.parentNode;
      notification.classList.add('hide');

      this.pullDownNotificationsAbove(notification);

      setTimeout(() => {
        notification.remove();
      }, _this.timeForAnimation);
    });

    return newElement;
  }

  pullDownNotificationsAbove(notification) {
    const _this = this;
    const keys = Object.keys(_this.notification);
    const values = Object.values(_this.notification);
    const value = values.indexOf(notification);
    const key = keys[value];
    _this.notification[key] = undefined;

    Object.keys(_this.notification).forEach((index) => {
      if (index > key && _this.notification[index]) {
        const element = _this.notification[index];
        const newIndex = index - 1;
        element.classList.remove(`show-${index}`);
        element.classList.add(`show-${newIndex}`);
        _this.notification[newIndex] = element;
        _this.notification[index] = undefined;
      }
    });
  }
}

export default Notification;
