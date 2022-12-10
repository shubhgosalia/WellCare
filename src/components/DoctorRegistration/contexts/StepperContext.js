import { createContext, useContext, useState } from "react";

const StepperContext = createContext({ userData: "", setUserData: null });

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    have_clinic: "false",
    clinic_address: "",
    specialization: "",
    category: "Yoga Trainer",
    age: "",
    gender: "male",
    licenseNumber: "",
    city: "",
    years_Of_Experience: "",
    fees: "",
    phoneNumber: "",
    profile_pic: ""
  });

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}
