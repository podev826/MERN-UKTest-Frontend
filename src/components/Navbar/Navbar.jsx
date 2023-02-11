import * as React from 'react';
import { IsMobile } from '../DeviceDetect';
import { getChaptersWithTests } from '../../services/chapterService';

// Navbar links
const studyMaterials = [
  { href: '/the-values-and-principles-of-the-uk', label: 'Chapter 1: The Values and Principles of the UK' },
  { href: '/what-is-the-uk', label: 'Chapter 2: What is the UK?' },
  { href: '/a-long-and-illustrious-history', label: 'Chapter 3: A Long and Illustrious History' },
  { href: '/a-modern-thriving-society', label: 'Chapter 4: A Modern, Thriving Society' },
  { href: '/the-uk-government-the-law-and-your-role', label: 'Chapter 5: The UK Government, the Law and Your Role' },
];

const Linkcomponent = ({ title, link, children, relative=false }) => {
  let style = relative?"relative":"static";
  return (
    <li className="px-2 lg:mr-5 xl:mr-10 h-full my-auto dropdown" style={{position:style}}>
      <a href={link} className='h-full flex flex-col justify-center font-semibold font-primary text-base lg:text-lg xl:text-xl text-ukwhite hover:text-ukAzure border-t-4 border-transparent hover:border-ukAzure'>
        {title}
      </a>
      {children && <div className='dropdown-content w-fit'>
        {children}
      </div>}
    </li>
  );
}

