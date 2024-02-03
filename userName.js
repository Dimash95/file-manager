// Получение имени пользователя из аргументов командной строки
function getUsername() {
  const usernameArg = process.argv.find((arg) => arg.startsWith("--username="));
  return usernameArg ? usernameArg.split("=")[1] : "User";
}

module.exports = {
  getUsername,
};
