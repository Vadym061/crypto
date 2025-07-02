import AccountTab from "./tabs/AccountTab";
import SecurityTab from "./tabs/SecurityTab";
import SessionsTab from "./tabs/SessionsTab";
import AccountDataTab from "./tabs/AccountDataTab";
import CommissionTab from "./tabs/CommissionTab";

import TransactionHistoryTab from "./tabs/TransactionHistory";
import AssetsTab from "./tabs/Assets";

import { ReactComponent as AccountIcon } from "../assets/icons/persson.svg";
import { ReactComponent as SecurityIcon } from "../assets/icons/lock.svg";
import { ReactComponent as SessionsIcon } from "../assets/icons/calendar_clock.svg";
import { ReactComponent as DataIcon } from "../assets/icons/passkey.svg";
import { ReactComponent as CommissionIcon } from "../assets/icons/leaderboard.svg";

import { ReactComponent as TransactionHistory } from "../assets/icons/search-activity.svg";
import { ReactComponent as Assets } from "../assets/icons/dollar.svg";

export const tabsConfig = [
  { id: "account", label: "Account", component: AccountTab, icon: AccountIcon },
  { id: "security", label: "Security", component: SecurityTab, icon: SecurityIcon },
  { id: "sessions", label: "Sessions", component: SessionsTab, icon: SessionsIcon },
  { id: "accountData", label: "Account data", component: AccountDataTab, icon: DataIcon },
  { id: "commission", label: "Commission", component: CommissionTab, icon: CommissionIcon },
];

export const walletConfig = [
  { id: "transaction", label: "Transaction history", component: TransactionHistoryTab, icon: TransactionHistory },
  { id: "assets", label: "Assets", component: AssetsTab, icon: Assets },
 
];

