import React from "react";
import Donate from "../../components/Donate";
import CustomLink from "../../components/CustomLink";

const Chapter4 = () => {
  return (
    <div className="text-lg">
      <div className="bg-[#A8DADC] text-white p-2 lg:p-5">
        <h1 className="container text-2xl screen mx-auto px-5 font-bold">
          Chapter 4: A Modern, Thriving Society
        </h1>
      </div>
      <div className="container flex flex-col justify-between md:flex-row 
          mx-auto text-lg px-5">
        <div className="w-full md:w-3/4 mt-5">
          <div className="text-justify">
            <p>Chapter 4: A Modern, Thriving Society gives an overview of the UK as we know it today. It identifies the nations that comprise the United Kingdom and its most important cities. It goes through all the different ethical groups, religions, cultures, customs, festivals and traditions that coexist in the UK.</p>
            <p>The second part of this chapter introduces the most popular sports in the UK and its most successful sportsmen and women, including the achievements of the British team in the latest Olympic Games, which were held in the UK in 2012. This is followed by a section dedicated to personalities, works, events and important facts in the fields of music, theatre, art, architecture, fashion and design, literature and poetry.</p>
            <p>Lastly, Chapter 4 looks at how people spend their free time in the UK doing activities such as gardening, shopping or going to pubs and nightclubs. It also shows the typical traditional foods that are eaten in the different parts of the UK. Furthermore, an introduction to the British film industry and British comedy history is given. Other popular leisure activities are also described in this section including betting and gambling. Finally, Chapter 4 highlights the most famous UK landmarks and places of interest.</p>
            <h2>The UK today</h2>
            <p>The UK today is a more diverse society than it was 100 years ago, in both ethnic and religious terms. Post-war immigration means that nearly 10% of the population has a parent or grandparent born outside the UK. The UK continues to be a multinational and multiracial society with a rich and varied culture. This section will tell you about the different parts of the UK and some of the important places. It will also explain some of the UK’s traditions and customs and some of the popular activities that take place.</p>
            <h3>The nations of the UK</h3>
            <p>The UK is located in the north west of Europe. The longest distance on the mainland is from John O’Groats on the north coast of Scotland to Land’s End in the south-west corner of England. It is about 870 miles (approximately 1,400 kilometres).</p>
            <p>Most people live in towns and cities but much of Britain is still countryside. Many people continue to visit the countryside for holidays and for leisure activities such as walking, camping and fishing.</p>
            <h3>Cities of the UK</h3>
            <p><strong><span style={{textDecoration: "underline"}}>England</span></strong>: London, Birmingham, Liverpool, Leeds, Sheffield, Bristol, Manchester, Bradford, Newcastle upon Tyne, Plymouth, Southampton and Norwich</p>
            <p><strong><span style={{textDecoration: "underline"}}>Wales</span></strong>: Cardiff, Swansea and Newport</p>
            <p><strong><span style={{textDecoration: "underline"}}>Northern Ireland</span></strong>: Belfast</p>
            <p><strong><span style={{textDecoration: "underline"}}>Scotland</span></strong>: Edinburgh, Glasgow, Dundee and Aberdeen</p>
            <h4><b>Capital cities</b></h4>
            <ul>
              <li>The capital city of the <strong>UK</strong> is London</li>
              <li>The capital city of <strong>Scotland</strong> is Edinburgh</li>
              <li>The capital city of <strong>Wales</strong> is Cardiff</li>
              <li>The capital city of <strong>Northern Ireland</strong> is Belfast</li>
            </ul>
            <h3>UK currency</h3>
            <p>The currency in the UK is the pound sterling (symbol £). There are 100 pence in a pound. The denominations (values) of currency are:</p>
            <p>Coins: 1p, 2p, 5p, 10p, 20p, 50p, £1 and £2</p>
            <p>Notes: £5, £10, £20, £50.</p>
            <p>Northern Ireland and Scotland have their own banknotes, which are valid everywhere in the UK. However, shops and businesses do not have to accept them.</p>
            <h3>Languages and dialects</h3>
            <p>There are many variations in language in the different parts of the UK. The English language has many accents and dialects. In Wales, many people speak Welsh – a completely different language from English – and it is taught in schools and universities. In Scotland, Gaelic (again, a different language) is spoken in some parts of the Highlands and Islands, and in Northern Ireland some people speak Irish Gaelic.</p>
            <h3>Population</h3>
            <p>The table below shows how the population of the UK has changed over time.</p>
            <p><span style={{textDecoration: "underline"}}>Population growth in the UK</span></p>
            <p style={{textAlign: "justify",paddingLeft: 30}}><strong>Year &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Population</strong></p>
            <p style={{paddingLeft:30}}>1600 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Just over 4 million</p>
            <p style={{paddingLeft:30}}>1700 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;5 million</p>
            <p style={{paddingLeft:30}}>1801 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;8 million</p>
            <p style={{paddingLeft:30}}>1851 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;20 million</p>
            <p style={{paddingLeft:30}}>1901 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 40 million</p>
            <p style={{paddingLeft:30}}>1951 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 50 million</p>
            <p style={{paddingLeft:30}}>1998 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;57 million</p>
            <p style={{paddingLeft:30}}>2005 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Just under 60 million</p>
            <p style={{paddingLeft:30}}>2010 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Just over 62 million</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2017 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Just over 66 million</p>
            <p style={{paddingLeft:30}}>Source: National Statistics</p>
            <p>Population growth has been faster in more recent years. Migration into the UK and longer life expectancy have played a part in population growth.</p>
            <p>The population is very unequally distributed over the four parts of the UK. England more or less consistently makes up 84% of the total population, Wales around 5%, Scotland just over 8%, and Northern Ireland less than 3%.</p>
            <h4><b>An ageing population</b></h4>
            <p>People in the UK are living longer than ever before. This is due to improved living standards and better health care. There are now a record number of people aged 85 and over. This has an impact on the cost of pensions and health care.</p>
            <h3>Ethnic diversity</h3>
            <p>The UK population is ethnically diverse and changing rapidly, especially in large cities such as London. It is not always easy to get an exact picture of the ethnic origin of all the population.</p>
            <p>There are people in the UK with ethnic origins from all over the world. In surveys, the most common ethnic description chosen is white, which includes people of European, Australian, Canadian, New Zealand and American descent. Other significant groups are those of Asian, black and mixed descent.</p>
            <h3>An equal society</h3>
            <p>Within the UK, it is a legal requirement that men and women should not be discriminated against because of their gender or because the are, or are not, married. They have equal rights to work, own property, marry and divorce. If they are married, both parents are equally responsible for their children.</p>
            <p>Women in Britain today make up about half of the workforce. On average, girls leave school with better qualifications than boys. More women than men study at university.</p>
            <p>Employment opportunities for women are much greater than they were in the past. Women work in all sectors of the economy, and there are now more women in high-level positions than ever before, including senior mangers in traditionally male-dominated occupations. Alongside this, men now work in more varied jobs than they did in the past.</p>
            <p>It is no longer expected that women should stay at home and not work. Women often continue to work after having children. In many families today, both partners work and both share responsibility for childcare and household chores.</p>
            <h5>Check that you understand</h5>
            <p>• The capital cites of the UK</p>
            <p>• What languages other than English are spoken in particular parts of the UK</p>
            <p>• How the population of the UK has changed</p>
            <p>• That the UK is and equal society and ethnically diversity</p>
            <p>• The currency of the UK</p>
            <h2>Religion</h2>
            <p>The UK is historically a Christian country. In the 2011 Census, 59% of people identified themselves as Christian. Much smaller proportions identified themselves as Muslim (4.8%), Hindu (1.5%), Sikh (0.8%) and Jewish or Buddhist (both less than 0.5%). There are religious buildings for other religions all over the UK. This includes Islamic mosques, Hindu temples, Jewish synagogues, Sikh gurdwaras and Buddhist temples. However, everyone has the legal right to choose their religion, or to choose not to practise a religion. In the 2011 census, 25% of people said that they had no religion.</p>
            <h3>Christian churches</h3>
            <p>In England, there is a constitutional link between Church and state. The official Church of the state is the Church of England (called the Anglican Church in other countries and the Episcopal Church in Scotland and the United States). It is a Protestant Church and has existed since the Reformation in the 1530s.</p>
            <p>The monarch is the head of the Church of England. The spiritual leader of the Church of England is the Archbishop of Canterbury. The monarch has the right to select the Archbishop and other senior church officials, but usually the choice is made by the Prime Minister and a committee appointed by the Church. Several Church of England bishops sit in the House of Lords.</p>
            <p>In Scotland, the national Church is the Church of Scotland, which is a Presbyterian Church. It is governed by ministers and elders. The chairperson of the General Assembly of the Church of Scotland is the&nbsp; Moderator, who is appointed for one year only and often speaks on behalf of&nbsp;that Church.</p>
            <p>There is no established Church in Wales or Northern Ireland.</p>
            <p>Other Protestant Christian groups in the UK are Baptists, Methodists, Presbyterians and Quakers. There are also other denominations of Christianity, the biggest of which is Roman Catholic.</p>
            <h3>Patron saints’ days</h3>
            <p>England, Scotland, Wales and Northern Ireland each have a national saint, called a patron saint. Each saint has a special day:</p>
            <p>• 1 March: St David’s Day, Wales</p>
            <p>• 17 March: St Patrick’s Day, Northern Ireland</p>
            <p>• 23 April: St George’s Day, England</p>
            <p>• 30 November: St Andrew’s Day, Scotland</p>
            <p>Only Scotland and Northern Ireland have their patron saint’s day as an official holiday (although in Scotland not all businesses and offices will close). Events are held across Scotland, Northern Ireland and the rest of the country, especially where there are a lot of people of Scottish, Northern Irish and Irish heritage.</p>
            <p>While the patron saints’ days are no longer public holidays in England and Wales, they are still celebrated. Parades and small festivals are held all over the two countries.</p>
            <h5>Check that you understand</h5>
            <p>• The different religions that are practised in the UK</p>
            <p>• That the Anglican Church, also known as the Church of England, is the&nbsp;Church of the state in England (the ‘established Church’)</p>
            <p>• That other branches of the Christian Church also practise their faith in the&nbsp;UK without being linked to the state</p>
            <p>• That other religions are practised in the UK</p>
            <p>• About the patron saints</p>
            <h2>Customs and traditions</h2>
            <h3>The main Christian festivals</h3>
            <p><b>Christmas Day</b>, 25 December, celebrates the birth of Jesus Christ. It is a public holiday. Many Christians go to church on Christmas Eve (24 December) or on Christmas Day itself.</p>
            <p>Christmas is celebrated in a traditional way. People usually spend the day at home and eat a special meal, which often includes roast turkey, Christmas pudding and mince pies. They give gifts, send cards and decorate their houses. Christmas is a special time for children. Very young children believe that Father Christmas (also known as Santa Claus) brings them presents during the night before Christmas Day. Many people decorate a tree in their home.</p>
            <p><b>Boxing Day</b> is the day after Christmas Day and is a public holiday.</p>
            <p><b>Easter</b> takes place in March or April. It marks the death of Jesus Christ on Good Friday and his rising from the dead on Easter Sunday. Both Good Friday and the following Monday, called Easter Monday, are public holidays.</p>
            <p>The 40 days before Easter are known as Lent. It is a time when Christians take time to reflect and&nbsp; prepare for Easter. Traditionally, people would fast during this period and today many people will give something up, like a favourite food. The day before Lent starts is called Shrove Tuesday, or Pancake Day. People eat pancakes, which were traditionally made to use up foods such as eggs, fat and milk before fasting. Lent begins on Ash Wednesday. There are church services where Christians are marked with an ash cross on their forehead as a symbol of death and sorrow for sin.</p>
            <p>Easter is also celebrated by people who are not religious. ‘Easter eggs’ are chocolate eggs often given as presents at Easter as a symbol of new life.</p>
            <h3>Other religious festivals</h3>
            <p><b>Diwali</b> normally falls in October or November and lasts for five days. It is often called the Festival of Lights. It is celebrated by Hindus and Sikhs. It celebrates the victory of good over evil and the gaining of knowledge. There are different stories about how the festival came about. There is a famous celebration of Diwali in Leicester. Diwali is popularly known as the Festival of Lights.</p>
            <p><b>Hannukah</b> is in November or December and is celebrated for eight days. It is to remember the Jews’ struggle for religious freedom. On each day of the festival a candle is lit on a stand of eight candles (called a menorah) to remember the story of the festival, where oil that should have lasted only a day did so for eight.</p>
            <p><b>Eid al-Fitr</b> celebrates the end of Ramadan, when Muslims have fasted for a month. They thank Allah for giving them the strength to complete the fast. The date when it takes place changes every year. Muslims attend special services and meals.</p>
            <p><b>Eid ul Adha</b> remembers that the prophet Ibrahim was willing to sacrifice his son when God ordered him to. It reminds Muslims of their own commitment to God. Many Muslims sacrifice an animal to eat during this festival. In Britain this has to be done in a slaughterhouse.</p>
            <p><b>Vaisakhi</b> (also spelled Baisakhi) is a Sikh festival which celebrates the founding of the Sikh community known as the Khalsa. It is celebrated on 14 April each year with parades, dancing and singing.</p>
            <h3>Other festivals and traditions</h3>
            <p><b>New Year</b>, 1 January, is a public holiday. People usually celebrate on the night of 31 December (called New Year’s Eve). In Scotland, 31 December is called Hogmanay and 2 January is also a public holiday. For some Scottish people, Hogmanay is a bigger holiday than Christmas.</p>
            <p><b>Valentine’s Day</b>, 14 February, is when lovers exchange cards and gifts. Sometimes people send anonymous cards to someone they secretly admire.</p>
            <p><b>April Fool’s Day</b>, 1 April, is a day when people play jokes on each other until midday. The television and newspapers often have stories that are April Fool jokes.</p>
            <p><b>Mothering Sunday</b> (or Mother’s day) is the Sunday three weeks before Easter. Children send cards or buy gifts for their mothers.</p>
            <p><b>Father’s Day</b> is the third Sunday in June. Children send cards or buy gifts for their fathers.</p>
            <p><b>Halloween</b>, 31 October, is an ancient festival and has roots in the pagan festival to mark the beginning of winter. Young people will often dress up in frightening costumes to play ‘trick or treat’. People give them treats for not them playing tricks on them. A lot of people carve lanterns out of pumpkins and put a candle inside.</p>
            <p><b>Bonfire Night</b>, 5 November, is an occasion when people in Great Britain set off fireworks at home or in special displays. The origin of this celebration was an event in 1605, when a group of Catholics led by Guy Fawkes failed in their plan to kill the Protestant king with a bomb in the Houses of Parliament.</p>
            <p><b>Remembrance Day</b>, 11 November, commemorates those who died fighting for the UK and its allies. Originally it commemorated the dead of the First World War, which ended on 11 November 1918. People wear poppies (the red flower found on the battlefields of the First World War). At 11.00 am there is a two-minute silence and wreaths are laid at the Cenotaph in Whitehall, London.</p>
            <h3>Bank holidays</h3>
            <p>As well as those mentioned previously, there are other public holidays each year called bank holidays, when banks and many other businesses are closed for the day. These are of no religious significance. They are at the beginning of May in late May or early June, and in August. In Northern Ireland, the anniversary of the Battle of the Boyne in July is also a public holiday.</p>
            <h5>Check that you understand</h5>
            <p>• The main Christian festivals that are celebrated in the UK</p>
            <p>• Other religious festivals that are important in the UK</p>
            <p>• Some of the other events that are celebrated in the UK</p>
            <p>• What a bank holiday is</p>
            <h2>Sport</h2>
            <p>Sports of all kinds play an important part in many people’s lives. There are several sports that are particularly popular in the UK. Many sporting events take place at major stadiums such as Wembley Stadium in London and the Principality Stadium in Cardiff.</p>
            <p>Local governments and private companies provide sports facilities such as swimming pools, tennis courts, football pitches, dry ski slopes and gymnasiums. Many famous sports, including cricket, football, lawn tennis, golf and rugby, began in Britain.</p>
            <p>The UK has hosted the Olympic games on three occasions: 1908, 1948 and 2012. The main Olympic site for the 2012 Games was in Stratford, East London. The British team was very successful, across a wide range of Olympic sports, finishing third in the medal table.</p>
            <p>The Paralympic Games for 2012 were also hosted in London. The Paralympics have their origin in the work of Dr Sir Ludwig Guttman, a German refugee, at the Stoke Mandeville hospital in Buckinghamshire. Dr Guttman developed new methods of treatment for people with spinal injuries and encouraged patients to take part in exercise and sport.</p>
            <h4><b>Notable British sportsmen and women</b></h4>
            <ul>
              <li><b>Sir Roger Bannister (1929-2018)</b> was the first man in the world to run a mile in under four minutes, in 1954.</li>
            </ul>
            <ul>
              <li><b>Sir Jackie Stewart (1939-)</b> is a Scottish former racing driver who won the Formula 1 world championship three times.</li>
            </ul>
            <ul>
              <li><b>Bobby Moore (1941-93)</b> captained the English football team that won the World Cup in 1966.</li>
            </ul>
            <ul>
              <li><b>Sir Ian Botham (1955-)</b> captained the English cricket team and held a number of English Test cricket records, both for batting and for bowling.</li>
            </ul>
            <ul>
              <li><b>Jayne Torvill (1957-) and Christopher Dean (1958-)</b> won gold medals for ice dancing at the Olympic Games in 1984 and in four consecutive world championships.</li>
            </ul>
            <ul>
              <li><b>Sir Steve Redgrave (1962-)</b> won gold medals in rowing in five consecutive Olympic Games and is one of Britain’s greatest Olympians.</li>
            </ul>
            <ul>
              <li><b>Baroness Tanni Grey-Thompson (1969-)</b> is an athlete who uses a wheelchair and won 16 Paralympic medals, including 11 gold medals, in races over five Paralympic Games. She won the London Marathon six times and broke a total of 30 world records.</li>
            </ul>
            <ul>
              <li><b>Dame Kelly Holmes (1970-)</b> won two gold medals for running in the 2004 Olympic Games. She has held a number of British and European records.</li>
            </ul>
            <ul>
              <li><b>Dame Ellen MacArthur (1976-)</b> is a yachtswoman and in 2004 became the fastest person to sail around the world single-handed.</li>
            </ul>
            <ul>
              <li><b>Sir Chris Hoy (1976-) </b>is a Scottish cyclist who has won six gold and one silver Olympic medals. He has also won 11 world championship titles.</li>
            </ul>
            <ul>
              <li><b>David Weir (1979-)</b> is a Paralympian who uses a wheelchair and has won six gold medals over two Paralympic Games. He has also won the London Marathon six times.</li>
            </ul>
            <ul>
              <li><b>Sir Bradley Wiggins (1980-) </b>is a cyclist. In 2012, he became the first Briton to win the Tour de France. He has won eight Olympic Medals, including gold medals in the 2004, 2008, 2012 and 2016 Olympic Games.</li>
            </ul>
            <ul>
              <li><b>Sir Mo Farah (1983-) </b>is a British distance runner, born in Somalia. He won gold medals in the 2012 and 2016 Olympics for the 5,000 and 10,000 metres and is the first Briton to win the Olympic gold medal in the 10,000 metres.</li>
            </ul>
            <ul>
              <li><b>Dame Jessica Ennis-Hills (1986-)</b> is an athlete. She won the 2012 Olympic gold medal in the heptathlon and silver medal in the 2016 Olympic Games, which includes seven different track and field events. She also holds a number of British athletics records.</li>
            </ul>
            <ul>
              <li><b>Sir Andy Murray (1987-)</b> is a Scottish tennis player who in 2012 won the men’s singles in the US Open. He is the first British man to win a singles title in a Grand Slam tournament since 1936. In the same year, he won Olympic gold and silver medals. In 2013 and 2016 he won the men’s singles at Wimbledon. He also went on to win Gold at the 2016 Olympics.</li>
            </ul>
            <ul>
              <li><b>Ellie Simmonds (1994-)</b> is a Paralympian who won gold medals for swimming at the 2008, 2012 and 2016 Paralympic Games and holds a number of world records. She was the youngest member of the British team at the 2008 Games.</li>
            </ul>
            <h3>Cricket</h3>
            <p>Cricket originated in England and is now played in many countries. Games can last up to five days but still result in a draw! The idiosyncratic nature of the game and its complex laws are said to reflect the best of the British character and sense of fair play. You may come across expressions such as ‘rain stopped play’, ‘batting on a sticky wicket’, ‘playing a straight bat’, ‘bowled a googly’ or ‘it’s just not cricket’, which have passed into everyday usage. The most famous competition is the Ashes, which is a series of Test matches played between England and Australia.</p>
            <h3>Football</h3>
            <p>Football is the UK’s most popular sport. It has a long history in the UK and the first professional football clubs were formed in the late 19th century.</p>
            <p>England, Scotland, Wales and Northern Ireland each have separate leagues in which clubs representing different towns and cities compete. The English Premier League attracts a huge international audience. Many of the best players in the world play in the Premier League. Many UK teams also compete in competitions such as the UEFA (Union of European Football Associations) Champions League, against other teams from Europe. Many towns and cities have a professional club and people take great pride in supporting their home team. There can be great pride in supporting their home team. There can be great rivalry between different football clubs and among fans.</p>
            <p>Each country in the UK also has its own national team that competes with other national teams across the world in tournaments such as the FIFA (Fédération Internationale de Football Association) World Cup and UEFA European Football Championships. England’s only international tournament victory was at the World Cup of 1966, hosted in the UK.</p>
            <p>Football is also a popular sport to play in many local communities, with people playing amateur games every week in parks all over the UK.</p>
            <h3>Rugby</h3>
            <p>Rugby originated in England in the early 19th century and is very popular in the UK today. There are two different types of rugby, which have different rules: union and league. Both have separate leagues and national teams in England, Wales, Scotland and Northern Ireland (who play with the Irish Republic). Teams from all countries compete in a range of competitions. The most famous rugby union competition is the Six Nations Championship between England, Ireland, Scotland, Wales, France and Italy. The Super League is the most well-known rugby league (club) competition.</p>
            <h3>Horse racing</h3>
            <p>There is a very long history of horse racing in Britain, with evidence of events taking place as far back as Roman times. The sport has a long association with royalty. There are racecourses all over the UK. Famous horse-racing events include: Royal Ascot, a five-day race meeting in Berkshire attended by members of the Royal Family; the Grand National at Aintree near Liverpool; and the Scottish Grand National at Ayr. There is a National Horseracing Museum in Newmarket, Suffolk.</p>
            <h3>Golf</h3>
            <p>The modern game of golf can be traced back to 15th century Scotland. It is a popular sport played socially as well as professionally. There are public and private golf courses all over the UK. St Andrews in Scotland is known as the home of golf. The Open Championship is the only ‘Major’ tournament held outside the United States. It is hosted by a different golf course every year.</p>
            <h3>Tennis</h3>
            <p>Modern tennis evolved in England in the late 19th century. The first tennis club was founded in Leamington Spa in 1872. The most famous tournament hosted in Britain is The Wimbledon Championships, which takes place each year at the All England Lawn Tennis and Croquet Club. It is the oldest tennis tournament in the world and the only ‘Grand Slam’ event played on&nbsp;grass.</p>
            <h3>Water sports</h3>
            <p>Sailing continues to be popular in the UK, reflecting our maritime heritage. A British sailor, Sir Francis Chichester, was the first person to sail singlehanded around the world passing the Cape of Good Hope (Africa) and Cape Horn (South America), in 1966/67. Two years later, Sir Robin Knox-Johnston became the first person to do this without stopping. Many sailing events are held throughout the UK, the most famous of which is at Cowes on&nbsp;the Isle of Wight.</p>
            <p>Rowing is also popular, both as a leisure activity and as a competitive sport. There is a popular yearly race on the Thames between Oxford and Cambridge Universities.</p>
            <h3>Motor sports</h3>
            <p>There is a long history of motor sport in the UK, for both cars and motor cycles. Motor-car racing in the UK started in 1902. The UK continues to be a world leader in the development and manufacture of motor-sport technology. A Formula 1 Grand Prix event is held in the UK each year and a number of British Grand Prix drivers have won the Formula 1 World Championship. Recent British winners include Damon Hill, Lewis Hamilton and Jenson Button.</p>
            <h3>Skiing</h3>
            <p>Skiing is increasingly popular in the UK. Many people go abroad to ski and there are also dry ski slopes throughout the UK. Skiing on snow may also be possible during the winter. There are five ski centres in Scotland, as well as Europe’s longest dry ski slope near Edinburgh.</p>
            <h2>Arts and culture</h2>
            <h3>Music</h3>
            <p>Music is an important part of British culture, with a rich and varied heritage. It ranges from classical music to modern pop. There are many different venues and musical events that take place across the UK.</p>
            <p>The Proms is an eight-week summer season of orchestral classical music that takes place in various venues, including the Royal Albert Hall in London. It has been in various venues, including the Royal Albert Hall in London. It has been organised by the British Broadcasting Corporation (BBC) since 1927. The Last Night of the Proms is the most well-known concert and (along with others in the series) is broadcast on television.</p>
            <p>Classical music has been popular in the UK for centuries. <b>Henry Purcell (1659-95) </b>was the organist at Westminster Abbey. He wrote church music, operas and other pieces, and developed a British style distinct from that elsewhere in Europe. He continues to be influential on British composers.</p>
            <p>The German-born composer <b>George Frederick Handel (1695-1759)</b> spent many years in the UK and became a British citizen in 1727. He wrote the <em>Water Music</em> for King George I and <em>Music for the Royal Fireworks</em> for his son, George II. Both these pieces continue to be very popular. Handel also wrote an oratorio, <em>Messiah</em>, which is sung regularly by choirs, often at Easter time.</p>
            <p>More recently, important composers include <b>Gustav Holst (1874-1934)</b>, whose work includes <em>The Planets</em>, a suite of pieces themed around the planets and the solar system. He adapted <em>Jupiter</em>, part of the <em>Planets</em> suite, as the tune for <em>I vow to thee my country</em>, a popular hymn in British churches.</p>
            <p><b>Sir Edward Elgar (1857-1934)</b> was born in Worcester, England. His best known work is probably the <em>Pomp and Circumstance Marches</em>. <em>March No1 (Land of Hope and Glory)</em> is usually played at the Last Night of the Proms at the Royal Albert Hall.</p>
            <p><b>Ralph Vaughan Williams (1872-1958) </b>wrote music for orchestras and choirs. He was strongly influenced by traditional English folk music.</p>
            <p><b>Sir William Walton (1902-83)</b> wrote a wide range of music, from film scores to opera. He wrote marches for the coronations of King George VI and Queen Elizabeth II but his best-known works are probably <em>Façade</em>, which became a ballet, and <em>Belshazzar’s Feast</em>, which is intended to be sung by a large choir.</p>
            <p><b>Benjamin Britten (1913-76)</b> is best known for his operas, which include <em>Peter Grimes</em> and <em>Billy Budd</em>. He also wrote <em>A Young Person’s Guide to the Orchestra</em>, which is based on a piece of music by Purcell and introduces the listener to the various different sections of an orchestra. He founded the Aldeburgh festival in Suffolk, which continues to be a popular music event of international importance.</p>
            <p>Other types of popular music, including folk music, jazz, pop and rock music, have flourished in Britain since the 20th century. Britain has had an impact on popular music around the world, due to the wide use of the English language, the UK’s cultural links with many countries, and British capacity for invention and innovation.</p>
            <p>Since the 1960s, British pop music has made one of the most important cultural contributions to life in the UK. Bands including The Beatles and The Rolling Stones continue to have an influence on music both here and abroad. British pop music has continued to innovate – for example, the Punk movement of the late 1970s, and the trend towards boy and girl bands in the 1990s.</p>
            <p>There are many large venues that host music events throughout the year, such as: Wembley Stadium; The O2 in Greenwich, south-east London; and The SEC Centre in Glasgow.</p>
            <p>Festival season takes place across the UK every summer, with major events in various locations. Famous festivals include Glastonbury, the Isle of Wight Festival and Creamfields. Many bands and solo artists, both well-known and up-and-coming, perform at these events.</p>
            <p>The National Eisteddfod of Wales is an annual cultural festival which includes music, dance, art and original performances largely in Welsh. It includes a number of important competitions for Welsh poetry.</p>
            <p>The Mercury Music Prize is awarded each September for the best album from the UK and Ireland. The Brit Awards is an annual event that gives awards in a range of categories, such as best British group and best British solo artist.</p>
            <h3>Theatre</h3>
            <p>There are theatres in most towns and cities throughout the UK, ranging from the large to the small. They are an important part of local communities and often show both professional and amateur productions. London’s West End, also known as ‘Theatreland’, is particularly well known. <em>The Mousetrap</em>, a murder-mystery play by Dame Agatha Christie, has been running in the West End since 1952 and has had the longest initial run of any show in history.</p>
            <p>There is also a strong tradition of musical theatre in the UK. In the 19th century, Gilbert and Sullivan wrote comic operas, often making fun of popular culture and politics. These operas include <em>HMS Pinafore</em>, <em>The Pirates of Penzance</em> and <em>The Mikado</em>. Gilbert and Sullivan’s work is still often staged by professional and amateur groups. More recently, Andrew Lloyd Webber has written the music for shows which have been popular throughout the world, including, in collaboration with Tim Rice,<em> Jesus Christ Superstar</em> and <em>Evita</em>, and also <em>Cats</em> and <em>The Phantom of the Opera</em>.</p>
            <p>One British tradition is the pantomime. Many theatres produce a pantomime at Christmas time. They are based on fairy stories and are light-hearted plays with music and comedy, enjoyed by family audiences. One of the traditional characters is the Dame, a woman played by a man. There is often also a pantomime horse or cow played by two actors in the same costume.</p>
            <p>The Edinburgh Festival takes place in Edinburgh, Scotland, every summer. It is a series of different arts and cultural festivals, with the biggest and most well-known being the Edinburgh Festival Fringe (‘the Fringe’). The Fringe is a showcase of mainly theatre and comedy performances. It often shows experimental work.</p>
            <p>The Laurence Olivier Awards take place annually at different venues in London. There are a variety of categories, including best director, best actor and best actress. The awards are named after the British actor Sir Laurence Olivier, late Lord Olivier, who was best known for his roles in various Shakespeare plays.</p>
            <h3>Art</h3>
            <p>During the Middle Ages, most art had a religious theme, particularly wall paintings in churches and illustrations in religious books. Much of this was lost after the Protestant Reformation but wealthy families began to collect other paintings and sculptures. Many of the painters working in Britain in the 16th and 17th centuries were from abroad – for example, Hans Holbein and Sir Anthony Van Dyck. British artists, particularly those painting portraits and landscapes, became well known from the 18th century onwards.</p>
            <p>Works by British and international artists are displayed in galleries across the UK. Some of the most well-known galleries are The National Gallery, Tate Britain and Tate Modern in London, the National Museum in Cardiff, and the Scottish National Gallery in Edinburgh.</p>
            <h4><b>Notable British artists</b></h4>
            <ul>
              <li><b>Thomas Gainsborough (1727-88)</b> was a portrait painter who often painted people in country or garden scenery.</li>
            </ul>
            <ul>
              <li><b>David Allan (1744-96)</b> was a Scottish painter who was best known for painting portraits. One of his most famous works is called <em>The Origin of Painting</em>.</li>
            </ul>
            <ul>
              <li><b>Joseph Turner (1775-1851)</b> was an influential landscape painter in a modern style. He is considered the artist who raised the profile of landscape painting.</li>
            </ul>
            <ul>
              <li><b>John Constable (1776-1837)</b> was a landscape painter most famous for his works of Dedham Vale on the Suffolk-Essex border in the east of England.</li>
            </ul>
            <ul>
              <li><b>The Pre-Raphaelites</b> were an important group of artists in the second half of the 19th century. They painted detailed pictures on religious or literary themes in bright colours. The group included Holman Hunt, Dante Gabriel Rossetti and Sir John Millais.</li>
            </ul>
            <ul>
              <li><b>Sir John Lavery (1856-1941)</b> was a very successful Northern Irish portrait painter. His work included painting the Royal Family.</li>
            </ul>
            <ul>
              <li><b>Henry Moore (1898-1986) </b>was an English sculptor and artist. He is best known for his large bronze abstract sculptures.</li>
            </ul>
            <ul>
              <li><b>John Petts (1914-91)</b> was a Welsh artist, best known for his engravings and stained glass.</li>
            </ul>
            <ul>
              <li><b>Lucian Freud (1922-2011) </b>was a German-born British artist. He is best known for his portraits.</li>
            </ul>
            <ul>
              <li><b>David Hockney (1937-) </b>was an important contributor to the ‘pop art’ movement of the 1960s and continues to be influential today.</li>
            </ul>
            <p>The Turner Prize was established in 1984 and celebrates contemporary art. It was named after Joseph Turner. Four works are shortlisted every year and shown at Tate Britain before the winner is announced. The Turner Prize is recognised as one of the most prestigious visual art awards in Europe. Previous winners include Damien Hirst and Richard Wright.</p>
            <h3>Architecture</h3>
            <p>The architectural heritage of the UK is rich and varied. In the Middle Ages, great cathedrals and churches were built, many of which still stand today. Examples are the cathedrals in Durham, Lincoln, Canterbury and Salisbury. The White Tower in the Tower of London is an example of a Norman castle keep, built on the orders of William the Conqueror.</p>
            <p>Gradually, as the countryside became more peaceful and landowners became richer, the houses of the wealthy became more elaborate and great country houses such as Hardwick Hall in Derbyshire were built. British styles of architecture began to evolve.</p>
            <p>In the 17th century, Inigo Jones took inspiration from classical architecture to design the Queen’s House at Greenwich and the Banqueting House in Whitehall in London. Later in the century, Sir Christopher Wren helped develop a British version of the ornate styles popular in Europe in buildings such as the new St Paul’s Cathedral.</p>
            <p>In the 18th century, simpler designs became popular. The Scottish architect Robert Adam influenced the development of architecture in the UK, Europe and America. He designed the inside decoration as well as the building itself in great houses such as Dumfries House in Scotland. His ideas influenced architects in cities such as Bath, where the Royal Crescent was built.</p>
            <p>In the 19th century, the medieval ’gothic’ style became popular again. As cities expanded, many great public buildings were built in this style. The Houses of Parliament and St Pancras Station were built at this time, as were the town halls in cities such as Manchester and Sheffield.</p>
            <p>In the 20th century, Sir Edwin Lutyens had an influence throughout the British Empire. He designed New Delhi to be the seat of government in India. After the First World War, he was responsible for many war memorials throughout the world, including the Cenotaph in Whitehall. The Cenotaph is&nbsp;the site of the annual Remembrance Day service attended by the Queen, politicians and foreign ambassadors.</p>
            <p>The firms of modern British architects continue to work on major projects throughout the world as well as in the UK. These include those of Sir Norman Foster (1935-), Lord (Richard) Rogers (1933-) and Dame Zaha Hadid (1950-2016).</p>
            <p>Alongside the development of architecture, garden design and landscaping have played an important role in the UK. In the 18th century, Lancelot ‘Capability’ Brown designed the grounds around country houses so that the landscape appeared to be natural, with grass, trees and lakes. He often said that a place had ‘capabilities’. Later, Gertrude Jekyll often worked with Edwin Lutyens to design colourful gardens around the houses he designed. Gardens continue to be an important part of homes in the UK. The annual Chelsea Flower Show showcases garden design from Britain and around the world.</p>
            <h3>Fashion and design</h3>
            <p>Britain has produced many great designers, from Thomas Chippendale (who designed furniture in the 18th century) to Clarice Cliff (who designed Art Deco ceramics) to Sir Terence Conran (a 20th-century interior designer). Leading fashion designers of recent years include Mary Quant, Alexander McQueen and Vivienne Westwood.</p>
            <h3>Literature</h3>
            <p>The UK has a prestigious literary history and tradition. Several British writers, including the novelist Sir William Golding, the poet Seamus Heaney, and the playwright Harold Pinter, have won the Nobel Prize in Literature. Other authors have become well known in popular fiction. Agatha Christie’s detective stories are read all over the world and Ian Fleming’s books introduced James Bond. In 2003, <em>The Lord of the Rings</em> by JRR Tolkien was voted the country’s best-loved novel.</p>
            <p>The Man Booker Prize for Fiction is awarded annually for the best fiction novel written by an author from the Commonwealth, Ireland or Zimbabwe. It has been awarded since 1968. Past winners include Ian McEwan, Hilary Mantel and Julian Barnes.</p>
            <h4><b>Notable authors and writers</b></h4>
            <ul>
              <li><b>Jane Austen (1775-1817)</b> was an English novelist. Her books include <em>Pride and Prejudice</em> and <em>Sense and Sensibility</em>. Her novels are concerned with marriage and family relationships. Many have been made into television programmes or films.</li>
            </ul>
            <ul>
              <li><b>Charles Dickens (1812-70)</b> wrote a number of very famous novels, including <em>Oliver Twist</em> and <em>Great Expectations</em>. You will hear references in everyday talk to some of the characters in his books, such as Scrooge (a mean person) or Mr Micawber (always hopeful).</li>
            </ul>
            <ul>
              <li><b>Robert Louis Stevenson (1850-94) </b>wrote books which are still read by adults and children today. His most famous books include <em>Treasure Island</em>, <em>Kidnapped</em> and <em>Dr Jekyll and Mr Hyde</em>.</li>
            </ul>
            <ul>
              <li><b>Thomas Hardy (1840-1928)</b> was an author and poet. His best-known novels focus on rural society and include <em>Far from the Madding Crowd</em> and <em>Jude the Obscure</em>.</li>
            </ul>
            <ul>
              <li><b>Sir Arthur Conan Doyle (1859-1930)</b> was a Scottish doctor and writer. He was best known for his stories about Sherlock Holmes, who was one of the first fictional detectives.</li>
            </ul>
            <ul>
              <li><b>Evelyn Waugh (1903-66)</b> wrote satirical novels, including <em>Decline</em> and <em>Fall and Scoop</em>. He is perhaps best known for <em>Brideshead Revisited</em>.</li>
            </ul>
            <ul>
              <li><b>Sir Kingsley Amis (1922-95) </b>was an English novelist and poet. He wrote more than 20 novels. The most well known is <em>Lucky Jim</em>.</li>
            </ul>
            <ul>
              <li><b>Graham Greene (1904-91)</b> wrote novels often influenced by his religious beliefs, including <em>The Heart of the Matter</em>, <em>The Honorary Consul</em>, <em>Brighton Rock</em> and <em>Our Man in Havana</em>.</li>
            </ul>
            <ul>
              <li><b>J K Rowling (1965-)</b> wrote the Harry Potter series of children’s books, which have enjoyed huge international success. She now writes fiction for adults as well.</li>
            </ul>
            <h3>British poets</h3>
            <p>British poetry is among the richest in the world. The Anglo-Saxon poem <em>Beowulf</em> tells of its hero’s battles against monsters and is still translated into modern English. Poems which survive from the Middle Ages include <em>Chaucer’s Canterbury Tales</em> and a poem called <em>Sir Gawain and the Green Knight</em>, about one of the knights at the court of King Arthur.</p>
            <p>As well as plays, Shakespeare wrote many sonnets (poems which must be 14 lines long) and some longer poems. As Protestant ideas spread, a number of poets wrote poems inspired by their religious views. One of these was John Milton, who wrote <em>Paradise Lost</em>.</p>
            <p>Other poets, including William Wordsworth, were inspired by nature. Sir Walter Scott wrote poems inspired by Scotland and the traditional stories and songs from the area on the borders of Scotland and England. He also wrote novels, many of which were set in Scotland.</p>
            <p>Poetry was very popular in the 19th century, with poets such as William Blake, John Keats, Lord Byron, Percy Shelley, Alfred Lord Tennyson, and Robert and Elizabeth Browning. Later, many poets – for example, Wilfred Owen and Siegfried Sassoon – were inspired to write about their experiences in the First World War. More recently, popular poets have included Sir Walter de la Mare, John Masefield, Sir John Betjeman and Ted Hughes.</p>
            <p>Some of the best-known poets are buried or commemorated in Poet’s Corner in Westminster Abbey.</p>
            <p>Some famous lines include:</p>
            <p><em>‘Oh, to be in England now that April’s there</em></p>
            <p><em>And whoever wakes in England sees, some morning, unaware,</em></p>
            <p><em>That the lowest boughs and the brushwood sheaf</em></p>
            <p><em>Round the elm-tree bole are in tiny leaf</em></p>
            <p><em>While the Chaffinch sings on the orchard bough</em></p>
            <p><em>In England – Now!’</em></p>
            <p>(Robert Browning, 1812-89 – <em>Home Thoughts from Abroad</em>)</p>
            <p><em>‘She walks in beauty, like the night</em></p>
            <p><em>Of cloudless climes and starry skies,</em></p>
            <p><em>And all that’s best of dark and bright</em></p>
            <p><em>Meet in her aspect and her eyes’</em></p>
            <p>(Lord Byron, 1788-1824 – <em>She walks in Beauty</em>)</p>
            <p><em>‘I wander’d lonely as a cloud</em></p>
            <p><em>That floats on high o’er vales and hills</em></p>
            <p><em>When all at once I saw a crowd,</em></p>
            <p><em>A host of golden daffodils’</em></p>
            <p>(William Wordsworth, 1770-1850 – <em>The Daffodils</em>)</p>
            <p><em>‘Tyger! Tyger! Burning bright</em></p>
            <p><em>In the forests of the night,</em></p>
            <p><em>What immortal hand and eye</em></p>
            <p><em>Could frame thy fearful symmetry?’</em></p>
            <p>(William Blake, 1757-1827 – <em>The Tyger</em>)</p>
            <p><em>‘What passing-bells for these who die as cattle?</em></p>
            <p><em>Only the monstrous anger of the guns.</em></p>
            <p><em>Only the stuttering rifles’ rapid rattle</em></p>
            <p><em>Can patter out their hasty orisons.’</em></p>
            <p>(Wilfred Owen, 1893-1918 – <em>Anthem for Doomed Youth</em>)</p>
            <h5><b>Check that you understand</b></h5>
            <p>• Which sports are particularly popular in the UK</p>
            <p>• Some of the major sporting events that take place each year</p>
            <p>• Some of the major arts and culture events that happen in the UK</p>
            <p>• How achievements in arts and culture are formally recognised</p>
            <p>• Important figures in British literature</p>
            <h2>Leisure</h2>
            <p>People in the UK spend their leisure time in many different ways.</p>
            <h3>Gardening</h3>
            <p>A lot of people have gardens at home and will spend their free time looking after them. Some people rent additional land called ‘an allotment’, where they grow fruit and vegetables. Gardening and flower shows range from major national exhibitions to small local events. Many towns have garden centres selling plants and gardening equipment. There are famous gardens to visit throughout the UK, including Kew Gardens, Sissinghurst and Hidcote in England, Crathes Castle and Inveraray Castle in Scotland, Bodnant Garden in Wales, and Mount Stewart in Northern Ireland.</p>
            <p>The countries that make up the UK all have flowers which are particularly associated with them and which are sometimes worn on national saints’ days:</p>
            <p>• England – the rose</p>
            <p>• Scotland – the thistle</p>
            <p>• Wales – the daffodil</p>
            <p>• Northern Ireland – the shamrock.</p>
            <h3>Shopping</h3>
            <p>There are many different places to go shopping in the UK. Most towns and cities have a central shopping area, which is called the town centre. Undercover shopping centres are also common – these might be in town centres or on the outskirts of a town or city. Most shops in the UK are open seven days a week, although trading hours on Sundays and public holidays are generally reduced. Many towns also have markets on one or more days a week, where stallholders sell a variety of goods.</p>
            <h3>Cooking and food</h3>
            <p>Many people in the UK enjoy cooking. They often invite each other to their homes for dinner. A wide variety of food is eaten in the UK because of the country’s rich cultural heritage and diverse population.</p>
            <h4><b>Traditional foods</b></h4>
            <p>There are a variety of foods that are traditionally associated with different parts of the UK:</p>
            <p><b>• England: </b>Roast beef, which is served with potatoes, vegetables, Yorkshire puddings (batter that is baked in the oven) and other accompaniments. Fish and chips are also popular.</p>
            <p><b>• Wales:</b> Welsh cakes – a traditional Welsh snack made from flour, dried fruits and spices, and served either hot or cold.</p>
            <p><b>• Scotland:</b> Haggis – a sheep’s stomach stuffed with offal. Suet, onions and oatmeal.</p>
            <p><b>• Northern Ireland:</b> Ulster fry – a fried meal with bacon, eggs, sausage, black pudding, tomatoes, mushrooms, soda bread and potato bread.</p>
            <h3>Films</h3>
            <h4><b>British film industry</b></h4>
            <p>The UK has had a major influence on modern cinema.</p>
            <p>Films were first shown publicly in the UK in 1896 and film screenings very quickly became popular. From the beginning, British film makers became famous for clever special effects and this continues to be an area of British expertise. From the early days of the cinema, British actors have worked in both UK and USA. Sir Charles (Charlie) Chaplin became famous in silent movies for his tramp character and was one of many British actors to make a career in Hollywood.</p>
            <p>British studios flourished in the 1930s. Eminent directors included Sir Alexander Korda and Sir Alfred Hitchcock, who later left for Hollywood and remained an important film director until his death in 1980. During the Second World War, British movies (for example, <em>In Which We Serve</em>) played an important part in boosting morale. Later, British directors including Sir David Lean and Ridley Scott found great success both in the UK and internationally.</p>
            <p>The 1950s and 1960s were a high point for British comedies, including Passport to <em>Pimlico,</em> <em>The Ladykillers</em> and, later, the <em>Carry On Films</em>.</p>
            <p>Many of the films now produced in the UK are made by foreign companies, using British expertise. Some of the most commercially successful films of all time, including the two highest-grossing film franchises (Harry Potter and James Bond), have been produced in the UK. Ealing Studios has a claim to being the oldest continuously working film studio facility in the world. Britain continues to be particularly strong in special effects and animation. One example is the work of Nick Park, who has won four Oscars for his animated films, including three for films featuring Wallace and Gromit.</p>
            <p>Actors such as Sir Lawrence Olivier, David Niven, Sir Rex Harrison and Richard Burton starred in a wide variety of popular films. British actors continue to be popular and continue to win awards throughout the world. Recent British actors to have won Oscars include Colin Firth, Sir Antony Hopkins, Dame Judi Dench, Kate Winslet and Tilda Swinton.</p>
            <p>The annual British Academy Film Awards, hosted by the British Academy of Film and Television Arts (BAFTA), are the British equivalent of the Oscars.</p>
            <h4><b>Some famous British films</b></h4>
            <p>• <em>The 39 Steps</em> (1935), directed by Alfred Hitchcock</p>
            <p>• <em>Brief Encounter</em> (1945), directed by David Lean</p>
            <p>• <em>The Third Man</em> (1949), directed by Carol Reed</p>
            <p>• <em>The Belles of St Trinian’s</em> (1954), directed by Frank Launder</p>
            <p>• <em>Lawrence of Arabia</em> (1962), directed by David Lean</p>
            <p>• <em>Women in Love</em> (1969), directed by Ken Russel</p>
            <p>• <em>Don’t Look Now</em> (1973), directed by Nicolas Roeg</p>
            <p>• <em>Chariots of Fire</em> (1981), directed by Hugh Hudson</p>
            <p>• <em>The Killing Fields</em> (1984), directed by Roland Joffé</p>
            <p>• <em>Four Weddings and a Funeral</em> (1994), directed by Mike Newell</p>
            <p>• <em>Touching the Void</em> (2003), directed by Kevin MacDonald</p>
            <h3>British comedy</h3>
            <p>The traditions of comedy and satire, and the ability to laugh at ourselves, are an important part of the UK character.</p>
            <p>Medieval kings and rich nobles had jesters who told jokes and made fun of people in the Court. Later, Shakespeare included comic characters in his plays. In the 18th century, political cartoons attacking prominent politicians – and, sometimes, the monarch or other members of the Royal Family – became increasingly popular. In the 19th century, satirical magazines began to be published. The most famous was <em>Punch,</em> which was published for the first time in the 1840s. Today, political cartoons continue to be published in newspapers, and magazines such as <em>Private Eye</em> continue the tradition of satire.</p>
            <p>Comedians were a popular feature of British music hall, a form of variety theatre which was very common until television became the leading form of entertainment in the UK. Some of the people who had performed in the music halls in the 1940s and 1950s, such as Morecambe and Wise, became stars of television.</p>
            <p>Television comedy developed its own style. Situation comedies, or sitcoms, which often look at family life and relationships in the workplace, remain popular. Satire has also continued to be important, with shows like <em>That Was The Week That Was</em> in the 1960s and <em>Spitting Image</em> in the 1980s and 1990s. In 1969, <em>Monty Python’s Flying Circus</em> introduced a new type of progressive comedy. Stand-up comedy, where a solo comedian talks to a live audience, has become popular again in recent years.</p>
            <h3>Television and radio</h3>
            <p>Many different television (TV) channels are available in the UK. Some are free to watch and others require a paid subscription. British television shows a wide variety of programmes. Popular programmes include regular soap operas such as <em>Coronation Street</em> and <em>EastEnders.</em> In Scotland, some Scotland-specific programmes are shown and there is also a channel with programmes in the Gaelic language. There is a Welsh-language channel in Wales. There are also programmes specific to Northern Ireland and some programmes broadcast in Irish Gaelic.</p>
            <p>Everyone in the UK with a TV, computer or other medium which can be used for watching TV must have a television licence. One licence covers all of the equipment in one home, except when people rent different rooms in a shared house and each has a separate tenancy agreement – those people must each buy a separate licence. People over 75 can apply for a free TV licence and blind people can get a 50% discount. You will receive a fine up to £1,000 if you watch TV but do not have a TV licence.</p>
            <p>The money from TV licences is used to pay for the British Broadcasting Corporation (BBC). This is a public service broadcaster providing television and radio programmes. The BBC is the largest broadcaster in the world. Although it receives some state funding, it is independent of the government. Other UK channels are primarily funded through advertisements and subscriptions.</p>
            <p>There are also many different radio stations in the UK. Some broadcast nationally and others in certain cities or regions. There are radio stations that play certain types of music and some broadcast in regional languages such as Welsh or Gaelic. Like television, BBC radio stations are funded by TV licences and other radio stations are funded through advertisements.</p>
            <h3>Social networking</h3>
            <p>Social networking websites such as Facebook and Twitter are a popular way for people to stay in touch with friends, organise social events, and share photos, videos and opinions. Many people use social networking on their mobile phones when out and about.</p>
            <h3>Pubs and night clubs</h3>
            <p>Public houses (pubs) are an important part of the UK social culture. Many people enjoy meeting friends in the pub. Most communities will have a ‘local’ pub that is a natural focal point for social activities. Pub quizzes are popular. Pool and darts are traditional pub games. To buy alcohol in a pub or night club you must be 18 or over, but people under that age may be allowed in some pubs with an adult. When they are 16, people can drink wine or beer with a meal in a hotel or restaurant (including eating areas in pubs) as long as they are with someone over 18.</p>
            <p>Pubs are usually open during the day from 11.00 am (12 noon on Sundays). Night clubs with dancing and music usually open and close later than pubs. The licensee decides the hours that the pub or night club is open.</p>
            <h3>Betting and gambling</h3>
            <p>In the UK, people often enjoy a gamble on sports or other events. There are also casinos in many places. You have to be 18 to go into betting shops or gambling clubs. There is a National Lottery for which draws are made every week. You can enter by buying a ticket or a scratch card. People under 18 are not allowed to participate in the National Lottery.</p>
            <h3>Pets</h3>
            <p>A lot of people in the UK have pets such as cats or dogs. They might have them for company or because they enjoy looking after them. It is against the law to treat a pet cruelly or to neglect it. All dogs in public places must wear a collar showing the name and address of the owner. The owner is responsible for keeping the dog under control and for cleaning up after the animal in a public place.</p>
            <p>Vaccinations and medical treatment for animals are available from veterinary surgeons (vets). There are charities which may help people who cannot afford to pay a vet.</p>
            <h2>Places of interest</h2>
            <p>The UK has a large network of public footpaths in the countryside. There are also many opportunities for mountain biking, mountaineering and hill walking. There are 15 national parks in England, Wales and Scotland. They are areas of protected countryside that everyone can visit, and where people live, work and look after the landscape.</p>
            <p>There are many museums in the UK, which range from small community museums to large national and civic collections. Famous landmarks exist in towns, cities and the countryside throughout the UK. Most of them are open to the public to view (generally for a charge).</p>
            <p>Many parts of the countryside and places of interest are kept open by the National Trust in England, Wales and Northern Ireland and the National Trust for Scotland. Both are charities that work to preserve important buildings, coastline and countryside in the UK. The National Trust was founded in 1895 by three volunteers. There are now more than 61,000 volunteers helping to keep the organisation running.</p>
            <h3>UK Landmarks</h3>
            <p><b>Big Ben</b></p>
            <p>Big Ben is the nickname for the great bell of the clock at the Houses of Parliament in London. Many people call the clock Big Ben as well. The clock is over 150 years old and is a popular tourist attraction. The clock tower is named ‘Elizabeth Tower’ in honour of Queen Elizabeth II’s Diamond Jubilee in 2012.</p>
            <p><b>The Eden Project</b></p>
            <p>The Eden Project is located in Cornwall, in the south west of England. Its biomes, which are like giant greenhouses, house plants from all over the world. The Eden Project is also a charity which runs environmental and social projects internationally.</p>
            <p><b>Edinburgh Castle</b></p>
            <p>The castle is a dominant feature of the skyline in Edinburgh, Scotland. It has a long history, dating back to the early Middle Ages. It is looked after by Historic Environment Scotland.</p>
            <p><b>The Giant’s Causeway</b></p>
            <p>Located on the north-east coast of Northern Ireland, the Giant’s Causeway is a land formation of columns made from volcanic lava. It was formed about 50 million years ago. There are many legends about the Causeway and how it was formed.</p>
            <p><b>Loch Lomond and the Trossachs National Park</b></p>
            <p>This national park covers 720 square miles (1,865 square kilometres) in the west of Scotland. Loch Lomond is the largest expanse of fresh water in mainland Britain and probably the best-known part of the park.</p>
            <p><b>London Eye</b></p>
            <p>The London Eye is situated on the southern bank of the River Thames and is a Ferris wheel that is 443 feet (135 metres) tall. It was originally built as part of the UK’s celebration of the new millennium and continues to be an important part of New Year celebrations.</p>
            <p><b>Snowdonia</b></p>
            <p>Snowdonia is a national park in North Wales. It covers an area of 823 square miles (2,132 square kilometres). Its most well-known landmark is Snowdon, which is the highest mountain in Wales.</p>
            <p><b>The Tower of London</b></p>
            <p>The Tower of London was first built by William the Conqueror after he became king in 1066. Tours are given by the Yeoman Warders, also known as Beefeaters, who tell visitors about the building’s history. People can also see the Crown Jewels there.</p>
            <p><b>The Lake District</b></p>
            <p>The Lake District is England’s largest national park. It covers 912 square miles (2,362 square kilometres). It is famous for its lakes and mountains and is very popular with climbers, walkers and sailors. The biggest stretch of water is Windermere. In 2007, television viewers voted Wastwater as Britain’s favourite view.</p>
            <h5><b>Check that you understand</b></h5>
            <p>• Some of the ways in which people in the UK spend their leisure time</p>
            <p>• The development of British cinema</p>
            <p>• What the television licence is and how it funds the BBC</p>
            <p>• Some of the places of interest to visit in the UK</p>
          </div>
          <div className="flex flex-wrap justify-around">
            <CustomLink to="/test-4-1">Test your knowledge</CustomLink>
            <CustomLink to="/the-uk-government-the-law-and-your-role">Go to Chapter 5</CustomLink>
          </div>
        </div>

        <div className="w-full md:w-60 md:pl-5 mt-5">
          <Donate />
        </div>
      </div>
    </div>
  );
};

export default Chapter4;
