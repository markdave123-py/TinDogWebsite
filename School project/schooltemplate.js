class School{
    constructor(name,location){
        this.name = name;
        this.location = location;
        this.setOfStudents = [];
        this.studentProfile = new Object();
        this.arrmat = [];
    }
    admitting(name,matricNum){
        this.setOfStudents.push({
            "name":name,
            "matricNumber":matricNum
        });
        this.arrmat.push(matricNum);
    }
    // admittingArr(arr){
        // this.setOfStudents = this.setOfStudents.concat(arr);
    // }
    
    rusticateStudent(matricNum){
        if(this.setOfStudents.length == 0){
            console.log("pls admit students");
        }
        if(!(this.arrmat.includes(matricNum))){
            console.log("invalid matric number");
        }
        else{
            for(let student of this.setOfStudents){
                if(student["matricNumber"] == matricNum){
                    let student1 = student;
                    for (var i = this.setOfStudents.length - 1 ; i >= 0; --i){
                        if (this.setOfStudents[i].matricNumber == matricNum){
                            this.setOfStudents.splice(i,1);
                        }
                    }
                    console.log('General Notice!!!, the student with the matric number ' + matricNum + ' has been rusticated!!');
                    for (var i = this.arrmat.length - 1 ; i >= 0; i--){
                        if (this.arrmat[i] == matricNum){
                            this.arrmat.splice(i,1);
                        }
                    
                    }
                }
            }
        }
    }
        
    showStudents(){
        console.log(this.setOfStudents);
  
    }
    getStudentByMatricNumber(matricNum){
        if(this.setOfStudents.length == 0{
            console.log("pls admit students");
        }
        if(!(this.arrmat.includes(matricNum))){
            console.log("invalid matric number");
        }
        else{
            for(let student of this.setOfStudents){
                if(student["matricNumber"] == matricNum){
                    console.log(student);
                }
            }

        }
    }
}