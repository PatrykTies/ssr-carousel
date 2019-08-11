import { getOriginalCounterPart } from "./clones";
import { getSlidesToSlide } from "./common";

/*
This produce a list of possibile slides that dot can go to next;
*/
function getLookupTableForNextSlides(
  numberOfDotsToShow,
  state,
  props,
  childrenArr
) {
  const table = {};
  const slidesToSlide = getSlidesToSlide(state, props);
  Array(numberOfDotsToShow)
    .fill(0)
    .forEach((_, i) => {
      const nextSlide = getOriginalCounterPart(i, state, childrenArr);
      if (i === 0) {
        table[0] = nextSlide;
      } else {
        const prevIndex = i - 1;
        const now = table[prevIndex] + slidesToSlide;
        table[i] = now;
      }
    });
  return table;
}

export { getLookupTableForNextSlides };
