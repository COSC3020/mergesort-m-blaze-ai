# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Runtime (MergeSort):
For each merging width (1,2,4,...,<=n): $\Theta$(log n) iterations
For each width, iterate through array in chunks (2 * width): $\Theta$(n)
Merge two sorted subarrays of total size <= (2 * width): $\Theta$(1) per element -> $\Theta$(n) total per level
Each element copied into temporary array and back per level: $\Theta$(n)
Total Work = $\Theta$(n * logn) = $\Theta$(n log n)

The worse case time complexity of my implementaion is $\Theta$(n log n). This is because at each level of merging, the entire array is traversed once. Then, the number of levels in the iterative process is log_2(n) as the subarray doubles in size each time. Lastly, the merge step takes $\Theta$(n) time. Then, the calculated runtime is:

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”

For this assignment, I asked Chat GPT for help improving the articulation and presentation of my reasoning. I also asked Chat GPT for help resolving my issues with the eslint check.