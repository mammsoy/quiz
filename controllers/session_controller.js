//var tittle = 'Quiz';

exports.new = function(req, res) {

	var errors = req.session.errors || {};

	req.session.errors = {};

	res.render('sessions/new', { errors: errors, title: tittle });

};

exports.create = function(req, res) {


	var login = req.body.login;
	var password = req.body.password;
	var userController = require ('./user_controller');

	userController.autenticar( login, password, function (error, user){

		if ( error ){
			req.session.errors={"Identificación": error + '' };
			res.redirect("/login");
			return;
		}

		var accessTime = (new Date()).getTime();

		req.session.user={ id:user.id, username:user.username, accessTime:accessTime };

		var urlRedirect = req.session.redir || '/';

		res.redirect(urlRedirect);

	});

};

exports.destroy = function(req, res) {
	
	delete req.session.user;

	res.redirect(req.session.redir.toString());
	
};

