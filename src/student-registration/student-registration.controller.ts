import {
    Body,
    Get,
    LoggerService, Query, Res,
} from '@nestjs/common';
import {StudentRegistrationRequestDto} from "./module/studentRegistrationRequestDto";
import {PaginationQueryDto} from "../common/pagination.query.dto";


export class StudentRegistrationController {
    private readonly logger: LoggerService;

    @Get()
    async findAll(
        @Body() s: StudentRegistrationRequestDto,
        @Res() response,
        @Query() query?: PaginationQueryDto,
    ): Promise<any> {
        // const studentRegistration = await this.
    }



}