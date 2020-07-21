import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { AccordionSummary } from '@material-ui/core';
import Storyblok from '../../../../utils/Storyblok';
import MuiAccordionTypography from '../MuiAccordionTypography/MuiAccordionTypography';
import MuiIcon from '../../../MuiIcon/MuiIcon';
import { validComponents } from '../../../../utils/customProps';

const MuiAccordionSummary = ({
  rootClass,
  content,
  expandIcon,
}) => {
  const components = {
    MuiAccordionTypography,
    MuiIcon,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <AccordionSummary
      className={styles.root}
      expandIcon={createElement(components[expandIcon[0].component], expandIcon[0])}
    >
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
    </AccordionSummary>
  );
};

export default MuiAccordionSummary;

MuiAccordionSummary.propTypes = {
  /** storyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** MuiIcon limit 1 */
  expandIcon(props, propName, componentName) {
    const components = ['MuiIcon'];
    return validComponents(props, propName, componentName, components, 1);
  },
  /** MuiTypography */
  content(props, propName, componentName) {
    const components = ['MuiTypography'];
    return validComponents(props, propName, componentName, components);
  },
};

MuiAccordionSummary.defaultProps = {
  rootClass: [],
  content: [],
  expandIcon: [],
};