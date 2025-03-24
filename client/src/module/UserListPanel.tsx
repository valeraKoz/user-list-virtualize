export const UserListPanel = (
    {children}:{children:React.ReactNode}
) =>{
    return (
        <div className='h-[400px] flex border p-5 gap-6 overflow-hidden'>
            {children}
        </div>
    )
}