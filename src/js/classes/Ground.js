class Ground {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    create() {
        board.fillStyle = this.color;
        board.fillRect(0, 0, this.width, this.height);
    }
}
   