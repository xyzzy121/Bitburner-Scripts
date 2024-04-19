/** @param {NS} ns */
export async function main(ns) {
  const target = ns.args[0];

  while (true) {
    if (ns.hackAnalyzeChance < .75) {
      await ns.tprint(`Weakening ${target}`)
      await ns.weaken(target)
    }
    else
      if (ns.getServerMoneyAvailable(target) < 100000) {
        await ns.tprint(`Growing ${target}`)
        await ns.grow(target)
      }
      else {
        await ns.tprint(`Hacking ${target}`)
        const hackResult = await ns.hack(target);
        if (hackResult) {
          await ns.tprint(`${target} Hacked.`);
          break;
        } else {
          await ns.tprint(`Failed to hack ${target}.`);
          break;
        }
      }
  }
  
}