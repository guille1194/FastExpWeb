import {Address} from '../../shared/models/address.model';
import {EmergencyContact} from '../../shared/models/emergency-contact.model';

export class PatientPersonal {
  name: string;
  lastName: string;
  birthDate: Date;
  addresses: Address[];
  phoneNumbers: number[];
  emergencyContacts: EmergencyContact[];
  picture: string;
}
