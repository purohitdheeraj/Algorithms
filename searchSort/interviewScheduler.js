/**
 * @param {List[map<str,int>]} intervals
 * @return {List[map<str,int>]}
 */

function mergeOverlappingIntervals(intervals) {
	if (intervals.length === 0) return [];

	let mergedIntervals = [intervals[0]];

	for (let i = 1; i < intervals.length; i++) {
		let currentInterval = intervals[i];
		let latestMergedInterval =
			mergedIntervals[mergedIntervals.length - 1];
		let isOverlapped =
			currentInterval.start <= latestMergedInterval.end;

			if (isOverlapped) {
			latestMergedInterval.end = Math.max(
				currentInterval.end,
				latestMergedInterval.end
			);
			latestMergedInterval.start = Math.min(
				currentInterval.start,
				latestMergedInterval.start
			);
		} else {
			mergedIntervals.push(currentInterval);
		}
	}
	return mergedIntervals;
}

const intervals = [
	{ start: 9, end: 10.5 },
	{ start: 9.5, end: 10 },
	{ start: 10, end: 11 },
	{ start: 10.5, end: 11.5 },
	{ start: 13, end: 14 },
	{ start: 13.5, end: 15 },
];
console.log(mergeOverlappingIntervals(intervals));
// [{ start: 9, end: 11.5 }, { start: 13, end: 15 }];
