class ExtendedClock extends Clock {
    constructor(args) {
      super(args);
      this.precision = (args.precision) || 1000;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  };