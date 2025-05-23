// Converti pks.csv en tableau JavaScript
const pkData = [
  // Extrait minimal (à compléter avec toutes tes données CSV !)
  { code_ligne: "4000", pk: -0.8, lat: 49.0669620213599, lon: 3.49515778402815 },
  // Ajoute ici tous les autres points
];

// Retourne le PK le plus proche
function findNearestPK(lat, lon) {
  let minDist = Infinity;
  let nearest = null;
  for (const point of pkData) {
    const d = Math.hypot(point.lat - lat, point.lon - lon);
    if (d < minDist) {
      minDist = d;
      nearest = point;
    }
  }
  return minDist < 0.001 ? nearest : null; // rayon d’environ 100m
}