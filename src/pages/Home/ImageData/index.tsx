import Image1 from "../Images/1.jpg";
import Image2 from "../Images/2.jpg";
import Image3 from "../Images/3.jpg";
import Image4 from "../Images/5.jpg";

interface HomeImageData {
  index: number;
  url: any;
  header: string;
  content: string;
}
const HomeImagesData: HomeImageData[] = [
  {
    index: 1,
    url: Image1,
    header: "Guru Purnima",
    content:
      "Knowledge, movement, achievement, and freedom - These are the four aspects that one gains from having a Guru.",
  },
  {
    index: 2,
    url: Image2,
    header: "Overcoming pessimism & depression in the pandemic",
    content:
      "The escalating global health crisis has reinforced the need for equipping our inner self-defense mechanisms too…",
  },
  {
    index: 3,
    url: Image3,
    header: "Let the whole world be well and happy!",
    content:
      "Health has no origin, but disease does. Health has no cause or reason, but disease does. Diseases occur when the laws of nature are violated…",
  },
  {
    index: 4,
    url: Image4,
    header: "One World Family ",
    content:
      "It’s only through love that you can make the whole world realise, we are OneWorldFamily. Vasudhaiva Kutumbakam!",
  },
];
export default HomeImagesData;
