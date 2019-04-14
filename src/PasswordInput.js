import React from 'react';
import { InputAdornment, withStyles } from '@material-ui/core';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import Textfield from '@material-ui/core/TextField';

const styles = theme => ({
  eye: {
    cursor: 'pointer',
    color: 'rgb(216, 49, 183)'
  }
});

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPasswordMaskingEnabled: true };
  }

  togglePassword = () => {
    this.setState(prevState => ({
      isPasswordMaskingEnabled: !prevState.isPasswordMaskingEnabled
    }));
  };
  render() {
    const { classes } = this.props;
    const { isPasswordMaskingEnabled } = this.state;
    return (
      <Textfield
        type={isPasswordMaskingEnabled ? 'password' : 'text'}
        {...this.props}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" className={classes.eye}>
              <RemoveRedEye onClick={this.togglePassword} />
            </InputAdornment>
          )
        }}
      />
    );
  }
}

const PasswordInput = withStyles(styles)(Password);
export { PasswordInput };
