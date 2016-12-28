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
			success: function(data){			
				$('#msgEmail')[0].innerText = "Enviado com sucesso!";
				$('#msgEmail').attr('class','alert alert-success')
				$('nome').val("");
				$('email').val("");
				$('mensagem').val("");
				alert(data);
			},
			error: function(){
				$('#msgEmail')[0].innerText = "Erro ao enviar email. Por favor, tente mais tarde.";
				$('#msgEmail').attr('class','alert alert-danger');
				alert(data);
			}
		});
		
		$('#msgEmail').css('display','block');
	    
		return false;
	});
	
});