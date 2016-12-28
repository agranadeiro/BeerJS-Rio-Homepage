$(function() {

	//iniciando div msgEmail escondida 
	$('#msgEmail').css('display','none');
	
	//Click do btEnvia
	$('#btEnviar').on('click',function() {
		var data = {
		    name: $('nome').val(),
		    email: $('email').val(),
		    message: $('mensagem').val()
		};
		//Ajax para envio do formulário
		$.ajax({ 
			type: "POST",
			url: "mail/envia.php",
			data: data,
			success: function(){			
				$('#msgEmail').innerText = "Enviado com sucesso!";
				$('#msgEmail').attr('alert-success','alert-success')
				$('nome').val("");
				$('email').val("");
				$('mensagem').val(""); 
			},
			error: function(){
				$('#msgEmail').innerText = "Erro ao enviar email. Por favor, tente mais tarde.";
				$('#msgEmail').attr('alert-success','alert-danger')			
			}
		});
		
		$('#msgEmail').css('display','block');
	    
		return false;
	});
	
});