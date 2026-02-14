import userConfig from "../config.json" assert { type: "json" };

// Convert any absolute `/src/...` asset paths in the JSON into URLs
// that Vite will resolve and include in the build. This lets the
// app keep using string paths in `config.json` while ensuring the
// final site serves the correct hashed asset URLs.
function resolveAssetPath(value) {
	if (typeof value !== "string") return value;
	if (!value.startsWith("/src/")) return value;
	// turn "/src/assets/foo.png" into "./assets/foo.png" (relative to this file)
	const rel = `./${value.replace(/^\/src\//, "")}`;
	try {
		return new URL(rel, import.meta.url).href;
	} catch (e) {
		return value;
	}
}

function traverse(obj) {
	if (Array.isArray(obj)) return obj.map(traverse);
	if (obj && typeof obj === "object") {
		const out = {};
		for (const key of Object.keys(obj)) {
			out[key] = traverse(obj[key]);
		}
		return out;
	}
	return resolveAssetPath(obj);
}

export const config = traverse(userConfig);
