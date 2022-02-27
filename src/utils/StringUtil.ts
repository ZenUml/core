import {replace} from "rambda";
import {pipe} from "rambda/immutable";

const removeChangeLines = replace(/[\n\r]/g, ' ');
const removeExtraSpaces = replace(/\s+/g, ' ');
const removeSpaceBeforeAndAfterPunctuation = replace(/\s*([,;.()])\s*/g, '$1');
const removeTrailingSpace = replace(/\s+$/g, '');
const removeLeadingAndEndingQuotes = replace(/^"(.*)"$/, '$1');
export const formatText = pipe(
  removeChangeLines,
  removeExtraSpaces,
  removeSpaceBeforeAndAfterPunctuation,
  removeTrailingSpace,
  removeLeadingAndEndingQuotes
);
