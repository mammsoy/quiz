function deleteQuestion (data) {

	$('#form').attr('method','post');
	$('#form').attr('action', data);
	$('#form').submit();
	
}