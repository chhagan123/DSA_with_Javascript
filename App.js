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


// unique element in aarray // hackerrank question

function unique(arr){
 
    let sum =0;
    for(let i=0;i<arr.length;i++){
        let count = 0;
        for(let j=0;j<arr.length;j++){
            if(arr[i] ==arr[j]){
                count++;
            }
        }
        if(count == 1){
            console.log(arr[i])
            sum += arr[i]
        }
    }
   
     console.log(sum)
   }
   
   unique([1,2,3,4,3,2,1])


   /* HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
If the value of  is less than , no rounding occurs as the result will still be a failing grade.*/

// hacker Rank question 

function gradingStudents(grades) {
    let result = [];
    for(let i=0;i<grades.length;i++){
        if(grades[i]<38){
            result.push(grades[i])
        }else if(grades[i] >= 38 && (grades[i]+2)%5 == 0){
              result.push(grades[i]+2)
        }else if(grades[i] >= 38 && (grades[i]+1)%5 == 0){
               result.push(grades[i]+1)
        }else {
               result.push(grades[i])
        }
    }
    return result;
    }
    
   console.log(gradingStudents([73,67,38,33]))//


   /// Sorting technique 


   // 1) Selection Sort 

   function selection(arr) {
    for(let i=0;i<arr.length;i++) {
        let min = arr[i];
        for(let j=i+1;j<arr.length;j++){
            if(min>arr[j]){
                min = arr[j];
                let temp = arr[i]
                arr[i] = arr[j];
                arr[j] = temp;
                
            }
        }
    }
    console.log(arr)
    
}

selection([13,46,24,52,20,9]);

// bubble sort 

 function bubblesort (arr) {
    for(let i =arr.length ; i>0;i--){
        for(let j =0 ; j<arr.length;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1];
                  arr[j+1] = arr[j];
                  arr[j] = temp;
            }
        }
    }
    console.log(`bubblesort ${arr}`)

 }
 bubblesort([13,46,24,52,20,9]);

 // insertion sort 

 function insertionsort(arr) {
    for(let i=1;i<arr.length;i++){
        for(let j=i;j>0;j--){
            if(arr[j]<arr[j-1]){
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp
            }
        }
    }
    console.log(`insertionsort ${arr}`)
 }
 insertionsort([13,46,24,52,20,9]);


