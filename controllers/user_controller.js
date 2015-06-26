var users = {
	guest: {id:1, username:'guest', password:'guest'}
};

exports.autenticar = function (login, password, callback){

	if (users[login]){

		if ( users[login].password !== password ) {

			callback('Contraseña incorrecta.');

		}

		callback(null,users[login]);

	} else {
		callback('Usuario inexistente.');
	}

};