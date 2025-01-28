const args = process.argv.slice(2);
if (args.includes('--version')) {
console.log("Version 1.0.0");
} else {
console.log("Run with --version to see version info.");
}
Run:
node cliFlag.js --version
