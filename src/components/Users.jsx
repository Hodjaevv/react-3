const Users = ({ box, name, ticket }) => {
  return (
    <div className="main__bottomBox">
      <img src="" alt="" />
      <div className="ticket">
        <h4>{ticket}</h4>
        <h3>Updated 1 day ago</h3>
      </div>
      <div className="name">
        <h4>{name}</h4>
        <h3>on 24.05.2019</h3>
      </div>
      <div className="date">
        <h4>May 26, 2019</h4>
        <h3>8:00 AM</h3>
      </div>
      <div className="main__boxPriority">
        <h6>{box}</h6>
      </div>
    </div>
  );
};

export default Users;
