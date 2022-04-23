
class Student{
    static count=0;
    constructor(name,age,ph_no,marks){
      this.name=name;
      this.age=age;
      this.phone=ph_no;
      this.marks=marks;
      Student.count++;
    }
 
    isEligible(){
      if(this.marks>40)
      console.log('Eligible');
      else
      console.log('Not Eligible');
    }
    isEligibleForPlacements(minMarks=60){
       return (minAge)=>{
         if(this.marks>=minMarks&&this.age>=minAge)
         return true;
         else
         return false;
       }
    }
    static studentCreated(){
      console.log(Student.count);
    }
 
 };
 const st1=new Student('Sanket',24,7597,80);
 const st2=new Student('pranay',22,7984,30);
 const st3=new Student('chinmay',21,7597,50);
 const st4=new Student('mayank',23,7984,70);
 st1.isEligible();
 st2.isEligible();
 Student.studentCreated();  //shows how many students created
 const students=[st1,st2,st3,st4];
 const company={    // definition of company criteria
   marks:40,
   age:22 
 }
 // below is iteration for all students to check eligible for placements
 students.forEach((st)=>{
   if(st.isEligibleForPlacements(company.marks)(company.age))
   console.log(st.name);
 });
 
 
 
 
 //this keyword
 this.table= 'window table';
 this.garage ={
     'table':'garage table',
     cleanTable: ()=>{
       console.log(`cleaning ${this.table}`)
     }
 }
 
 const cltbl= function () {
   console.log(this.table);
 }
 cltbl();
 garage.cleanTable();
 const clean= garage.cleanTable;
 //here clean function will refer to global object
 clean();
 const bindclean=garage.cleanTable.bind(garage);
 bindclean();
 
 //this inside a function refers to global object
 var x=10;
 function def(){
   var x=5;
   // console.log(this.x);
   // console.log(x);
   const definside=()=>{
     console.log(this.x);
     console.log(x);
   }
   definside();
 }
 def();