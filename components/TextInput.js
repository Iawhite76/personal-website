import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';

const RaisedButton = mui.RaisedButton;
const TextField = mui.TextField;
const FontIcon = mui.FontIcon;

const ThemeManager = new mui.Styles.ThemeManager();

const styles = {
  fontIcon: {
    zIndex: '2', 
    cursor: 'pointer', 
    position: 'absolute', 
    top: '50%', 
    right: '0'
  },
  searchInput: {
    position: 'relative'
  }
}

export default class TextInput extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: ''
    };
  }

  handleChange(e) {
    let value = e.target.value.trim();
    this.setState({ text: value });
    this.props.filterSkills(value);
  }

  clearInput(e) {
    this.setState({ text: '' });
    this.props.filterSkills('');
  }

  render() {
    const { filterSkills, placeholder } = this.props;

    return (
      <div id='search_input' style={styles.searchInput}>
        <FontIcon onClick={::this.clearInput} style={styles.fontIcon} className="material-icons" hoverColor='#ddd'>close</FontIcon>
        <TextField
          style={{width: '100%'}}
          floatingLabelText={placeholder}
          value={this.state.text}
          onChange={::this.handleChange} />
      </div>
    );
  }
}

TextInput.propTypes = {
  filterSkills: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string
};
