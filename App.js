// 2D array 

function PrintlefttoRight(arr) {

    let newarr =[];

    for(let i=arr.length-1;i>=0;i--){
        let row = []
        for(let j=0;j<arr.length;j++ ){
        
            row.push(arr[j][i])


        }
        newarr.push(row)
    }

   console.log(newarr)

}

PrintlefttoRight([[1,2,3],[4,5,6],[7,8,9]])

/// 2Darray

function printZigzag(arr) {
    let newaarr = [];
    for(let i=0;i<arr.length;i++){
        let row = []
        if(i==0 || i==2){
            for(let j=arr.length-1;j>=0;j--){
                row.push(arr[i][j])
            }
        }else {
            for(let k=0;k<arr.length;k++){
                row.push(arr[i][k])
            }
        }
        newaarr.push(row);
    }
    console.log(newaarr)

}

printZigzag([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])