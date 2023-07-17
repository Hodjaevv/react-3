import Users from "../components/Users";
import { Filter, Sort } from "../assets/styles/icons";
import "../containers/main.scss";
const Main = () => {
  return (
    <div className="main">
      <div className="main__top">
        <h3>All tickets</h3>
        <div className="main__iconBox">
          <span>
            <Sort />
          </span>
          <h4 className="main__h4">Sort</h4>
          <span>
            <Filter />
          </span>
          <h4>Filter</h4>
        </div>
      </div>
      <div className="main__middle">
        <h3 className="h3-1">Ticket details</h3>
        <h3 className="h3-2">Customer name</h3>
        <h3 className="h3-3">Date</h3>
        <h3 className="h3-4">Priority</h3>
      </div>
      <div className="main__bottom">
        <Users box="HIGH" name="Tom Cruise" ticket="Contact Email not Linked"/>
        <Users box="LOW" name="Matt Damon" ticket="Adding Images to Featured Posts"/>
        <Users box="HIGH" name="Robert Downey" ticket="When will I be charged this month?"/>
        <Users box="NORMAL" name="Christian Bale" ticket="Payment not going through"/>
        <Users box="HIGH" name="Henry Cavil" ticket="Unable to add replies"/>
        <Users box="NORMAL" name="Chris Evans" ticket="Downtime since last week"/>
        <Users box="LOW" name="Sam Smith" ticket="Referral Bonus"/>
        <Users box="NORMAL" name="Steve Rogers" ticket="How do I change my password?"/>
      </div>
    </div>
  );
};

export default Main;
