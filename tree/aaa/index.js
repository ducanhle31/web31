"use strict";

const TREE_CONTAINER = document.querySelector(".tree");
const ORNAMENTALS = [
  "rhombus-ornamental",
  "circle-ornamental",
  "triangle-ornamental",
  "octagon-ornamental",
  "trapezoid-ornamental",
  "instet-ornamental",
];
const COLORS = [
  "bg-red",
  "bg-orange",
  "bg-yellow",
  "bg-green",
  "bg-blue",
  "bg-purple",
  "bg-pink",
  "bg-violet",
  "bg-brown",
];
const SIZE_TREE = 15;
const SIZE_SHAPES = 12; // This is the size in px of shapes (ornnamentals)
const COLOR_LIGTH_GREEN = "#598061";
const COLOR_DARK_GREEN = "#386641";
const DELAY_TIME_MS = 100;
// Import audio
const AUDIO_JINGLE_BELLS = new Audio("./merry-hristmas.mp3");

function main() {
  initSnowTorm();
  generateLeaves();
  bubbleSort().then(() => {
    addStar();
    showTitle();
  });
}

/**
 * Initi audio song.
 */
function playAudio() {
  AUDIO_JINGLE_BELLS.loop = true;
  AUDIO_JINGLE_BELLS.play();
}

/**
 * Initial settings for snowstorm plugin.
 */
function initSnowTorm() {
  snowStorm.snowColor = "#99ccff";
  snowStorm.flakesMaxActive = 120;
  snowStorm.useTwinkleEffect = true;
}

/**
 * Function to create leaves of tree with random width
 **/
function generateLeaves() {
  const treeElement = document.querySelector(".tree");
  const widths = getRandomWidths(SIZE_TREE);
  for (let i = 0; i < SIZE_TREE; i++) {
    // The percentage of width of the leaf
    const width = widths[i];

    // Parent container for the leaf
    const treePartContainerElement = document.createElement("div");
    treePartContainerElement.classList.add("tree-part-container");
    treePartContainerElement.setAttribute("data-width", width);
    treePartContainerElement.style.width = `${width}%`;

    // The leaf
    const treeLeafElement = document.createElement("div");
    treeLeafElement.classList.add("tree-leaf");
    treePartContainerElement.appendChild(treeLeafElement);
    // Insert the leaf in the tree container (first position)
    treeElement.insertBefore(treePartContainerElement, treeElement.firstChild);

    addOrnamentalsOnLeaf(treeLeafElement, width);
  }
}

/**
 * Add random amount of ornamental on each leaf.
 * - Minimum 1 ornamental and maximum depends on the width of the leaf.
 * @param {Object} treeLeafElement - Is the HTML element of the leaf.
 * @param {Number} width - Is the width of the leaf. The width is a percentage.
 */
function addOrnamentalsOnLeaf(treeLeafElement, width) {
  // We calculate the size of ornamental that it is possible to add to the leaf
  const calculateAmountOfOrnamentals = parseInt(width / SIZE_SHAPES);
  // We select the random amount of ornamental that we will add to the leaf
  let amountOfOrnamentals = getRandomNumber(2, calculateAmountOfOrnamentals);

  // Ornamental for the leaf
  for (let i = 0; i < amountOfOrnamentals; i++) {
    let randomColor = COLORS[getRandomNumber(0, COLORS.length - 1)];
    let treeOrnamentalElement = document.createElement("div");
    treeOrnamentalElement.classList.add("tree-ornamental");
    treeOrnamentalElement.classList.add(getRandomOrnamental());
    treeOrnamentalElement.classList.add(randomColor);
    treeOrnamentalElement.style.transform = `translate(${0}px, ${getRandomNumber(
      -5,
      5
    )}px)`;
    treeLeafElement.appendChild(treeOrnamentalElement);
  }
}

/**
 * Select a random ornamental in the array ORNAMENTALS.
 * @returns {String} - Return a random ornamental
 */
function getRandomOrnamental() {
  const randomOrnamental =
    ORNAMENTALS[getRandomNumber(0, ORNAMENTALS.length - 1)];
  return randomOrnamental;
}

/**
 * Get a number between a range of numbers (min, max).
 * @param {Number} min - The minimum number of the range.
 * @param {Number} max - The maximum number of the range.
 * @returns {Number} - Return a random number between min and max (inclusive).
 */
