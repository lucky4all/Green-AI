import { createContext, useState } from "react";

export const StateContext = createContext(false)

export const [stateValue, setStateValue] = useState(false)