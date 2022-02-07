// Add your Circle class herec
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return this.radius * Math.PI * 2 
    }

    get area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    set diameter(area) {
        let radius = area / 2;
        this.radius = radius;
    }

    set area(area) {
        let radius = Math.sqrt(area/Math.PI);
        this.radius = radius;
    }
    set circumference(area) {
        let radius = (area/Math.PI)/2;
        this.radius = radius;
    }
}