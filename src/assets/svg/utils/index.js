// 横杠连接的字符串如何转换成驼峰？
function styleStrToObject (strStr) {
 const obj = {};

 const s = strStr.toLowerCase().replace(/-(.)/g,function(m,g){
    return g.toUpperCase();
 }).replace(/;\s?$/g,'').split(/:|;/g)

 for (var i = 0; i<s.length;i+=2){
    obj[s[i].replace(/\s/g,'')] = s[i+1].replace(/^\s+|\s+$/g,"")
 }
 return obj
}

export default styleStrToObject