import { useState } from "react";
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { NetworkAtom } from "./atoms";
import { jobsAtom } from "./atoms";
import { NotificationAtom } from "./atoms";
import { MessagingAtom } from "./atoms";

const App = () => {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
};

function MainApp() {
  const [count, setCount] = useState(0); // Corrected useState syntax
  const networkNotificationCount = useRecoilValue(NetworkAtom); // Corrected variable name (camelCase)
  const jobsAtomcount = useRecoilValue(jobsAtom);
  const NotificationAtomcount = useRecoilValue(NotificationAtom);
  const MessagingAtomCount = useRecoilValue(MessagingAtom);
  return (
    <>
      <button> home </button>
      <button> My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount}) </button>
      <button> Jobs ({jobsAtomcount}) </button>
      <button> Notifications ({NotificationAtomcount}) </button>
      <button> Messaging({MessagingAtomCount}) </button>
      <button> Me </button>
    </>
  );
}

export default App;
