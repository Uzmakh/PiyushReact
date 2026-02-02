import ToggleText from "../ReactHooks/useState/ToggleText";
import LikeButton from "../ReactHooks/useState/LikeButton";
import UserProfile from "../ReactHooks/useState/UserProfile";
import UseStateWithObject from "../ReactHooks/useState/UseStateWithObject";
import InputExample from "../ReactHooks/useState/InputExample";

const UseStatePage = () => {
  return (
    <div>
      <h1>Examples of Using useState hook</h1>
      <ToggleText />
      <LikeButton />
      <UserProfile />
      <UseStateWithObject />
      <InputExample/>
    </div>
  );
};

export default UseStatePage;
