export interface ITodo{
    id:number;
    description:string;
    title:string;
    isCompleted:boolean;
    isArchived:boolean;
    endDate:Date | number | string;
    selected:boolean;
}