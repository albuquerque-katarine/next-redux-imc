import Header from "@/components/header/Header";
import Title from "@/components/title/Title";

const Sobre = () => {
    return (
        <>
            <Header/>

            <div className="container text-center">
            
                <Title title="Calculadora de IMC" subtitle="React + Redux Toolkit"/><br />                
            
                <p>Desenvolvi uma aplicação para cálculo de IMC utilizando <strong>React</strong>, <strong>Redux Toolkit</strong>, <strong>React Router</strong> e <strong>Bootstrap</strong>. O sistema permite calcular o Índice de Massa Corporal, armazenar resultados em um histórico e gerenciar o estado global da aplicação através do Redux. O projeto foi estruturado com foco em organização de componentes, fluxo de dados e experiência do usuário.</p>
                
                <img src="banner.png" alt="Banner" width="100%"/>

            </div>
        </>
    )
}
export default Sobre;