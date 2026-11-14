import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

const tempRoot = path.resolve(tmpdir());
const profile = mkdtempSync(path.join(tempRoot, "thinkflow-tests-"));
if (path.dirname(path.resolve(profile)) !== tempRoot) throw new Error("Test profile is outside the temporary directory");
const args = process.argv.slice(2);
try {
	const result = spawnSync(process.execPath, [
		"--import", "tsx", "--test",
		...(args.length ? args : ["tests/*.test.ts", "tests/*.test.tsx"]),
	], {
		stdio: "inherit",
		env: {
			...process.env,
			NODE_ENV: "test",
			LH_DATA_DIR: path.join(profile, "data"),
			LH_AUTH_FILE: path.join(profile, "auth.json"),
		},
	});
	if (result.error) throw result.error;
	process.exitCode = result.status ?? 1;
} finally {
	rmSync(profile, { recursive: true, force: true });
}
