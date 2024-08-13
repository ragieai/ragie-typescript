# UpdateDocumentFileParams


## Fields

| Field                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file`                                                                                                                                                                                                                                                                                                                              | [File](https://developer.mozilla.org/en-US/docs/Web/API/File) \| [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) \| [components.UpdateDocumentFileParamsFile](../../models/components/updatedocumentfileparamsfile.md)                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                  | The binary file to upload, extract, and index for retrieval. The following file types are supported: Plain Text: `.eml` `.html` `.json` `.md` `.msg` `.rst` `.rtf` `.txt` `.xml`<br/>Images: `.png` `.webp` `.jpg` `.jpeg` `.tiff` `.bmp` `.heic`<br/>Documents: `.csv` `.doc` `.docx` `.epub` `.odt` `.pdf` `.ppt` `.pptx` `.tsv` `.xlsx`. |
| `mode`                                                                                                                                                                                                                                                                                                                              | [components.UpdateDocumentFileParamsMode](../../models/components/updatedocumentfileparamsmode.md)                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | Partition strategy for the document. Options are `'hi_res'` or `'fast'`. Only applicable for rich documents such as word documents and PDFs. When set to `'hi_res'`, images and tables will be extracted from the document. `'fast'` will only extract text. `'fast'` may be up to 20x faster than `'hi_res'`.                      |