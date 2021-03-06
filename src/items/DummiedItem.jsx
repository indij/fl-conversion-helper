import React from 'react';
import PropTypes from 'prop-types';
import { cloneImage, cloneTooltip, renderCustomTooltip } from './Item';
import { validateDOMElement } from '../util';

export default function DummiedItem(props) {
  const { quantity, inventoryMatch, message } = props;
  return (
    <li>
      <a className="tooltip flch-unlock">
        <div className="qq">{quantity}</div>
        <div>
          {cloneImage(inventoryMatch.querySelector('img'))}
        </div>
        {
          (!!message && renderCustomTooltip(inventoryMatch, message))
          || cloneTooltip(inventoryMatch)
        }
      </a>
    </li>
  );
}

DummiedItem.propTypes = {
  message: PropTypes.string,
  quantity: PropTypes.number,
  inventoryMatch: validateDOMElement.isRequired,
};

DummiedItem.defaultProps = {
  message: null,
  quantity: undefined,
};
