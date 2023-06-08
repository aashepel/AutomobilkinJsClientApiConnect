import { ListCarsComponent } from "../../components/listcars/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const listCars = new ListCarsComponent(this.parent)
        listCars.render()
    }
}