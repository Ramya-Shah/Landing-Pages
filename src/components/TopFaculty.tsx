"use client";

import Image from "next/legacy/image";
import React from "react";

const TopFaculty = () => {
    const alumni = [
        {
            name: "Umang Verma",
            position: "Software Engineer",
            company: "APPLE",
            lpa: "82 LPA",
            image: "./placement_1.jpeg",
        },
        {
            name: "Sophie Liu",
            position: "Data Scientist",
            company: "GOOGLE",
            lpa: "90 LPA",
            image: "./placement_2.jpeg",
        },
        {
            name: "Ravi Patel",
            position: "Product Manager",
            company: "MICROSOFT",
            lpa: "85 LPA",
            image: "./placement_3.jpeg",
        },
        {
            name: "Aisha Khan",
            position: "UI Designer",
            company: "LINKEDIN",
            lpa: "75 LPA",
            image: "./placement_4.jpeg",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
                    Top Faculty
                </h2>
                <p className="text-gray-600 text-center mb-12">
                    Instructors around the world teach millions of participants on
                    Neverin. We provide the tools and skills
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {alumni.map((person, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-md transition transform duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <div className="h-64 relative">
                                <div className="h-full bg-gray-200 w-full flex items-center justify-center">
                                    {/* Placeholder for images */}
                                    <div className="text-gray-400 text-center">
                                        <Image
                                            src={person.image}
                                            alt={person.name}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                        {/* <span className="text-sm">{person.name}</span> */}
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-medium text-lg">{person.name}</h3>
                                <p className="text-gray-600 text-sm">{person.position}</p>
                                <div className="flex justify-between items-center mt-2">
                                    <div>
                                        <p className="text-xs font-bold text-gray-500">
                                            {person.company}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-amber-500 font-bold">{person.lpa}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopFaculty;
