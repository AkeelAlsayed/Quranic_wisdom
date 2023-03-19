export async function fetchQuranData(Id, selectedAudioEdition) {
  try {
    const response = await fetch(
      `https://api.alquran.cloud/v1/surah/${Id}/${selectedAudioEdition}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Quran data: ", error);
    throw error;
  }
}
