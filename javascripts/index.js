$(function() {

	//Click do btContato
	$('#btContato').on('click',function() {
		$('#msgEmail').css('display','none');
		$('#modalContato').modal('show');
	});
	
	//Click do btEnvia
	$('#btEnviar').on('click',function() {
		
		if(validaCampos()){
			enviaEmailContato();
		}
	});	

	
	//Validação dos campos do formulário
	function validaCampos(){
		
		var retorno;
		var emailFilter=/^.+@.+\..{2,}$/;
		var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/;
		var nome = $('#nome').val();
		var email = $('#email').val();
		var mensagem = $('#mensagem').val();
				
		//Verifica se tem campos em brancos
    	if(nome == "" || email == "" || mensagem == ""){
    		
    	 	$('#msgEmail')[0].innerText = "O preenchimento de todos os campos é obrigatório.";
			$('#msgEmail').attr('class','alert alert-danger');  
			$('#msgEmail').css('display','block');
    		retorno = false;  	
    		
    	} else if(!(emailFilter.test(email))||email.match(illegalChars)){ //Verificando email
    		$('#msgEmail')[0].innerText = "Por favor, digite um email válido.";
    		$('#msgEmail').css('display','block');
    		retorno = false;
    	
    	} else { //Tudo ok
    		retorno =  true;
    	}
    	
    	return retorno;
	}

	
	//Envio do email
	function enviaEmailContato(){
		
		var data = {
			    name: $('#nome').val(),
			    email: $('#email').val(),
			    message: $('#mensagem').val()
			};
			
			//Ajax para envio do formulário
			$.ajax({ 
				type: "POST",
				url: "mail/envia.php",
				data: data,
				success: function(data){			
					$('#msgEmail')[0].innerText = data;
					$('#msgEmail').attr('class','alert alert-success')
					$('#nome').val("");
					$('#email').val("");
					$('#mensagem').val("");
				},
				error: function(){
					$('#msgEmail')[0].innerText = data;
					$('#msgEmail').attr('class','alert alert-danger');
				}
			});
			//exibe div/alert
			$('#msgEmail').css('display','block');
	}		
});
