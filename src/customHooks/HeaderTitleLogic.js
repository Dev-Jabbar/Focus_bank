"use client";
import { usePathname } from "next/navigation";

const useHeaderTitleLogic = () => {
  const pathname = usePathname();
  let FocusHeaderTitle;

  switch (pathname) {
    case "/home":
      FocusHeaderTitle = "Home";
      break;
    case "/home/payments":
      FocusHeaderTitle = "Payments";
      break;
    case "/home/cards":
      FocusHeaderTitle = "Cards";
      break;

    case "/home/blank/airtime-page":
      FocusHeaderTitle = "Airtime & data";
      break;
    case "/home/blank/transaction-history-page":
      FocusHeaderTitle = "Transaction history";
      break;
    case "/home/blank/send-money-page":
      FocusHeaderTitle = "Send money";
      break;
    case "/home/support":
      FocusHeaderTitle = "Support";
      break;
    case "/home/profile":
      FocusHeaderTitle = "Profile";
      break;
    case "/home/blank/payments-page/billsPayment":
      FocusHeaderTitle = "Bills payment";
      break;
    case "/home/blank/payments-page/sendMoney":
      FocusHeaderTitle = "Send money";
      break;

    case "/home/blank/payments-page/receiveMoney":
      FocusHeaderTitle = "Recieve money";
      break;

    case "/home/blank/cards-page/requestCard":
      FocusHeaderTitle = "Request card";
      break;

    case "/home/blank/cards-page/blockCard":
      FocusHeaderTitle = "Block card";
      break;

    case "/home/blank/cards-page/requestNewCard":
      FocusHeaderTitle = "Request a new card";
      break;
    case "/home/blank/cards-page/cardsControl":
      FocusHeaderTitle = "Card control";
      break;
    case "/home/blank/cards-page/viewCards":
      FocusHeaderTitle = "View your cards";
      break;
    case "/home/blank/payments-page/editBeneficiary":
      FocusHeaderTitle = "Edit beneficiary";
      break;

    case "/home/blank/payments-page/generateStatement":
      FocusHeaderTitle = "Generate statement";
      break;

    case "/home/blank/support-page/account-officer":
      FocusHeaderTitle = "Account officer";
      break;

    case "/home/blank/payments-page/bookflight":
      FocusHeaderTitle = "Book flight";
      break;

    case "/home/blank/payments-page/restaurants":
      FocusHeaderTitle = "Restaurants";
      break;

    case "/home/blank/payments-page/cheques":
      FocusHeaderTitle = "Cheques";
      break;
    case "/home/blank/payments-page/foreignExchange":
      FocusHeaderTitle = "Foreign Exchange";
      break;
    case "/home/blank/payments-page/miscellaneous":
      FocusHeaderTitle = "Miscellaneous";
      break;
    case "/home/blank/payments-page/fundAccount":
      FocusHeaderTitle = "Fund Account";
      break;

    default:
      FocusHeaderTitle = "Unknown section";
      break;
  }
  return { FocusHeaderTitle };
};

export default useHeaderTitleLogic;
