export default class PortaModel {
    #numero: number
    #temPresente: boolean
    #framecolor: boolean
    #aberta: boolean
    // atributos de privatização acima //

    //hashtag + palavra qualquer, significa um atributo privado por exemplo #palavra//

        // dentro de constructor, tem atributos //
    constructor(numero: number, temPresente = false, framecolor = false, aberta = false) {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#framecolor = framecolor
        this.#aberta = aberta
    }
        // inicialização dos 4 tributos relacionados ao 4 atributos da privatização da classe //

        get numero(){
            return this.#numero
        }

        get temPresente(){
            return this.#temPresente
        }

        get framecolor(){
            return this.#framecolor
        }

        get aberta() {
            return this.#aberta
        }
        //metodos getrs para pegar cada um dos atributos, acima //
 
        // metodos responsáveis por modificar a porta, abaixo //
        desselecionar(){
            const framecolor = false
            return new PortaModel(this.numero, this.temPresente, framecolor, this.aberta)
        }

        alterarSelecao(){
            const framecolor = !this.framecolor
            return new PortaModel(this.numero, this.temPresente, framecolor, this.aberta)
        }

        abrir(){
            const aberta = true
            return new PortaModel(this.numero, this.temPresente, this.framecolor, aberta)
        }
}