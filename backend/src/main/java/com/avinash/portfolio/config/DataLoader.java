
package com.avinash.portfolio.config;

import com.avinash.portfolio.model.*;
import com.avinash.portfolio.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    private final ProjectRepository projectRepository;
    private final ExperienceRepository experienceRepository;
    private final SkillRepository skillRepository;
    private final EducationRepository educationRepository;

    @Autowired
    public DataLoader(
            ProjectRepository projectRepository,
            ExperienceRepository experienceRepository,
            SkillRepository skillRepository,
            EducationRepository educationRepository) {
        this.projectRepository = projectRepository;
        this.experienceRepository = experienceRepository;
        this.skillRepository = skillRepository;
        this.educationRepository = educationRepository;
    }

    @Override
    public void run(String... args) {
        // Load projects
        List<Project> projects = Arrays.asList(
            new Project(
                null,
                "AI-Powered Data Analytics Platform",
                "Built a comprehensive analytics platform that leverages machine learning to provide insights from large datasets",
                "/images/data-analytics.jpg",
                "https://analytics-platform.example.com",
                "https://github.com/avinashyadav03/analytics-platform",
                Arrays.asList("Python", "TensorFlow", "React", "AWS")
            ),
            new Project(
                null,
                "Distributed Systems Framework",
                "Developed a high-performance framework for building distributed applications with fault tolerance",
                "/images/distributed-systems.jpg",
                "https://framework.example.com",
                "https://github.com/avinashyadav03/distributed-framework",
                Arrays.asList("Java", "Kafka", "Docker", "Kubernetes")
            ),
            new Project(
                null,
                "Cloud-Native Microservices Architecture",
                "Designed and implemented a scalable microservices architecture using cloud-native technologies",
                "/images/microservices.jpg",
                "https://microservices.example.com",
                "https://github.com/avinashyadav03/cloud-microservices",
                Arrays.asList("Go", "gRPC", "AWS Lambda", "DynamoDB")
            )
        );
        projectRepository.saveAll(projects);

        // Load experiences
        List<Experience> experiences = Arrays.asList(
            new Experience(
                null,
                "Amazon Web Services",
                "Senior Software Engineer",
                "Seattle, WA",
                LocalDate.of(2020, 1, 1),
                LocalDate.of(2023, 6, 30),
                Arrays.asList(
                    "Led design and implementation of distributed systems",
                    "Optimized cloud infrastructure for cost and performance",
                    "Mentored junior engineers on software engineering best practices"
                )
            ),
            new Experience(
                null,
                "Google",
                "Software Engineer",
                "Mountain View, CA",
                LocalDate.of(2017, 3, 1),
                LocalDate.of(2019, 12, 31),
                Arrays.asList(
                    "Contributed to machine learning infrastructure",
                    "Developed data processing pipelines for large-scale systems",
                    "Collaborated with product teams to implement new features"
                )
            ),
            new Experience(
                null,
                "Microsoft",
                "Software Developer Intern",
                "Redmond, WA",
                LocalDate.of(2016, 5, 1),
                LocalDate.of(2016, 8, 31),
                Arrays.asList(
                    "Built internal tools for development productivity",
                    "Implemented features for Azure cloud services",
                    "Participated in code reviews and design discussions"
                )
            )
        );
        experienceRepository.saveAll(experiences);

        // Load skills
        List<Skill> skills = Arrays.asList(
            // Programming Languages
            new Skill(null, "Java", 95, "Programming"),
            new Skill(null, "Python", 90, "Programming"),
            new Skill(null, "JavaScript", 85, "Programming"),
            new Skill(null, "Go", 80, "Programming"),
            new Skill(null, "C++", 75, "Programming"),
            
            // Frameworks & Libraries
            new Skill(null, "Spring Boot", 90, "Frameworks"),
            new Skill(null, "React", 85, "Frameworks"),
            new Skill(null, "TensorFlow", 80, "Frameworks"),
            new Skill(null, "Node.js", 85, "Frameworks"),
            new Skill(null, "Angular", 75, "Frameworks"),
            
            // Cloud & DevOps
            new Skill(null, "AWS", 95, "Cloud"),
            new Skill(null, "Docker", 90, "DevOps"),
            new Skill(null, "Kubernetes", 85, "DevOps"),
            new Skill(null, "Terraform", 80, "DevOps"),
            new Skill(null, "CI/CD", 90, "DevOps"),
            
            // Databases
            new Skill(null, "PostgreSQL", 90, "Database"),
            new Skill(null, "MongoDB", 85, "Database"),
            new Skill(null, "Redis", 80, "Database"),
            new Skill(null, "Cassandra", 75, "Database"),
            
            // Soft Skills
            new Skill(null, "Problem Solving", 95, "Soft Skills"),
            new Skill(null, "Communication", 90, "Soft Skills"),
            new Skill(null, "Teamwork", 95, "Soft Skills"),
            new Skill(null, "Leadership", 85, "Soft Skills")
        );
        skillRepository.saveAll(skills);

        // Load education
        List<Education> educationList = Arrays.asList(
            new Education(
                null,
                "Stanford University",
                "Master of Science",
                "Computer Science",
                LocalDate.of(2014, 9, 1),
                LocalDate.of(2016, 6, 30),
                3.9,
                "Specialized in Machine Learning and Distributed Systems"
            ),
            new Education(
                null,
                "Indian Institute of Technology",
                "Bachelor of Technology",
                "Computer Science and Engineering",
                LocalDate.of(2010, 7, 1),
                LocalDate.of(2014, 5, 31),
                3.8,
                "Graduated with honors, President of Coding Club"
            )
        );
        educationRepository.saveAll(educationList);
    }
}
