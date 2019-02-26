// // var bcrypt = require('bcrypt');

// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define('user', {
//     name: {
//       type: DataTypes.STRING
//     },
//     company_name: {
//       type: DataTypes.STRING
//     },
//     email: {
//       type: DataTypes.STRING,
//       isUnique: true,
//       allowNull: false,
//       validate: {
//         isEmail: true
//       }
//     },
//     password: {
//       type: DataTypes.STRING,
//       isUnique: true,
//       allowNull: false
//     }
//   });
//   User.prototype.validPassword = function(password) {
//     // return bcrypt.compareSync(password, this.password);
//     if (password === this.password) {
//       return true;
//     } else {
//       return false;
//     }
//   };
//   // Hooks are automatic methods that run during various phases of the User Model lifecycle
//   // In this case, before a User is created, we will automatically hash their password
//   // hooks: {
//   //   beforeCreate: function(user, options) {
//   //     console.log(user, options);
//   //     user.password = bcrypt.hashSync(
//   //       user.password,
//   //       bcrypt.genSaltSync(10),
//   //       null
//   //     );
//   //   }
//   // }

//   /* User.associate = function(models) {
//       // Associating Author with Posts
//       // When an Author is deleted, also delete any associated Posts
//       User.hasMany(models.User_info, {
//         onDelete: "cascade"
//       });
//     };*/
//   return User;
// };
