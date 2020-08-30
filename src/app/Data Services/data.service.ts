import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////Home Page Data////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  home = {
    headerSection: {
      tittle: "Your technology partner",
      description: "DevUnleash brings together an exceptionally skilled team to realise your dreams. We will provide you all technology solutions that you need to help grow your business.",
      detailPage: ''
    },

    techItem: [
      {
        title: 'Agile approach',
        imagePath: 'assets/services/agile-approach.svg',
      },
      {
        title: 'Personal commitment',
        imagePath: 'assets/services/communication.svg',
      },
      {
        title: 'Deep tech expertise ',
        imagePath: 'assets/services/expertise.svg',
      },
      {
        title: 'Regular Reporting',
        imagePath: 'assets/services/reporting.svg',
      },
      {
        title: 'Scalability',
        imagePath: 'assets/services/scalability.svg',
      },
      {
        title: 'Time tracking',
        imagePath: 'assets/services/tracking.svg',
      },
    ],
    techstack: [
      {
        title: 'Android',
        imagePath: 'assets/techLogos/android.svg',
      },
      {
        title: 'IOS',
        imagePath: 'assets/techLogos/ios.svg',
      },
      {
        title: 'Web',
        imagePath: 'assets/techLogos/web.svg',
      },
      {
        title: 'Wearable',
        imagePath: 'assets/techLogos/wearable.svg',
      },
      {
        title: 'TV',
        imagePath: 'assets/techLogos/tv.svg',
      },
      {
        title: 'IOT',
        imagePath: 'assets/techLogos/iot.svg',
      },
    ]
  }
  ////////////////////////////////////////////////////////////////////////
  ///////////////////////////Work Page Data///////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  workPage = {
    workitems: [
      {  
        id: 0,
        title: 'TradeUnleashed',
        description: 'Supply chain platform for manufacturers, distributors & retailers.',
        detailPage: 'TradeUnleashed wanted to automate its supply chain by connecting all their trade partners and team on single platform. We helped design & build a platform that provides all stake holders with real-time information access & enables on-the-go decision making.',
        imagePath: 'assets/portfolio/work3.jpg',
        themeColor: '',
        proServices: ['SupplyChain', 'Web', 'iOS', 'Android'],
        titlephoto: 'assets/portfolio/tu.png',
        needText: 'The Need',
        needParagraph:
          ['A big manufacturer company wanted to develop a supply chain platform where they can connect to their trade partners and sales team in real-time and exchange business and transaction information on-the-go. With real-time information access, on-the-go decision making and control and visibility across supply entire supply chain, they would be able to increase business efficiency and reduce loss & leakage', 'Every person in the team would have access to up-to-date real-time information on his finger-tips for on-the-go decision making, better stock management and sales automation. It would avoid delays, reduce leakage and increase business efficiency.'],
        solutiontitle: 'WHICH BUSINESSES IT HELPS',
        solitem: [{
          img: 'assets/portfolio/work4.jpg',
          title: '', details:  
            [
              'Help manufacturers keep track of their inventories, sales and payment recoveries across their trade partners in real-time. Help reduce inventory cost, reduce wastage, increase sales and eliminate the cost and headache of manual operation. ',
              'Help manufacturers and distributors keep track of their team’s performance and activities in real-time.',
              'Help field sales staff perform effectively on the field with access to update-to-date information on their finger-tips',
              'Help distributors share transaction informations with their manufacturer and sourcing of inventories.',
              'Help top level management and business owners drive better business decisions with advanced reporting and intelligence across all business aspects.'
            ]
        }],
        methodologyTitle: 'HOW WE BUILT THE SYSTEM',
        methodologyParagraph: ['Our product design and development team worked closely with the client to ensure we thoroughly understand their business needs and objectives. Based on their requirements, we designed & built the system compromising these components & tools.'],
        methodology: ['Back office web application', 'Mobile application for field operations', 'Mobile app for advanced reporting and business intelligence', 'B2B e-commerce and marketplace platform'],
        moreSection: [
          {
            tittle: 'BACK OFFICE WEB APPLICATION', imgPath: 'assets/portfolio/tuportfolio.png', desc: [
              'Back office web application is used to centrally manage supply chain operations with end-to-end control and visibility. It’s single page application built over APIs with offline first capability for better user experience and reduced bandwidth usage.',
              'Back office allows adding users with different roles and permissions. That’s where users can manage and keep track of their inventories, sale orders, purchase orders, customer and supplier relationships, invoices, payments, reporting and much more.']
          },
          {
            tittle: 'MOBILE APP', imgPath: 'assets/portfolio/tuportfolio2.png', desc: [
              'Mobile app is used by the field staff to punch all their activities and transactions directly in the system instead of manual paper work. Also, they have access to the update information on product, pricing, inventory levels, customers to perform better on the field.']
          },
        ],

        furtherMoreTittle: 'UX Design Challenges',
        furtherMore: [
          { desc: 'Our team truly understands the value a good UI/UX plays in the success of a product. We faced an interesting challenge in front as we strove to build a large and scalable platform that would automate and digitise complex supply chain operations for different type of businesses involved and platforms. We wanted to make sure system is easily navigable and all information is visible to user in clean and optimised way.', imagePath: 'assets/portfolio/tu.png' },
          { desc: 'Our team truly understands the value a good UI/UX plays in the success of a product. We faced an interesting challenge in front as we strove to build a large and scalable platform that would automate and digitise complex supply chain operations for different type of businesses involved and platforms. We wanted to make sure system is easily navigable and all information is visible to user in clean and optimised way.', imagePath: 'assets/portfolio/tuportfolio1.png' },
          { desc: 'Our team truly understands the value a good UI/UX plays in the success of a product. We faced an interesting challenge in front as we strove to build a large and scalable platform that would automate and digitise complex supply chain operations for different type of businesses involved and platforms. We wanted to make sure system is easily navigable and all information is visible to user in clean and optimised way.', imagePath: 'assets/portfolio/tuportfolio3.png' },
        ],
        tech: 'NativeScript',
        techlogo: 'assets/content/work_cases/nstu.png',
        portfolioimage1: 'assets/content/work_cases/tuportfolio4.png',
        portfolioimage2: 'assets/content/work_cases/tuportfolio3.png',
      },
      {
        id: 1,
        title: 'HireGoat',
        description: 'Next generation video based recruitment platform',
        imagePath: 'assets/portfolio/work2.jpg',
        themeColor: '#90b534',
        detailPage: 'HireGoat wanted to develop a platform to eliminate recruitment overhead and replace boring / ineffective CVs with video based system where smiles & personality count first. We created two apps - for hiring company and for candidates - to simplify and speed up recruiting.',
        proServices: ['Recruitment', 'iOS', 'Android'],
        titlephoto: 'assets/portfolio/fhportfolio.png',
        needText: 'The Need',
        needParagraph:
          ['Movingful is a marketplace where customers can book their moves online with intuitive and automated flows for different types of move bookings. The aim of the platform is to increase sale bookings and offload call-centre agents by replacing their manual work with automated flow in place.', 'Part of suite is also a commission management app that lets sponsors, ambassadors and agents share moves through the system and manage their sales commission and status of their bookings in real-time. They can further share their profit down their sub-agents and earn well while increasing sales booking for the company.'],
        solutiontitle: 'One Solution, Two Products',
        solitem: [
          {
            img: 'http://tirthainfotech.com/wp-content/uploads/2019/10/mobile-application.png',
            title: 'For Recruiters', details:
              [
                'Job management ',
                'Applicants tracking ',
                'Online Interview Scheduling',
                'The Recruiter app would allow hiring teams to publish jobs for single or multiple office locations. Those jobs are matched to candidates based on their profiles. When candidates apply, recruiter gets leads in real-time. Recruiter can process leads, move it through different statuses and have interview on spot whenever both parties are available.'
              ]
          },
          {
            img: 'http://tirthainfotech.com/wp-content/uploads/2019/10/mobile-application.png',
            title: 'For Candidates', details:
              [
                'Online & real-time job matching ',
                'Real-time notification on applied jobs ',
                'Offline, online & invisible work modes',
                'Online face-to-face conversation',
                'It allows candidate to manage their online profile and browser through matching jobs on the system easily. Candidate can apply to jobs , receive real-time notifications from recruiters on applied jobs and appear for face-to-face conversation anytime from the comfort of their home.'
              ]
          }
        ],

        methodologyTitle: 'HOW WE BUILT THE SYSTEM',
        methodologyParagraph: ['Our product design and development team worked closely with the client to ensure we thoroughly understand their business needs and objectives. Based on their requirements, we designed & built the system compromising these components & tools.'],
        methodology: '',
        moreSection: [
          // { tittle: '', imgPath: '', desc:[''] },
          // { tittle: '', imgPath: '', desc:[''] },
          // { tittle: '', imgPath: '', desc:[''] },
        ],
        furtherMoreTittle: 'UX Design Challenges',
        furtherMore: [
          { desc: 'Our team truly understands the value a good UI/UX plays in the success of a product. We faced an interesting challenge in front as we strove to build a large and scalable platform that would automate and digitise complex supply chain operations for different type of businesses involved and platforms. We wanted to make sure system is easily navigable and all information is visible to user in clean and optimised way.', imagePath: 'http://tirthainfotech.com/wp-content/uploads/2019/10/mobile-application.png' },
        ],
        tech: 'React Native',
        techlogo: 'assets/content/work_cases/clean-up/react-native-logo@2x-ab2c22364cf8131b683d5fe86bb396c0b046afb812add95e35a4781b77075d33.png',
        portfolioimage1: 'assets/content/work_cases/fhportfolio.png',
        portfolioimage2: 'assets/content/work_cases/fhportfolio1.png',
      },
     

    ],
    morewrkingPage: [
      {
        id: 0,
        title: 'SaaSMax',
        imagePath: 'https://image.slidesharecdn.com/saasmaxvendorprogram2014-140828094959-phpapp02/95/saasmax-vendor-program-2014-1-638.jpg?cb=1409219472',
        description: 'Online marketplace for Cloud SaaS applications.',
        proServices: ['SaaS', 'Web'],

      },

      {
        id: 1,
        title: 'AMS Card System',
        imagePath: 'http://tirthainfotech.com/wp-content/uploads/2019/10/mobile-application.png',
        description: 'A dynamic card based system to build functionality dynamically',
        detailPage: 'AMS had developed isolated applications for their drivers, operations managers, call center agents etc. They wanted to develop a unified application platform to enable all different users to manage their business operations on single platform. For this, we developed card system that renders content and journey dynamically based on user role.',
        proServices: ['web'],

      },
      {
        id: 2,
        title: 'Picpulse',
        description: '',
        imagePath: 'https://www.multidots.com/wp-content/uploads/2014/04/Mobile-application.jpg',
        detailPage: '',
        proServices: ['web'],

      },
      {
        id: 3,
        title: 'Mars Translation',
        imagePath: 'https://cdn.dribbble.com/users/837094/screenshots/5907415/mars-translation.jpg',
        description: '',
        detailPage: '',
        proServices: ['web'],

      },
      {
        id: 4,
        title: 'Ving App',
        imagePath: 'http://tirthainfotech.com/wp-content/uploads/2019/10/mobile-application.png',
        description: '',
        detailPage: "Ving lets you share optimised microbursts of information consisting of video, images, key points, assessments, survey etc and also keep track of analytics on engagement and progress metrics for higher management. It's perfect fit for unobtrusive & seamless on the job training and information sharing across your organisation.",
        proServices: ['SaaS', 'Web'],

      }
    ]

  }


  ////////////////////////////////////////////////////////////////////////
  ////////////////////////Technology Page Data////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  technology = {
    headerSection: {
      tittle: "Web and Mobile",
      description: "You don’t need to work with multiple teams, we provide complete end-to-end services from brainstorming business requirements, designing clean & world-class UIs/UX, architecting large scale enterprise grade applications, developing clean & high quality codebase, performing rigorous automated & manual testing, continuous deployment & maintenance.",
      detailPage: ''
    },
    availtechstack: [
      {
        title: 'Web',
        imagePath: 'assets/techLogos/web.png',
      },

      {
        title: 'Android',
        imagePath: 'assets/techLogos/android.png',
      },
      {
        title: 'IOS',
        imagePath: 'assets/techLogos/ios.png',
      },
      // {
      //   title: 'Wearable',
      //   imagePath: 'assets/techLogos/wearable.png',
      // },
      // {
      //   title: 'TV',
      //   imagePath: 'assets/techLogos/tv.png',
      // },
      {
        title: 'IOT',
        imagePath: 'assets/techLogos/iot.png',
      },
    ],
    technologyItems: [
      {
        id: 0,
        title: 'Mobile',
        subTitle: [
          {
            title: 'Android',
            technologies: [
              { title: 'kotlin', icon: 'assets/techIcon/kotlin.svg' },
              { title: 'JavaScript', icon: 'assets/techIcon/java.png' },
              { title: 'NativeScript', icon: 'assets/techIcon/nativescript.png' },
            ]
          },
          {
            title: 'IOS', technologies: [
              { title: 'Swift', icon: 'assets/techIcon/swift.svg' },
              { title: 'ReactNatvie', icon: 'assets/techIcon/reactnative.png' },
              { title: 'NativeScript', icon: 'assets/techIcon/nativescript.png' },
            ]
          }
        ],
      },

      {
        id: 1,
        title: 'Web',
        subTitle: [
          {
            title: 'FrontEnd',
            technologies: [
              { title: 'JavaScript', icon: 'assets/techIcon/java-script.png' },
              { title: 'TypeScript', icon: 'assets/techIcon/type-script.svg' },
              { title: 'HTML5', icon: 'assets/techIcon/html-icon.png' },
              { title: 'CSS3', icon: 'assets/techIcon/css-icon.png' },
              { title: 'Angular', icon: 'assets/techIcon/angular-icon.png' },
              { title: 'React', icon: 'assets/techIcon/reactnative.png' },
            ]
          },
          {
            title: 'BackEnd',
            technologies: [
              { title: 'Node JS', icon: 'assets/techIcon/node.png' },
              { title: 'Groovy/Grails', icon: 'assets/techIcon/rails.png' },

            ]
          },
          {
            title: 'DataBase',
            technologies: [
              { title: 'MySQL', icon: 'assets/techIcon/mysql.png' },
              { title: 'MSSQL', icon: 'assets/techIcon/mssql.png' },
              { title: 'PostgreSQL', icon: 'assets/techIcon/postgresql.png' },
              { title: 'MongoDB', icon: 'assets/techIcon/mongo.png' },
            ]
          },
        
        ],
      },
      {
        id: 2,
        title: 'Deployement',
        subTitle: [
          {
            title: 'Deployment',

            technologies: [
              { title: 'AWS', icon: 'assets/techIcon/aws.png' },
              { title: 'GCP', icon: 'assets/techIcon/gcp.png' },
              { title: 'Docker', icon: 'assets/techIcon/docker.png' },
              { title: 'Kubernetes', icon: 'assets/techIcon/kubernets.png' },
              // { title: 'Openshift', icon: '' },
              // { title: 'Linux and windows', icon: '' },
            ]
          },

        


        ],
      },
    ]
  }




  ////////////////////////////////////////////////////////////////////////
  //////////////////////////Service Page Data/////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  services = {
    headerSection: {
      title: 'Perfect service suit',
      description: 'We offer full-stack iOS, Android, and web development services together with requirements analysis, quality assurance, and project management. We’re 100% focused on your project and can quickly and easily scale your dedicated team.'
    },



    servicesItems: [
     

  
 
      {
        id: 2,
        title: ['Mobile', 'Development'],
        imagePath: "assets/servicesBg/android2.jpg",
        description: 'We have the expertise to devise and build native, cross-platform and hybrid mobile applications for android and iOS.',
        detailTitle: 'Mobile Application Development',
        detailPageDescription: 'Smartphones have changed the way we interact with data. Having a custom mobile application for your software solutions has never been more important to reach a bigger audience. The sheer magnitude of users for smartphones dictates an impelling need for the mobile presence. We help you build beautiful word-class mobile applications for all mobile platforms - iOS, iPad, Android, tablets',
        keyfeatureHadding: 'Key features',
        keyfeatures: '',
        keyfeatureslist: [
          { title: 'Advanced and responsive UIs', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
          { title: 'Animations and transitions', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
          { title: 'Uncovering native platform capabilities', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
        ],
        howWedo: 'How we do It',
        detailFeatures: [
          { titles: 'Prototype', featureImg: '', detail: [{ point: 'We employ a rigorous design process from simple sketches and flows to developing design prototypes with advanced animations and interactions. You approve of our designs before we start developing them.' }] },
          { titles: 'Develop', featureImg: '', detail: [{ point: 'We pride ourselves in our clean coding and architecture capabilities to develop performant applications.' }] },
          { titles: 'Deliver', featureImg: '', detail: [{ point: 'We deliver products in short cycles using a continuous delivery approach. This delivers rapid value to businesses and helps reduce business risks associated with product releases.' }] }
        ],

      },

      {
        id: 3,
        title: ['Web', 'Development'],
        imagePath: "assets/servicesBg/website.jpg",
        description: 'We offer single-tenant and multi-tenant SaaS application design and development from concept to completion. We have a dedicated team capable of transforming any high-level business idea into a fully functional SaaS application.',
        detailTitle: 'Web/SaaS application development ',
        detailPageDescription: 'Web Application development is our core service which complements all the other services we offer. We have expertise in developing full-stack web applications in various frontend and backend technologies. We offer the following services for Web application development',
        keyfeatureHadding: 'Key features',
        keyfeatures: '',
        keyfeatureslist: [
          { title: 'Advanced and responsive UIs', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
          { title: 'Animations and transitions', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
          { title: 'Uncovering native platform capabilities', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
        ],
        howWedo: 'Working Phases',
        detailFeatures: [
          { titles: 'Conceptualization', featureImg: '', detail: [{ point: 'We can formulate any high-level business idea into low-level software specifications.  We convert these specifications into the backend and database architecture and frontend UI/UX design. We also have expertise in devising and developing microservice-based application architecture.' }] },
          { titles: 'Development', featureImg: '', detail: [{ point: 'Our development team takes on the challenge of developing the exact design conceptualized from the high-level business requirements. We follow the agile methodology to incrementally build the features with fortnightly sprint plans. This ensures continuous delivery and reduces the time-to-market for individual features that can be independently tested and used.' }] },
          { titles: 'Re-engineering', featureImg: '', detail: [{ point: 'Having a legacy software in your organization can be a bit of a hassle to maintain and meet the latest security and performance requirements. We re-engineer the complete solutions to meet the latest business requirements and the latest security standards.' }] },
          { titles: 'Maintenance & support', featureImg: '', detail: [{ point: 'We offer support and maintenance for any software developed in any tech stack with various SLA uptimes based on the support package. Our ability to customize the solutions and develop add-ons on the existing solutions can also prove to be a vital service for everchanging software industry dynamics.' }] },
          { titles: 'Quality Assurance', featureImg: '', detail: [{ point: 'We automate the test cases from the development to the staging and production levels. We follow the TDD approach for solution development hence devising unit and integration tests along with the development of the product. We also write end-to-end test cases for a finished product to automatically assure the quality. ' }] },
        ]
      },

      {
        id: 4,
        title: ['Deployment', '& Automation'],
        imagePath: "assets/servicesBg/datacenter.jpg",
        description: 'DevUnleash excels in automating your development and deployment needs. We can set up the complete infrastructure for your deployment models on the cloud and on-premise and automate it with the latest CI/CD techniques.',
        detailTitle: 'Deployment and Automation',
        detailPageDescription: 'We tackle all the deployment needs of our customers. We design the complete deployment infrastructure with both the single A-Z and multi A-Z topologies for high availability in multiple zones. We have expertise in scaling solutions horizontally for better throughput and optimal performance. We adhere to the 12-factor application development paradigm to leverage the inherent scalability of the platforms. ',
        keyfeatureHadding: 'Automation',
        keyfeatures: 'Automation increases developer productivity by reducing feedback cycle time. Setting up CI and CD pipelines is crucial to modern development lifecycles of applications. It ensures the zero-downtime upgrades and negligible time-to-market for the new features in your applications. Whether it be devising a complete CI/CD pipeline or automating the testing process in a staging environment for blue-green deployments, we have your needs met. Our automation services include setting up Jenkins or Gitlab CI pipelines with automated artifact management and continuously deploying it on the staging areas. ',

        keyfeatureslist: [
          { title: 'Advanced and responsive UIs', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
          { title: 'Animations and transitions', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
          { title: 'Uncovering native platform capabilities', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },

        ], howWedo: 'Platforms and services',
        detailFeatures: [
          {
            titles: 'Amazon Web Services', featureImg: '',
            detail: [
              { point: ' Elastic Container Service' },
              { point: ' Elastic Beanstalk' },
              { point: ' Relational Database Services' },
              { point: ' Lambda' },
              { point: ' Sagemaker' },
              { point: ' API Gateway' },
              { point: ' Simple Notification/Email/Queue Service' },
              { point: ' Simple Storage Service (S3)' },
            ]
          },
          {
            titles: 'Google Cloud Platform', featureImg: '',
            detail: [
              { point: ' Data Analytics' },
              { point: ' AI and Machine Learning' },
              { point: ' Databases' },
              { point: ' Compute' },
              { point: ' Serverless Computing' },
            ]
          },
          {
            titles: 'Digital Ocean', featureImg: '',
            detail: [
              { point: ' Droplets' },
              { point: ' APIs' },
              { point: ' Databases' },
              { point: ' Spaces' },
            ]
          },
          {
            titles: 'Openshift / OKD', featureImg: '',
            detail: [
              { point: ' Pods and services' },
              { point: ' Volumes' },
              { point: ' Stateful Sets' },
            ]
          },

          {
            titles: 'Tools', featureImg: '',
            detail: [
              { point: ' Docker' },
              { point: ' Kubernetes' },
              { point: ' Ansible' },
              { point: ' Chef' },
              { point: ' Puppet' },
              { point: ' Jenkins' },
              { point: ' GitLab CI' },
            ]
          },
        ]
      },
      {
        id: 5,
        title: ['Testing', ' and QA'],
        imagePath: "assets/servicesBg/testing.jpg",
        description: 'We offer services for load testing on various metrics, security vulnerability testing and E2E functional testing. We also give performance optimization support and vulnerability removal consultation. ',
        detailTitle: 'Testing and Quality issurance',
        detailPageDescription: 'Testing goes hand in hand with any sort of software development. To ensure the production-grade quality of any application, it must go through rigorous testing from various perspectives. We offer our services for automated testing of the following types',
        keyfeatureHadding: 'Key features',
        keyfeatures: '',
        keyfeatureslist: [
          { title: 'Load Testing', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
          { title: 'Security Vulnerability Testing', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
          { title: 'E2E Functional Testing', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
        ],
        howWedo: '',
        detailFeatures: [
          {
            titles: 'Load Testing', featureImg: '',
            detail: [
              { point: 'If a web application’s performance suffers it can drastically reduce the user base and inflict the business badly. A performant web application, on the other hand, ensures happy customers and better user satisfaction. Our expertise in formulating load testing methods for various performance metrics can prove to be vital for a web application’s success. Our testing includes the following metrics:' },
              { point: '* Response time metrics' },
              { point: '* Error rates' },
              { point: '* Request Rates' },
              { point: '* Server Resource Consumption' },
              { point: '* High Availability' },
            ]
          },
          {
            titles: 'Security Vulnerability Testing', featureImg: '',
            detail: [
              { point: 'Secure data transactions can be very crucial to comply with various data protection standards. For example, GDPR ensures that any app running in the EU which has personal user data must have end-to-end encryption. Failing to provide encrypted communication can cost over €20 million in fines. Data breaches can also cost a fortune if solutions are vulnerable and prone to attacks. We provide vulnerability and security testing for web applications to minimize the attack surface and ensure data safety. ' },]
          },
          { titles: 'E2E Functional Testing', featureImg: '', detail: [{ point: 'We automate the end-to-end functional tests to incorporate them in the CI/CD pipeline. We have expertise in writing automated test cases with Selenium (general purpose), Protractor (For Angular), Cypress (for React) and Detox (for react-native). These tests ensure the proper functionality and off-load any manual testing effort which is inherently error-prone. ' }] },
        ],
      },
    
      {
        id: 8,
        title: ['UI/UX', ' Design'],
        imagePath: "assets/servicesBg/uxdesign.jpg",
        description: 'We provide top-notch UI/UX development services. Get an eye-catching look and feel for your solutions, increase your user interaction and drive sales.',
        detailTitle: 'UI/ UX Design',
        detailPageDescription: 'Creating behavioral user experience is a key to satisfied customers and hence increased adoption of your product. Our UX team caters to all your design needs by researching your business domain and creating specific designs that can fulfill your users business niche with minimum interaction. We excel in designing your abstract ideas onto the screen with the best possible user journey.',
        keyfeatureHadding: '',
        keyfeatures: "We create and adopt UI/UX design to all the popular and rare gadgets and devices, ensuring the pixel-perfect image without any impact on functionality. We help businesses to enhance their market position through useful and thoughtful UI/UX solutions which suit industries' individual needs. It can be a convenient landing page for the conversion rate optimization or a company’s corporate site; from the very first welcome page to a deep, mindful, and optimal app's concept, we provide our end to end services. Our web and mobile application development services also complement UI/UX design for complete product implementation.",
        keyfeatureslist: [
          { title: '', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
          { title: '', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
          { title: '', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
        ], howWedo: '',
        detailFeatures: [
          { titles: 'Prospective Analysis / Forecasting', featureImg: '', detail: [{ point: 'Forecasting and prospective analysis of data using Machine learning and deep learning algorithms have proved to be very useful for crucial business decisions. Whether you want to invest in some stocks or want to predict the maintenance time of your equipment to ensure minimal downtime, forecasting would definitely assist you to these ends. We offer a predictive analysis of your data with cutting edge deep learning algorithms to dictate your chance-based business needs. ' }] },
          { titles: 'Chatbots and Natural Language Processing', featureImg: '', detail: [{ point: 'The field of NLP has seen strides of success in recent years. Machines are getting more comfortable and confident with the natural language. Employing the NLP techniques in your business can enhance the user experience of your applications. Specifically, in the field of customer care, you can really make an impact with cutting edge NLP algorithms and chatbots. We have experience with developing Level 3 and Level 4 chat assistants to increase your customer satisfaction.' }] },
          { titles: 'Image processing', featureImg: '', detail: [{ point: 'We use deep learning algorithms (CNN + RNN) for image processing and to devise the visual intelligence of machines. We can cater to any of your requirements related to image processing.' }] },
        ],
      },
      {
        id: 9,
        title: ['Project', 'Management'],
        imagePath: "assets/servicesBg/mangment.jpg",
        description: 'No matter whether it is a complex solution implementation, a data migration, application integration, or another technology project, DevUnleash project management services deliver the results you aim for.',
        detailTitle: 'Project Management',
        detailPageDescription: 'In every project, we assemble all contributors and business owners and set up an effective environment for collaboration. Clear and frequent communication and alignment on roles and responsibilities are the key to the success of each project and minimize risks and costs.',
        keyfeatureHadding: '',
        keyfeatures: "Scope, budget, planning, and risk management are part of the skills of each project manager. Projects we perform for and with you include clearly defined procedures and industry standards, which enable us to assess project quality, progress, and success. Change and issue management give us a reliable way to spot and resolve any changes or issues that might get in the way. We run projects with full transparency for customers and contribute our expertise gained in many projects to ensure productive collaborations. Throughout the life of a project, our work aims to successfully realize the objectives defined in the project charter or other project initiation documents.",
        keyfeatureslist: [
          { title: '', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
          { title: '', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
          { title: '', icon: 'assets/icons/segments/icon-account-710637b2fd56e67b3ba6b3d9d1b06ae331a5f4bac3c67305be8e9ba611cf20b1.svg' },
        ], howWedo: '',
        detailFeatures: [
          { titles: 'Prospective Analysis / Forecasting', featureImg: '', detail: [{ point: 'Forecasting and prospective analysis of data using Machine learning and deep learning algorithms have proved to be very useful for crucial business decisions. Whether you want to invest in some stocks or want to predict the maintenance time of your equipment to ensure minimal downtime, forecasting would definitely assist you to these ends. We offer a predictive analysis of your data with cutting edge deep learning algorithms to dictate your chance-based business needs. ' }] },
          { titles: 'Chatbots and Natural Language Processing', featureImg: '', detail: [{ point: 'The field of NLP has seen strides of success in recent years. Machines are getting more comfortable and confident with the natural language. Employing the NLP techniques in your business can enhance the user experience of your applications. Specifically, in the field of customer care, you can really make an impact with cutting edge NLP algorithms and chatbots. We have experience with developing Level 3 and Level 4 chat assistants to increase your customer satisfaction.' }] },
          { titles: 'Image processing', featureImg: '', detail: [{ point: 'We use deep learning algorithms (CNN + RNN) for image processing and to devise the visual intelligence of machines. We can cater to any of your requirements related to image processing.' }] },
        ],
      },
    
    ]
  }



  ////////////////////////////////////////////////////////////////////////
  //////////////////////////Comapny Page Data/////////////////////////////
  ////////////////////////////////////////////////////////////////////////

  company = {

    headerSection: {
      title: 'We solve your challenges',
      description: 'By putting design and development talent to work, we build products that engage your users and help you achieve your business objectives.'
    },



    steps: [
      { title: 'What we do', description: 'We help businesses create fully fledged solutions that help them achieve their business goals.', icon: 'assets/services/icon-widgets-6ced206712d1a2f4a1f086ee32c2728fc900b05bd1ea93b170ada9488633b57a.svg', btnText: 'See our Services', route: '/services' },
      { title: 'How we do it', description: 'We use modern and efficient technologies and approaches to build stable and scalable applications', icon: 'assets/services/icon-sensor-94d81058fc32a5c1cc0105bafebdce7841f5afd03d77579c257d7153bb95f437.svg', btnText: 'See our TechStack', route: '/technologies' },
      { title: 'What we do', description: 'We were honored to work with numerous brilliant businesses to help them conquer the digital world.', icon: 'assets/services/icon-works-96e0fa59c3fd2d0090bf405e27481666d62ca0c8dbab0d33a34d4324dffa83ff.svg', btnText: 'See our Works', route: '/works' },
    ],

    team: {
      headerSection: {
        title: 'Our Managment Team',
        description: "Our company's leaders decide what Devunleash is about, what direction we want to go, and how we get there."
      },

      teamMembers: [
        {
          id: 0,
          name: 'Team Member 1',
          photo: 'https://image.shutterstock.com/image-photo/portrait-mature-business-woman-smile-260nw-255741205.jpg',
          designation: 'Angular Angular  Angular  Angular  Angular  Angular  Angular  Angular '
        },
        {
          id: 1,
          name: 'Team Member 2',
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ35ZWFcjAPWpTxL9-5P0IrWSVsQZk95zbqGzStn7UxhDz_BKc9&s',
          designation: 'Angular Angular  Angular  Angular  Angular  Angular  Angular  Angular '
        },
        {
          id: 2,
          name: 'Team Member 3',
          photo: 'https://media.gettyimages.com/photos/handsome-young-man-on-white-background-picture-id523478288?b=1&k=6&m=523478288&s=612x612&w=0&h=aFB0B9sh8rI9ljywgWAEY0HuwTmfNwL4Nn3T9GF5tWw=',
          designation: 'Angular Angular  Angular  Angular  Angular  Angular  Angular  Angular '
        },
        {
          id: 3,
          name: 'Team Member 4',
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprCICTaMs2th48DqYclXI2bJAwmtUiGPF-psJawLhnu3qjLgO&s',
          designation: 'Angular Angular  Angular  Angular  Angular  Angular  Angular  Angular '
        },
        {
          id: 4,
          name: 'Team Member 5',
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNbQaAy6wEzyHH2vmMI2NuOx72NZa2KZHEwgAUAU5l14GXnEM&s',
          designation: 'Angular Angular  Angular  Angular  Angular  Angular  Angular  Angular '
        },
        {
          id: 5,
          name: 'Team Member 6',
          photo: 'https://image.freepik.com/free-photo/portrait-handsome-man-isolated-white-background_38019-394.jpg',
          designation: 'Angular Angular  Angular  Angular  Angular  Angular  Angular  Angular '
        },
        {
          id: 6,
          name: 'Team Member 7',
          photo: 'https://backgrounddownload.com/wp-content/uploads/2018/09/man-on-white-background-1.jpg',
          designation: 'Angular Angular  Angular  Angular  Angular  Angular  Angular  Angular '
        },
        {
          id: 7,
          name: 'Team Member 8',
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNpQ885bH7dq2KQ0miH0nQXUzXGMQT56W0p1B6sZnisJfw-FT6Ew&s',
          designation: 'Angular Angular  Angular  Angular  Angular  Angular  Angular  Angular '
        }
      ]

    }

  }



  getSingleItem(id) {
    return this.services.servicesItems[id];
  }

  getWorkId(id) {
    return this.workPage.workitems[id];
  }

  getWorkByTitle(title) {
    if (title) {
      let dataArray = [...this.workPage.morewrkingPage, ...this.workPage.workitems]
      return dataArray.filter((item) => {
        const letItem = item.title.replace(/ /g, "_");
        return letItem === title;
      });
    }
  }

}

