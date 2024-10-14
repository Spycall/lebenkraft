import React from "react";

function Offers() {
    return (
        <div className="py-10 bg-white">
            <div className="container mx-auto">
                <h2 className="text-center text-3xl font-bold mb-6">
                    Our Offers
                </h2>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-purple-200 text-gray-700 text-sm font-semibold">
                                <th className="border border-gray-300 py-4 px-6 text-center">
                                    Care Level
                                </th>
                                <th className="border border-gray-300 py-4 px-6 text-center">
                                    Monthly Care Benefits
                                </th>
                                <th className="border border-gray-300 py-4 px-6 text-center">
                                    Monthly Care Allowance
                                </th>
                                <th className="border border-gray-300 py-4 px-6 text-center">
                                    Relief Amount per Month
                                </th>
                            </tr>
                            {/* Purple underline after header */}
                            <tr>
                                <td
                                    colSpan="4"
                                    className="border-t-4 border-purple-600"
                                ></td>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm">
                            <tr className="hover:bg-gray-100">
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    Level 1
                                </td>
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    -
                                </td>
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    -
                                </td>
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    125€
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    Level 2
                                </td>
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    761€
                                </td>
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    332€
                                </td>
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    125€
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    Level 3
                                </td>
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    1,432€
                                </td>
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    572€
                                </td>
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    125€
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    Level 4
                                </td>
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    1,778€
                                </td>
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    764€
                                </td>
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    125€
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    Level 5
                                </td>
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    2,200€
                                </td>
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    946€
                                </td>
                                <td className="border border-gray-300 py-4 px-6 text-center">
                                    125€
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Offers;
