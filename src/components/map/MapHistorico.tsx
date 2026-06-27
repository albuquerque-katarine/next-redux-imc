type Historico = {
    peso: number;
    altura: number;
    imc: number;
};

interface MapHistoricoInterface {
    history: Historico;
    index: number
}

const MapHistorico = (props: MapHistoricoInterface) => {
    return (
        <tr key={props.index}>
            <td scope="row">{props.history.peso}</td>
            <td scope="row">{props.history.altura}</td>
            <td scope="row">{props.history.imc.toFixed(1)}</td>
        </tr>
    );
}
export default MapHistorico;