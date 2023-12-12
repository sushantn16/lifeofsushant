"use client"
import Tile from "@/layout/tile"
import Chip from "@/layout/chip";
import { useEffect, useState } from "react";
export default function Personal() {

    const [data, setData] = useState();
    useEffect(() => {
        fetch("/cv.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data.data);

            })
            .catch((error) => {
                console.error('Error fetching cv.json:', error);
            });
    }, []);
    return (

        <div className="container font-mono">
            {data && (
                <div className="p-10">
                    <div className="personal flex">
                        <div className="profile-image">
                        <img className="rounded-full" src="/images/about-me.jpeg" />
                        </div>
                        <div>
                            <p className="text-6xl">
                                {data.personal.name.first + " " + data.personal.name.last}
                            </p>
                            <p className="text-4xl">
                                {data.personal.role}
                            </p>
                            <p className="text-xl">
                                {data.personal.email}
                            </p>
                            <p className="text-xl">
                                {data.personal.phone}
                            </p>
                            <p className="text-xl">
                                {data.personal.linkedin}
                            </p>
                            <p className="text-xl">
                                {data.personal.github}
                            </p>
                            <p className="text-xl">
                                {data.personal.city + ", " + data.personal.country}
                            </p>
                        </div>
                    </div>
                    <div className="content-section summary">
                        <p className="text-xl">
                           {data.summary.data}
                        </p>
                    </div>
                    <div className="content-section professional-experience">
                        <p className="text-xl font-bold">
                            {data.professionalExperience.name}
                        </p>
                        {data.professionalExperience.data.map(data => <Tile key={data.id} data={data} />)}
                    </div>
                    <div className="content-section education">
                        <p className="text-xl font-bold">
                            {data.education.name}
                        </p>
                        {data.education.data.map(data => <Tile key={data.id} data={data} />)}
                    </div>
                    <div className="content-section projects">
                        <p className="text-xl font-bold">
                            {data.projects.name}
                        </p>
                        {data.projects.data.map(data => <Tile key={data.id} data={data} />)}
                    </div>
                    <div className="content-section certification">
                        <p className="text-xl font-bold">
                            {data.certification.name}
                        </p>
                        {data.certification.data.map(data => <Tile key={data.id} data={data} />)}
                    </div>
                    <div className="content-section hobbies">
                        <p className="text-xl font-bold">
                            {data.hobbies.name}
                        </p>
                        {data.hobbies.data.map((data, index) => <Chip key={index} data={data}/>)}
                    </div>
                    <div className="content-section languages">
                        <p className="text-xl font-bold">
                            {data.languages.name}
                        </p>
                        {data.languages.data.map((data, index) => <Chip key={index} data={data}/>)}
                    </div>
                </div>
            )}
        </div>

    )

}
