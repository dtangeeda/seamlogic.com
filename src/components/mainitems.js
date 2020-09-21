import React from "react";
import ConsultImg from "../images/consult.svg";
import TrainingImg from "../images/training.svg";
import StaffImg from "../images/staffing.svg";



function MainItems() {
    return (  
        <section className="bg-white border-b py-8">
                <div className="container max-w-5xl mx-auto m-8">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Services</h1>
                <div className="w-full mb-4">	
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
                </div>
                <div className="flex flex-wrap">
                    <div className="w-5/6 sm:w-1/2 p-6">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">IT Consulting</h3>
                    <p className="text-gray-600 mb-8">SeamLogic makes sure that the appropriate technologies that are essential in increasing the business value of your company are merged with your business, and this is made possible by SeamLogics’ Consulting Services. We offer consulting services that aim to enlighten their clients about the necessary things that they want and need to know about technology and its different forms. <br /><br />
                        More Info: <a className="text-orange-500 underline" href="/services">IT Consulting Service</a></p>
                    </div>
                    <div className="w-full sm:w-1/2 p-6">
                    <img className="w-full sm:h-64 mx-auto" src={ConsultImg} alt='' />

                    </div>
                </div>
                <div className="flex flex-wrap flex-col-reverse sm:flex-row">	
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                    <img className="w-full sm:h-64 mx-auto" src={StaffImg} alt='' />    
                    </div>
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                    <div className="align-middle">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">IT Staffing</h3>
                        <p className="text-gray-600 mb-8">The company is led by IT professionals that are applying their understanding of technology and the newest technology methodologies and practices to ensure that you will always have skilled IT consultants by your side throughout the process.<br /><br />
                        More Info: <a className="text-orange-500 underline" href="https://seamlogic.co/">IT Staffing Serivce</a></p>
                    </div>
                    </div>
                    <div className="flex flex-wrap">
                    <div className="w-5/6 sm:w-1/2 p-6">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Technology Training</h3>
                    <p className="text-gray-600 mb-8">SeamLogic deeply acknowledges the ever changing and evolving technology landscape, and it is why the company is offering technology training that will help its staff to understand the new trends in technology. We also offer up to date programs and applications that will drive the learning curve for its consultants. <br /><br />
                        More Info: <a className="text-orange-500 underline" href="/services">IT Consulting Service</a></p>
                    </div>
                    <div className="w-full sm:w-1/2 p-6">
                    <img className="w-full sm:h-64 mx-auto" src={TrainingImg} alt='' />    
                    </div>
                </div>
                </div>
                </div>
            </section>
    )
}

export default MainItems;
