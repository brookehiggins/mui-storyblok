import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';

import Storyblok from 'lib/utils/Storyblok';
import MuiIconButtonRedirect from 'lib/components/MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from 'lib/components/MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from 'lib/components/MuiIconButtonDownload/MuiIconButtonDownload';
import MuiIconButtonDialog from 'lib/components/MuiIconButtonDialog/MuiIconButtonDialog';
import MuiTooltip from 'lib/components/MuiTooltip/MuiTooltip';
import MuiIcon from 'lib/components/MuiIcon/MuiIcon';

/**
 * MuiCardHeader is used in storyblok redirect to react routes
 */

export const MuiCardHeader = ({
  rootClass,
  subheader,
  title,
  action,
  avatar,
}) => {
  const components = {
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiIconButtonDialog,
    MuiTooltip,
    MuiIcon,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);
  const muiavatar = avatar[0];
  const muiaction = action[0];

  return (
    <CardHeader
      className={styles.root}
      title={title}
      subheader={subheader}
      avatar={(
        <>
          {
            muiavatar
              ? createElement(
                components[muiavatar.component],
                muiavatar,
              )
              : null
          }
        </>
      )}
      action={(
        <>
          {
            muiaction
              ? createElement(
                components[muiaction.component],
                muiaction,
              )
              : null
          }
        </>
      )}
    />
  );
};

export default MuiCardHeader;

MuiCardHeader.propTypes = {
  /**
   * The content of the Card Title.
   */
  title: PropTypes.string.isRequired,
  /**
   * The content of the component.
  */
  subheader: PropTypes.string,
  /**
   * MuiIconButtonRedirect, MuiIconButtonHref, MuiIconButtonDownload, MuiIconButtonDialog, MuiTooltip,
   * Allowed maximum: 1
   * The action to display in the card header.
   * */
  action: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })),

  /**
   * MuiIconButtonRedirect, MuiIconButtonHref, MuiIconButtonDownload, MuiIconButtonDialog, MuiTooltip,
   * Allowed maximum: 1
   * The Avatar for the Card Header.
   * */
  avatar: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })),

  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component. See CSS API below for more details.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
};

MuiCardHeader.defaultProps = {
  action: [],
  avatar: [],
  rootClass: [],
  subheader: '',
};