# Leetcode Problem Hider
This simple JavaScript code hides the `solved` problems on the `Leetcode tags` <a href="https://leetcode.com/tag/array/"> Leetcode/tag/{tag_name}</a> page. 

PS: replace `tag_name` with `array`, `string`, `bit-manipulation` or any other DSA tag.

It is useful while preparing for placements or coding competitions and only wants to see the unsolved problems for a specific tag from Leetcode/tag/tag_name page.

## Usage
To use this code, simply include it in the JavaScript console of your browser while visiting the Leetcode tag page <a href="https://leetcode.com/tag/array/">Leetcode tag page</a>.

## How it works
The code uses DOM manipulation to hide the solved problems on the Leetcode tag page. It selects all the table rows on the page using the querySelectorAll method and then loops through each row. If the first child of the row has an attribute called value, it hides that particular row by setting its display style to "none".

## Example

#### Before pasting the code in the `browser's` `console`.

<img width="925" alt="Screenshot 2023-02-07 at 8 50 44 PM" src="https://user-images.githubusercontent.com/72138429/217286186-3a51e9cb-9283-4187-a8a1-0b19ef1bcd0b.png">




#### After pasting the code in the `browser's` `console`.
<img width="1322" alt="Screenshot 2023-02-07 at 9 03 51 PM" src="https://user-images.githubusercontent.com/72138429/217289895-1da75af5-1bef-440b-ad6c-2b2b1938b003.png">




## Conclusion
This code is a simple solution for hiding the solved problems on the Leetcode tag page and only showing the unsolved problems. It can be easily customized for your specific needs.


