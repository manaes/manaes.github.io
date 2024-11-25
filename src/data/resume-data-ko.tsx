import IconGithub from '@/components/icon/Github';

export const RESUME_DATA_KO = {
  name: '박주완',
  initials: '주완',
  location: '대한민국 인천광역시 (한국 표준시)',
  locationLink: 'https://maps.app.goo.gl/rVFn2kCWCyC4qJbz7',
  about: '신속. 안전 제일주의 iOS 개발자',
  summary:
    '넓은 지식을 가지려 노력하지만, 대부분 손가락 한마디입니다.\n아이디어는 남들보다 빠르게 배포, 지속적인 피드백&수정이 좋다고 생각합니다.\n안전하게 개발하기 위해서는 테스트가 필수!!\n나를 믿지말고, 자동화 테스트를 믿어라.',
  avatarUrl: 'https://github.com/manaes.png',
  contact: {
    email: 'pakjuwan@naver.com',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/manaes',
        icon: IconGithub,
      }
    ],
  },
  work: [
    {
      company: '코박',
      link: 'https://cobak.co/',
      title: '팀 리더 & iOS 개발',
      start: '2022. 01.',
      end: '2024. 10.',
      description: '블럭체인 뉴스& 커뮤니티 및 블럭체인 지갑 제공 서비스',
      points: [
        'iOS 앱 리팩토링 & 고도화',
        '앱용 멀티체인 블럭체인 지갑 구현 (balance/send/swap/statking 등)',
        '다크모드/로컬라이징/유니버셜(폰&패드)/Code Coverage 80%+',
        '국내/해외 거래소 상장된 CBK 토큰 관련 서비스 기획/개발/운영 (거버넌스/스테이킹/스왑/ICO/IDO 등)',
        'AWS EC2 레거시 서비스 -> Docker로 전환',
        '앱/웹/서버 CI/CD Devops 구축 및 운영 (github action/self-host/docker)',
        'AI 뉴스 요약 및 검색 키워드 생성 서비스 개발 (python/react/docker)',
        '거래소 토큰 상장관련 업무 지원',
      ],
    },
    {
      company: '코드크래프트',
      link: 'https://codecraft.co.kr/',
      title: 'iOS 개발',
      start: '2019. 07.',
      end: '2021. 08.',
      description: '',
      points: [
        '다양한 iOS 프로젝트 진행',
        'LGU+ Webhard/Box 등 웹하드 앱 개발',
        'Lollipop/Glovv 등 소셜 커머스 앱 개발',
        'Winsure/Dambee 등 보험 설계 & 상담사용 앱 개발',
      ],
    },
    {
      company: '후후앤컴퍼니',
      link: 'https://whowho.vp.co.kr/ko/service/whowho/',
      title: 'iOS 개발 리더',
      start: '2017. 10.',
      end: '2019. 05.',
      description: '',
      points: [
        '스펨 의심 전화번호/문자 차단 / 필터링 기능 개발',
        'iOS 위젯 (단축번호/검색/스팸지수 등) 개발',
        '레거시 코드 제거 및 리팩토링 (objective-c + xib 형태에서 swift + storyboard + mvvm 구조로 전환)',
        '30만개 이상의 스팸전화번호를 안정적으로 동기화 / 필터링하기 위한 DB 설계 및 구현 (Coredata + RealmDB)',
        '외부망 접속 금지로 인해, 별도의 내부 CI/CD 구축 (gitlab + jenkins + xcode server)',
      ],
    },
  ],
  skills: ['Swift', 'Objective-C', 'Storyboard', 'SwiftUI', 'RxSwift', 'Combine'],
} as const;
