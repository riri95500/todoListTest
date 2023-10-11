class User{
    constructor(email, lastname, firstname, birthday, password){
        this.email = email
        this.lastname = lastname
        this.firstname = firstname
        this.birthday = birthday
        this.password = password
        this.todoList = null
    }

    isValid() {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40}$/;
        const ageLimitDate = new Date();
        ageLimitDate.setFullYear(ageLimitDate.getFullYear() - 13);
    
        return (
            emailPattern.test(this.email) &&
            passwordPattern.test(this.password) &&
            this.firstname.trim() !== "" &&
            this.lastname.trim() !== "" &&
            this.birthday <= ageLimitDate
        );
      }

    createToDoList() {
        if (this.isValid() && !this.todoList) {
          this.todoList = new ToDoList();
          return true;
        }
        return false;
      }
}

module.exports = User;

// const user = new User("riad.ahmedyahia@yahoo.fr", "Test", "Riad", "2001-06-30", "Password123");
// if(user.isValid()){
//     console.log("vrai")
// }else{
//     console.log("faux")
// }
