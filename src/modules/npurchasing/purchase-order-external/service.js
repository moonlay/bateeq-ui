import { inject, Lazy } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { RestService } from '../../../utils/rest-service';


const serviceUri = 'external-purchase-orders/by-user';

export class Service extends RestService {

    constructor(http, aggregator, config, endpoint) {
        super(http, aggregator, config, "purchasing-azure");
    }

    search(info) {
        var endpoint = `${serviceUri}`;
        return super.list(endpoint, info);
    }

    getById(id) {
        var endpoint = `${serviceUri}/${id}`;
        return super.get(endpoint);
    }

    create(data) {
        var endpoint = `${serviceUri}`;
        return super.post(endpoint, data);
    }

    update(data) {
        var endpoint = `${serviceUri}/${data._id}`;
        return super.put(endpoint, data);
    }

    post(data) {
        var endpoint = `${serviceUri}/post`;
        return super.post(endpoint, data);
    }

    delete(data) {
        var endpoint = `${serviceUri}/${data._id}`;
        return super.delete(endpoint, data);
    }

    getPdfById(id) {
        var endpoint = `${serviceUri}/${id}`;
        return super.ngetPdf(endpoint);
    }

    cancel(id) {
        var endpoint = `${serviceUri}/cancel/${id}`;
        return super.put(endpoint);
    }

    unpost(id) {
        var endpoint = `${serviceUri}/unpost/${id}`;
        return super.put(endpoint);
    }

    close(id) {
        var endpoint = `${serviceUri}/close/${id}`;
        return super.put(endpoint);
    }
}
