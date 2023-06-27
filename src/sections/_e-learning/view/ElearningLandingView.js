// _mock
import {
  _courses,
  _members,
  _blogCoursePosts,
  _brandsColor,
  _testimonials,
  _coursesByCategories,
} from 'src/_mock';
//
import TeamElearning from '../../team/e-learning';
import NewsletterElearning from '../../newsletter/e-learning';
import OurClientsCareer from '../../our-clients/career';
import { BlogElearningLatestPosts } from '../../blog/e-learning';
import TestimonialElearning from '../../testimonial/e-learning';
import {
  ElearningLandingHero,
  ElearningLandingIntroduce,
  ElearningLandingCategories,
  ElearningLandingFeaturedCourses,
} from '../landing';

// ----------------------------------------------------------------------

export default function ElearningLandingView() {
  return (
    <>
      <ElearningLandingHero />

      <OurClientsCareer brands={_brandsColor} />

      <ElearningLandingIntroduce />

      <ElearningLandingFeaturedCourses courses={_courses} />

      <ElearningLandingCategories categories={_coursesByCategories} />

      <TeamElearning members={_members.slice(0, 4)} />

      <TestimonialElearning testimonials={_testimonials} />

      <BlogElearningLatestPosts posts={_blogCoursePosts.slice(0, 4)} />

      <NewsletterElearning />
    </>
  );
}
