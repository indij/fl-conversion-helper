import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from './categories/Category';
import Item from './items/Item';
import FactionItem from './items/FactionItem';
import { tier1, tier2, tier3, tier4, factionItems } from './items';
import { setExpanded } from './categories/actions';
import { fetchConnectedQualities } from './factions/actions';

class Extension extends Component {
  componentDidMount() {
    this.props.fetchConnectedQualities();
  }

  render() {
    return (
      <div>
        <Category category="tier1" categoryName="Tier 1">
          {tier1.map((id) => <Item key={id} id={id} />)}
        </Category>
        <Category category="tier2" categoryName="Tier 2">
          {tier2.map((id) => <Item key={id} id={id} />)}
        </Category>
        <Category category="tier3" categoryName="Tier 3">
          {tier3.map((id) => <Item key={id} id={id} />)}
        </Category>
        <Category category="factionItems" categoryName="Faction items">
          {factionItems.map((id) => <FactionItem key={id} id={id} />)}
        </Category>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { fetchConnectedQualities })(Extension);
