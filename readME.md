Let's work out the Functionality first
1. Fetch the data https://api.thecatapi.com/v1/breeds
2. Sort the data into image, name, description.
3. Handling edge cases: If cat image missing: onerror="this.onerror=null; this.src='./missingcat.png' at html
4. Setup HTML and CSS layout
5. See how the fetched data looks like(Finding out the key value)
6. Extract the image, cat breed name and description
7. That will be .name .description .reference_image_id
8. Base image link: https://cdn2.thecatapi.com/images/[reference_image_id].jpg
9. We're going to make a loop [last step after succesfully creating one cat box]
10. In the loop, we need to create a container, the image, the name, the description.
11. We're going to append everything under the main container
12. Styling with class
13. How to do the checking if fetching image has failed > error image
By adding this tag: onerror="this.onerror = null; this.src = './missingcat.png'
14. Do I need to add ID for each catContainer?

Troubleshoot tips
15. When doing it onload , the () function, fetchData() is await, then can add async
16. Not sure about variable, put a placeholder and then console log it

17. Testing with 3 items in html and css for styling

18. Media-query is only screen size

19. Zoom in and out is max-width: 1024px; at the targetted container. margin:: 0 auto;