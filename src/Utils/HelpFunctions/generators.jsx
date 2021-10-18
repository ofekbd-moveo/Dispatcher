import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const generator = infinite();

export const nextKeyIndex = () => {
  let ind = generator.next().value;
  return ind.toString();
};
