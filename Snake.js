class Snake {
    constructor() {
        this.w = 10;
        this.color = "#FFFFFF"
        this.x = 30;
        this.y = 30;
        this.speed = 2;
        this.verticalMove = 0;
        this.horizontalMove = 0;
        this.keyBefore = "";
        // this.length = 2;
    }
    show() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.w);
    }

    update() {
        window.addEventListener("keydown", e => {
            if (e.key == "w" && this.keyBefore != "s") {
                this.verticalMove = 1;
                this.horizontalMoveMove = 0;
                this.keyBefore = e.key;
            } else if (e.key == "s" && this.keyBefore != "w") {
                this.verticalMove = -1;
                this.horizontalMoveMove = 0;
                this.keyBefore = e.key;
            } else if (e.key == "a" && this.keyBefore != "d") {
                this.verticalMove = 0;
                this.horizontalMoveMove = -1;
                this.keyBefore = e.key;
            } else if (e.key == "d" && this.keyBefore != "a") {
                this.verticalMove = 0;
                this.horizontalMoveMove = 1;
                this.keyBefore = e.key;
            }
        });
        if (this.verticalMove == 1) {
            ctx.clearRect(this.x, this.y + this.w, this.w + this.speed, this.w + this.speed);
            this.y -= this.speed;

        } else if (this.verticalMove == -1) {
            ctx.clearRect(this.x, this.y - this.w, this.w + this.speed, this.w + this.speed);
            this.y += this.speed;
        } else if (this.horizontalMoveMove == 1) {
            ctx.clearRect(this.x - this.w, this.y, this.w + this.speed, this.w + this.speed);
            this.x += this.speed;
        } else if (this.horizontalMoveMove == -1) {
            ctx.clearRect(this.x + this.w, this.y, this.w + this.speed, this.w + this.speed);
            this.x -= this.speed;
        }
    }

    checkBorders() {
        const eachSideSize = this.w / 2;
        if (this.x > canvas.clientWidth - this.w || this.x < 1 || this.y > canvas.clientHeight - this.w || this.y < 1) {
            return true;
        }
        return false;
    }

    stop() {
        this.speed = 0;
    }
}

