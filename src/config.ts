import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "wkx2009的边角料工坊",
	subtitle: "正在制作中...",
	lang: "zh_CN",
	themeColor: {
		hue: 250,
		fixed: false,
	},
	banner: {
		enable: false,
		src: "/images/default-banner.webp",
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	// API 背景系统（自定义字段，类型可能不包含，先保留）
	apibanner: {
		enable: true,
		defaultSrc: "/images/default-banner.webp",
		apiList: [
			"https://api.yppp.net/api.php",
			"https://bing.img.run/rand.php"
		],
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [
		{
			src: '/images/icon.png',
			theme: 'light',
			sizes: '32x32',
		}
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/wkx2009",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/images/avatar.webp",
	name: "wkx2009",
	bio: "逸一时误一世",
	links: [
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://bilibili.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/wkx2009",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY 4.0",
	url: "https://creativecommons.org/licenses/by/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};