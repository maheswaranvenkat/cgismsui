import {Injectable} from "@nestjs/common";
import {StudentRegistrationRequestDto} from "./module/studentRegistrationRequestDto";
import {PaginationQueryDto} from "../common/pagination.query.dto";
import {GetAllStudentRegistrationResponseDto} from "./module/getAllStudentRegistrationResponseDto";
import axios from 'axios';
@Injectable()
export class StudentRegistrationService {

 getAll(
     studentRegistration: StudentRegistrationRequestDto,
     query?: PaginationQueryDto
 ): Promise<GetAllStudentRegistrationResponseDto> {
     return axios.get(

     )
 }
}