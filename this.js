const kodomAli = {
    name: 'Abdullah',
    money: 5000,
    study: 'Math',
    subjects: ['calculas','algebra','geometry'],
    exam: function(){
        console.log(this);
        return this.name + ' is participating in an exam';
    },
    examArrow: () => { 
        console.log(this);
    },
    improveExam:function(subject){
        this.exam();
        return `${this.name} is takeing improvment ${subject}`
    },
    treatDey: function(amount,tips){
        this.money = this.money - amount -tips;
        return this.money;
    }
}
kodomAli.examArrow()

function clickHandler(){
    console.log('inside click handler',this);
}
document.getElementById('click-2-btn').addEventListener('click',function(){
    console.log(this);
});