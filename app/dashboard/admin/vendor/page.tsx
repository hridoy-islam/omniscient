import AddExchange from "../../_components/Vendor/AddExchange";
import ExchangesDisplay from "../../_components/Vendor/ExchangesDisplay";
import AddWallet from "../../_components/Vendor/AddWallet";
import WalletDisplay from "../../_components/Vendor/WalletDisplay";
import getAllExchanges from "@/app/actions/getAllExchanges";
import getAllWallets from "@/app/actions/getAllWallets";

const page = async () => {
  const allExchanges = await getAllExchanges();
  const allWallet = await getAllWallets();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <AddExchange />
        <ExchangesDisplay exchanges={allExchanges?.data} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-10">
        <AddWallet />
        <WalletDisplay wallets={allWallet?.data} />
      </div>
    </div>
  );
};

export default page;
