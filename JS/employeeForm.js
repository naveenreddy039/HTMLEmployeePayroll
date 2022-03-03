
const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
  };
function reset(){
    setValue('#name','');
    setValue('#salary','');
    setValue('#notes','');
}
const save=()=>{
    try{
        let empData=savedata();
        console.log(empData);
    }
    catch(e){
        return;
    }    

}
function saveData(){
    let employee = new EmployeePayrollData();
    //console.log("invalid",employee.isValid())
    if(employee.isValid()){
        employee.id=Math.floor(Math.random() * 100) + 1;
        console.log(employee.id)
        employee.name=document.getElementById("name").value;
        var empPic=document.querySelector('input[name = profile]:checked');
        var empGender=document.querySelector('input[name = gender]:checked');
        var empDepts = document.getElementsByName('dept');
        var department="";
        for (var checkbox of empDepts) {
            if(checkbox.checked ==true){
                department=department+","+checkbox.value;
            }
        }
        if(empPic!=null){
            employee.picture = document.querySelector('input[name = profile]:checked').value;
        }
        if(empGender!=null){
            employee.gender = document.querySelector('input[name = gender]:checked').value;
        }
        if(empDepts!=null){
            employee.department =department;
        }
        //console.log(department)
        employee.salary = document.getElementById("salary").value;
        var day = document.getElementById("day").value;
        var month = document.getElementById("month").value;
        var year = document.getElementById("year").value;
        employee.note = document.getElementById("notes").value;
        employee.startDate = new Date(day+" "+month+" "+year);
        //console.log(employee.toString());
        reset();
        if(employee.name==null || employee.name=='' || employee.startDate==null){
          return null;
        }else{
          return employee;
        }
        
    }
  }