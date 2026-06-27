interface TitleInterface {
    title?: string;
    subtitle: string;
}

const Title = (props: TitleInterface) => {
    return (
        <>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </>
    )
}
export default Title;