class shape {
    constructor(fillColor, letters){
        this.fillColor = fillColor
        if (letters.length != 3){
            this.letters = "AAA"
        }
        else {
            this.letters = letters
        }
    }
}

class triangle extends shape {
    constructor(fillColor, letters){
        super(fillColor, letters);
        const render = function(){`<svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:screen">
        <path d="M148.306 8.43756C151.572 4.21942 157.973 4.31853 161.107 8.63577L290.783 187.301C294.621 192.589 290.843 200 284.308 200H16.3109C9.66195 200 5.9148 192.36 9.98507 187.103L148.306 8.43756Z" fill="#${this.fillColor}"/>
        </g>
        </svg>`
        }
    }
}