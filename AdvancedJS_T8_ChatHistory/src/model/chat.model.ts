export interface IChat{
    id: string;
    from: IAuthor
    type: 'response' | 'message' | 'typing';
    time: string;
    text?: string;
}

export interface IAuthor{
    name: string
}