"use client"

import {
  Server,
  Database,
  Cloud,
  Code,
  Terminal,
  Lock,
  LayoutGrid,
  Cpu,
  GitBranch,
  Globe,
  Layers,
  Settings,
} from "lucide-react/dist/lucide-react"
import { cn } from "@/lib/utils"

export default function Skills({ isLoaded }: { isLoaded: boolean }) {
  // Define skill categories with their icons and skills
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js", icon: "/icons/nodejs.svg" },
        { name: "Express", icon: "/icons/express.svg" },
        { name: "Python", icon: "/icons/python.svg" },
        { name: "Django", icon: "/icons/django.svg" },
        { name: "Java", icon: "/icons/java.svg" },
        { name: "Spring Boot", icon: "/icons/spring.svg" },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
        { name: "MongoDB", icon: "/icons/mongodb.svg" },
        { name: "MySQL", icon: "/icons/mysql.svg" },
        { name: "Redis", icon: "/icons/redis.svg" },
        { name: "Elasticsearch", icon: "/icons/elasticsearch.svg" },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        { name: "Docker", icon: "/icons/docker.svg" },
        { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
        { name: "AWS", icon: "/icons/aws.svg" },
        { name: "CI/CD", icon: "/icons/cicd.svg" },
        { name: "Terraform", icon: "/icons/terraform.svg" },
      ],
    },
    {
      title: "Frontend",
      icon: <LayoutGrid className="h-5 w-5" />,
      skills: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "TypeScript", icon: "/icons/typescript.svg" },
        { name: "HTML/CSS", icon: "/icons/html5.svg" },
        { name: "Next.js", icon: "/icons/nextjs.svg" },
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
      ],
    },
    {
      title: "Tools & Methods",
      icon: <Terminal className="h-5 w-5" />,
      skills: [
        { name: "Git", icon: "/icons/git.svg" },
        { name: "RESTful APIs", icon: "/icons/api.svg" },
        { name: "GraphQL", icon: "/icons/graphql.svg" },
        { name: "Microservices", icon: "/icons/microservices.svg" },
        { name: "Agile", icon: "/icons/agile.svg" },
      ],
    },
    {
      title: "Other",
      icon: <Settings className="h-5 w-5" />,
      skills: [
        { name: "System Design", icon: "/icons/system-design.svg" },
        { name: "Performance", icon: "/icons/performance.svg" },
        { name: "Security", icon: "/icons/security.svg" },
        { name: "Testing", icon: "/icons/testing.svg" },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className={cn(
        "py-20 border-t border-stone-800 scroll-m-24 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out delay-500",
        isLoaded && "opacity-100 translate-y-0",
      )}
    >
      <h2 className="text-3xl font-bold mb-8 text-stone-300">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-stone-800/50 border border-stone-700 rounded-lg p-6 hover:border-stone-600 transition-colors"
          >
            <div className="flex items-center mb-4">
              <div className="mr-2 text-stone-400">{category.icon}</div>
              <h3 className="text-xl font-semibold text-stone-300">{category.title}</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex flex-col items-center bg-stone-700/50 rounded-lg p-3 hover:bg-stone-700 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center mb-2">
                    {/* Use Lucide icons as fallbacks for custom icons */}
                    {getSkillIcon(skill.name)}
                  </div>
                  <span className="text-sm text-stone-300 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Function to get the appropriate icon for each skill
function getSkillIcon(skillName: string) {
  // Map skill names to appropriate icons
  switch (skillName.toLowerCase()) {
    // Backend
    case "node.js":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#68a063">
          <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202v-8.457c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0l-7.319 4.219c-.074.036-.11.11-.11.201v8.457c0 .092.036.166.11.202l2.001 1.157c1.082.548 1.762-.095 1.762-.735v-8.361c0-.11.091-.221.203-.221h.936c.11 0 .203.092.203.221v8.361c0 1.449-.788 2.294-2.166 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099c-.478-.276-.772-.789-.772-1.339v-8.457c0-.55.294-1.063.772-1.339l7.319-4.237c.467-.258 1.095-.258 1.541 0l7.319 4.237c.477.276.772.789.772 1.339v8.457c0 .55-.295 1.063-.772 1.339l-7.319 4.237c-.24.128-.497.202-.771.202z" />
        </svg>
      )
    case "express":
      return <Code className="h-8 w-8 text-stone-300" />
    case "python":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#3776ab">
          <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
        </svg>
      )
    case "django":
      return <Code className="h-8 w-8 text-stone-300" />
    case "java":
      return <Cpu className="h-8 w-8 text-stone-300" />
    case "spring boot":
      return <Cpu className="h-8 w-8 text-stone-300" />

    // Databases
    case "postgresql":
      return <Database className="h-8 w-8 text-stone-300" />
    case "mongodb":
      return <Database className="h-8 w-8 text-stone-300" />
    case "mysql":
      return <Database className="h-8 w-8 text-stone-300" />
    case "redis":
      return <Database className="h-8 w-8 text-stone-300" />
    case "elasticsearch":
      return <Database className="h-8 w-8 text-stone-300" />

    // DevOps & Cloud
    case "docker":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#2496ED">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
        </svg>
      )
    case "kubernetes":
      return <Cloud className="h-8 w-8 text-stone-300" />
    case "aws":
      return <Cloud className="h-8 w-8 text-stone-300" />
    case "ci/cd":
      return <GitBranch className="h-8 w-8 text-stone-300" />
    case "terraform":
      return <Cloud className="h-8 w-8 text-stone-300" />

    // Frontend
    case "react":
      return (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#61DAFB">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
        </svg>
      )
    case "typescript":
      return <Code className="h-8 w-8 text-stone-300" />
    case "html/css":
      return <LayoutGrid className="h-8 w-8 text-stone-300" />
    case "next.js":
      return <Code className="h-8 w-8 text-stone-300" />
    case "tailwind css":
      return <LayoutGrid className="h-8 w-8 text-stone-300" />

    // Tools & Methods
    case "git":
      return <GitBranch className="h-8 w-8 text-stone-300" />
    case "restful apis":
      return <Globe className="h-8 w-8 text-stone-300" />
    case "graphql":
      return <Globe className="h-8 w-8 text-stone-300" />
    case "microservices":
      return <Layers className="h-8 w-8 text-stone-300" />
    case "agile":
      return <Terminal className="h-8 w-8 text-stone-300" />

    // Other
    case "system design":
      return <Layers className="h-8 w-8 text-stone-300" />
    case "performance":
    case "performance optimization":
      return <Settings className="h-8 w-8 text-stone-300" />
    case "security":
      return <Lock className="h-8 w-8 text-stone-300" />
    case "testing":
      return <Terminal className="h-8 w-8 text-stone-300" />

    // Default fallback
    default:
      return <Code className="h-8 w-8 text-stone-300" />
  }
}

