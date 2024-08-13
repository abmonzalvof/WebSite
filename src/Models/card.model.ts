export class CardBase {
    public title: string = ''
    public description: string = ''
}
export class Card extends CardBase {
    public description2: string = ''
    public items: Array<string> = []
    constructor(title?: string, items?: Array<string>){
        super()
        this.title = title ?? ''
        this.items = items ?? []
        let aux = this.items.slice(0,5)
        this.description = aux.join('\n')
        aux = this.items.slice(5)
        this.description2 = aux.join('\n')
    }
}
export class Card2 extends CardBase {
    public dates: string = 'dates'
    public institution: string = 'institution'
    public link: string = ''
    constructor(){
        super()
    }
}