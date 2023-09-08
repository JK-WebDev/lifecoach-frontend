"use strict";

const QUEUE_KEY = "historyQueue";

const history = {};

history.setQueue = (queue) => {
  const queueJSON = JSON.stringify(queue);
  localStorage.setItem(QUEUE_KEY, queueJSON);
};

history.getEntries = (entryCount = 10) => {
  const historyQueueJSON = localStorage.getItem(QUEUE_KEY);
  console.log("getEntries", historyQueueJSON);
  return JSON.parse(historyQueueJSON)?.slice(0, entryCount) || [];
};

history.saveEntry = (historyEntry) => {
  if (!historyEntry) return history.getEntries();
  const currentHistory = history.getEntries(9);
  const updatedHistory = [historyEntry, ...currentHistory];
  history.setQueue(updatedHistory);
  console.log("saveEntry", { historyEntry, updatedHistory });
  return updatedHistory;
};

history.deleteEntry = (historyEntry) => {
  const currentHistory = history.getEntries();
  const updatedHistory = currentHistory.filter((entry) =>
    Object.keys(entry).every((key) => entry?.[key] !== historyEntry?.[key])
  );
  console.log({ currentHistory, updatedHistory, historyEntry });
  history.setQueue(updatedHistory);
  console.log("deleteEntry", { historyEntry, updatedHistory });
  return updatedHistory;
};

export default history;
