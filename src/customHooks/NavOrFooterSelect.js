"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useNavOrFooterSelect = () => {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/home":
        setSelectedDiv(1);
        break;
      case "/home/payments":
        setSelectedDiv(2);
        break;
      case "/home/blank/payments-page/billsPayment":
        setSelectedDiv(2);
        break;
      case "/home/blank/payments-page/miscellaneous":
        setSelectedDiv(2);
        break;
      case "/home/blank/payments-page/foreignExchange":
        setSelectedDiv(2);
        break;
      case "/home/blank/payments-page/cheques":
        setSelectedDiv(2);
        break;
      case " /home/blank/payments-page/restaurants":
        setSelectedDiv(2);
        break;
      case "/home/blank/payments-page/bookflight":
        setSelectedDiv(2);
        break;
      case "/home/blank/payments-page/fundAccount":
        setSelectedDiv(2);
        break;
      case "/home/blank/payments-page/generateStatement":
        setSelectedDiv(2);
        break;
      case "/home/blank/payments-page/editBeneficiary":
        setSelectedDiv(2);
        break;
      case "/home/blank/payments-page/generateStatement":
        setSelectedDiv(2);
        break;
      case "/home/blank/payments-page/receiveMoney":
        setSelectedDiv(2);
        break;
      case "/home/blank/payments-page/sendMoney":
        setSelectedDiv(2);
        break;

      case "/home/cards":
        setSelectedDiv(3);
        break;
      case "/home/blank/cards-page/requestCard":
        setSelectedDiv(3);
        break;
      case "/home/blank/cards-page/blockCard":
        setSelectedDiv(3);
        break;

      case "/home/blank/cards-page/requestNewCard":
        setSelectedDiv(3);
        break;
      case "/home/blank/cards-page/cardsControl":
        setSelectedDiv(3);
        break;
      case "/home/blank/cards-page/viewCards":
        setSelectedDiv(3);
        break;
      case "/home/blank/airtime-page":
        setSelectedDiv(4);
        break;

      case "/home/blank/transaction-history-page":
        setSelectedDiv(5);
        break;
      case "/home/blank/send-money-page":
        setSelectedDiv(6);
        break;
      case "/home/support":
        setSelectedDiv(7);
        break;

      case "/home/blank/support-page/account-officer":
        setSelectedDiv(7);
        break;
      case "/home/profile":
        setSelectedDiv(8);
        break;
      default:
        setSelectedDiv(1);
        break;
    }
  }, [pathname]);

  return { selectedDiv };
};

export default useNavOrFooterSelect;
