import {Disease} from '../../shared/models/disease.model';

export class PatientMedical {
  bloodType: string;
  chronicDiseases: Disease[];
  allergies: Disease[];
  disabilities: Disease[];
}
