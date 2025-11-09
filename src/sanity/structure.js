// src/sanity/structure.js (Naya Code)

export const structure = (S) =>
  S.list()
    .title('Content') // Left menu ka main title
    .items([
      // ✅ 1. Apna "Project" schema yahaan add karein
      S.documentTypeListItem('project').title('Projects'), 
      
      // Ye divider line hai (optional, par saaf lagta hai)
      S.divider(), 

      // Blog waali cheezein (jo pehle se thin)
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('category').title('Categories'),
    ])