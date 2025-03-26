document.addEventListener("DOMContentLoaded", () => {
  const editor = document.getElementById("editor");
  const preview = document.getElementById("preview");

  function updatePreview() {
    const markdown = editor.value;
    const html = marked(markdown, { breaks: true });
    preview.innerHTML = html;
  }

  editor.addEventListener("input", updatePreview);

  // Initial load
  const defaultMarkdown = `
  # Heading 1
  ## Heading 2
  [Link](https://www.google.com)
  \`inline code\`
  \`\`\`
  // Code block
  const greeting = 'Hello';
  console.log(greeting);
  \`\`\`
   **Bold text**
 - This is a list item.
- This list is unordered.

1. This is a list item.
2. This list is ordered.
  > Blockquote
  ![Image](https://images.unsplash.com/photo-1742576948659-3c630862a38d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
 
      `;
  editor.value = defaultMarkdown;
  updatePreview();
});
