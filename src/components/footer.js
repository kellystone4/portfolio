import React, { Component } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigationAction } from '@mui/material';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';
import { Link } from '@mui/material';

export default class footer extends Component {
  render() {
    return (
      <div>
      <BottomNavigation style={{marginTop: -50}}
>
<Link style={{paddingRight: 40, paddingLeft: 40}} href="https://github.com/kellystone4">
  <BottomNavigationAction label="Recents" icon={<GitHub style={styles.icon} />} />
  </Link>
  <Link style={{paddingRight: 40, paddingLeft: 40}} href="mailto: kellystone916@gmail.com">
  <BottomNavigationAction label="Favorites" icon={<Email style={styles.icon}/>} />
  </Link>
  <Link style={{paddingRight: 40, paddingLeft: 40}} size="lg" href="https://www.linkedin.com/in/kelly-a-stone/">
  <BottomNavigationAction label="Nearby" icon={<LinkedIn style={styles.icon}/>} />
  </Link>
</BottomNavigation>      </div>
    )
  }
}

const styles = {
    icon: {
        fontSize: "40px",
        marginTop: -20,
        color: "#407BFF",    
    }
}