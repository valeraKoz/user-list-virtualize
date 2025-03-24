export type UserType = {
    id: number,
    name?: string,
    department?: string,
    company?: string,
    jobTitle?: string
}

export type UserListType = UserListItemType[]

export type UserListItemType = {
    id: number,
    name: string,
}