class Move {
  constructor(el) {
    this.el = el;
    this.parentElement = null;
    this.start = {};
    this.div = null;
    this.contain = {};
    this.init();
    this.size = {
      width: this.parentElement.clientWidth,
      height: this.parentElement.clientHeight
    };
  }

  init() {
    this.parentElement = this.el.parentElement;
    this.initStyle(this.el);
    this.contain = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    };
    this.el.addEventListener('mousedown', this.clickDown.bind(this));
  }

  clickDown(e) {
    this.start = {
      x: e.clientX,
      y: e.clientY
    };
    let parentElement = this.parentElement;
    let position = {
      x: parentElement.offsetLeft,
      y: parentElement.offsetTop
    };
    parentElement.style.position = 'fixed';
    parentElement.style.top = position.y + 'px';
    parentElement.style.left = position.x + 'px';
    parentElement.style.margin = 0;
    parentElement.style.zIndex = 999

    document.body.style.userSelect = 'none';
    document.addEventListener('mousemove', this.move);
    document.addEventListener('mouseup', this.clickUp);
    this.insertMask()
  }

  clickUp = () => {
    this.start = null;
    document.removeEventListener('mousemove', this.move);
    document.removeEventListener('mouseup', this.clickUp)
    document.body.style.userSelect = '';
    this.parentElement.style.zIndex = null
    this.div.remove();
  };

  move = (e) => {
    if (!this.start) return;
    let robot = this.parentElement;
    let position = {
      x: robot.offsetLeft,
      y: robot.offsetTop
    };

    var offset = {
      x: e.clientX - this.start.x,
      y: e.clientY - this.start.y
    };
    this.start = {
      x: e.clientX,
      y: e.clientY
    };
    position = {
      x: position.x + offset.x,
      y: position.y + offset.y
    };
    if (position.x < 0 || position.y < 0 || position.x > this.contain.width - this.size.width || position.y >
      this.contain.height - this.size.height) {
      return
    }
    robot.style.top = position.y + 'px';
    robot.style.left = position.x + 'px';
  }

  initStyle(el) {
    el.style.cursor = 'move'
  }

  insertMask() {
    if (!this.div) {
      this.div = document.createElement('div');
      this.div.id = 'move-mask';
      this.div.style.position = 'fixed';
      this.div.style.top = 0;
      this.div.style.left = 0;
      this.div.style.width = '100%';
      this.div.style.height = '100%';
      this.div.style.zIndex = '101';
      this.div.style.cursor = 'move'
    }
    document.body.appendChild(this.div)
  }
}


export default {
  bind: function (el, binding) {
  },
  inserted: function (el, binding) {
    new Move(el);
  },
}
