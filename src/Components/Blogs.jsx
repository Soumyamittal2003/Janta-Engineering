import React from "react";

const Blogs = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Understanding React",
            description: "A deep dive into the popular frontend library.",
            image: "https://www.mtt.uk.com/wp-content/uploads/2019/05/CNC-Lathe-Repair3.jpg",
            date: "August 1, 2024"
        },
        {
            id: 4,
            title: "Responsive Design Principles",
            description: "Make your web pages look great on any device.",
            image: "https://media.istockphoto.com/id/171347670/photo/engineering.jpg?s=612x612&w=0&k=20&c=ImhJgyLB2lhDTcZZisraOyQ4nJqs8iVCVj3_tbYgrYc=",
            date: "August 18, 2024"
        },
        {
            id: 2,
            title: "JavaScript Best Practices",
            description: "Learn the best practices for writing clean JavaScript.",
            image: "https://media.istockphoto.com/id/1057719100/photo/young-latin-engineer-calibrating-drill.jpg?s=612x612&w=0&k=20&c=hO2XJ60cxB4krKZBoM8zB97QHQLx9tjtWGicqDoo4rk=",
            date: "September 26, 2024"
        },
        {
            id: 4,
            title: "Responsive Design Principles",
            description: "Make your web pages look great on any device.",
            image: "https://media.istockphoto.com/id/171347670/photo/engineering.jpg?s=612x612&w=0&k=20&c=ImhJgyLB2lhDTcZZisraOyQ4nJqs8iVCVj3_tbYgrYc=",
            date: "August 18, 2024"
        },
        {
            id: 3,
            title: "CSS Tricks You Should Know",
            description: "Improve your styling with these useful CSS tricks.",
            image: "https://media.istockphoto.com/id/1363134809/photo/portrait-of-a-woman-working-in-a-factory-industry.webp?b=1&s=170667a&w=0&k=20&c=LjrLTDYSeyyLCI3KePVMBcyBVip28dArEu9MQyVarVA=",
            date: "January 15, 2023"
        },
        {
            id: 4,
            title: "Responsive Design Principles",
            description: "Make your web pages look great on any device.",
            image: "https://media.istockphoto.com/id/171347670/photo/engineering.jpg?s=612x612&w=0&k=20&c=ImhJgyLB2lhDTcZZisraOyQ4nJqs8iVCVj3_tbYgrYc=",
            date: "August 18, 2024"
        },
    ];

    return (
        <section className="py-10 px-4">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold">Blogs</h2>
                <hr className="border-b-2 border-blue-500 w-16 mx-auto mt-2" />
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {blogPosts.map((post) => (
                    <div key={post.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div className="bg-white rounded-sm shadow-md overflow-hidden h-full">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="bg-white text-black text-sm p-1 opacity-75">
                                {post.date}
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                                <p className="text-gray-600">{post.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blogs;


