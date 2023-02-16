import { useNavigate } from "react-router-dom";

const NavigateBack = () => {
    let navigate = useNavigate();
    const Navigate = (path) => {
        navigate(path);
    }
    return Navigate;
}

export default NavigateBack;