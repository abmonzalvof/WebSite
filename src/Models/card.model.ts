export class Card {
    public title: string = ''
    public description: string = ''
    public description2: string = ''
    public items: Array<string> = []
    constructor(title?: string, items?: Array<string>){
        this.title = title ?? ''
        this.items = items ?? []
        let aux = this.items.slice(0,5)
        this.description = aux.join('\n')
        aux = this.items.slice(5)
        this.description2 = aux.join('\n')
    }
}