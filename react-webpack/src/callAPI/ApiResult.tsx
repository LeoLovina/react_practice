import * as IResult from './IApiResult'

export class User implements IResult.IUser{
    id: number
    name: string
    score: string
    job: string
    photo: string
}

export class ApiResult implements IResult.IApiResult{
    error:  string
    isLoaded: boolean
    data:  User[]
}