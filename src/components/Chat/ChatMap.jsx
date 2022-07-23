import React, { useEffect, useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

const ChatMap = ({location}) => {
  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()

  const { kakao } = window;

  useEffect(() => {
    if (!map) return
    const ps = new kakao.maps.services.Places()

    // const placesSearchCB = (data, status, _pagination) => {
    //   if (status === window.kakao.maps.services.Status.OK) {
    //     // 정상적으로 검색이 완료됐으면
    //     // 검색 목록과 마커를 표출

    //     displayPlaces(data);
    //   } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
    //     alert('정확한 커피숍 이름을 입력해주세요');
    //     return;
    //   } else if (status === window.kakao.maps.services.Status.ERROR) {
    //     alert('검색 결과 중 오류가 발생했습니다.');
    //     return;
    //   }
    // };

    ps.keywordSearch(`${location}`, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds()
        let markers = []

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: {placename:data[i].place_name, placeurl:  data[i].place_url}
          })
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }
        setMarkers(markers)

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds)
      }
    })
  }, [map])

  return (
    <Map // 로드뷰를 표시할 Container
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
      level={3}
      onCreate={setMap}
    >
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info &&info.content === marker.content && (
            <div>
            <div style={{color:"#000"}}>{marker.content.placename}</div>
            <a href="' +${marker.content.placeurl} +'"></a>
            </div>
          )}
        </MapMarker>
      ))}
    </Map>
  )
          }
export default ChatMap