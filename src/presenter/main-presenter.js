import CreateFormView from "../view/create-form-view.js";
import EditFormView from "../view/edit-form-view.js";
import FilterView from "../view/filter-view.js";
import PointView from "../view/point-view.js";
import SortView from "../view/sort-view.js";

import { render, RenderPosition } from "../render.js";

export default class MainPresenter {
    constructor({container}){
        this.container = container;
    }

    init(){
        render(new EditFormView(), this.container, RenderPosition.BEFOREEND);
        render(new CreateFormView(), this.container, RenderPosition.BEFOREEND)
        for (let i = 0; i < 3; i++){
            render(new PointView(), this.container, RenderPosition.BEFOREEND)
        }
    }
}