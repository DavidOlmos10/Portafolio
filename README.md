# OlmosOS Enterprise 8

An interactive Linux-inspired portfolio designed to showcase my experience, projects, technical skills and software architecture background.

OlmosOS Enterprise 8 recreates the experience of using a modern Linux desktop environment directly in the browser. Visitors can explore my professional background through applications, folders, terminal commands, system windows and architecture diagrams.

> Not just a portfolio. A developer operating system built to represent how I design and build software.

---

## About the Project

OlmosOS Enterprise 8 is a full-stack portfolio inspired by CentOS 8 and the GNOME desktop environment.

The purpose of this project is to create a memorable and interactive experience for recruiters, engineering managers and software developers while keeping professional information easy to access.

The portfolio includes:

- An interactive Linux-style desktop
- Draggable and resizable application windows
- A functional terminal
- Professional experience explorer
- Project portfolio
- Technical skills section
- Software architecture diagrams
- Integrated resume viewer
- Contact application
- Recruiter Mode
- English and Spanish support

---

## Project Goals

The main goals of this project are:

- Build a creative and memorable software engineering portfolio
- Showcase real full-stack development skills
- Demonstrate frontend architecture and state management
- Demonstrate backend development with Java and Spring Boot
- Present software architecture and cloud knowledge
- Provide recruiters with quick access to experience, projects and contact information
- Create a production-ready application with testing, CI/CD and monitoring

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Zustand
- TanStack Query
- React Hook Form
- Zod
- xterm.js
- Playwright
- Vitest

### Backend

- Java 21
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring Security
- PostgreSQL
- Flyway
- MapStruct
- OpenAPI
- JUnit 5
- Mockito
- Testcontainers

### Infrastructure

- Docker
- Docker Compose
- GitHub Actions
- AWS
- PostgreSQL
- Cloudflare
- Sentry
- PostHog

---

## System Architecture

```text
┌────────────────────────────────────────────┐
│                 Frontend                   │
│                                            │
│  Next.js + React + TypeScript              │
│  Linux Desktop Interface                   │
│  Window Manager + Terminal                 │
└──────────────────────┬─────────────────────┘
                       │
                       │ HTTPS / REST API
                       │
┌──────────────────────▼─────────────────────┐
│                  Backend                   │
│                                            │
│  Java 21 + Spring Boot                     │
│  Projects API                              │
│  Experience API                            │
│  Contact API                               │
│  Analytics API                             │
└──────────────────────┬─────────────────────┘
                       │
┌──────────────────────▼─────────────────────┐
│                PostgreSQL                  │
│                                            │
│  Projects                                  │
│  Experience                                │
│  Skills                                    │
│  Messages                                  │
│  Analytics                                 │
└────────────────────────────────────────────┘
