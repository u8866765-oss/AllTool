export type Tool={slug:string;name:string;description:string;category:string;icon:string;kind:string;keywords:string};
export const tools:Tool[]=[
["image-compressor","Image Compressor","Reduce image file size in your browser while keeping quality.","Image Tools","🗜️","image","compress image online jpg png webp"],
["image-resizer","Image Resizer","Resize an image to your preferred dimensions.","Image Tools","📐","image","resize image online pixels"],
["jpg-to-png","JPG to PNG","Convert JPG images to PNG format in your browser.","Image Tools","🖼️","image","jpg to png converter"],
["png-to-jpg","PNG to JPG","Convert PNG images to JPG format.","Image Tools","🌄","image","png to jpg converter"],
["image-cropper","Image Cropper","Export an image to custom dimensions.","Image Tools","✂️","image","crop image online"],
["qr-code-generator","QR Code Generator","Prepare text or a URL for QR code generation.","Generator Tools","▦","qr","free qr code generator"],
["password-generator","Password Generator","Generate a strong random password locally.","Generator Tools","🔐","password","random strong password generator"],
["uuid-generator","UUID Generator","Generate a random UUID in one click.","Generator Tools","🧬","uuid","uuid v4 generator"],
["word-counter","Word Counter","Count words, characters, sentences and reading time.","Text Tools","🔢","text","online word counter"],
["case-converter","Case Converter","Convert text to uppercase, lowercase and title case.","Text Tools","🔠","text","uppercase lowercase title case"],
["remove-duplicate-lines","Remove Duplicate Lines","Clean up text by removing repeated lines.","Text Tools","🧹","text","remove duplicate lines"],
["character-counter","Character Counter","Count characters with and without spaces.","Text Tools","✍️","text","character counter online"],
["age-calculator","Age Calculator","Calculate age from a date of birth.","Calculator Tools","🎂","date","age calculator"],
["percentage-calculator","Percentage Calculator","Calculate percentages quickly and easily.","Calculator Tools","％","calc","percentage calculator"],
["discount-calculator","Discount Calculator","Calculate sale price and savings after a discount.","Calculator Tools","🏷️","calc","discount calculator"],
["bmi-calculator","BMI Calculator","Estimate body mass index from height and weight.","Calculator Tools","⚖️","calc","bmi calculator"],
["pdf-merger","PDF Merger","Combine multiple PDF files into one document directly in your browser.","PDF Tools","📚","pdf","merge pdf online"],
["pdf-splitter","PDF Splitter","Extract selected pages from a PDF and save them as a new document.","PDF Tools","📄","pdf","split pdf online"],
["jpg-to-pdf","JPG to PDF","Convert JPG and image files into a downloadable PDF document.","PDF Tools","🧾","pdf","jpg to pdf converter"],
["youtube-thumbnail-resizer","YouTube Thumbnail Resizer","Resize an image to a 1280 × 720 thumbnail canvas.","Creator Tools","▶️","image","youtube thumbnail resizer"]
].map(([slug,name,description,category,icon,kind,keywords])=>({slug,name,description,category,icon,kind,keywords})) as Tool[];
export const categories=[{name:"Image Tools",icon:"🖼️",desc:"Compress, resize and convert images"},{name:"PDF Tools",icon:"📑",desc:"Merge, split and convert PDF files"},{name:"Generator Tools",icon:"⚡",desc:"Create QR codes, passwords and IDs"},{name:"Text Tools",icon:"✍️",desc:"Count, clean and transform text"},{name:"Calculator Tools",icon:"🧮",desc:"Quick everyday calculations"},{name:"Creator Tools",icon:"🎬",desc:"Useful tools for online creators"}];