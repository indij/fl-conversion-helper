/* eslint-disable jsx-a11y/href-no-hash jsx-a11y/no-static-element-interactions */
// We're not going to try to fix the accessibility issues, so just disable the
// ESLint warnings
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cloneImage, cloneTooltip } from './Item';
import { validateDOMElement } from '../util';

// To create a usable item, we couple the React-controlled element in
// our category list with the original element. Rather than write our own
// onclick handler, we can simply script a click on the linked element.
export default function UsableItem(props) {
  const { inventoryMatch, isDisabled, quantity } = props;
  return (
    <li>
      <a
        className={classNames('tooltip', 'usableitem', { disabled: isDisabled })}
        onClick={() => inventoryMatch.parentNode.click()}
      >
        <div className="qq">{quantity}</div>
        <div>
          {cloneImage(inventoryMatch.querySelector('img'))}
        </div>
        {cloneTooltip(inventoryMatch)}
        {props.children}
      </a>
    </li>
  );
}

UsableItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  inventoryMatch: validateDOMElement.isRequired,
  isDisabled: PropTypes.bool,
  quantity: PropTypes.number,
};

UsableItem.defaultProps = {
  children: null,
  isDisabled: false,
  quantity: 0,
};

