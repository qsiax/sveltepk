export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/dokumenty": [3],
		"/dostupnaya-sreda": [4],
		"/finansovo-khozyaystvennaya": [5],
		"/kursy": [6],
		"/materialno-tekhnicheskoye-obespecheniye": [7],
		"/mesta-dlya-priyema": [8],
		"/mezhdunarodnoye-sotrudnichestvo": [9],
		"/novosty": [10],
		"/obrazovaniye": [11],
		"/obrazovatelnaya-sreda": [12],
		"/obrazovatelnyye-programmy": [13],
		"/obshchezhitiye": [14],
		"/obucheniye": [15],
		"/osnovnyye-svedeniya": [16],
		"/partnerstvo": [17],
		"/pitaniya": [18],
		"/pravila-priyoma": [19],
		"/prikazy-o-zachislenii": [20],
		"/professiya": [21],
		"/proforiyentatsiya": [22],
		"/raspisaniye": [23],
		"/reytingovyy-spisok": [24],
		"/rukovodstvo": [25],
		"/sotsialnoye-obespecheniye": [26],
		"/stipendiya": [27],
		"/struktura-i-organy": [28],
		"/studencheskaya-zhizn": [29],
		"/trudoustroystvo": [30],
		"/tselevoye-obucheniye": [31]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';