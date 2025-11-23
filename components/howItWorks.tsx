import React from 'react'

export default function HowItWorks() {

    const steps = [
        {
            id: 1,
            title: "Describe Your Vision",
            description: "Don't worry about wireframes. Just tell us what you need—'A modern coffee shop landing page' or 'A dark-mode crypto dashboard'.",
            icon: (
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            )
        },
        {
            id: 2,
            title: "AI Architects the UI",
            description: "We don't just paste images. We generate semantic, responsive, and accessible code using modern standards.",
            icon: (
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            )
        },
        {
            id: 3,
            title: "Export Ready-to-Use Code",
            description: "Download the file or copy the snippet directly into your VS Code. Compatible with React, Vue, and raw HTML.",
            icon: (
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            )
        }
    ];

    return (
        <div id="howItWorks" className="h-[70vh] w-full bg-[red] mt-[500px]"></div>
    )
}
