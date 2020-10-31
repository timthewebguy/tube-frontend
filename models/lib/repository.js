import { IsNotEmpty, Length, IsISO31661Alpha2, IsPostalCode, IsObject } from 'class-validator';
import { Doc } from "./doc";


class Repository extends Doc {

    @IsNotEmpty({
        message: "An address is required."
    })
    address1;

    address2;

    @IsNotEmpty({
        message: "Please use a valid city."
    })
    city;

    @IsISO31661Alpha2({
        message: "Please use a valid country code."
    })
    country_code;

    @IsObject()
    geo;

    @IsNotEmpty({
        message: "Please use a valid postal code."
    })
    institution;

    @IsNotEmpty({
        message: "Please use a valid postal code."
    })
    name;

    @IsPostalCode({
        message: "Please use a valid postal code."
    })
    postal_code;

    secondary_location;

    @IsNotEmpty({
        message: "State is a required field."
    })
    @Length(2,2, {
        message: "Please use the 2 character state code."
    })
    state;


    constructor(id) {
        super(id);
        this.collection = 'repositories';
        this.fields = [
            'address1',
            'address2',
            'city',
            'country_code',
            'geo',
            'institution',
            'name',
            'postal_code',
            'secondary_location',
            'state',
        ]
    }


    greeting = function() {
        console.log(this.name);
    }

}

export {
    Repository
}
