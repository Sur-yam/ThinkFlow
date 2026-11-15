import concurrently from "concurrently";

const port = Number(process.env.PORT ?? "3000");
if (!Number.isInteger(port) || port < 1 || port > 65535) {
	throw new Error("PORT must be an integer from 1 to 65535");
}

const { result } = concurrently(
	[
		`next dev -H localhost --port ${port}`,
		{ command: "electron .", env: { LH_DEV_URL: `http://localhost:${port}`, LH_DESKTOP_DEV: "1" } },
	],
	{ killOthersOn: ["success", "failure"], successCondition: "first" },
);

try {
	await result;
} catch {
	process.exitCode = 1;
}
