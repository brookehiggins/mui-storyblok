import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { CardContent as MuiCardContent } from '@material-ui/core';
import { validComponents } from 'lib/utils/customProps';
import Storyblok from 'lib/utils/Storyblok';

import { renderComponentsWithBridg } from 'lib/utils/customComponents';

/* istanbul ignore next */
const Typography = lazy(() => import('lib/components/PageGrid/molecules/Typography/Typography'));
/* istanbul ignore next */
const List = lazy(() => import('lib/components/PageGrid/organisms/List/List'));

const components = {
  Typography,
  List,
};

const CardContent = ({
  content,
  rootClass,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <MuiCardContent
      className={`${styles.root} ${storyblokClass}`}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      {content.map((component, key) => (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridg(components, component, key)}
        </Suspense>
      ))}
    </MuiCardContent>
  );
};

export default CardContent;

CardContent.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * Content passed to render
   * components:
    MuiTypography,
    MuiAccordion,
    MuiList,
   */
  content(props, propName, componentName) {
    const components = [
      'MuiTypography',
      'MuiAccordion',
      'MuiList',
    ];
    return validComponents(props, propName, componentName, components);
  },
};

CardContent.defaultProps = {
  rootClass: [],
  content: [],
};
