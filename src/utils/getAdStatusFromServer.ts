// 최대한 간단한 예제를 위해 axios 모듈 대신 로컬스토리지를 활용합니다..

export default async function getAdStatusFromServer() {
  console.log("[lOG] - 광고 시청 : ", new Date().toUTCString());
  let watched = JSON.parse(localStorage.getItem("watched") ?? "false");
  const response = { watched };
  return response;
}
