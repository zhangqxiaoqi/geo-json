const region =require('./region.js');
const request =require('request');
const fs =require('fs');
var downloadPic = function(src, dir,dirName){
  setTimeout(()=>{
    request(src).pipe(fs.createWriteStream(dir)).on('close',function(){
      console.log(`${dirName} saved!`);
    })
  },400);
}
const provinces=region.getProvinces();
const citys=region.getCitys();
const baseUrl='https://geo.datav.aliyun.com/areas/bound/';
downloadPic(`${baseUrl}100000.json`,'./geo/全国/100000.json','100000.json');
downloadPic(`${baseUrl}100000_full.json`,'./geo/全国含省/100000_full.json','100000_full.json');
provinces.forEach(item=>{
  downloadPic(`${baseUrl}${item}.json`,`./geo/省/${item}.json`, `${item}.json`);
  downloadPic(`${baseUrl}${item}_full.json`,`./geo/省含市/${item}_full.json`, `${item}_full.json`);
});
citys.forEach(item=>{
  downloadPic(`${baseUrl}${item}.json`,`./geo/市/${item}.json`, `${item}.json`);
  downloadPic(`${baseUrl}${item}_full.json`,`./geo/市含县/${item}_full.json`, `${item}_full.json`);
});



