
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="Start" onClick={() => navigate('/game')}>Start Game</div>
    </div>
  );
};


export default Home;