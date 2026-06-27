import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { calcular } from "@/store/slices/imcSlice";
import { useState } from "react";
import { adicionar, limpar } from "@/store/slices/histoicoSlice";
import Header from "@/components/header/Header";
import Button from "@/components/button/Button";
import Input from "@/components/Input/Input";
import Title from "@/components/title/Title";
import MapHistorico from "@/components/map/MapHistorico";

const Home = () => {
  
  const imc = useSelector((state: RootState) => state.imc.value);
  const historico = useSelector((state: RootState) => state.historico.value);

  const dispatch = useDispatch();

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [valorImc, setValorImc] = useState(0);

  function calcularImc() {
    if (!peso || !altura) return;
    dispatch(
      calcular({
        peso: Number(peso.replace(",", ".")),
        altura: Number(altura.replace(",", ".")),
      })
    );
    setValorImc(Number(imc));
  }

  function addHistorico() {
    dispatch(
        adicionar({
          peso: Number(peso),
          altura: Number(altura),
          imc: Number(imc)
        })
      );
      setValorImc(0);
      setPeso('');
      setAltura('');
  }

  function limparHistorico() {
    dispatch(limpar());
  }

  return (
    <>
      <Header/>
      
      <div className="row container m-auto">

        <form action={calcularImc} className="col-md-6 mt-5">

          <Title title="IMC" subtitle="Índice de Massa Corporal"/>

          <Input 
            name="Peso"
            type="number"
            value={peso}
            id="peso"
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Informe o Peso"
          /><br />
          
          <Input
            name="Altura"
            type="number"
            value={altura}
            id="altura"
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Informe a Altura"
          /><br />
          
          <hr />
          
          <h3>Índice = {valorImc !== 0 ? valorImc.toFixed(1) : "--"}</h3>

          <div className="col-12">
            
            <Button type="submit" name="Calcular"/>&nbsp;
            <Button name="Salvar" onclick={addHistorico}/>&nbsp;
            <Button name="Limpar" onclick={limparHistorico}/>&nbsp;
                    
          </div>
        
        </form>
        
        <div className="col-md-6 mt-5">

          <Title subtitle="Histórico"/>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Peso</th>
                <th scope="col">Altura</th>
                <th scope="col">Imc</th>
              </tr>
            </thead>
            <tbody>            
              {
                historico.map((history, index) => (
                  <MapHistorico key={index} history={history} index={index}/>
                ))
              }            
            </tbody>
          </table>

        </div>

      </div>
    </>
  );
};
export default Home;