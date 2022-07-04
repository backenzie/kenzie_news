class Requisicao {
    
    static url = 'https://kenzie-news-api.herokuapp.com/api/news'

    
    static async pegarDados () {
        const options = {

        }
        const dados = await fetch(this.url)
        .then(response => response.json())
        .then(response => response)
        .catch((err)=>{
            console.log(err)
        })
    return dados
    }
    
    }
    export default Requisicao
