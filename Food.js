class Food {
    constructor() {
        this.w = 10;
        this.color = "#00FF00";
        this.x = canvas.clientWidth / 2;
        this.y = canvas.clientHeight / 2;
    }

    show() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.w);
    }

    random() {
        ctx.clearRect(this.x - 2, this.y - 2, this.w * 2, this.w * 2);
        this.x = Math.random() * (canvas.clientWidth - 100);
        this.y = Math.random() * (canvas.clientHeight - 100);
        this.show();
    }
}