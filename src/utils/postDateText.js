import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const getPostDateText = (dateUnix) => {
	const currentDate = dayjs(Date.now());
	const weeksCount = currentDate.diff(dateUnix, "week");
	// jika dalam hari yang sama maka hours ago
	// jika kemarin maka yesterday
	// masih dalam seminggu, days ago
	if (weeksCount < 1) {
		return dayjs(dateUnix).fromNow();
	}
	const yearsCount = currentDate.diff(dateUnix, "year");
	// kalau dalam tahun yang sama maka misal April 21
	if (yearsCount < 1) {
		return dayjs(dateUnix).format("MMMM YY");
	}
	// kalau beda tahun maka December 8, 2023
	else {
		return dayjs(dateUnix).format("MMMM D, YYYY");
	}
};

export default getPostDateText;
