import React from 'react';

import MenuItem from '../menu-item';

import './styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'chapéus',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'chapeus',
        },
        {
          title: 'camisas',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: '',
        },
        {
          title: 'sapatos',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: '',
        },
        {
          title: 'mulheres',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: '',
        },
        {
          title: 'homens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: '',
        },
      ],
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...othersSectionProps }) => (
          <MenuItem key={id} {...othersSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
