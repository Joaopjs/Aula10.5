//Create a object 
var nomes = this.nomes;
var email = this.email;

exports.setNome = function(nome){
     this.nomes = nome;
}

exports.getNome = function(){
    return this.nomes;
}

exports.setEmail = function(email){
    this.email = email;
}

exports.getEmail = function(){
   return this.email;
}