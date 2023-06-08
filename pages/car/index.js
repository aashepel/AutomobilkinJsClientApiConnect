import { Enviroment } from "../../env.js"

export class CarPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id
    }

    async render() {
        this.parent.innerHTML = ''

        const result = await this.getData()
        const json = await result.json();    
        console.log(json)
        const html = this.getHTML(json)

        this.parent.insertAdjacentHTML('beforeend', html)
    }

    get pageRoot() {
        return document.getElementById('car-page')
    }

    getHTML(car_info) {
        console.log(car_info)
        let generation = car_info.model_car_generation
        let model = generation.model_car
        let auto_concern = model.auto_concern

        return (
            `
                <div id="car-page">
                    <div class="wrapper-block">
                        <div class="general-block info-block">
                            <p class="title-block">General:</p>
                            <ul class="fields-of-block">
                                <li>Model: ${ auto_concern.title } ${ model.model_name } (${generation.generation})</li>
                                <li>Body Type: ${ car_info.body_type }</li>
                                <li>Year of manufacture: ${ car_info.year_of_release }</li>
                                <li>Color: ${ car_info.color }</li>
                                <li>Price: ${ car_info.price_rubles.toLocaleString() } RUB</li>
                                <li>Condition: ${car_info.is_new ? `new` : `used`}</li>
                                <li>Odometer: ${ car_info.odometer.toLocaleString() } km</li>
                                <li>Count Owners: ${ car_info.count_owners }</li>
                                <li>Vin Code: ${ car_info.vin_code }</li>
                                <li>State Number: ${ car_info.state_number }</li>
                            </ul>
                        </div>
                        <div class="detail-block info-block">
                            <p class="title-block">Detail:</p>
                            <ul class="fields-of-block">
                                <li>Transmission Type: ${ car_info.transmission_type }</li>
                                <li>Drive Type: ${ car_info.drive_type }</li>
                                <li>Steering Wheel Type: ${ car_info.steering_wheel_type }</li>
                            </ul>
                            <div class="engine-block info-block">
                                <p class="title-block">Engine:</p>
                                <ul class="fields-of-block">
                                    <li>Type: ${ car_info.engine_type }</li>
                                    <li>Volume: ${ car_info.engine_volume } L</li>
                                    <li>Max power: ${ car_info.engine_power } hp</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    }

    async getData() {
        const response = await fetch(`${Enviroment.BaseUrlApi}/cars/${this.id}/`, { method: "GET" });
        return response;
    }
}