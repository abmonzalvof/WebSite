export class Card {
    public title: string = ''
    public description: string = ''
    public items: Array<string> = []
    constructor(title?: string, items?: Array<string>){
        this.title = title ?? ''
        this.items = items ?? []
        this.description = this.items.join('\n')
    }
}