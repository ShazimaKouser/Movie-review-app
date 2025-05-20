
const withTimestamp = (Component) => {
  return (props) => {
    const timestamp = new Date().toLocaleString();
    return <Component {...props} timestamp={timestamp} />;
  };
};

export default withTimestamp;
