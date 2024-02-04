import os from "os";

export function printSystemUsername() {
  const username = os.userInfo().username;
  console.log(`System username: ${username}`);
}
