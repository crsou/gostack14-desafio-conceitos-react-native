import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.100.21:3333",
  /* 
  IOS c/ emulador: localhost
  IOS c/ físico: IP da máquina
  Android c/ emulador: (adb reverse tcp:3333 tcp: 3333) -> localhost
  Android c/ emulador (2): 10.0.2.2 (Android Studio)
  Android c/ emulador (3): 10.0.3.2 (Genymotion)
  Android c/ físico: IP da máquina
  */
});

export default api;
