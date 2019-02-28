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


export interface CountryCodeDTO { 
    code?: string;
    country?: string;
    createDate?: Timestamp;
    createOpr?: string;
    editDate?: Timestamp;
    editOpr?: string;
    id?: number;
    orderNo?: number;
    sysField?: number;
    webVisible?: number;
}