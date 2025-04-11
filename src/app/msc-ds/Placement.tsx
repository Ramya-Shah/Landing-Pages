'use client'

import React from "react";
import { motion } from "framer-motion";

const Placement: React.FC = () => {
    return (
        <div className="container mx-auto px-2 py-8">
            <motion.div
                className="grid grid-cols-1 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { staggerChildren: 0.1, duration: 0.5 },
                    },
                    hidden: { opacity: 0, y: 20 },
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* First two boxes (will take up first 2 columns) */}
                    {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:col-span-2">*/}
                    <div className="flex flex-col space-y-6 gap-8 h-[400px] md:h-[400px] w-[80%] md:w-[90%] mx-auto">
                        {[
                            {
                                title: "5 LPA",
                                subtitle: "Median Placement",
                                bg: "bg-white",
                                text: "text-blue-900",
                            },
                            {
                                title: "14 LPA",
                                subtitle: "Highest Placement",
                                bg: "bg-red-600",
                                text: "text-white",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                                className={`ps-[40px] p-4 shadow-sm rounded-md transition transform duration-300 hover:shadow-md bg-gray-100 hover:bg-red-600 group flex flex-col justify-center h-full`}
                            >
                                <h3 className="text-4xl font-bold text-black group-hover:text-white mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-black group-hover:text-white text-lg">
                                    {item.subtitle}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Logo (will take up the entire 3rd column) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center items-center h-full"
                    >
                        <img 
                            src="/with placement.png" 
                            alt="DAU Logo" 
                            className="h-auto w-full" 
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Placement;