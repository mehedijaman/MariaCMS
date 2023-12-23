// Format text to lowercase
export function toLowerCase(text) {
    return text.toLowerCase();
  }

  // Format text to uppercase
  export function toUpperCase(text) {
    return text.toUpperCase();
  }

  // Format text to title case
  export function toTitleCase(text) {
    return text.replace(/\w\S*/g, function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  }
