// :22-7: class constructor , create object form class..


class Student {
    constructor(sId, sName, sZip ) {
        this.id = sId;
        this.name = sName;
        this.zip = sZip;
        this.school = "kalimunnesa school";
        
    }

}
const student1 = new Student (1, "sunny", 808080);
const student2 = new Student (2, "chamily", 909090);
const student3 = new Student (3, "skib", 776776);
const student4 = new Student (4, "maliha", 3434342);
console.log(student1, student2, student3, student4);            // output:: Student {} Student {}  //>>.... without constructor.