const stringRepresentation = (iconName: string, parsedSVG: string) => `
import IconType from './utils/iconType'
/**
JSX representation of your SVG, with randomized names. Feel free to edit this file to match your preference.

*/
const ${iconName}: IconType  = (props) => {
  return (
   ${parsedSVG}
  );
};

export default ${iconName};
`;

export default stringRepresentation;