function getRandomNumber(min = 10, max = 120) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate an array of random numbers between 0 and 100 that represents the width of the leaves.
 * @param {Number} arrayLength - The length of the array.
 * @returns {Array} - Return an array of widths.
 */
function getRandomWidths(arrayLength = 10) {
  // Select a random nummber between 10 and 20
  const randomNumber = getRandomNumber(5, 10);
  const array = [];
  const fixedIncremeent = 100 / arrayLength;
  let increment = 0;
  for (let i = 0; i < arrayLength; i++) {
    array.push(randomNumber + increment);
    increment += fixedIncremeent;
  }
  return desorderArray(array);
}

/**
 * Return an array with the elements in a random order.
 * @param {Array} array - The array to desorder.
 * @returns {Array} - Return an array with the elements in a random order.
 */
function desorderArray(array) {
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    const randomIndex = getRandomNumber(0, arrayLength - 1);
    const temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

/**
 * This function is part of the bubble sort algorithm and it is used to interchange the position of two elements.
 * @param {Object} leaf1 - HTMLElement of the first leaf.
 * @param {Object} leaf2 - HTMLElement of the second leaf.
 * @returns {Promise} - Return a promise that will be resolved after the animation
 */
function swap(leaf1, leaf2) {
  return new Promise((resolve) => {
    // For exchanging styles of two blocks
    var temp = leaf1.style.transform;
    leaf1.style.transform = leaf2.style.transform;
    leaf2.style.transform = temp;

    window.requestAnimationFrame(async () => {
      // Insert the leaf2 in the leaf1 position with animation of 0.5s
      await delay(DELAY_TIME_MS);
      TREE_CONTAINER.insertBefore(leaf2, leaf1);
      resolve();
    });
  });
}

/**
 * This is the bubble sort algorithm.
 * @param {Number} delayMs - The delay time in milliseconds.
 */
async function bubbleSort(delayMs = DELAY_TIME_MS) {
  let treePartContainers = document.querySelectorAll(".tree-part-container");
  // Remove the trunk from the array
  treePartContainers = Array.from(treePartContainers).slice(
    0,
    treePartContainers.length - 1
  );

  for (let i = 0; i < treePartContainers.length; i += 1) {
    for (let j = 0; j < treePartContainers.length - i - 1; j += 1) {
      // To change background-color of the leaf that is being compared
      treePartContainers[j].firstChild.style.backgroundColor =
        COLOR_LIGTH_GREEN;

      // To wait for 0.5s
      await delay(delayMs);
      const width1 = parseFloat(
        treePartContainers[j].getAttribute("data-width")
      );
      const width2 = parseFloat(
        treePartContainers[j + 1].getAttribute("data-width")
      );

      // To compare value of two treePartContainers
      if (width1 > width2) {
        await swap(treePartContainers[j], treePartContainers[j + 1]);
        treePartContainers = document.querySelectorAll(".tree-part-container");
        // Remove the trunk from the array
        treePartContainers = Array.from(treePartContainers).slice(
          0,
          treePartContainers.length - 1
        );
      }

      // Change the background-color of the leaf that is being compared
      treePartContainers[j].firstChild.style.backgroundColor = COLOR_DARK_GREEN;
    }

    // Change the color when the current iteration is finished
    treePartContainers[
      treePartContainers.length - i - 1
    ].firstChild.style.backgroundColor = COLOR_DARK_GREEN;
  }
}

/**
 * This function is used to show the star after that the bubble sort is finished.
 */
function addStar() {
  // Parent container for the star
  const starContainerElement = document.createElement("div");
  starContainerElement.classList.add("tree-part-container");

  // Star element
  const starElement = document.createElement("div");
  starContainerElement.appendChild(starElement);
  starElement.classList.add("tree-star");
  TREE_CONTAINER.insertBefore(starContainerElement, TREE_CONTAINER.firstChild);
}

/**
 * This function is used to show the title after that the bubble sort is finished.
 */
function showTitle() {
  const titleContainerElement = document.querySelector(".title-container");
  titleContainerElement.style.display = "block";
}

/**
 * Function that allow us to wait specific time
 * @param {Number} ms - The time in milliseconds.
 * @returns {Promise} - Return a promise that will be resolved after the time.
 */
function delay(ms = 500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

document.addEventListener("DOMContentLoaded", main);
// Event that allow to play audio when the page is loaded
document.addEventListener("click", playAudio);
