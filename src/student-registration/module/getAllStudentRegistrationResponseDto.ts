import {StudentRegistrationResponseDto} from "./studentRegistrationResponseDto";

export class GetAllStudentRegistrationResponseDto {
    registrationResponseDtoList: StudentRegistrationResponseDto[];

    hasNextPage: boolean;

    totalRecords: number;
}