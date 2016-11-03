export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() =>
      resolve({
        name: 'Alex DeCapri',
        avatar: 'https://pbs.twimg.com/profile_images/644220637288894464/NiaqqCt1_bigger.jpg',
        uid: 'alexdecapri',
      }), 2000)
  })
}

export function checkIfAuthed (store) {
  //ignore firebase for now
  return store.getState().isAuthed
}
