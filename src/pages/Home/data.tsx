// Importing Icons 
// Outline Icons
import { SunIcon, MoonIcon, GlobeIcon } from "@heroicons/react/outline";
// Solid Icons
import {} from "@heroicons/react/solid";
interface Impact_Data{
	index:number,
	head:string,
	subHead:string,
	country:string,
	year:number,
	content:string,
	Icon:any,
}

const Impact_Data:Impact_Data[] = [
	{
		index:1,
		head:'To Solve War',
		subHead:"The Colombian Government and the Revolutionary Armed Forces of Colombia (FARC) signed a historic peace pact that ends a 52-year-old armed conflict yesterday. Playing an important role in the peace process was the Art of Living founder and humanitarian – Sri Sri Ravi Shankar.",
		country:'Colombia and FARC',
		year:2015,
		content:'Last year, the spiritual leader had travelled to Cuba, Havana and Colombia, talking to both the parties, building trust between them. Last year, Sri Sri travelled to Cuba to meet the representatives of FARC, including the leader of the FARC-EP delegation, Iván Márquez. His efforts resulted in a major breakthrough in June 2015 when the FARC rebels announced a unilateral ceasefire. The strife had taken the lives of 220,000 people and displaced more than 5 million. The government and the rebels had been talking peace since 2012, and had reached agreements on land reforms and drug trade. But what was needed was the healing touch of a spiritual leader that addressed the core values of the peace process. President Juan Manuel Santos remembered, "I had the great joy of speaking with him about his efforts to hopefully end an internal armed conflict that has lasted more than 50 years. Later on, with my consent, he met in Havana and Cuba with the negotiators of the FARC leaders to encourage them to follow the Gandhian principle of non-violence, and to cultivate the art of meditation and breathing." Márquez acknowledged that Sri Sri teachings about the Gandhian principle of non-violence inspired them',
		Icon:SunIcon,
	},
	// {
	// 	index:2,
	// 	head:'Peace Mission',
	// 	subHead:"This is Sri Sri's second visit to Pakistan, the first was on July 2004. During his three-day peace mission, Sri Sri will meet top leaders of Pakistan to strengthen collaborative efforts between two neighbouring countries.",
	// 	country:'Pakistan',
	// 	year:2012,
	// 	content:'',
	// 	Icon:GlobeIcon,
	// },
	{
		index:3,
		head:'IRAQ',
		subHead:"In 2014, Gurudev Sri Sri Ravi Shankar called upon the governments of Europe,America, and India to save the thousands of Yazidis trapped in the Sinjar Mountainsin Iraq.",
		country:'',
		year:2014,
		content:"The Art of Living and its sister concern, the International Association for Human Values team has been working to bring relief to refugees and internally displaced people (IDP). From its base in Erbil, the team brought relief of 110 tons of food, water, and hygiene products to over five different camps, each camp sheltering 550 Iraqi families. Food supplies were also airlifted and distributed to Yazidi refugees on the Sinjar mountains. The IAHV reached out to more than 2,000 families in the region. Gurudev also visited Kurdistan from November 19 to 21, 2014, to give solace to the hundreds of Christians, Kurds, and Arabs who had been displaced. The visit, which was Sri Sri’s third to Iraq, saw him deliberate with various leaders, bringing them on a common platform to discuss peace. Gurudev talked about co-existence, compassion, and commitment to peace at the IAHV-hosted conference titled ‘Protecting Women and Bringing Stability and Peace’. Gurudev also addressed the Kurdish Parliament and interacted with the refugees at The Art of Living’s relief camp in the Sinjar mountains. The surmounting strife has been a cause for immense stress among the locals. To provide effective healthcare, The Art of Living started a unique Ayurvedic center on June 2, 2015. Dr. Rikot Hamah Rachid, the Health Minister of Kurdistan, extended his support to the center and inaugurated it. Till date, many Iraqis have experienced the benefits of Ayurvedic healthcare.",
		Icon:MoonIcon,
	},
	{
		index:4,
		head:'War Zones',
		subHead:'Bringing Peace Again in World, To make people happier which is core of our human system to grow in life, Showing what is real purpose of Life',
		country:'SYRIA, LEBANON AND JORDAN',
		year:2014,
		content:"Gurudev has been working to create an ecosystem of peace in strife-torn areas across the globe including Lebanon, Jordan, Sriya and Iraq. The resilience building and trauma-relief programs designed by him have brought relief to thousands of waraffected people and refugees. De-radicalisation programs for youth are helping the population move away from violence and extremism.",
		Icon:SunIcon,
	},
	// {
	// 	index:5,
	// 	head:'',
	// 	subHead:'Gurudev met with several leaders of the Venezuelan government and the opposition to seek a peaceful path ahead for the country.',
	// 	country:'VENEZUELA',
	// 	year:2012,
	// 	content:"Gurudev has been working to find a common ground between the ruling and opposition leaders in Venezuela to peacefully end the ongoing social and political crisis in the Latin American country",
	// 	Icon:GlobeIcon,
	// },
	{
		index:6,
		head:'Sri Lanka Tour',
		subHead:'Gurudev has visited Sri Lanka four times since 2005 to resolve the crisis. Concerned about the conflict in Sri Lanka, and the plight of the civilians, Gurudev went on a 3-day peace mission to Sri Lankan in April 2009',
		country:'SRI LANKA',
		year:1222,
		content:"He closely interacted with refugees in the Manik camp for Internally Displaced People (IDP) as well as a camp in Vavuniya and met with H.E Mahinda Rajapakse, President of Sri Lanka. Gurudev has also started the “Village of Hope”, an orphanage for children. Since 2004, he has been actively involved in resolving the Sri Lankan crisis. He was instrumental in the formation of the ‘Committee for Peace in Sri Lanka’ comprising Hindu and Buddhist leaders, including the Dalai Lama. He had extensive meetings with the President, opposition leaders, Tamil leaders and the general public during one of his visits to the nation in April 2006. During the visit, he was inundated with letters from the public seeking his help to bring about peace in Sri Lanka. In September 2006, Gurudev ventured into LTTE stronghold Kilinochchi for peace talks. In two separate visits, Sri Lankan Prime Minister Ranil Wickramasinghe and two parliamentary delegations from the United National Party (UNP) and Tamil National Alliance (TNA) visited Gurudev in India in 2006 to discuss the Sri Lankan issue. Since 2005, over 1,500 Tamil youth, mostly from Jaffna, have undergone The Art of Living youth leadership training programme after which they have given up violence and taken on community empowerment projects. In his fifth visit to Sri Lanka in October 2009, over 10,000 people visited Gurudev at the country`s largest indoor stadium in Colombo. He urged Sri Lankan Tamils to “have peace in your heart, in your mind, family and society.”",
		Icon:MoonIcon,
	},
	{
		index:7,
		head:'Peace treaty',
		subHead:'He has visited the state several times to open up avenues for dialogue and negotiation. ',
		country:'JAMMU & KASHMIR',
		year:2006,
		content:"His visit in 2006 culminated in a rare dialogue between leaders of several Kashmiri groups, including both factions of the All Party Hurriyat Conference and representatives of the Kashmiri Pandits. Inspired by Gurudev, thousands of youth who had been trained in terrorist camps, have shunned the path of violence. Conferences like “Kashmir: Back to Paradise”(2016) & “Paigam-e-mohabbat”(2017 & 2018), provided a platform for all the stakeholders to voice their opinions in an effort to restore peace in the valley. In 2005, IAHV established a child care centre to provide education and a safe haven for children affected by militancy and the 2005 earthquake.",
		Icon:SunIcon,
	},
	{
		index:8,
		head:'CLASS CONFLICT IN INDIA',
		subHead:'Gurudev’s teachings and initiatives have transformed many villages in the Naxaliteinfested areas of central Bihar and Andhra Pradesh. During his visit to Bihar in 2002, more than 100,000 youth from warring factions such as Ranvir Sena, CPI-ML, People’s War Group and Maoist Communist Centre vowed to spread the message of non-violence',
		country:'India',
		year:2006,
		content:"As a result of his timely intervention, there was no retaliatory massacre in the aftermath of the 2006 Jehanabad killings. Instead, warring groups came together soon after the incident for a community gathering organised by The Art of Living in Ekwari, the nerve centre of Naxal violence in Bihar, which avoided further escalation of violence. Gurudev has hosted and facilitated dialogues and reconciliation events between different Caste Groups in various parts of India. In March 2007, he hosted the Truth and Reconciliation Conference in New Delhi bringing together leaders from the upper and lower castes of India who pledged to strive towards bringing equality in society. In 2002, he hosted a 3-day conference at The Art of Living International Centre in Bengaluru to showcase the rich heritage of the Dalits in India.",
		Icon:GlobeIcon,
	},
	// {
	// 	index:9,
	// 	head:'',
	// 	subHead:'In Kosovo, The Art of Living has successfully carried out programmes to promote dialogue between people on both sides of the ethnic divide, thus expanding the circle of belonging to transcend narrow identities.',
	// 	country:'KOSOVO',
	// 	year:1212,
	// 	content:"The Health Ministry of Kosovo directly supports The Art of Living’s trauma relief efforts which have helped thousands of people including war veterans, prisoners, health workers, victims of war crimes, UN peace keeping forces and children in Kosovo.",
	// 	Icon:MoonIcon,
	// },
	// {
	// 	index:10,
	// 	head:'ADDRESSING FARMER SUICIDES',
	// 	subHead:'The Art of Living is pursuing a comprehensive programme in the Vidarbha region of Maharashtra, where farmers have become suicidal due to successive crop failures and mounting debts',
	// 	country:'',
	// 	year:1212,
	// 	content:"Earlier statistics suggested that one farmer was committing suicide every eight hours. In the 507 villages where The Art of Living volunteers have worked so far, there has not been a single reported instance of suicide. Encouraged by the results, the Government of Maharashtra has requested Gurudev to take up the work in all affected districts. The Vidarbha programme focuses on: ♦ Building community support systems ♦ Instilling confidence and enthusiasm in farmers ♦ Promoting alternative farming techniques such as organic farming and zero budget farming, to improve the yield of crops in the long run ♦ Rainwater harvesting ♦ Implementing the 5H programme for overall self-sufficiency in villages.",
	// 	Icon:GlobeIcon,
	// },

]

export default Impact_Data;