$(function() {

	//Click do btEnvia
	$('#btEnviar').on('click',function() {
		var data = {
		    name: $("nome").val(),
		    email: $("email").val(),
		    message: $("mensagem").val()
		};
		//Ajax para envio do formulário
		$.ajax({ 
			type: "POST",
			url: "mail/envia.php",
			data: data,
			success: function(){
				$('#msgEmail')[0].innerText = "Enviado com sucesso!";
			},
			error: function(){
				$('#msgEmail')[0].innerText = "Erro ao enviar email. Por favor, tente mais tarde.";
			}
		});
	    return false;
	});
	
});