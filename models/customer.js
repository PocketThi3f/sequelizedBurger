module.exports = function(sequelize, Datatypes) {
	var Customer = sequelize.define("Customer", {
		customer: {
			type: Datatypes.STRING,
			// Creates a customer name
			allowNull: false
		}
	});
	return Customer;
}