
interface ButtonInterface {
    name: String;
    type?: string | null;
    onclick?: () => void;
}

const Button = (props: ButtonInterface) => {
    return (
        <button className="btn btn-primary" type={props.type == "button"? "button" : "submit"} onClick={props.onclick}>{props.name}</button>
    )
}
export default Button;