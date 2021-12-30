export const genres = [
  { id: '7bsfu843hkj98fu734601', name: 'Action' },
  { id: '7bsfu843hkj98fu734602', name: 'Sci-Fi' },
  { id: '7bsfu843hkj98fu734603', name: 'Comedy' },
  { id: '7bsfu843hkj98fu734604', name: 'Thriller' },
];

export function getGenres() {
  return genres.filter((genre) => genre);
}
