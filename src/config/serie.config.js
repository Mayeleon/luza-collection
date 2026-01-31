const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://mayeleon.github.io",
  "baseurl": "/luza-collection",
  "title": "LUZA",
  "subtitle": "Archivo digital de su obra",
  "credits": "Por Maye León",
  "copyright": "Todos los derechos reservados, 2026",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "label",
        "label": "Label",
        "type": "text"
      },
      {
        "key": "autor",
        "label": "Autor",
        "type": "text"
      },
      {
        "key": "descripcion",
        "label": "Descripcion",
        "type": "text"
      },
      {
        "key": "fecha",
        "label": "Fecha",
        "type": "text"
      },
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text"
      },
      {
        "key": "tipo_principal",
        "label": "Tipo_principal",
        "type": "text"
      },
      {
        "key": "derechos",
        "label": "Derechos",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "autor",
      "descripcion",
      "fecha",
      "ciudad",
      "tipo_principal",
      "derechos"
    ]
  }
};
export default config;