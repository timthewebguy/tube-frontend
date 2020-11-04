import faker from 'faker';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { Repository } from '../lib/repository';

/**
 * Some Fake Values for testing
 */
function getRepo(){
    let tmp = new Repository();
    tmp.address1 =              faker.address.streetAddress();
    tmp.address2 =              faker.address.secondaryAddress();
    tmp.city =                  faker.address.city();
    tmp.country_code =          faker.address.countryCode();
    tmp.geo =                   faker.address.secondaryAddress();
    tmp.institution =           faker.company.companyName();
    tmp.name =                  faker.company.companyName();
    tmp.postal_code =           faker.address.zipCode();
    tmp.secondary_location =    "";
    tmp.state =                 faker.address.stateAbbr();
    return tmp;
}




/**
 * Property Validation Tests
 */
describe('Validation', () => {

    test('fails without an address', () => {

        let repo = getRepo();
        delete repo.address1;

        expect.assertions(2);
        return repo.validate().catch((errors) => {
            expect(errors.length).toEqual(1);
            expect(errors[0].constraints.isNotEmpty).toBeDefined();
        });
    });


    test('fails without a city', () => {

        let repo = getRepo();
        delete repo.city;

        expect.assertions(2);
        return repo.validate().catch((errors) => {
            expect(errors.length).toEqual(1);
            expect(errors[0].constraints.isNotEmpty).toBeDefined();
        });
    });



    test('fails without a country code', () => {

        let repo = getRepo();
        delete repo.country_code;

        expect.assertions(2);
        return repo.validate().catch((errors) => {
            expect(errors.length).toEqual(1);
            expect(errors[0].constraints.isISO31661Alpha2).toBeDefined();
        });
    });



    test('fails with an invalid country code', () => {

        let repo = getRepo();
        repo.country_code = '22';

        expect.assertions(2);
        return repo.validate().catch((errors) => {
            expect(errors.length).toEqual(1);
            expect(errors[0].constraints.isISO31661Alpha2).toBeDefined();
        });
    });


    test('fails without an institution', () => {

        let repo = getRepo();
        delete repo.institution;

        expect.assertions(2);
        return repo.validate().catch((errors) => {
            expect(errors.length).toEqual(1);
            expect(errors[0].constraints.isNotEmpty).toBeDefined();
        });
    });


    test('fails without a name', () => {

        let repo = getRepo();
        delete repo.name;

        expect.assertions(2);
        return repo.validate().catch((errors) => {
            expect(errors.length).toEqual(1);
            expect(errors[0].constraints.isNotEmpty).toBeDefined();
        });
    });




    test('fails without a valid postal code', () => {

        let repo = getRepo();
        repo.postal_code = 234234234235645634213;

        expect.assertions(2);
        return repo.validate().catch((errors) => {
            expect(errors.length).toEqual(1);
            expect(errors[0].constraints.isPostalCode).toBeDefined();
        });
    });
});
