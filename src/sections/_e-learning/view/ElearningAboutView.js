// _mock
import { _blogCoursePosts, _testimonials, _members, _brandsColor } from 'src/_mock';
//
import { TeamElearningAbout } from '../../team/e-learning';
import NewsletterElearning from '../../newsletter/e-learning';
import OurClientsCareer from '../../our-clients/career';
import { BlogElearningLatestPosts } from '../../blog/e-learning';
import TestimonialElearning from '../../testimonial/e-learning';
import { ElearningAbout, ElearningAboutHero, ElearningAboutCoreValues } from '../about';

// ----------------------------------------------------------------------

export default function ElearningAboutView() {
  return (
    <>
      <ElearningAboutHero />

      <ElearningAbout />

      <ElearningAboutCoreValues />

      <TeamElearningAbout members={_members} />

      <OurClientsCareer brands={_brandsColor} />

      <TestimonialElearning testimonials={_testimonials} />

      <BlogElearningLatestPosts posts={_blogCoursePosts.slice(0, 4)} />

      <NewsletterElearning />
    </>
  );
}
