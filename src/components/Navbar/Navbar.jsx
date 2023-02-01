import * as React from 'react';
import { IsMobile } from '../DeviceDetect';


// Navbar links
const studyMaterials = [
  { href: '/the-values-and-principles-of-the-uk', label: 'Chapter 1: The Values and Principles of the UK' },
  { href: '/what-is-the-uk', label: 'Chapter 2: What is the UK?' },
  { href: '/a-long-and-illustrious-history', label: 'Chapter 3: A Long and Illustrious History' },
  { href: '/a-modern-thriving-society', label: 'Chapter 4: A Modern, Thriving Society' },
  { href: '/the-uk-government-the-law-and-your-role', label: 'Chapter 5: The UK Government, the Law and Your Role' },
];

// Tests Links - test
const testGroups = [
  { href: "", label: ['TESTS', 1, 'TO', 13].join(' ') },
  { href: "", label: ['TESTS', 14, 'TO', 26].join(' ') },
  { href: "", label: ['TESTS', 27, 'TO', 40].join(' ') },
  { href: "", label: "CHAPTERS 1-2" },
  { href: "", label: "CHAPTER 3" },
  { href: "", label: "CHAPTER 4" },
  { href: "", label: "CHAPTER 5" },
]


const tests = [];
[{ start: 1, end: 13 }, { start: 14, end: 26 }, { start: 27, end: 40 }].forEach(item => {
  let sublinks = [];
  for (let index = item.start; index <= item.end; index++) {
    sublinks.push({
      href: "/test/" + index,
      label: "Test " + index
    })
  }
  tests.push(sublinks)
})

// Tests Links - chapters
tests.push([
  { href: "/test12", label: "Test 1.2" }])
tests.push([
  { href: "/test3/1", label: "Test 3.1" },
  { href: "/test3/2", label: "Test 3.2" },
  { href: "/test3/3", label: "Test 3.3" },
  { href: "/test3/4", label: "Test 3.4" },
  { href: "/test3/5", label: "Test 3.5" },
  { href: "/test3/6", label: "Test 3.6" },
  { href: "/test3/7", label: "Test 3.7" },
  { href: "/test3/8", label: "Test 3.8" },
  { href: "/test3/9", label: "Test 3.9" },
  { href: "/test3/10", label: "Test 3.10" }
])
tests.push([
  { href: "/test4/1", label: "Test 4.1" },
  { href: "/test4/2", label: "Test 4.2" },
  { href: "/test4/3", label: "Test 4.3" },
  { href: "/test4/4", label: "Test 4.4" },
  { href: "/test4/5", label: "Test 4.5" },
  { href: "/test4/6", label: "Test 4.6" },
  { href: "/test4/7", label: "Test 4.7" },
  { href: "/test4/8", label: "Test 4.8" },
  { href: "/test4/9", label: "Test 4.9" },
  { href: "/test4/10", label: "Test 4.10" },
  { href: "/test4/11", label: "Test 4.11" },
  { href: "/test4/12", label: "Test 4.12" },
])
tests.push([
  { href: "/test5/1", label: "Test 5.1" },
  { href: "/test5/2", label: "Test 5.2" },
  { href: "/test5/3", label: "Test 5.3" },
  { href: "/test5/4", label: "Test 5.4" },
  { href: "/test5/5", label: "Test 5.5" },
  { href: "/test5/6", label: "Test 5.6" },
  { href: "/test5/7", label: "Test 5.7" },
  { href: "/test5/8", label: "Test 5.8" },
  { href: "/test5/9", label: "Test 5.9" },
  { href: "/test5/10", label: "Test 5.10" },
])

// Exam links
const examGroups = [
  {
    href: "", label: "EXAMS \n1 To 7"
  },
  {
    href: "", label: "EXAMS \n8 To 16"
  }]
const exams = [
  [
    { href: "/exam/1", label: "British Citizenship\nTest 1" },
    { href: "/exam/2", label: "British Citizenship\nTest 2" },
    { href: "/exam/3", label: "British Citizenship\nTest 3" },
    { href: "/exam/4", label: "British Citizenship\nTest 4" },
    { href: "/exam/5", label: "British Citizenship\nTest 5" },
    { href: "/exam/6", label: "British Citizenship\nTest 6" },
    { href: "/exam/7", label: "British Citizenship\nTest 7" },
  ],
  [
    { href: "/exam/8", label: "British Citizenship\nTest 8" },
    { href: "/exam/9", label: "British Citizenship\nTest 9" },
    { href: "/exam/10", label: "British Citizenship\nTest 10" },
    { href: "/exam/11", label: "British Citizenship\nTest 11" },
    { href: "/exam/12", label: "British Citizenship\nTest 12" },
    { href: "/exam/13", label: "British Citizenship\nTest 13" },
    { href: "/exam/14", label: "British Citizenship\nTest 14" },
    { href: "/exam/15", label: "British Citizenship\nTest 15" },
    { href: "/exam/16", label: "British Citizenship\nTest 16 New!" },
  ]
]

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
  const isMobile = IsMobile();

  React.useEffect(() => {
    if (isMobile) return;
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });


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
                    {testGroups.map((item, index) => (
                      <ul key={index} className='w-1/6 border-l border-gray-300 flex flex-col bg-ukwhite text-gray-600 '>
                        <li className='border-b border-gray-300 text-center hover:bg-white'>
                          <div className='block text-cyan-600 w-full py-5'>{item.label}</div>
                        </li>
                        {tests[index].map((item, index) => (
                          <li key={index} className='border-b border-gray-300 text-center hover:bg-white'>
                            <a className='block w-full py-1' href={item.href}>
                              <i className="fa fa-caret-right mr-2"></i>  {item.label}
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
                    {examGroups.map((item, index) => (
                      <li key={index} className='dropdown1'>
                        <div className='block text-cyan-600 w-32 xl:w-52 text-center hover:bg-white py-1 xl:py-3'>{item.label}</div>
                        <div className='relative'>
                          <ul className='w-36 xl:w-44 border-t-4 border-ukAzure flex flex-col bg-ukwhite text-base xl:text-lg text-gray-600 dropdown-content1'>
                            {exams[index].map((item, index) => (
                              <li key={index} className='border-b border-gray-300 bg-ukwhite px-1 xl:px-3 hover:bg-white'>
                                {item.href ?
                                  <a className='block w-full py-1' href={item.href}>
                                    <i className="fa fa-caret-right mr-2"></i>
                                    {item.label}
                                  </a>
                                  : <div className='block text-cyan-600 w-full py-5'>{item.label}</div>}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div style={{ clear: 'both' }}></div>
                </div>
              </Linkcomponent>

              {/* About Us */}
              <Linkcomponent title='About Us' link='/about-us'>
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
              {testGroups.map((item, index) => (
                <MobileLink key={index} title={item.label} link={item.href} className='pl-3'>
                  <ul className="flex flex-col text-sm w-full bg-ukwhite text-gray-600">
                    {tests[index].map((item, index) => (
                      <MobileLink key={index} title={item.label} link={item.href} className='pl-3' />
                    ))}
                  </ul>
                </MobileLink>
              ))}
            </ul>
          </MobileLink>
          <MobileLink title='EXAMS' link='/exams'>
            <ul className="flex flex-col text-sm w-full bg-ukwhite text-gray-600">
              {examGroups.map((item, index) => (
                <MobileLink key={index} title={item.label} link={item.href} className='pl-3'>
                  <ul className="flex flex-col text-sm w-full bg-ukwhite text-gray-600">
                    {exams[index].map((item, index) => (
                      <MobileLink key={index} title={item.label} link={item.href} className='pl-3' />
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
