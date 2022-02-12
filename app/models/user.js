const bcrypt = require('bcrypt')

const hashPassword = password => {
    return bcrypt.hashSync(password, 10);
}

module.exports = (sequelize, DataTypes) => {
    const schema = sequelize.define("User", {
        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
                notEmpty:{
                    args:true,
                    msg:"Username cannot be empty"
                }
            },
            unique:true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty:{
                    args:true,
                    msg:"Password cannot be empty"
                }
            },
        },
        fullName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notEmpty:{
                    args:true,
                    msg:"Full name cannot be empty"
                }
            },
        },
        age: {
            type: DataTypes.INTEGER(2),
            allowNull: false,
            validate: {
                notEmpty:{
                    args:true,
                    msg:"Age cannot be empty"
                }
            },
        }
    }, {
        hooks: {
            beforeCreate: user => {
                user.password = hashPassword(user.password)
            },
            beforeUpdate: user => {
                user.password = hashPassword(user.password)
            }
        }
    })

    schema.prototype.isPasswordValid = function(password) {
        return bcrypt.compareSync(password, this.password);
    }

    return schema
};