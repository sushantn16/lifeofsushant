import Social from "@/layout/social";

export default function AboutMe() {

    var orange = "#EA3C12"

    return (
        <div className="page-container">
            <h2 className="page-heading">
                About Me
            </h2>
            <div className="page-content">

                <div className="contact-me-section">
                    <div className="test-grey text-center ">
                        <p>Like my blogs? Want to reach out?
                        </p>
                        <p>Contact on Social Media</p>
                        <div className="flex justify-center my-5">
                        <Social color={orange}/>
                        </div>
                        <p>OR</p>
                        <p>Write your message here!</p>
                    </div>

                    <div className="justify-center flex mt-10">
                        <form className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block text-grey text-s mb-1" htmlFor="name">
                                        Name
                                    </label>
                                    <input className="appearance-none block w-full border border-light-orange rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-orange" id="name" type="text" placeholder="Sushant" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block text-grey text-s mb-1" htmlFor="email">
                                        Email
                                    </label>
                                    <input className="appearance-none block w-full border border-light-orange rounded py-3 px-4 leading-tight focus:outline-none focus:border-orange focus:border-gray-500" id="email" type="text" placeholder="sushant@gmail.com" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block text-grey text-s mb-1" htmlFor="message">
                                        Password
                                    </label>
                                    <input className="appearance-none block w-full border border-light-orange rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-orange focus:border-gray-500" id="message" type="textbox" placeholder="Write your message here!" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div >
        </div >
    )
}