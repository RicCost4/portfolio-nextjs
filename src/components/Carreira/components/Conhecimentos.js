import conhecimento from "../../../../pages/api/json-arquivos/api_carreira.json";
import Image from "next/image";
import React from "react";

function Conhecimentos(){
    const [listaConhecimento, setlistaConhecimento] = React.useState([])
    const [cursos, setCursos] = React.useState([])
    const [img, setImg] = React.useState([])

    React.useEffect(() =>{
        function conhecimentoLista(){
            setlistaConhecimento(conhecimento.lista)
        }
        function conhecimentoCursos(){
            setCursos(conhecimento.cursos)
        }
        function conhecimentoImg(){
            setImg(conhecimento.imgUrl)
        }

        conhecimentoLista()
        conhecimentoCursos()
        conhecimentoImg()
    }, [])

    return(
        <section>
            <h1>Conhecimentos</h1>
            <div className="tabela">
                <h3>Meus conhecimentos são</h3>
                <ul>
                    {listaConhecimento.map((e) => {
                            return (
                                <li key={e.id}>{e.linguagens}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="SofImg">
                {img.map((e) => {
                        return (
                            <Image key={e.id} src={e.url} height={100} width={100} alt={""} />
                        )
                    })
                }
            </div>
            <div>
                <p>
                    <strong>Técnicas</strong>: Possuo cursos online de aperfeiçoamento de conhecimento;
                </p>
                <ul className="cursos">
                    {cursos.map((e) => {
                            return (
                                <li key={e.id}>● {e.atividades}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Conhecimentos