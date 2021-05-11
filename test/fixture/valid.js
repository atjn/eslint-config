"use strict";

/**
 * @file
 * This script satisfies all linting rules. It should pass.
 */

/**
 * Sorts students randomly (don't tell them it's random).
 */
const sortingHat = () => {
	if(Math.random() > .5){
		console.log("Gryffindor!");
	}else{
		console.log("Ravenclaw!");
	}
};

sortingHat();
