// In osInfo.mjs
import os from "os";

export function printCPUInfo() {
  const cpus = os.cpus();
  console.log(`Total CPUs: ${cpus.length}`);
  cpus.forEach((cpu, index) => {
    console.log(`CPU ${index + 1}: ${cpu.model} - ${cpu.speed / 1000} GHz`);
  });
}