const MobileLink = ({ title, link, children, className }) => {
  const [fold, setFold] = React.useState(true)
  return (
    <li className={className + " h-full my-auto text-lg dropdown border-b border-gray-300"} >
      {link ? <a href={link} className='flex justify-between px-5 h-full font-primary'>
        {title}
        {children && <i className={fold ? 'fa fa-angle-down cursor-pointer' : 'fa fa-angle-up cursor-pointer'} onClick={e => (e.preventDefault(), setFold(!fold))} />}
      </a> : <div className='flex justify-between px-5 h-full font-primary'>
        {title}
        {children && <i className={fold ? 'fa fa-angle-down cursor-pointer' : 'fa fa-angle-up cursor-pointer'} onClick={e => (e.preventDefault(), setFold(!fold))} />}
      </div>}
      {children && !fold && children}
    </li>
  );
};
export default function Header() {
  const [isExpanded, toggleExpansion] = React.useState(false);
  const [examRoutes, setExamRoutes] = React.useState([]);
  const [testRoutes, setTestRoutes] = React.useState([]);
  const isMobile = IsMobile();

  React.useEffect(() => {
    if (isMobile) return;
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  React.useEffect(() => {
    fetchOnLoad()
  }, [])

  const fetchOnLoad = async () => {
    let { data: links} = await getChaptersWithTests();
    setExamRoutes(links.filter(l => l.isExam));
    setTestRoutes(links.filter(l => !l.isExam));
  }

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const header = document.querySelector('#header');
    const scrollTop = window.scrollY;
    if (header)
      scrollTop >= 100 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };

  return (
    <header id="header">
      <div className="bg-ukred text-ukwhite">
        <div className="container mx-auto px-3 md:px-8 flex flex-wrap justify-between relative">
          {/* standard logo */}
          <div className='my-2 lg:my-3'>
            <a className="min-w-full" href="/">
              <img src="/images/logo.png" alt="Life in the UK Test Logo"
                className="fusion-standard-logo w-40 lg:w-60" />
            </a>
          </div>

          {/* Navbar for full screen */}
          <nav className="min-h-full max-md:hidden float-right">
            <ul className="flex h-full">
              {/* Home*/}
              <Linkcomponent title='Home' link='/'>
              </Linkcomponent>

              {/* Study Materials */}
              <Linkcomponent title='Study Materials' link='/StudyMaterials'>
                <div className='border-t-4 border-ukAzure w-600 lg:w-825'>
                  <ul className='flex flex-col bg-ukwhite text-base lg:text-lg text-gray-600 '>
                    {studyMaterials.map((item, index) => (
                      <li key={index} className='border-b border-gray-300 text-center hover:bg-white'><a className='block w-full py-3' href={item.href}>{item.label}</a></li>
                    ))}
                  </ul>
                  <div style={{ clear: 'both' }}></div>
                </div>
              </Linkcomponent>

              {/* Tests */}
              <Linkcomponent title='Tests' link='/tests'>
                <div className='max-w-full border-t-4 border-ukAzure w-600 lg:w-1024'>
                  <ul className='flex justify-between bg-ukwhite text-base lg:text-lg text-gray-600 '>
                    {testRoutes.map((item, index) => (
                      <ul key={index} className='w-1/5 border-l border-gray-300 flex flex-col bg-ukwhite text-gray-600 '>
                        <li className='border-b border-gray-300 text-center hover:bg-white'>
                          <div className='block text-cyan-600 w-full py-5'>{item.name??("Chapter " + item.number)}</div>
                        </li>
                        {item.tests.map((item, index) => (
                          <li key={index} className='border-b border-gray-300 text-center hover:bg-white'>
                            <a className='block w-full py-1' href={`/tests/${item._id}`}>
                              <i className="fa fa-caret-right mr-2"></i>  {"Test " + item.testNum}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </ul>
                  <div style={{ clear: 'both' }}></div>
                </div>
              </Linkcomponent>

              {/* EXAMS */}
              <Linkcomponent title='EXAMS' link='/exams' relative='true'>
                <div className='w-full border-t-4 border-ukAzure'>
                  <ul className='flex flex-col justify-between bg-ukwhite text-base xl:text-lg text-gray-600 '>
                    {examRoutes.map((item, index) => (
                      <li key={index} className='dropdown1'>
                        <div className='block text-cyan-600 w-32 xl:w-52 text-center hover:bg-white py-1 xl:py-3'>{item.name??("Exam " + item.number)}</div>
                        {item.tests.length!=0 && 
                        <div className='relative'>
                          <ul className='w-36 xl:w-44 border-t-4 border-ukAzure flex flex-col bg-ukwhite text-base xl:text-lg text-gray-600 dropdown-content1'>
                            {item.tests.map((item, index) => (
                              <li key={index} className='border-b border-gray-300 bg-ukwhite px-1 xl:px-3 hover:bg-white'>
                                  <a className='block w-full py-1' href={`exams/${item._id}`}>
                                    <i className="fa fa-caret-right mr-2"></i>
                                    {"British Citizenship\nTest " + item.testNum}
                                  </a>
                              </li>
                            ))}
                          </ul>
                        </div>}
                      </li>
                    ))}
                  </ul>
                  <div style={{ clear: 'both' }}></div>
                </div>
              </Linkcomponent>

              {/* About Us */}
              <Linkcomponent title='About Us' link='/aboutUs'>
              </Linkcomponent>

              {/* Contact Us */}
              <Linkcomponent title='Contact Us' link='/contactUs'>
              </Linkcomponent>
            </ul>
          </nav>

          {/* Toggle button */}
          <button className="hidden max-md:block float-right items-center  text-lightBlack rounded smd:hidden"
            onClick={() => (isMobile && toggleExpansion(!isExpanded))}>
            <i className='fa fa-bars'></i>
          </button>
        </div>
      </div>
      {/* Navbar for mobile */}
      <nav className={(isExpanded && isMobile) ? 'block' : 'hidden'}>
        <ul className="flex flex-col w-full bg-ukwhite text-gray-600">
          {/* Home*/}
          <MobileLink title='Home' link='/'>
          </MobileLink>
          <MobileLink title='Study Material' link='/'>
            <ul className="flex flex-col text-sm w-full bg-ukwhite text-gray-600">
              {studyMaterials.map((item, index) => (
                <MobileLink key={index} title={item.label} link={item.href} className='pl-3' />
              ))}
            </ul>
          </MobileLink>
          <MobileLink title='Tests' link='/tests'>
            <ul className="flex flex-col text-sm w-full bg-ukwhite text-gray-600">
              {testRoutes.map((item, index) => (
                <MobileLink key={index} title={item.name} link={`/tests/chapters/${item._id}`} className='pl-3'>
                  <ul className="flex flex-col text-sm w-full bg-ukwhite text-gray-600">
                    {item.tests.map((item, index) => (
                      <MobileLink key={index} title={`Test ${index + 1}`} link={`/tests/${item._id}`} className='pl-3' />
                    ))}
                  </ul>
                </MobileLink>
              ))}
            </ul>
          </MobileLink>
          <MobileLink title='EXAMS' link='/exams'>
            <ul className="flex flex-col text-sm w-full bg-ukwhite text-gray-600">
              {examRoutes.map((item, index) => (
                <MobileLink key={index} title={item.name} link="" className='pl-3'>
                  <ul className="flex flex-col text-sm w-full bg-ukwhite text-gray-600">
                    {item.tests.map((item, index) => (
                      <MobileLink key={index} title={`British Citizenship\nTest ${index + 1}`} link={`/exams/${item._id}`} className='pl-3' />
                    ))}

                  </ul>
                </MobileLink>
              ))}
            </ul>
          </MobileLink>
          <MobileLink title='About Us' link='/about-us'>
          </MobileLink>
          <MobileLink title='Contact Us' link='/contactUs'>
          </MobileLink>
        </ul>
      </nav>
      <div className="clear-both"></div>
    </header >
  );
}
