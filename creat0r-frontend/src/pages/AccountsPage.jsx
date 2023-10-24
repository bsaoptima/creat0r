import React , { useState, useEffect } from "react";
import PhylloSDK from "../phylloSDKService/phylloSDKInit";
import { getAccounts } from "../phylloSDKService/phylloServiceAPIs";
import axios from "axios";
import tiktok from "../assets/tiktok.svg"
import plus from "../assets/plus-circle.svg"

export default function AccountsPage(){

    //seach fiels
    const [searchTerm, setSearchTerm] = useState('');

    //API calls
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        axios.post('http://127.0.0.1:8000/creat0r/api/accounts')
        .then(response => {
            setAccounts(response.data.accounts)
            console.log(response.data.accounts)
        })
        .catch(error => {
            console.error(error);
        });
    }, []);


    //Phyllo
    const phylloSDK = new PhylloSDK();
    const handleGetStarted = async () => {
        await phylloSDK.openPhylloSDK();
    };

    return (
        <div className="flex flex-col justify-center gap-y-10 p-20">
            <div className="flex flex-col gap-y-3">
                <p className="font-trip text-5xl font-bold text-start">Accounts</p>
                <p className="font-sfprodisplay text-xl text-start">Overview of all your social media channels.</p>
            </div>

            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-center items-center gap-x-2">
                    <div className=''>
                        <input 
                            type="text"
                            className="px-5 md:pr-40 lg:pr-80 bg-white py-3 border-2 border-[#EBEBEB] rounded-lg"
                            placeholder="Search by name..."
                            value={searchTerm}
                            onChange={event => setSearchTerm(event.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-x-2">
                    <button
                        className="bg-gradient-to-t from-blue-500 via-blue-500 to-blue-600 text-white font-semibold px-5 py-3 rounded-lg border-2 border-b-4 border-[#316BFF]"
                        onClick={handleGetStarted}
                    >
                        Add Account
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 bg-white rounded-xl p-5 border-2 border-[#EBEBEB]">
                {accounts.map((account) => (
                    <ProfileBox username={account.username} profile_pic={account.profile_pic_url} followers={account.followers} views={account.views} likes={account.likes}/>
                ))}
            </div>
            
        </div>
    )
}



function ProfileBox({username, profile_pic, followers, views, likes}) {
    return(
        <div className="flex flex-col gap-y-3 rounded-xl border-4 border-[#316BFF] px-2 py-5">
            <div className="flex flex-row justify-around items-start">
                <img height="20px" width="20px" src={tiktok}/>
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-gray-200">
                    <img src={profile_pic} alt="Profile Picture" className="w-full h-full object-cover" />
                </div>
                <button>
                    <img className="" height="20px" width="20px" src={plus}/>
                </button> 
            </div>

            <p className="font-sfprodisplay">@{username}</p>

            <div className="flex flex-row justify-center items-center gap-x-3">
                <div className="flex flex-col justify-center items-center basis-1/3">
                    <p className="font-sfprodisplay text-lg text-[#316BFF]">{followers}</p>
                    <p className="font-sfprodisplay text-[14px]">Followers</p>
                </div>
                <div className="flex flex-col justify-center items-center basis-1/3">
                    <p className="font-sfprodisplay text-lg text-[#316BFF]">{views}</p>
                    <p className="font-sfprodisplay text-[14px]">Views</p>
                </div>
                <div className="flex flex-col justify-center items-center basis-1/3">
                    <p className="font-sfprodisplay text-lg text-[#316BFF]">{likes}</p>
                    <p className="font-sfprodisplay text-[14px]">Likes</p>
                </div>
            </div>

        </div>
    )
}