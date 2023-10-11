import { FrontMatter } from 'types';
import { parseFrontMatter } from 'utils';

type ReturnValue = {
  blog: string;
  frontMatter: FrontMatter;
};

type Props = {
  blog: string;
  delimeter?: string;
  showFrontMatter?: boolean;
};

const processBlog = ({ blog, delimeter = '---', showFrontMatter }: Props): ReturnValue => {
  // https://jsbenchmark.com/#eyJjYXNlcyI6W3siaWQiOiJ0dHNwS19hY29RQWhZZlZFczhWSmgiLCJjb2RlIjoiWy4uLkRBVEEubWF0Y2hBbGwoLz0geWFtbCA9fC0tLS9naSldLm1hcChtYXRjaCA9PiBtYXRjaC5pbmRleCk7XG4iLCJuYW1lIjoiRmluZCA0OTkifSx7ImlkIjoiaHZqbWd3MmJ6TTJhdUUyNzFpd1ZZIiwiY29kZSI6IkRBVEEuc3BsaXQoJ1xcbicpLm1hcCgobGluZSwgaSkgPT4gKGxpbmUgPT09IC89IHlhbWwgPXwtLS0vZ2kgPyBpIDogdW5kZWZpbmVkKSkuZmlsdGVyKGkgPT4gaSAhPT0gdW5kZWZpbmVkKTsiLCJkZXBlbmRlbmNpZXMiOltdfSx7ImlkIjoiZlcxYzFQNGdEdlR5WGVBdkM3cjc3IiwiY29kZSI6IlsuLi5EQVRBLm1hdGNoQWxsKC89IHlhbWwgPXwtLS0vZ2kpXS5tYXAobWF0Y2ggPT4gKHtcbiAgbWF0Y2g6IG1hdGNoWzBdLFxuICBpbmRleDogbWF0Y2guaW5kZXhcbn0pKTtcbiIsImRlcGVuZGVuY2llcyI6W119LHsiaWQiOiJYLWlVS3JHSEYzX2IxeTBZei0yVVciLCJjb2RlIjoiREFUQS5zcGxpdCgnXFxuJykuZmxhdE1hcCgobGluZSwgaSkgPT4gKGxpbmUgPT09IC89IHlhbWwgPXwtLS0vZ2kgPyBpIDogW10pKS5maWx0ZXIoaSA9PiBpICE9PSB1bmRlZmluZWQpOyIsImRlcGVuZGVuY2llcyI6W119LHsiaWQiOiJGa2pqRjNvOFB1V3EySG5aYmtHOTQiLCJjb2RlIjoiREFUQS5zcGxpdCgnXFxuJykucmVkdWNlKChhY2MsIGxpbmUsIGkpID0+IHtcbiAgaWYgKC89IHlhbWwgPXwtLS0vZ2kudGVzdChsaW5lKSkge1xuICAgIGFjYy5wdXNoKGkpO1xuICB9XG4gIHJldHVybiBhY2M7XG59LCBbXSk7IiwiZGVwZW5kZW5jaWVzIjpbXX0seyJpZCI6Ik14NGtnUG52amZJblFybWVwMnZaZyIsImNvZGUiOiJjb25zdCBsaW5lcyA9IERBVEEuc3BsaXQoJ1xcbicpO1xuY29uc3QgaW5kaWNlcyA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gIGlmICgvPSB5YW1sID18LS0tL2dpLnRlc3QobGluZXNbaV0pKSB7XG4gICAgaW5kaWNlcy5wdXNoKGkpO1xuICB9XG59IiwiZGVwZW5kZW5jaWVzIjpbXX1dLCJjb25maWciOnsibmFtZSI6IlNpbXBsZSBleGFtcGxlIHRlc3QiLCJwYXJhbGxlbCI6dHJ1ZSwiZ2xvYmFsVGVzdENvbmZpZyI6eyJkZXBlbmRlbmNpZXMiOltdfSwiZGF0YUNvZGUiOiJyZXR1cm4gYFxuICAtLS1cbiAgYWJjZGVmZ2hpamtsbW5vcXByc3R1dnd4eXpcbiAgMTIzNDU2Nzg5MFxuICAgIC0tLVxuICBhYmNkZWZnaGlqa2xtbm9xcHJzdHV2d3h5elxuICAxMjM0NTY3ODkwXG4gICAgLS0tXG4gIGFiY2RlZmdoaWprbG1ub3FwcnN0dXZ3eHl6XG4gIDEyMzQ1Njc4OTBcbiAgICAtLS1cbiAgYWJjZGVmZ2hpamtsbW5vcXByc3R1dnd4eXpcbiAgMTIzNDU2Nzg5MFxuICAgIC0tLVxuICBhYmNkZWZnaGlqa2xtbm9xcHJzdHV2d3h5elxuICAxMjM0NTY3ODkwXG4gICAgLS0tXG4gIGFiY2RlZmdoaWprbG1ub3FwcnN0dXZ3eHl6XG4gIDEyMzQ1Njc4OTBcbiAgICAtLS1cbiAgYWJjZGVmZ2hpamtsbW5vcXByc3R1dnd4eXpcbiAgMTIzNDU2Nzg5MFxuICAgIC0tLVxuICBhYmNkZWZnaGlqa2xtbm9xcHJzdHV2d3h5elxuICAxMjM0NTY3ODkwXG4gICAgLS0tXG4gIGFiY2RlZmdoaWprbG1ub3FwcnN0dXZ3eHl6XG4gIDEyMzQ1Njc4OTBcbiAgICAtLS1cbiAgYWJjZGVmZ2hpamtsbW5vcXByc3R1dnd4eXpcbiAgMTIzNDU2Nzg5MFxuICAgIC0tLVxuICBhYmNkZWZnaGlqa2xtbm9xcHJzdHV2d3h5elxuICAxMjM0NTY3ODkwXG5gOyJ9fQ==
  // Best performing bench mark
  const frontMatterIndexes = [...blog.matchAll(new RegExp(delimeter, 'g'))].map(
    (match) => match.index
  );

  // Contains no front matter
  if (frontMatterIndexes.length < 2) {
    return {
      blog,
      frontMatter: null,
    };
  }

  const frontMatter = blog.slice(0, (frontMatterIndexes[1] || 0) + 3);
  const processedBlog = blog.slice((frontMatterIndexes[1] || 0) + 3);

  if (!showFrontMatter || frontMatter.length <= 5) {
    return {
      blog: processedBlog.trim(),
      frontMatter: null,
    };
  }

  const processedFrontMatter = parseFrontMatter({ frontMatter });

  return { blog: processedBlog, frontMatter: processedFrontMatter };
};

export default processBlog;