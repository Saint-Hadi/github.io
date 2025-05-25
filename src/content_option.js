

const logotext = "Hadi Heydari";
const meta = {
    title: "Hadi Heydari",
    description: "I'm Hadi Heydari and I work as AI and Data Engineer."
};

const introdata = {
    title: "I'm Hadi Heydari",
    animated: {
        first: "YOU CAN CONTACT ME ANYTIME!",
        second: "AND YOU CAN FIND MY RESUME",
        // third: "AND DON'T FORGET THAT YOU CAN CONTACT ME ANYTIME!",
    },
    description: "Hi, I’m Hadi Heydari—an AI and Data Engineer who loves using data to solve real-world problems. I’m all about building smart, scalable solutions that actually make a difference. Over the years, I’ve worked on everything from designing solid data pipelines to developing AI models, especially in NLP and time series, with a big focus on reliability and efficiency. What really drives me is the chance to push the limits of tech and create something meaningful. Whether it’s improving large systems or applying AI to social science, I’m always looking for ways to deliver solid, impactful results. I’m a constant learner who enjoys keeping up with new tools and ideas, and I like taking on challenges that help me grow. I love working with others and being part of projects that aim to do something cool. Always open to connecting—let me know if you want to team up or collaborate!",
    your_img_url: "/",
};

const dataabout = {
    title: "ABOUT MY SELF",
    aboutme: "Hi, I’m Hadi Heydari—an AI and Data Engineer who loves using data to solve real-world problems. I’m all about building smart, scalable solutions that actually make a difference. Over the years, I’ve worked on everything from designing solid data pipelines to developing AI models, especially in NLP and time series, with a big focus on reliability and efficiency. What really drives me is the chance to push the limits of tech and create something meaningful. Whether it’s improving large systems or applying AI to social science, I’m always looking for ways to deliver solid, impactful results. I’m a constant learner who enjoys keeping up with new tools and ideas, and I like taking on challenges that help me grow. I love working with others and being part of projects that aim to do something cool. Always open to connecting—let me know if you want to team up or collaborate!",
};


const skills = [
    {
        category: "Programming Languages",
        skills: [
            { name: "Python", logo: "/images/python.png" },
            { name: "Bash", logo: "/images/bash.png" },
            { name: "Rust", logo: "/images/rust.png" },
        ],
    },
    {
        category: "Databases",
        skills: [
            { name: "PostgreSQL", logo: "/images/postgresql.png" },
            { name: "MySQL", logo: "/images/mysql.png" },
            { name: "ClickHouse", logo: "/images/clickhouse.png" },
            { name: "ElasticSearch", logo: "/images/elastic.png" },
            { name: "MongoDB", logo: "/images/mongo.png" },
            { name: "Starrocks", logo: "/images/starrocks.png" },
            { name: "InfluxDB", logo: "/images/influxdb.svg" },
        ],
    },
    {
        category: "AI Frameworks",
        skills: [
            { name: "Tensorflow", logo: "/images/Tensorflow.png" },
            { name: "Pytorch", logo: "/images/pytorch.png" },
        ],
    },
    {
        category: "Data Tools",
        skills: [
            { name: "Debezium", logo: "/images/debezium.png" },
            { name: "Kafka", logo: "/images/kafka.png" },
            { name: "Redpanda", logo: "/images/redpanda.png" },
            { name: "Airflow", logo: "/images/airflow.png" },
            { name: "Flink", logo: "/images/flink.png" },
            { name: "Spark", logo: "/images/spark.png" },
        ],
    },
    {
        category: "Web Frameworks",
        skills: [
            { name: "Django", logo: "/images/django.png" },
            { name: "FastAPI", logo: "/images/fastapi.svg" },
        ],
    },
    {
        category: "Cloud Services",
        skills: [
            { name: "AWS", logo: "/images/aws.png" },
        ],
    },
    {
        category: "Others",
        skills: [
            { name: "Docker", logo: "/images/docker.png" },
            { name: "Git", logo: "/images/git.png" },
            { name: "Huggingface", logo: "/images/huggingface.png" },
        ],
    },
];

const education = [
    {
        university: "Kharazmi University",
        logo: "/images/khu.png" ,
        major: "Master of Science in Industrial and Systems Engineering - Sep 2024 - GPA: 4/4",
        description: "Developed a robust, adaptive model for urban bus network planning that addresses dynamic demand and operational uncertainty. Integrated support vector clustering and kernel function learning to manage demand variability, while simultaneously optimizing routes, schedules, and profitability. The model tackles an NP-Hard problem using advanced analytics and machine learning techniques to improve service efficiency, sustainability, and user satisfaction in large-scale transportation networks.",
    },
    {
        university: "Shahrood University of Technology",
        logo: "/images/sut.png" ,
        major: "Bachelor of Engineering in Industrial and Systems Engineering - July 2021 - GPA: 3/4",
    },
];

