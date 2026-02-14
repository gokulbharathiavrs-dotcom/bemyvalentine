import userConfig from "../config.json" assert { type: "json" };

// Explicitly import all assets referenced in `config.json` so Vite
// includes them in the final `dist` build. Map the original
// `/src/...` paths to the imported URLs.
import cuteBear from "./assets/cute-bear.gif";
import musicBear from "./assets/music-bear.gif";
import comfortBear from "./assets/comfort-bear.gif";
import kissBears from "./assets/kiss-bears.gif";
import photoBear from "./assets/photo-bear.gif";
import loveYouBear from "./assets/love-you-bear.gif";
import childGif from "./assets/child.gif";
import roseBear from "./assets/rose-bear.gif";
import cookBear from "./assets/cook-bear.gif";
import kissSingle from "./assets/kiss-bear.gif";
import leftButton from "./assets/left-button.png";
import rightButton from "./assets/right-button.png";

import gift1 from "./assets/gift/gift1.jpg";
import gift2 from "./assets/gift/gift2.jpg";
import gift3 from "./assets/gift/gift3.jpg";

import snap1 from "./assets/couple_photo/Snapchat-578988783.jpg";
import snap2 from "./assets/couple_photo/Snapchat-1653591920.jpg";
import snap3 from "./assets/couple_photo/Snapchat-1877859852.jpg";
import snap4 from "./assets/couple_photo/Snapchat-1361703695.jpg";
import snap5 from "./assets/couple_photo/Snapchat-469947116.jpg";
import snap6 from "./assets/couple_photo/Snapchat-435821664.jpg";

import albumDragon from "./assets/album-covers/dragon.png";
import albumLoveToday from "./assets/album-covers/love_today.png";
import albumJodhaa from "./assets/album-covers/jodhaa_akbar.png";
import albumBachelor from "./assets/album-covers/bachelor.png";
import albumMunda from "./assets/album-covers/mundasupatti.jpg";

import adiye from "./assets/songs/Adiye.mp3";
import ennai from "./assets/songs/Ennai-Vittu.mp3";
import muzumathi from "./assets/songs/Muzumathi.mp3";
import vazhithunaiye from "./assets/songs/Vazhithunaiye.mp3";
import kadhal from "./assets/songs/kadhal-kanave.mp3";

// mapping from original config path to imported URL
const ASSET_MAP = {
	"/src/assets/cute-bear.gif": cuteBear,
	"/src/assets/music-bear.gif": musicBear,
	"/src/assets/comfort-bear.gif": comfortBear,
	"/src/assets/kiss-bears.gif": kissBears,
	"/src/assets/photo-bear.gif": photoBear,
	"/src/assets/love-you-bear.gif": loveYouBear,
	"/src/assets/child.gif": childGif,
	"/src/assets/rose-bear.gif": roseBear,
	"/src/assets/cook-bear.gif": cookBear,
	"/src/assets/kiss-bear.gif": kissSingle,
	"/src/assets/left-button.png": leftButton,
	"/src/assets/right-button.png": rightButton,

	"/src/assets/gift/gift1.jpg": gift1,
	"/src/assets/gift/gift2.jpg": gift2,
	"/src/assets/gift/gift3.jpg": gift3,

	"/src/assets/couple_photo/Snapchat-578988783.jpg": snap1,
	"/src/assets/couple_photo/Snapchat-1653591920.jpg": snap2,
	"/src/assets/couple_photo/Snapchat-1877859852.jpg": snap3,
	"/src/assets/couple_photo/Snapchat-1361703695.jpg": snap4,
	"/src/assets/couple_photo/Snapchat-469947116.jpg": snap5,
	"/src/assets/couple_photo/Snapchat-435821664.jpg": snap6,

	"/src/assets/album-covers/dragon.png": albumDragon,
	"/src/assets/album-covers/lovef_today.jpg": albumLoveToday,
	"/src/assets/album-covers/jodhaa akbar.jpg": albumJodhaa,
	"/src/assets/album-covers/bachelor.png": albumBachelor,
	"/src/assets/album-covers/mundasupatti.jpg": albumMunda,

	"/src/assets/songs/Adiye.mp3": adiye,
	"/src/assets/songs/Ennai-Vittu.mp3": ennai,
	"/src/assets/songs/Muzumathi.mp3": muzumathi,
	"/src/assets/songs/Vazhithunaiye.mp3": vazhithunaiye,
	"/src/assets/songs/kadhal-kanave.mp3": kadhal,
};

function resolveValue(val) {
	if (typeof val !== "string") return val;
	if (ASSET_MAP[val]) return ASSET_MAP[val];
	return val;
}

function traverse(obj) {
	if (Array.isArray(obj)) return obj.map(traverse);
	if (obj && typeof obj === "object") {
		const out = {};
		for (const key of Object.keys(obj)) out[key] = traverse(obj[key]);
		return out;
	}
	return resolveValue(obj);
}

export const config = traverse(userConfig);
