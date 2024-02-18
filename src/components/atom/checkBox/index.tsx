type CheckBoxProps = {
    id: string;
    title: string;
}


export default function CheckBox({id, title}: CheckBoxProps){
    return(
        <div className='text-lg text-grey-dark'>
            <input type="checkbox" name={id} id={id} className='mr-4 bg-transparent'/>
            <label htmlFor={id}>{title}</label>
        </div>
    )
}