const experiences = [
    {
        title: "Data Engineer and Data Scientist at Atieh Dadeh Pardaz - Full Time",
        time: "2021-now",
        description: "I have been responsible for various tasks so far, including both data science and data engineering roles. My work in artificial intelligence has included NLP tasks as well as time series foundation models for applications such as anomaly detection. On the data engineering side, my responsibilities have included change data capture, data migration, writing pipelines, managing containers and services involved in data movement, and setting up monitoring infrastructure for both processes and data."
    },
    {
        title: "Data Scientist at Cognitive Sciences & Technologies Council - Part Time",
        time: "2025-now",
        description: "I am a data scientist working on topics in computational social science and a developer of NLP models. My main focus is on developing zero-shot classification models based on transformer architectures."

    },
];
const publications = [
    {
        image: "/images/paper1.png",
        title: "An Improvement in Transformer-Based Sentiment Analysis in Persian Twitter",
        link: "http://dx.doi.org/10.61186/itrc.16.3.19",
        linkName: "Read Paper",
    },
];

const awards = [
    {
        title: "Sentiment Analysis of Social Media Posts - Second Place",
        description: "ParsiAzma - Issued by IEEE Iran Section and ICT Research Institute - Oct 2023",
    },
    {
        title: "Intent Detection In Complex Queries Challenge - Second Place",
        description: "7th Amirkabir AI Competitions - Issued by Amirkabir University and Mobile Telecommunication Company of Iran(Hamrah-e Aval) - May 2023",
    },
    {
        title: "Keyword Spotting Challenge - Best Place",
        description: "7th Amirkabir AI Competitions - Issued by Amirkabir University and Mobile Telecommunication Company of Iran(Hamrah-e Aval) - May 2023",
    },
];

const projects = [
    {
        title: "CDC MySQL to Clickhouse with Debezium and AVRO connector, a real-time replication",
        image: "/images/project_cdc.png",
        description: "In this setup, we build a real-time data pipeline using Docker Compose to orchestrate services like MariaDB (our source database), Redpanda (a Kafka-compatible event streaming platform), Debezium (for capturing database changes), and ClickHouse (as the analytics engine). After launching services with docker-compose up -d, we configure a Debezium connector via a curl command to monitor changes in the ourdb.ourtable_message table and stream them to a Redpanda topic in Avro format. On the ClickHouse side, we define a Kafka engine table to consume messages from this topic and create a materialized view to transform and store the data in a MergeTree table. Redpanda manages topic streams, and with the rpk CLI, we can list topics and scale them-e.g., using rpk topic add-partitions to increase parallelism for high-throughput processing. This pipeline enables low-latency, scalable CDC-based analytics.",
        githubLink: "https://github.com/Saint-Hadi/cdc-mysql-clickhouse",
        mediumLink: "https://medium.com/@Saint-Hadi/cdc-mysql-to-clickhouse-with-debezium-and-avro-connector-a-real-time-replication-75ea20554967",
    },
    {
        title: "CDC MySQL to Clickhouse with Debezium and AVRO connector, a real-time replication",
        image: "/images/project_cdc.png",
        description: "In this setup, we build a real-time data pipeline using Docker Compose to orchestrate services like MariaDB (our source database), Redpanda (a Kafka-compatible event streaming platform), Debezium (for capturing database changes), and ClickHouse (as the analytics engine). After launching services with docker-compose up -d, we configure a Debezium connector via a curl command to monitor changes in the ourdb.ourtable_message table and stream them to a Redpanda topic in Avro format. On the ClickHouse side, we define a Kafka engine table to consume messages from this topic and create a materialized view to transform and store the data in a MergeTree table. Redpanda manages topic streams, and with the rpk CLI, we can list topics and scale them-e.g., using rpk topic add-partitions to increase parallelism for high-throughput processing. This pipeline enables low-latency, scalable CDC-based analytics.",
        githubLink: "https://github.com/Saint-Hadi/cdc-mysql-clickhouse",
        mediumLink: "https://medium.com/@Saint-Hadi/cdc-mysql-to-clickhouse-with-debezium-and-avro-connector-a-real-time-replication-75ea20554967",
    },
];



const contactConfig = {
    YOUR_EMAIL: "haadiheydaari@gmail.com",
    YOUR_FONE: "-",
    description: " YOU CAN USE MAIL ABOVE OR YOU CAN ALSO EASYLY SEND A MAIL ON THIS SECTION --->",
    YOUR_SERVICE_ID: "service_t8r7bsr",
    YOUR_TEMPLATE_ID: "template_2w8ry68",
    YOUR_USER_ID: "cksqsHh91shxZ7S19",
};

const socialprofils = {
    github: "https://github.com/Saint-Hadi",
    linkedin: "https://www.linkedin.com/in/hadi-heydari-91a698259/",
    hf: "https://huggingface.co/Haadini",
    email: "mailto:haadiheydaari@gmail.com",
    whatsapp: "https://wa.me/+989211738237",
};
export {
    meta,
    dataabout,
    skills,
    education,
    experiences,
    publications,
    awards,
    projects,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
