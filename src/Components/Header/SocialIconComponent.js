import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const SocialIconComponent = ({ platformName }) => {
  return (
    <span className='social-icon'>
      {/* {platformName} <FontAwesomeIcon icon={byPrefixAndName.fas['{icon}']} /> */}
      {/* { name } */}
      <FontAwesomeIcon icon={`fa-brands fa-{platformName.toLowerCase()}`} />
    </span>
  )
}

export default SocialIconComponent