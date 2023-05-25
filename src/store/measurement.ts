import {makeAutoObservable} from "mobx";
import {IMeasurement} from "../models/IMeasurement";
import MeasurementService from "../api/services/MeasurementService";


class Measurement {

	measurements: IMeasurement[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	async fetchMeasures() {
		this.measurements = await MeasurementService.fetchMeasures();
		console.log(this.measurements)
	}

}

export default new Measurement();