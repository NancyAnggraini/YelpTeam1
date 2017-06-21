export default class Restaurant extends React.Component {

  render() {
    return (
      <Toolbar className="Navbar" >

        <ToolbarGroup firstChild={true}>
          <img src={logo} className="Yelp-logo" alt="logo" />
          <div className="ContactButtons">
            <FlatButton label="About" className="redBackground" labelStyle={ labelStyles } />
            <FlatButton label="Contact" className="redBackground" labelStyle={ labelStyles } />
          </div>
          <form>
            <input placeholder="Type a restaurant name" />
            <RaisedButton label="Search" className="searchButton" labelStyle={ labelStyles } style={{ 'height': 24 }} />
          </form>
        </ToolbarGroup>

        <ToolbarGroup >
          <div className="SignButtons">
            <FlatButton label="Sign In" primary={true} className="redBackground" labelStyle={ labelStyles }  />
            <FlatButton label="Sign Up" secondary={true} className="redBackground" labelStyle={ labelStyles }  />
          </div>
        </ToolbarGroup>

      </Toolbar>
    );
  }
}