import { defineQuery } from "groq";
import { sanityFetch } from "../live";

export async function getEnrolledCourses(clerkId: string) {
  const getEnrolledCoursesQuery =
    defineQuery(`*[_type == "student" && clerkId == $clerkId][0] {
    "enrolledCourses": *[_type == "enrollment" && student._ref == ^._id] {
      _id,
      enrolledAt,
      "course": course-> {
        _id,
        title,
        description,
        "slug": slug.current,
        image,
        "category": category->{
          name
        },
        "instructor": instructor->{
          name,
          photo
        },
        "progress": count(*[_type == "lessonProgress" && student._ref == ^.student._ref && lesson._ref in *[_type == "lesson" && references(^.course._ref)]._id])
      }
    }
  }`);

  const result = await sanityFetch({
    query: getEnrolledCoursesQuery,
    params: { clerkId },
  });

  return result?.data?.enrolledCourses || [];
}
