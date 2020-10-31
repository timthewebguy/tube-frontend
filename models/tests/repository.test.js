import faker from 'faker';
import {
  validate,
  validateOrReject,
} from 'class-validator';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { Repository } from '../lib/repository';

/**
 * Some Fake Values for testing
 */
let fakeRepo = {
    'address1':             faker.address.streetAddress(),
    'address2':             faker.address.secondaryAddress(),
    'city':                 faker.address.city(),
    'country_code':         faker.address.countryCode(),
    'geo':                  faker.address.secondaryAddress(),
    'institution':          faker.company.companyName(),
    'name':                 faker.company.companyName(),
    'postal_code':          faker.address.zipCode(),
    'secondary_location':   "",
    'state':                faker.address.stateAbbr(),
}

test('creates a new repository', () => {

    let repo = new Repository();
    repo.name =  faker.company.companyName();

    repo.validate();
    // expect(sum(1, 2)).toBe(3);
});
