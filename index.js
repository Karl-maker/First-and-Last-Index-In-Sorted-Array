var target = 5, output = [null, null], arr = [1, 2, 3, 5, 5, 5, 5, 8];

for(i = 0; i < arr.length; i++)
{
    if(target === arr[i]){
        if(output[0] === null){
            output[0] = i;
        } else {
            output[1] = i;
        }
    }
}

console.log(output); // [ 3, 6 ]
