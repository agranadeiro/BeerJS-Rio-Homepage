$(function() {

	//Iniciando div/alert msgEmail escondida 
	$('#msgEmail').css('display','none');
	
	//Click do btEnvia
	$('#btEnviar').on('click',function() {
		
		if(validaCampos()){
			enviaEmailContato();
		}
	});	

	//Validação dos campos do formulário
	function validaCampos(){
		
		//Verifica se tem campos em brancos
    	if($('#nome').val() == "" || $('#email').val() == "" || $('#mensagem').val() == ""){
    		
    	 	$('#msgEmail')[0].innerText = "O preenchimento de todos os campos é obrigatório.";
			$('#msgEmail').attr('class','alert alert-danger');  
			$('#msgEmail').css('display','block');
    		return false;  	
    		
    	} else { 		
    		return true;
    	}
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
