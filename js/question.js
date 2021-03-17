class Question{
    constructor(){
        this.input = createInput('Name');
        this.input2 = createInput('Answer');
    }

    hide(){
        this.input.hide();
        this.input2.hide();
    }

    display(){
        var title = createElement('h2')
        title.html("My Quiz Game")
        title.position()
    }
}