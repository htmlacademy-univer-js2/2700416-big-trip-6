import CreateFormView from "../view/create-form-view.js";
import EditFormView from "../view/edit-form-view.js";
import FilterView from "../view/filter-view.js";
import PointView from "../view/point-view.js";
import SortView from "../view/sort-view.js";
import PointsModel from "../model/points-model.js";

import { render, RenderPosition } from "../render.js";

const TRIP_EVENTS_CONTAINER_SELECTOR = '.trip-events';

export default class MainPresenter {
  constructor({ container }) {
    this.container = container;
    this.pointsModel = new PointsModel(); 
    
    this.components = {
      sort: null,
      filter: null,
      editForm: null,
      createForm: null,
      points: []
    };
    
    this.renderPoints = this.renderPoints.bind(this);
    this.clearPoints = this.clearPoints.bind(this);
  }

  init() {
    this.renderFilters();
    this.renderSort();
    this.renderEditForm(); 
    this.renderCreateForm();
    this.renderPoints(); 
  }

  renderFilters() {
    const filterView = new FilterView();
    render(filterView, this.container, RenderPosition.AFTERBEGIN);
    this.components.filter = filterView;
  }

  renderSort() {
    const sortView = new SortView();
    render(sortView, this.container, RenderPosition.BEFOREEND);
    this.components.sort = sortView;
  }

  renderEditForm() {
    const editFormView = new EditFormView();
    render(editFormView, this.container, RenderPosition.BEFOREEND);
    this.components.editForm = editFormView;
  }

  renderCreateForm() {
    const createFormView = new CreateFormView();
    render(createFormView, this.container, RenderPosition.BEFOREEND);
    this.components.createForm = createFormView;
  }

  renderPoints() {
    const points = this.pointsModel.getPoints();
    
    const pointsContainer = this.findPointsContainer();
    
    points.forEach((point, index) => {
      const pointView = new PointView(point, index);
      render(pointView, pointsContainer, RenderPosition.BEFOREEND);
      this.components.points.push(pointView);
    });
  }

  findPointsContainer() {
    const pointsContainer = document.querySelector(TRIP_EVENTS_CONTAINER_SELECTOR);
    
    if (pointsContainer) {
      return pointsContainer;
    }

    const newContainer = document.createElement('ul');
    newContainer.className = 'trip-events__list';
    render(newContainer, this.container, RenderPosition.BEFOREEND);
    return newContainer;
  }

  clearPoints() {
    this.components.points.forEach(point => {
      point.removeElement();
    });
    this.components.points = [];
  }

  updatePoints() {
    this.clearPoints();
    this.renderPoints();
  }

  getPointById(pointId) {
    const points = this.pointsModel.getPoints();
    return points.find(point => point.id === pointId);
  }

  getDestinationById(destinationId) {
    return this.pointsModel.getDestinationsById(destinationId);
  }

  getOffersByIds(offerIds, type) {
    return this.pointsModel.getOffersById(offerIds, type);
  }
}