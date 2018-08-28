var SQLGETSINGLEDATA = "SELECT * FROM `blogdb`.`users` WHERE user_name = 'juan' LIMIT 1 ";
exports.SQLGETSINGLEDATA = SQLGETSINGLEDATA;


var SQLSAVESINGLEDATA = "INSERT INTO `blogdb`.`users` ( `user_name`, `user_lastname`, `user_mail`, `user_password`, `user_pseudo`) " +
      "VALUES (?,?,?,?,?)";
exports.SQLSAVESINGLEDATA = SQLSAVESINGLEDATA;