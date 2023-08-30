export interface User {
    page:number;
    per_page:number;
    total:number;
    total_pages:number;
    results:Users[];
}

export interface Users{
    id:number;name:string;
    _id:string;
    first_name:string;
    last_name:string;
    username:string;
    email:string;
    image:string;
    password:string;
}
