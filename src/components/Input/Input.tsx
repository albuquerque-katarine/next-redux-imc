import { ChangeEvent } from "react";

interface InputInterface {
    id: string;
    name: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props:InputInterface) => {
    return (
        <>
            <label htmlFor={props.id}>{props.name}</label>
            <input type={props.type} id={props.id} value={props.value} placeholder={props.placeholder} onChange={props.onChange} className="form-control"/>
        </>
    )
}
export default Input;