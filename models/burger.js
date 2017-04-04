module.exports = function(sequelize, Datatypes) {
	var Burger = sequelize.define("Burger", {
    burger_name: { 
    	type: Datatypes.STRING,
    	allowNull: false,
    	validate: {
    		len: [1, 140]
    	}
    },
    devoured: { 
    	type: Datatypes.BOOLEAN,
    	defaultValue: true
    }
  }, {
        timestamps: false
    },
    {
        classMethods: {
            associate: function(models) {
                Burger.hasOne(models.Customer);
            }
        }
    });
  return Burger;
}
