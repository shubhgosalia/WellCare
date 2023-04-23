import React,{useState} from 'react'
import "./Modal.css"

const Query = (props) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    return (
        <tr>
            <td className="px-6 py-4">
                <div className="flex items-center space-x-3">
                    <div className="inline-flex w-10 h-10">
                        <img
                            src={props.info.profile_pic_link}
                            alt=""
                            className="w-12 h-12 rounded-lg mx-auto"
                        />
                    </div>
                    <div>
                        <div className="text-lg">{props.info.name}</div>
                        <p className="text-gray-600 text-md font-medium tracking-wide">
                            {props.info.tag}
                        </p>
                    </div>
                </div>
            </td>
            
            <td className="py-4">
                <div className="text-gray-700 text-lg font-medium">
                    {props.info.subject}
                </div>
            </td>
            <td className="px-4 py-4">
                <button className="text-primary-blue" onClick={toggleModal}>
                    View Message
                </button>
                {modal && (
                    <div className="modal">
                        <div className="overlay">
                            <div className="modal-content">
                                <div className="font-bold">Query Message</div>
                                <p>
                                    {props.info.desc}
                                </p>
                                <button
                                    className="close-modal text-white text-sm rounded-md bg-green-800"
                                    onClick={toggleModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </td>
        </tr>
    )
}

export default Query
