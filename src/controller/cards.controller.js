import MontarCard from "../models/criarCards.models.js"
import Requisicao from "./requisicoes.controller.js"

class Cards {

    static async criarCards () {
       const ul = document.querySelector("ul")
       ul.innerHTML = ""

       const dados = await Requisicao.pegarDados()

        dados.forEach((chave) => {
          const card = new MontarCard (chave.titulo, chave.resumo, chave.categoria, chave.fonte, chave.imagem)
          const cardCriado = card.criarCard()
          ul.append(cardCriado)
        })
       
    }
}

export default Cards