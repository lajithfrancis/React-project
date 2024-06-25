import Card from './card';
import './styles.css';

export default function Cards() {
  const projects = [
    {
      title: 'ToDo',
      description:
        'A simple Todo List App built for everyone using React and Redux',
      route: '/tasks',
    },
    {
      title: 'MOViE',
      description:
        'A movies application with search functionality build for you!',
      route: '/movies',
    },
    {
      title: 'Kanban Board',
      description: 'Kanban board for visual treat',
      route: '/board',
    },
  ];
  return (
    <>
      <div className='container px-4 py-5' id='featured-3'>
        <h2 className='pb-2 border-bottom'>My Projects</h2>
        <div className='row g-4 py-5 row-cols-1 row-cols-lg-3'>
          {projects.map(({ title, description, route }) => (
            <Card title={title} paragraph={description} navigateTo={route} ha />
          ))}
          <div className='feature col movie-card'>
            <h3 className='fs-2 text-body-emphasis'>Coming soon!</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href='#' className='icon-link'>
              Call to action
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
