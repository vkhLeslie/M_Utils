/**
	  * by Peter
	  * @description:转换日期格式 ios时间处理，格式 "2008-08-08"ios,safari不支持"需要格式是："2008/08/08";
	  * @param date, format
	  */
      function formatDate(date, format) {
        if (!date) return;
        if (!format) format = "yyyy-MM-dd";
        switch (typeof date) {
            case "string":
                date = new Date(date.replace(/-/g, "/"));
                break;
            case "number"://考虑了纯秒数传入情况
                date = new Date(date);
                break;
        }
        if (!(date instanceof Date)) return;
        let dict = {
            "yyyy": date.getFullYear(),
            "M": date.getMonth() + 1,
            "d": date.getDate(),
            "H": date.getHours(),
            "m": date.getMinutes(),
            "s": date.getSeconds(),
            "MM": ("" + (date.getMonth() + 101)).substr(1),
            "dd": ("" + (date.getDate() + 100)).substr(1),
            "HH": ("" + (date.getHours() + 100)).substr(1),
            "mm": ("" + (date.getMinutes() + 100)).substr(1),
            "ss": ("" + (date.getSeconds() + 100)).substr(1)
        };
        return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g, function () {
            return dict[arguments[0]];
        });
    }

    module.exports = formatDate
    