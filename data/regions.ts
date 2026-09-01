export type Region = {
  slug: string
  name: string
  province: string
  nearby: string[]
  focus: string[]
  localAreas: string[]
}

export const regions: Region[] = [
  {slug: 'gangnam', name: '강남', province: '서울', nearby: ['seocho', 'songpa'], focus: ['오픽', '아이엘츠', '토플', '영어인터뷰'], localAreas: ['역삼', '삼성', '대치', '논현', '청담']},
  {slug: 'seocho', name: '서초', province: '서울', nearby: ['gangnam', 'songpa'], focus: ['영어회화', '아이엘츠', '토플', '유학영어'], localAreas: ['서초', '반포', '방배', '양재']},
  {slug: 'songpa', name: '송파', province: '서울', nearby: ['gangnam', 'seongnam'], focus: ['영어회화', '오픽', '국제학교', '토플'], localAreas: ['잠실', '문정', '가락', '송파']},
  {slug: 'mapo', name: '마포', province: '서울', nearby: ['gangseo'], focus: ['영어회화', '직장인 영어', '영어인터뷰'], localAreas: ['공덕', '상암', '합정', '홍대']},
  {slug: 'gangseo', name: '서울강서', province: '서울', nearby: ['mapo', 'bucheon'], focus: ['영어회화', '오픽', '토익스피킹'], localAreas: ['마곡', '발산', '화곡', '등촌']},
  {slug: 'bundang', name: '분당', province: '경기', nearby: ['seongnam', 'pangyo', 'yongin'], focus: ['영어회화', '아이엘츠', '토플', '영어라이팅', '유학영어'], localAreas: ['정자', '서현', '수내', '미금']},
  {slug: 'pangyo', name: '판교', province: '경기', nearby: ['bundang', 'seongnam', 'yongin'], focus: ['직장인 영어회화', '비즈니스 영어', '영어인터뷰'], localAreas: ['판교역', '백현', '삼평', '운중']},
  {slug: 'suwon', name: '수원', province: '경기', nearby: ['yongin', 'anyang'], focus: ['영어회화', '오픽', '토익스피킹', '토익', '지텔프'], localAreas: ['영통', '광교', '인계동', '망포', '매탄']},
  {slug: 'yongin', name: '용인', province: '경기', nearby: ['suwon', 'bundang', 'dongtan'], focus: ['영어회화', '국제학교', '유학영어', '토플'], localAreas: ['수지', '죽전', '기흥', '동백']},
  {slug: 'dongtan', name: '동탄', province: '경기', nearby: ['suwon', 'yongin'], focus: ['영어회화', '오픽', '유학영어'], localAreas: ['동탄1', '동탄2', '영천동', '청계동']},
  {slug: 'seongnam', name: '성남', province: '경기', nearby: ['bundang', 'pangyo', 'songpa'], focus: ['영어회화', '오픽', '토익스피킹'], localAreas: ['수정구', '중원구', '분당구']},
  {slug: 'goyang', name: '고양', province: '경기', nearby: ['ilsan'], focus: ['영어회화', '오픽', '토익스피킹'], localAreas: ['덕양', '화정', '행신', '삼송']},
  {slug: 'ilsan', name: '일산', province: '경기', nearby: ['goyang'], focus: ['영어회화', '국제학교', '유학영어'], localAreas: ['주엽', '정발산', '백석', '마두']},
  {slug: 'anyang', name: '안양', province: '경기', nearby: ['pyeongchon', 'suwon'], focus: ['영어회화', '오픽', '토익스피킹'], localAreas: ['안양역', '범계', '인덕원', '평촌']},
  {slug: 'pyeongchon', name: '평촌', province: '경기', nearby: ['anyang'], focus: ['영어회화', '토플', '아이엘츠', '유학영어'], localAreas: ['평촌역', '범계', '호계', '귀인']},
  {slug: 'bucheon', name: '부천', province: '경기', nearby: ['gangseo', 'incheon'], focus: ['영어회화', '오픽', '토익스피킹'], localAreas: ['중동', '상동', '송내', '부천역']},
  {slug: 'songdo', name: '송도', province: '인천', nearby: ['incheon', 'cheongna'], focus: ['영어회화', '아이엘츠', '토플', '국제학교', '유학영어'], localAreas: ['송도동', '센트럴파크', '국제업무지구']},
  {slug: 'cheongna', name: '청라', province: '인천', nearby: ['incheon', 'songdo'], focus: ['영어회화', '국제학교', '유학영어', '토플'], localAreas: ['청라국제도시', '가정', '루원시티']},
  {slug: 'incheon', name: '인천', province: '인천', nearby: ['songdo', 'cheongna'], focus: ['영어회화', '오픽', '토익스피킹', '아이엘츠'], localAreas: ['남동구', '연수구', '부평구', '서구']},
  {slug: 'daejeon', name: '대전', province: '대전', nearby: ['sejong', 'cheonan', 'cheongju'], focus: ['영어회화', '오픽', '토익스피킹', '아이엘츠'], localAreas: ['둔산', '유성', '도안', '관저']},
  {slug: 'sejong', name: '세종', province: '세종', nearby: ['daejeon', 'cheongju', 'cheonan'], focus: ['영어회화', '국제학교', '유학영어', '토플'], localAreas: ['나성', '도담', '어진', '새롬']},
  {slug: 'cheongju', name: '청주', province: '충북', nearby: ['sejong', 'daejeon', 'cheonan'], focus: ['영어회화', '오픽', '토익스피킹', '지텔프', '아이엘츠'], localAreas: ['흥덕구', '청원구', '서원구', '상당구']},
  {slug: 'cheonan', name: '천안', province: '충남', nearby: ['daejeon', 'sejong', 'cheongju'], focus: ['영어회화', '오픽', '토익스피킹', '지텔프'], localAreas: ['불당', '두정', '신부', '성정']},
  {slug: 'busan', name: '부산', province: '부산', nearby: ['daegu'], focus: ['영어회화', '아이엘츠', '토플', '오픽'], localAreas: ['서면', '해운대', '센텀', '동래']},
  {slug: 'daegu', name: '대구', province: '대구', nearby: ['busan'], focus: ['영어회화', '오픽', '토익스피킹', '지텔프'], localAreas: ['동성로', '수성구', '달서구', '동구']},
]

export function getRegion(slug: string) { return regions.find((region) => region.slug === slug) }
