document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    
    if (!file) {
      console.error('No file selected.');
      return;
    }
  
    const reader = new FileReader();
    
    reader.onload = function(event) {
      const str = event.target.result.trim();
      const result = findFirstRecurring(str);
      if (result) {
        console.log(result);
        document.getElementById('res').textContent = JSON.stringify(result);
      } else {
        document.getElementById('res').textContent = "No character found.";
      }
    };
    
    reader.readAsText(file);

  });
  
  
  function findFirstRecurring(str, idx = 0, obj = {}) {
    if (idx === str.length) {
      return null;
    }
    
    const char = str[idx];
    
    if (obj[char] !== undefined) {
      return { [char]: [obj[char], idx] };
    }
    
    obj[char] = idx;
    
    return findFirstRecurring(str, idx + 1, obj);
  }
  