import {ButtonStatus} from "@lib/hooks/useChangeUser.ts";


export const UpdateUserButton = (
    {onClick,status}:{onClick:() => void, status: ButtonStatus}
) => {

    return (
        <button
            onClick={() => onClick()}
            className={'p-3 bg-amber-500 cursor-pointer'}>
            {
                status === 'save' ? 'Cохранить':
                    status === 'loading' ? ('Обновляю...'):
                        "Редактировать"
            }
        </button>
    )
}