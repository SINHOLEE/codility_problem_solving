const timer = async ({ time, message }) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(message);
		}, time);
	});
};

const timeSchedule = [
	{ time: 2000, message: '2초' },
	{ time: 3000, message: '3초' },
	{ time: 1000, message: '1초' },
	{ time: 2000, message: '2초' },
];

async function fetchData1(schedule) {
	const [...res] = await Promise.all(
		schedule.map(async (item) => await timer(item))
	);
	console.log(res);
}

fetchData1(timeSchedule);
// async function fetchData2(schedule) {
// 	for (let i = 0; i < schedule.length; i++) {
// 		const message = await timer(schedule[i]);
// 		console.log(message);
// 	}
// }
