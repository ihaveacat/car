
/**
 * 日期格式化 2020-02-02
 * @param {*} date 
 */
export const dateFormatYMD = function(date) {
    if (date == void(0)) {
        return;
    }
    var year = date.getFullYear();
    var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return year + "-" + month + "-" + day;
}
/**
 * 日期格式化 周一 20:40:39
 * @param {*} date 
 * @returns 
 */
export const dateFormatZHMS = function(date) {
    if (date == void(0)) {
        return;
    }
    var h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var weekArray = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
    var week = weekArray[date.getDay()];
    return week+h+":"+m;
}