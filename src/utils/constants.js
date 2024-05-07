const placeholderCards = [
  {
    id: 1,
    isBookMarked: false,
    date: "November 4, 2020",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    description: `Ever since I read Richard Louv's influential book,
                  "Last Child in the Woods," the idea of having a special
                  "sit spot" has stuck with me. This advice, which Louv
                  attributes to nature educator Jon Young, is for both
                  adults and children to find`,
    source: "treehugger",
    alt: "Dog on a tree stump in the woods.",
    image: new URL(
      "../assets/placeholder/placeholder-card-image-4.png",
      import.meta.url
    ).href,
  },
  {
    id: 2,
    isBookMarked: false,
    date: "February 19, 2019",
    title: "Nature makes you better",
    description: `We all know how good nature can make us feel.
                  We have known it for millennia: the sound of the ocean,
                  the scents of a forest, the way dappled sunlight dances
                  through leaves.`,
    source: "national geographic",
    alt: "a view from a dock looking out into a lake within a mountain range",
    image: new URL(
      "../assets/placeholder/placeholder-card-image-1.png",
      import.meta.url
    ).href,
  },
  {
    id: 3,
    isBookMarked: false,
    date: "October 19, 2020",
    title: "Grand Teton Renews Historic Crest Trail",
    description: `The linking together of the Cascade and Death
                  Canyon trails, at their heads, took place on October 1,
                  1933, and marked the first step in the realization of a
                  plan whereby the hiker will be`,
    source: "National parks traveler",
    alt: "an elk walks through a forest in the winter while its snowing",
    image: new URL(
      "../assets/placeholder/placeholder-card-image-5.png",
      import.meta.url
    ).href,
  },
  {
    id: 4,
    isBookMarked: false,
    date: "October 19, 2020",
    title: "Nostalgic Photos of Tourists in U.S. National Parks",
    description: `Uri Løvevild Golman and Helle Løvevild Golman are National Geographic 
                  Explorers and conservation photographers who just completed a project 
                  and book they call their love letter to...`,
    source: "National Geographic",
    alt: "Geyser",
    image: new URL(
      "../assets/placeholder/placeholder-card-image-3.png",
      import.meta.url
    ).href,
  },
  {
    id: 5,
    isBookMarked: false,
    date: "March 16, 2020",
    title: "Scientists Don't Know Why Polaris Is So Weird",
    description: `Humans have long relied on the starry sky to push into new frontiers, 
                  sail to the very edge of the world and find their way back home again. 
                  Even animals look to the stars to guide them. `,
    source: "treehugger",
    alt: "night sky",
    image: new URL(
      "../assets/placeholder/placeholder-card-image-2.png",
      import.meta.url
    ).href,
  },
];

const bookmarked = new URL("../assets/bookmark-marked.svg", import.meta.url)
  .href;

export { placeholderCards, bookmarked };
