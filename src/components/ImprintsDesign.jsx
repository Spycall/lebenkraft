import {
    Building2,
    Phone,
    Mail,
    Gavel,
    ScrollText,
    Shield,
    ImageIcon,
} from "lucide-react";

export default function ImprintsDesign() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white p-6">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-purple-900 mb-2">
                        Legal Information
                    </h1>
                    <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
                </header>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Imprint Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Building2 className="text-purple-600 h-6 w-6" />
                            <h2 className="text-xl font-semibold text-purple-900">
                                Imprint
                            </h2>
                        </div>
                        <div className="space-y-2 text-gray-700">
                            <p className="font-medium">
                                Intensivpflegedienst Lebenskraft UG
                            </p>
                            <p>Friedrich Wilhelm Street 3, 47051 Duisburg</p>
                        </div>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Phone className="text-purple-600 h-6 w-6" />
                            <h2 className="text-xl font-semibold text-purple-900">
                                Contact
                            </h2>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Phone className="text-purple-500 h-4 w-4" />
                                <a
                                    href="tel:017620937596"
                                    className="text-purple-700 hover:underline"
                                >
                                    017620937596
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="text-purple-500 h-4 w-4" />
                                <a
                                    href="mailto:Intensivpflegedienst-lebenskraft@web.de"
                                    className="text-purple-700 hover:underline break-all"
                                >
                                    Intensivpflegedienst-lebenskraft@web.de
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* EU Dispute Settlement Section */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Gavel className="text-purple-600 h-6 w-6" />
                        <h2 className="text-xl font-semibold text-purple-900">
                            EU dispute settlement
                        </h2>
                    </div>
                    <div className="space-y-4 text-gray-700">
                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                            <p>
                                The European Commission provides a platform for
                                online dispute resolution (ODR):{" "}
                                <a
                                    href="https://ec.europa.eu/consumers/odr/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-700 hover:underline font-medium"
                                >
                                    https://ec.europa.eu/consumers/odr/
                                </a>
                            </p>
                        </div>
                        <p>
                            Our email address can be found above in the imprint.
                        </p>
                    </div>
                </div>

                {/* Consumer Dispute Resolution Section */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <ScrollText className="text-purple-600 h-6 w-6" />
                        <h2 className="text-xl font-semibold text-purple-900">
                            Consumer dispute resolution
                        </h2>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg border border-orange-100">
                        <Shield className="text-orange-500 h-5 w-5 mt-1" />
                        <p className="text-gray-700">
                            We are not willing or obliged to participate in
                            dispute resolution proceedings before a consumer
                            arbitration board.
                        </p>
                    </div>
                </div>

                {/* Resources Section */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <ImageIcon className="text-purple-600 h-6 w-6" />
                        <h2 className="text-xl font-semibold text-purple-900">
                            Image Resources
                        </h2>
                    </div>
                    <ul className="grid grid-cols-2 gap-4">
                        <li className="bg-purple-50 p-3 rounded-lg text-gray-700 text-center">
                            Pixel
                        </li>
                        <li className="bg-purple-50 p-3 rounded-lg text-gray-700 text-center">
                            Own
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
