import { Badge } from "@/components/atoms/Badge";
import { CardSection } from "@/components/molecules/CardSection";
import { SimpleList } from "@/components/organism/SimpleList";
import { Layout } from "@/Layout";
import Link from "next/link";
import { BsLink } from "react-icons/bs";

const Home = () => {
  return (
    <Layout>
      <CardSection title="🙂 자기소개">
        안녕하세요. 저는 하이노크 에서 소프트웨어 개발자로 일하고 있는 김도안
        입니다.
      </CardSection>
      <CardSection title="🗓️ 경력사항">
        <div>
          <b>하이노크</b> <br />
          - 2024.06 ~ 현재 <br />
          - WOK 스쿼드 · 제품개발팀 <br />
          - 노크 백오피스 어드민, 사장님 앱 개발 <br />
        </div>
        <br />
        <div>
          <b>부릉</b> <br />
          - 2022.06 ~ 2024.06 (2년) <br />
          - Web Frontend · 클라이언트팀 <br />
          - 부릉 백오피스 어드민, 사장님 사이트 개발 및 유지보수 <br />
        </div>
        <br />
        <div>
          <b>쓰리뷰</b> <br />
          - 2019.12 ~ 2022.06 (2년 6개월) <br />
          - 대리 · 제품개발팀 <br />
          - MES 솔루션 개발 <br />
        </div>
      </CardSection>
      <CardSection title="🪪 자격증">
        <b>정보처리기사</b> <br />
        2018.06 취득
      </CardSection>
      <SimpleList title="🚀 프로젝트">
        <SimpleList.Item>
          <SimpleList.ItemTitle>노크 어드민 개발</SimpleList.ItemTitle>
          <i>2023.10 ~ 현재</i>
          <p>
            로컬 커머스 사업으로 고객과 상점을 연결하고, 부릉을 통해 배달을
            수행하는 노크의 기능을 관리하는 어드민 제품입니다.
          </p>
          <SimpleList.ItemRows>
            <Badge backgroundColor="#5dca88">TypeScript</Badge>
            <Badge backgroundColor="#5dca88">React</Badge>
            <Badge backgroundColor="#5dca88">Next.js(page)</Badge>
            <Badge backgroundColor="#5dca88">tanstack-query</Badge>
            <Badge backgroundColor="#5dca88">react-hook-form</Badge>
          </SimpleList.ItemRows>
          <SimpleList.ItemRows>
            <Badge backgroundColor="#5dca88">Spring Boot</Badge>
            <Badge backgroundColor="#5dca88">Java</Badge>
            <Badge backgroundColor="#5dca88">Gradle</Badge>
          </SimpleList.ItemRows>
        </SimpleList.Item>
        <SimpleList.Item>
          <SimpleList.ItemTitle>
            노크 사장님 앱 개발
            <Link
              href="https://play.google.com/store/apps/details?id=io.knowk.store.prod"
              target="_blank"
            >
              <BsLink color="#fff" />
            </Link>
          </SimpleList.ItemTitle>
          <i>2024.06 ~ 현재</i>
          <p>
            노크의 사장님을 위한 앱으로, 주문관리, 매출관리, 상점관리 등의
            기능을 제공합니다.
          </p>
          <SimpleList.ItemRows>
            <Badge backgroundColor="#5dca88">Flutter</Badge>
            <Badge backgroundColor="#5dca88">GetX</Badge>
            <Badge backgroundColor="#5dca88">Firebase</Badge>
          </SimpleList.ItemRows>
        </SimpleList.Item>
        <SimpleList.Item>
          <SimpleList.ItemTitle>
            뭐먹지 숏폼 플레이어 개발
            <Link
              href="https://apps.apple.com/kr/app/%EB%85%B8%ED%81%AC-%EB%AC%B4%EC%A1%B0%EA%B1%B4-%EB%AC%B4%EB%A3%8C%EB%B0%B0%EB%8B%AC/id6502757173"
              target="_blank"
            >
              <BsLink color="#fff" />
            </Link>
          </SimpleList.ItemTitle>
          <i>2024.10 ~ 2024.11</i>
          <p>
            노크 주문앱 내에서 웹뷰를 통해 유튜브 숏폼을 재생할 수 있도록 제작된
            웹뷰 숏츠 플레이어 제품입니다.
          </p>
          <SimpleList.ItemRows>
            <Badge backgroundColor="#5dca88">TypeScript</Badge>
            <Badge backgroundColor="#5dca88">React</Badge>
            <Badge backgroundColor="#5dca88">Next.js(page)</Badge>
          </SimpleList.ItemRows>
        </SimpleList.Item>
        <SimpleList.Item>
          <SimpleList.ItemTitle>부릉 어드민 개발</SimpleList.ItemTitle>
          <i>2022.09 ~ 2023.10</i>
          <p>
            부릉의 핵심 기능을 관리하는 백오피스 어플리케이션입니다. 부릉의
            임직원이 라스트마일의 이해 관계자인 상점, 라이더, 고객들의 정보를
            관리하고, 운영하며 소통할 수 있는 어드민 제품입니다.
          </p>
          <SimpleList.ItemRows>
            <Badge backgroundColor="#5dca88">TypeScript</Badge>
            <Badge backgroundColor="#5dca88">React</Badge>
            <Badge backgroundColor="#5dca88">MobX</Badge>
            <Badge backgroundColor="#5dca88">SheetJS</Badge>
          </SimpleList.ItemRows>
        </SimpleList.Item>
        <SimpleList.Item>
          <SimpleList.ItemTitle>MES 솔루션 개발</SimpleList.ItemTitle>
          <i>2019.12 ~ 2020.12</i>
          <p>
            소성가공업체의 공정 프로세스를 대상으로 하여, 생산관리에 필요한 필수
            기능을 공통화한 MES 제품입니다.
          </p>
          <SimpleList.ItemRows>
            <Badge backgroundColor="#5dca88">C#</Badge>
            <Badge backgroundColor="#5dca88">Winform</Badge>
            <Badge backgroundColor="#5dca88">React</Badge>
          </SimpleList.ItemRows>
          <SimpleList.ItemRows>
            <Badge backgroundColor="#5dca88">Spring Boot</Badge>
            <Badge backgroundColor="#5dca88">Java</Badge>
            <Badge backgroundColor="#5dca88">RabbitMQ</Badge>
            <Badge backgroundColor="#5dca88">MS-SQL</Badge>
          </SimpleList.ItemRows>
        </SimpleList.Item>
      </SimpleList>
      <SimpleList title="🚀 사이드 프로젝트">
        <SimpleList.Item>
          <SimpleList.ItemTitle>
            <Badge backgroundColor="#F6E24B">개발 동아리</Badge> 언제사
            <Link
              href="https://apps.apple.com/us/app/%EC%96%B8%EC%A0%9C%EC%82%AC-%EC%BF%A0%ED%8C%A1-%EA%B0%80%EA%B2%A9-%EB%B3%80%EB%8F%99-%EC%95%8C%EB%A6%BC-%EC%B5%9C%EC%A0%80%EA%B0%80-%EC%95%8C%EB%A6%BC/id6502254707"
              target="_blank"
            >
              <BsLink color="#fff" />
            </Link>
          </SimpleList.ItemTitle>
          <i>2024.01 ~ 현재</i>
          <p>
            시시각각 변하는 쿠팡 상품 가격정보를 주기적으로 가져와서 가격 정보를
            차트로 제공하고, 사용자가 원하는 가격에 도달하면 알림을 보내주는
            어플리케이션입니다.
          </p>
          <SimpleList.ItemRows>
            <Badge backgroundColor="#5dca88">Flutter</Badge>
            <Badge backgroundColor="#5dca88">GetX</Badge>
            <Badge backgroundColor="#5dca88">Firebase</Badge>
          </SimpleList.ItemRows>
          <SimpleList.ItemRows>
            <Badge backgroundColor="#5dca88">Spring Boot</Badge>
            <Badge backgroundColor="#5dca88">Spring Batch</Badge>
          </SimpleList.ItemRows>
        </SimpleList.Item>
      </SimpleList>
      <SimpleList title="🔮 업무 경험">
        <SimpleList.Item>
          <SimpleList.ItemTitle>
            <Badge backgroundColor="#B1FB4F">노크 어드민</Badge> MSA에 따른 여러
            도메인의 응답 값을 조작해야하는 문제
          </SimpleList.ItemTitle>
          <p>
            Next.js의 서버 사이드를 BFF로 활용하여, 여러 리소스 서버의 응답을
            하나로 aggregate하는 방법으로, 각 도메인의 응답 값을 조합하여
            클라이언트에 핏한 응답을 제공하는 방법을 사용하여 해결했습니다.
          </p>
        </SimpleList.Item>
        <SimpleList.Item>
          <SimpleList.ItemTitle>
            <Badge backgroundColor="#B1FB4F">노크 어드민</Badge> 구글
            워크스페이스 기반 사용자 인증 구현
          </SimpleList.ItemTitle>
          <p>
            Google SSO + KeyCloak 기반의 사용자 인증 정보를 구현했습니다.
            next-auth를 통해 토큰 정보(만료, 갱신, 인증)에 대한 정보를
            암호화하여 쿠키에 저장하였고, Next.js의 middleware를 활용하여 api
            호출 또는 router 이동 간에 사용자를 인증하며, 갱신하도록
            구현했습니다.
          </p>
        </SimpleList.Item>
        <SimpleList.Item>
          <SimpleList.ItemTitle>
            <Badge backgroundColor="#5dca88">부릉 어드민</Badge> ISMS 품질 유지
            작업
          </SimpleList.ItemTitle>
          <p>
            개인정보처리방침에 따라 모든 개발 과정에 개인정보 마스킹 처리 및
            접근 권한에 따른 인가 처리를 진행했습니다.
          </p>
        </SimpleList.Item>
        <SimpleList.Item>
          <SimpleList.ItemTitle>
            <Badge backgroundColor="#B1FB4F">노크 어드민</Badge> jest/nock
            테스트 도입
          </SimpleList.ItemTitle>
          <p>
            서버 스펙과 동기화 되지 않아 발생하는 사이드 이펙트를 방지 하기 위해
            nock와 jest를 활용하여 비즈니스 로직을 테스트하는 hook 테스트를
            도입했습니다.
          </p>
        </SimpleList.Item>
        <SimpleList.Item>
          <SimpleList.ItemTitle>
            <Badge backgroundColor="#B1FB4F">노크 어드민</Badge> 1,200개 상점에
            대한 온보딩 데이터(상점, 상품, 옵션) 마이그레이션
          </SimpleList.ItemTitle>
          <p>
            대부분의 상점은 배달의민족에 입점되어 있는 것을 확인하였고, 네이버
            지도에 배달의민족 주문하기 연동이 되어있는 점을 발견하여 배달의민족
            OpenAPI 정보를 획득하여 노크 규격에 맞게 데이터를 가공하여 1,200개
            상점에 대한 데이터를 성공적으로 마이그레이션 했습니다.
          </p>
        </SimpleList.Item>
        <SimpleList.Item>
          <SimpleList.ItemTitle>
            <Badge backgroundColor="#B1FB4F">노크 어드민</Badge> SSR 렌더링
            페이지에서 이전 페이지 스크롤 위치 유지
          </SimpleList.ItemTitle>
          <p>
            beforeunload 이벤트를 이용하여 이전 페이지의 스크롤 포지션을 세션
            스토리지에 저장하고, 스크롤을 유지시킬 수 있는 hook을 구현하였고,
            서버사이드의 데이터가 매번 갱신되어 두번째 페이징 이상의 스크롤을
            감지 못하는 문제를 해결하기 위해 뒤로가기 시 query param을 이용하여
            해당 데이터가 이미 로드되었는지 여부를 넘겨주어 데이터를 재갱신 하지
            않도록 방지하였습니다.
          </p>
        </SimpleList.Item>
      </SimpleList>
    </Layout>
  );
};

export default Home;
