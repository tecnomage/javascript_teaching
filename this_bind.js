let user = {
  firstName: "John",
  dizalgo: function(){
      console.log(this.firstName);
  }
};

function func() {
  console.log(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John

const diz = user.dizalgo.bind(user);

diz();