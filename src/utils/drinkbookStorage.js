const STORAGE_KEY = "talenttalk-drinkbook";

export function getDrinkbookEntries() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) return [];

  try {
    return JSON.parse(saved);
  } catch (error) {
    console.error("Failed to parse drinkbook entries:", error);
    return [];
  }
}

export function saveDrinkbookEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function addDrinkbookEntry(entry) {
  const currentEntries = getDrinkbookEntries();
  const updatedEntries = [entry, ...currentEntries];
  saveDrinkbookEntries(updatedEntries);
  return updatedEntries;
}

export function deleteDrinkbookEntry(entryId) {
  const currentEntries = getDrinkbookEntries();
  const updatedEntries = currentEntries.filter((entry) => entry.id !== entryId);
  saveDrinkbookEntries(updatedEntries);
  return updatedEntries;
}
