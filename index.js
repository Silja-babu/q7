


function findTwoSum(nums, target){
    let n = nums.length
    for(i=0;i<=n; i++){
        for(j=0;j<=n;j++){
            if (nums[i]+nums[j]===target){
                return[i,j]
            }
        }
    }
}
console.log(findTwoSum([1,2,3,4],3))