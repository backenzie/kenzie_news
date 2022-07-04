class MontarCard {
    constructor (titulo, resumo, categoria, fonte, imagem) {
        this.titulo = titulo
        this.resumo = resumo
        this.categoria = categoria
        this.fonte = fonte
        this.imagem = imagem

    }
    criarCard() {
        const div1 = document.createElement("div")
        const div2 = document.createElement("div")
        const li   = document.createElement("li")
        li.classList.add("cardLi")

        const img = document.createElement("img")
        img.src = this.imagem
        img.alt = "imagem ilustrativa"
        img.classList.add("cardImg")

        const span = document.createElement("span")
        span.innerText = this.categoria
        span.classList.add("cardSpan")

        const h1 = document.createElement("h1")
        h1.innerText = this.titulo
        h1.classList.add("h1")

        const h3 = document.createElement("h3")
        h3.innerText = this.resumo
        h3.classList.add("h3")

        const p  = document.createElement("p")
        p.innerText = `Fonte: ${this.fonte}`
        p.classList.add("p")

        li.append(div1, div2)
        div1.appendChild(img)
        div2.append(span, h1, h3, p)
        return li

    }
}

export default MontarCard