# First and Last Index in Sorted Array

Given sorted array integers arr and an integer target, find the first and last position of target in arr




## Example

```javascript
var target = 8, output = [-1, -1], arr = [1, 2, 3, 5, 5, 5, 5, 8];

for(i = 0; i < arr.length; i++)
{
    if(target === arr[i]){
        if(output[0] === -1){
            output[0] = i;
        } else {
            output[1] = i;
        }
    } 
    
    if(output[0] !== -1 && output[1] === -1){
        output[1] = output[0];
    }
}

console.log(output); // [ 7, 7 ]
```

