import React from "react";
import PhylloSDK from "../phylloSDKService/phylloSDKInit";
import { getAccounts } from "../phylloSDKService/phylloServiceAPIs";

export default function AccountsPage(){

    const phylloSDK = new PhylloSDK();

    const handleGetStarted = async () => {
        await phylloSDK.openPhylloSDK();
    };

    return (
        <div className="flex flex-col justify-center items-center gap-y-10 p-20">
            <p className="font-trip text-5xl">Accounts Page</p>

            <div className="grid grid-cols-6 gap-5">
                <div className="rounded-lg bg-white border-2 border-gray">
                    <button className="p-4 rounded-lg" onClick={handleGetStarted}>
                        <p className="font-trip font-semibold text-[#1963CC]">Add Account</p>
                    </button>
                </div>
                <div className="rounded-lg bg-white border-2 border-gray">
                    <button className="p-4 rounded-lg" onClick={handleGetStarted}>
                        <p className="font-trip font-semibold text-[#1963CC]">Add Account</p>
                    </button>
                </div>
                <div className="rounded-lg bg-white border-2 border-gray">
                    <button className="p-4 rounded-lg" onClick={handleGetStarted}>
                        <p className="font-trip font-semibold text-[#1963CC]">Add Account</p>
                    </button>
                </div>
                <div className="rounded-lg bg-white border-2 border-gray">
                    <button className="p-4 rounded-lg" onClick={handleGetStarted}>
                        <p className="font-trip font-semibold text-[#1963CC]">Add Account</p>
                    </button>
                </div>
                <div className="rounded-lg bg-white border-2 border-gray">
                    <button className="p-4 rounded-lg" onClick={handleGetStarted}>
                        <p className="font-trip font-semibold text-[#1963CC]">Add Account</p>
                    </button>
                </div>
                <div className="rounded-lg bg-white border-2 border-gray">
                    <button className="p-4 rounded-lg" onClick={handleGetStarted}>
                        <p className="font-trip font-semibold text-[#1963CC]">Add Account</p>
                    </button>
                </div>
            </div>

            
        </div>
    )
}