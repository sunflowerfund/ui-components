/**
 * Blue Frameworks
 * Spring Framework 5
 *
 * OpenAPI spec version: 1.0
 * Contact: luke.petzer@younglings.africa
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Timestamp } from './timestamp';


export interface PersonDTO { 
    birthDate?: string;
    commsInd?: number;
    createDate?: Timestamp;
    createOpr?: string;
    editDate?: Timestamp;
    editOpr?: string;
    ethnicGroupId?: number;
    firstname?: string;
    genderId?: number;
    hashSearch?: string;
    hlaData?: string;
    id?: number;
    idNumber?: string;
    idNumberType?: number;
    newsLetter?: number;
    staffMember?: number;
    surname?: string;
    titleId?: number;
    webVisible?: number;
}
