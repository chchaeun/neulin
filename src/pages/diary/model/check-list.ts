const getTagList = (list: string[], tag: string) => {
  return list.map((content, index) => {
    return {
      id: index,
      tag,
      content,
    };
  });
};

const morningCheckList = ["6~8시간 잠을 자요", "일어나서 물 한 잔을 마셔요"];
const lunchCheckList = ["등과 허리를 풀어줘요"];
const eveningCheckList = ["한 번 이상 웃어요"];

const mealCheckList = [
  "잡곡밥을 먹어요",
  "채소를 먹어요",
  "식후 10분 산책해요",
  "꼭꼭 씹어먹어요",
];

const checkList = {
  아침: [
    ...getTagList(morningCheckList, "생활"),
    ...getTagList(mealCheckList, "식사"),
  ],
  점심: [
    ...getTagList(lunchCheckList, "생활"),
    ...getTagList(mealCheckList, "식사"),
  ],
  저녁: [
    ...getTagList(eveningCheckList, "생활"),
    ...getTagList(mealCheckList, "식사"),
  ],
};

export { checkList };
