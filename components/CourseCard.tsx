import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { Loader } from "@/components/ui/loader";
import { Course } from "@/sanity.types";

interface CourseCardProps {
  course: Course;
  href: string;
  showProgress?: boolean;
}

export function CourseCard({
  course,
  href,
  showProgress = false,
}: CourseCardProps) {
  return (
    <Link href={href} className="group hover:no-underline">
      <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-4px] border border-border">
        <div className="relative h-52 w-full overflow-hidden">
          {course.image ? (
            <Image
              src={urlFor(course.image).url() || ""}
              alt={course.title || "Course Image"}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-muted">
              <Loader size="lg" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="text-sm font-medium px-3 py-1 bg-black/50 text-white rounded-full backdrop-blur-sm">
              {course.category?.name || "Uncategorized"}
            </span>
            {course.price !== undefined && (
              <span className="text-white font-bold px-3 py-1 bg-black/50 rounded-full backdrop-blur-sm">
                $
                {course.price.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
              </span>
            )}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {course.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {course.description}
          </p>
          <div className="space-y-4">
            {course.instructor && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {course.instructor.photo ? (
                    <div className="relative h-8 w-8 mr-2">
                      <Image
                        src={urlFor(course.instructor.photo).url() || ""}
                        alt={course.instructor.name || "Instructor"}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-8 w-8 mr-2 rounded-full bg-muted flex items-center justify-center">
                      <Loader size="sm" />
                    </div>
                  )}
                  <span className="text-sm text-muted-foreground">
                    by {course.instructor.name}
                  </span>
                </div>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </div>
            )}
            {showProgress && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Course Progress</span>
                  <span>{course.progress || 0}%</span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${course.progress || 0}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
