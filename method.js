const students = {
    name: 'Abdullah',
    money: 5000,
    study: 'Math',
    subjects: ['calculas','algebra','geometry'],
    exam: function(){
        return this.name + 'is participating in an exam';
    },
    improveExam:function(subject){
        this.exam();
        return `${this.name} is takeing improvment ${subject}`
    },
    treatDey: function(amount){
        this.money = this.money - amount;
        return this.money;
    }
}

const output = students.exam();
// console.log(output);
const reExam = students.improveExam('algebra');
// console.log(reExam);
const remaining = students.treatDey(900);
console.log(remaining);
const dola = students.treatDey(500);
console.log(dola);
