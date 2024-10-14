import CareerDesign from "../components/CareerDesign";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import { AiOutlineRight } from "react-icons/ai";

import {
    Users,
    Shield,
    GraduationCap,
    TrendingUp,
    ChevronRight,
} from "lucide-react";
const jobsData = [
    {
        title: "Nursing assistant",
        experience: "2 Years",
        deadline: "2024-09-20",
    },
    {
        title: "Nursing assistant",
        experience: "1 Years",
        deadline: "2024-09-20",
    },
    {
        title: "Nursing assistant",
        experience: "3 Years",
        deadline: "2024-09-20",
    },
    {
        title: "Nursing assistant",
        experience: "2 Years",
        deadline: "2024-09-20",
    },
    {
        title: "Nursing assistant",
        experience: "3 Years",
        deadline: "2024-09-20",
    },
];

const Sidebar = () => {
    return (
        <div className="w-full lg:w-64 p-4 bg-gray-100">
            <ul className="space-y-4">
                <li className="text-gray-600 hover:text-purple-600 cursor-pointer">
                    HT & Admin
                </li>
                <li className="text-purple-600 font-bold">Nurse (20)</li>
                <li className="text-gray-600 hover:text-purple-600 cursor-pointer">
                    Support
                </li>
                <li className="text-gray-600 hover:text-purple-600 cursor-pointer">
                    Doctors
                </li>
            </ul>
        </div>
    );
};
const JobsList = () => {
    return (
        <div className="flex-grow p-6">
            {jobsData.map((job, index) => (
                <JobCard key={index} {...job} />
            ))}
        </div>
    );
};

const JobCard = ({ title, experience, deadline }) => {
    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-sm rounded-md mb-4 hover:bg-gray-50">
            <div className="text-lg font-semibold text-gray-700">{title}</div>
            <div className="flex items-center space-x-4">
                <div className="text-gray-500">
                    <span className="block text-sm font-light">Experience</span>
                    <span className="font-medium">{experience}</span>
                </div>
                <div className="text-gray-500">
                    <span className="block text-sm font-light">Deadline</span>
                    <span className="font-medium">{deadline}</span>
                </div>
                <AiOutlineRight className="text-gray-400" />
            </div>
        </div>
    );
};

const Career = () => {
    const benefits = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Team work",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
            iconBg: "bg-blue-50",
            iconColor: "text-blue-600",
            hoverBg: "hover:bg-blue-50",
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Secured Future",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
            iconBg: "bg-green-50",
            iconColor: "text-green-600",
            hoverBg: "hover:bg-green-50",
        },
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Learning Opportunity",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
            iconBg: "bg-purple-50",
            iconColor: "text-purple-600",
            hoverBg: "hover:bg-purple-50",
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Upgrate Skills",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
            iconBg: "bg-orange-50",
            iconColor: "text-orange-600",
            hoverBg: "hover:bg-orange-50",
        },
    ];

    return (
        <div>
            <Header text="Career" />
            <ServiceCard />
            <CareerDesign benefits={benefits} />
            <div className="flex flex-col md:flex-row container mx-auto">
                <Sidebar />
                <JobsList />
            </div>
        </div>
    );
};

export default Career;
