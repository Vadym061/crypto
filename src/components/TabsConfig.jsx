import AccountTab from "./tabs/AccountTab";
import SecurityTab from "./tabs/SecurityTab";
import SessionsTab from "./tabs/SessionsTab";
import AccountDataTab from "./tabs/AccountDataTab";
import CommissionTab from "./tabs/CommissionTab";

import { ReactComponent as AccountIcon } from "../assets/icons/persson.svg";
import { ReactComponent as SecurityIcon } from "../assets/icons/lock.svg";
import { ReactComponent as SessionsIcon } from "../assets/icons/calendar_clock.svg";
import { ReactComponent as DataIcon } from "../assets/icons/passkey.svg";
import { ReactComponent as CommissionIcon } from "../assets/icons/leaderboard.svg";

export const tabsConfig = [
  { id: "account", label: "Account", component: AccountTab, icon: AccountIcon },
  { id: "security", label: "Security", component: SecurityTab, icon: SecurityIcon },
  { id: "sessions", label: "Sessions", component: SessionsTab, icon: SessionsIcon },
  { id: "accountData", label: "Account data", component: AccountDataTab, icon: DataIcon },
  { id: "commission", label: "Commission", component: CommissionTab, icon: CommissionIcon },
];
