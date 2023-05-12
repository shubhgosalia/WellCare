import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import creds from "../components/Utils/videoCreds";
import { useNavigate } from 'react-router-dom';

const VideoCall = () => {

    const { roomId } = useParams();
    const navigate = useNavigate();

    const Meeting = async (element) => {
        const appID = creds.appID;
        const serverSecret = creds.serverSecret;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Health Session");

        const zc = ZegoUIKitPrebuilt.create(kitToken);

        zc.joinRoom({
            container: element,
            maxUsers: 2,
            showRoomTimer: true,
            // sharedLinks: [
            //     {
            //         name: 'Meeting link',
            //         url: `http://localhost:3000/room/${roomId}`
            //     },
            // ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            onLeaveRoom: (users)=> {
                navigate(`/ratetheroom/${roomId}`);
            }
        })
    }

    return (
        <>
            <div>
                <div ref={Meeting} />
            </div>
        </>
    )
}

export default VideoCall;
