module.exports = function main(str) {
    let list =[
        ['._.','|.|','|_|'],//0
        ['...','..|','..|'],//1
        ['._.','._|','|_.'],//2
        ['._.','._|','._|'],//3
        ['...','|_|','..|'],//4
        ['._.','|_.','._|'],//5
        ['._.','|_.','|_|'],//6
        ['._.','..|','..|'],//7
        ['._.','|_|','|_|'],//8
        ['._.','|_|','..|'],//9
    ];
	var res = "";
	let str2Num = [];
	for(i=0;i<str.length;i++)
		str2Num.push(parseInt(str[i]));
	for(i=0;i<3;i++)
	{
		for(j=0;j<str.length;j++)
		{
			res += list[str2Num[j]][i];
			if(j<str.length-1)
				res += " ";
			else
				res += "\n";
		}
		
	}
	
    return res;
};