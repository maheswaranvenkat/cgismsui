import {PaginationQueryDto} from "./pagination.query.dto";

export class PaginationEntity {
    pageNumber: number;

    pageSize: number;

    sortingOrder: string;

    sortingBy: string;

    constructor(paginationQueryDto: PaginationQueryDto) {
        this.pageNumber = paginationQueryDto._start;
        this.pageSize =  paginationQueryDto._end;

        this.sortingOrder = paginationQueryDto._order;
        this.sortingBy = paginationQueryDto._sort;

        if(this.pageNumber > 0) {
            this.pageSize = paginationQueryDto._end - paginationQueryDto._start;
            this.pageNumber = paginationQueryDto._end / this.pageSize - 1;
        }

    }


}