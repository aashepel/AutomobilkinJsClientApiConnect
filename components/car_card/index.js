export class CarCardComponent
{
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        let generation = data.model_car_generation
        let model = generation.model_car
        let auto_concern = model.auto_concern
        return (
            `
            <div class="cars_list_wrapper">
                <div class="cars_list_inner">
                    ${data.image ? `<img class="car_list_inner_image" src="${data.image}" alt="photo not loaded"></img>` : `<div class="d-flex align-items-center"><p class="car_list_inner_image">No photo</p></div>`}
                    <div class="car_list_inner_car-info">
                        <div class="car_list_inner_car-info_block car_list_inner_car-info_specifications">
                            <span class="car_list_block_inner_car-title">${ auto_concern.title } ${ model.model_name } (${generation.generation})</span>
                            <div class="car_list_inner_car-info_specifications_info">
                                <div class="car_list_inner_car-info_specifications_info_block car_list_inner_car-info_specifications_info_block_left">
                                    <span>${ data.engine_volume } л / ${ data.engine_power } л.с / ${ data.engine_type }</span>
                                    <span>${ data.transmission_type }</span>
                                    <span>${ data.body_type }</span>
                                </div>
                                <div class="car_list_inner_car-info_specifications_info_block car_list_inner_car-info_specifications_info_block_right">
                                    <span>${ data.drive_type }</span>
                                    <span>${ data.color }</span>
                                </div>
                            </div>
                        </div>
                        <span class="car_list_inner_car-info_block car_list_inner_car-info_price">${ data.price_rubles.toLocaleString() } ₽</span>
                        <span class="car_list_inner_car-info_block car_list_inner_car-info_year">${ data.year_of_release }</span>
                        <span class="car_list_inner_car-info_block car_list_inner_car-info_odometer">${ data.odometer.toLocaleString() } км</span>
                    </div>
                </div>
                <a class="cars_list_block_link" id="click-car-${data.id}" data-id="${data.id}">Подробнее</a>
            </div>
            <hr>
            `
        )
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-car-${data.id}`)
            .addEventListener("click", listener)
    }
    
    render(data, listener) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }
}