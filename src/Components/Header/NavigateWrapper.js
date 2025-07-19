
import { useNavigate } from "react-router-dom";
import Checkout from "../Order/Checkout/Checkout";

export default function NavigateWrapper(props) {
  const navigate = useNavigate();
  return <Checkout {...props} navigate={navigate} />;
}
