import Social from "@/layout/social";

export default function AboutMe() {

    var orange = "#EA3C12"

    return (
        <div className="page-container mx-8 md:mx-20">

            <div className="page-content">
                <div className="text-justify mb-10">
                    <img className="md:h-1/3 md:w-1/3 md:mr-10 mb-5 float-left" src="/images/about-me.jpeg" />

                    Hi, I'm Sushant, and I'm thrilled to welcome you to my personal blog! Some of you may already know me from our encounters in Koblenz, while others might recognize me from my time in school or during my bachelor's degree. It's fascinating how I can be perceived as a different person by everyone I meet, but here, on this platform, I want to be my authentic self.
                    <br />
                    I created this blog to share my thoughts, experiences, and passions with all of you. Whether it's about my travels to captivating destinations, my culinary adventures exploring diverse cuisines, or the exhilarating distances I cover during my runs, I'm excited to embark on this journey of self-expression and connection.
                    <br />
                    To give you a little background about myself, I hail from the vibrant city of Chandigarh in North India. I was born and raised there, enjoying a comfortable and cozy life with my loving family. Life in Chandigarh shielded me from worries and provided a nurturing environment. However, one day, I made the bold decision to pursue my master's degree in Koblenz, Germany. It was a transformative experience to venture into a different part of the world to further my education.
                    <br />
                    Join me as I navigate through life, embracing new cultures, exploring my passions, and constantly evolving into the person I aspire to be. Together, let's delve into the limitless possibilities of sharing, learning, and growing. I'm thrilled to have you by my side on this extraordinary journey.
                    <br />



                    Stay tuned for captivating stories, inspiring insights, and a glimpse into the authentic me. Thank you for being here and supporting me as I embark on this exciting chapter of my life!

                </div>
                <div className="contact-me-section">
                    <div className="test-grey text-center ">
                        <p>Like my blogs? Want to reach out?
                        </p>
                        <p>Contact on Social Media</p>
                        <div className="flex justify-center my-5">
                            <Social color={orange} />
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
                                        Message
                                    </label>
                                    <textarea className="appearance-none block h-24 w-full border border-light-orange rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-orange focus:border-gray-500" id="message" placeholder="Write your message here!" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <button class="bg-light-oragne hover:bg-oragne text-white font-bold py-2 px-4 rounded">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div >
        </div >
    )
}