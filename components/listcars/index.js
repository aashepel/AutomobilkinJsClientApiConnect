import { Enviroment } from "../../env.js"
import { CarPage } from "../../pages/car/index.js";
import { CarCardComponent } from "../car_card/index.js";

export class ListCarsComponent {
    constructor(parent) {
        this.parent = parent;
    }

    async render() {
        const result = await this.getData()
        const json = await result.json();        
        
        this.parent.insertAdjacentHTML('beforeend', `<ol class="list_cars"></ol>`)
        const curr_html = document.getElementsByClassName("list_cars")[0]

        json.forEach(element => {
            const carCard = new CarCardComponent(curr_html)
            carCard.render(element, this.clickCar.bind(this))
        });
    }

    async getData() {
        const response = await fetch(`${Enviroment.BaseUrlApi}/cars`, { method: "GET" });
        return response;
    }

    clickCar(e) {
        const carId = e.target.dataset.id

        const carPage = new CarPage(this.parent, carId)
        carPage.render()
    }
}