import {ReactNode} from "react";
import {LuLoaderCircle} from "react-icons/lu";

export const UserListView = (
    {children, handleScroll, status}:
    {
        children: ReactNode,
        handleScroll: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void,
        status: 'idle' | 'loading' | 'success' | 'failed',
    },
) => {
    return (
        <div onScroll={(e) => handleScroll(e)} className={`scrolled-component overflow-y-scroll flex flex-col`}>

            {children}
            {
                status === 'loading' ? (
                    <div className='flex justify-center p-3'>
                        <LuLoaderCircle className='animate-spin' size={30}/>
                    </div>
                ) : null
            }
        </div>
    )
}