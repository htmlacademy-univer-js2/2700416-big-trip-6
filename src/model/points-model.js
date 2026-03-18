import {getRandomPoints} from '../mock/points.js';
import {mockDestinations} from '../mock/destinations.js';
import {mockOffers} from '../mock/offers.js';

export default class poitsModel {
    points = getRandomPoints;
    destinations = mockDestinations;  
    offers = mockOffers;

    getPoints = () => this.points;
    getDestinations = () => this.destinations;
    getOffers = () => this.offers;

    getDestinationsById(id) {
        const allDestinations = this.getDestinations();
        return allDestinations.find((item) => item.id === id);
    }

    getOffersByType(type) {
        const allOffers = this.getOffers();
        return allOffers.find((type) => item.type === type);
    }
    getOffersById(itemsId, type) {
        const offersType = this.getOffersByType(type);
        return offersType.offers.filter((item) => itemsId.find((id) => item.id === id));
    }
}