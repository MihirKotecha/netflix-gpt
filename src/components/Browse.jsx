import { getAuth } from "firebase/auth";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Browse = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) navigate("/");
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
