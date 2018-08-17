var xlsx = require('node-xlsx');
var fs = require('fs');
var querystring = require("querystring");
// read
var arrData=[];
var excel=[];
for(var i=0;i<67;i++){
	arrData.push(i+1+"_bc")
}
arrData.forEach(function(item){
	var obj = xlsx.parse(item+'.xlsx');
	 excel.push(obj);
});
// 创建一个可以写入的流，写入到文件 output.txt 中var writerStream = fs.createWriteStream(item+'.js');
var writerStream = fs.createWriteStream('child16_cz2.js');
function makeData(keys,formRow){
	var outputStr = "{";
	for(var i = 0;i<keys.length;i++){
		outputStr = outputStr + keys[i] + ":'" + (formRow[i]==undefined?"":formRow[i]) + "'";
		if(i+1!=keys.length){
			outputStr = outputStr + ",";
		}
	}
	outputStr=outputStr+"}";
	writerStream.write(outputStr,"UTF8");
}
function readForm(form){
	var keys = form[0],
		dataLength = form.length;
	outputStr = "";
	writerStream.write("[","UTF8");

	for(var i=1;i<dataLength;i++){
		makeData(keys,form[i]);
		if(i+1!=dataLength){
			writerStream.write(",\n","UTF8");
		}
	}
	writerStream.write("]","UTF8");
}
writerStream.write("var child16_cz2={child16_cz2:[","UTF8");
for(var i = 0; i<excel.length;i++){
	//writerStream.write(i+1+"_a:","UTF8");
	readForm(excel[i][0].data);
	writerStream.write(",\n","UTF8");
}

writerStream.write("]}","UTF8");
// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
	console.log("写入完成");
});

writerStream.on('error', function(err){
	console.log(err.stack);
});
console.log("程序执行完毕");
