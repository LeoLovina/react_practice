export interface IUser{
    id: number,
    name: string,
    score: string,
    job: string,
    photo: string
}

export interface IApiResult {
    error:  string,
    isLoaded: boolean
    data:  IUser[]
}
