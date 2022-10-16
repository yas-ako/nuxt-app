// interface Groupe {
//   id: number;
//   name: string;
//   place: string;
//   displayName: string;
//   groupType: number;  //学年団体=0, 有志団体=1
//   detail: Event;
// }

// interface Event {
//   eventType: number; //後夜祭=0，T前=1
// }

const groupsData = []

export function returnGroupes() {
  const groups = []
  const group = []

  const fetchGroupes = () => {
    groups.value = groupsData;
  };

  const fetchGroupe = (name) => {
    group.value = groupsData.find((name) => name === group.name) || null;
  }

  return {
    groups,
    group,
    fetchGroupes,
    fetchGroupe
  }
}