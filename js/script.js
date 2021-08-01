let student_checked = document.getElementById('student').checked;
let teacher_checked = document.getElementById('teacher').checked;


if(student_checked){
    display_student_form();
}
if(teacher_checked){
    display_teacher_form();
}

function display_student_form(){
    console.log("Student");
    document.getElementById('student-form').style.display = 'inline';
    document.getElementById('teacher-form').style.display = 'none';
}

function display_teacher_form(){
    console.log("Teacher");
    document.getElementById('student-form').style.display = 'none';
    document.getElementById('teacher-form').style.display = 'inline';

}