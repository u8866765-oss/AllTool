export type ToolSEO = {
  title: string;
  description: string;
  intro: string;
  steps: string[];
  faqs: { question: string; answer: string }[];
};

export const toolSEO: Record<string, ToolSEO> = {
  "image-compressor": {
    title: "Free Image Compressor Online – Reduce Image Size | ToolNova",
    description: "Compress JPG, PNG and WebP images online. Reduce image file size in your browser with ToolNova's free image compressor.",
    intro: "Reduce image file sizes for websites, email and sharing. Choose an image and compress it using the available quality settings.",
    steps: ["Select a JPG, PNG or WebP image.", "Choose the available compression settings.", "Start compression and review the output.", "Download the compressed image."],
    faqs: [
      { question: "Is this image compressor free?", answer: "Yes, ToolNova provides this image compression tool free of charge." },
      { question: "Which image formats are supported?", answer: "The tool is designed for JPG, PNG and WebP images. Available formats depend on the current implementation." },
      { question: "Will compression reduce image quality?", answer: "Compression may affect image quality depending on the selected settings and image format." }
    ]
  },
  "image-resizer": {
    title: "Free Image Resizer Online – Resize Photos in Pixels | ToolNova",
    description: "Resize images online by entering your preferred width and height. Use ToolNova's free image resizer in your browser.",
    intro: "Change an image's dimensions for websites, social media, documents and other digital projects.",
    steps: ["Choose an image from your device.", "Enter the desired width and height.", "Apply the resize operation.", "Download the resized image."],
    faqs: [
      { question: "Can I resize an image to custom dimensions?", answer: "Yes. Enter the dimensions supported by the tool." },
      { question: "Is the image resizer free?", answer: "Yes, it is free to use." },
      { question: "Will resizing affect quality?", answer: "Changing dimensions can affect sharpness, especially when enlarging a small image." }
    ]
  },
  "jpg-to-png": {
    title: "JPG to PNG Converter Online Free – Convert Images | ToolNova",
    description: "Convert JPG images to PNG format online with ToolNova. Select an image and create a PNG version in your browser.",
    intro: "Convert JPEG photographs and graphics into PNG files for projects that require the PNG image format.",
    steps: ["Select a JPG or JPEG image.", "Start the conversion.", "Review the converted image.", "Download the PNG file."],
    faqs: [
      { question: "Is JPG to PNG conversion free?", answer: "Yes, you can use this converter for free." },
      { question: "Does converting JPG to PNG restore lost quality?", answer: "No. Conversion changes the file format but cannot restore image detail already lost in the JPG." },
      { question: "Does PNG always have a smaller file size?", answer: "No. PNG files can be larger than JPG files, depending on the image." }
    ]
  },
  "png-to-jpg": {
    title: "PNG to JPG Converter Online Free – Convert PNG Images | ToolNova",
    description: "Convert PNG images to JPG online. Use ToolNova's free PNG to JPG converter to create JPG images in your browser.",
    intro: "Create JPG versions of PNG images for websites, uploads and applications that require JPEG files.",
    steps: ["Choose a PNG image.", "Start the PNG to JPG conversion.", "Check the converted result.", "Download your JPG image."],
    faqs: [
      { question: "Is this PNG to JPG converter free?", answer: "Yes, it is free to use." },
      { question: "Will transparency be preserved?", answer: "JPG does not support transparency, so transparent areas may be replaced with a solid background." },
      { question: "Can JPG images be smaller than PNG?", answer: "Often yes, but the result depends on the image and compression settings." }
    ]
  },
  "image-cropper": {
    title: "Image Cropper Online Free – Set Custom Image Dimensions | ToolNova",
    description: "Adjust image output dimensions online with ToolNova's free image cropper. Prepare images for your projects.",
    intro: "Prepare an image for a specific output size. This tool currently exports images to custom dimensions; it does not provide draggable crop handles.",
    steps: ["Select an image.", "Enter the output dimensions available in the tool.", "Apply the operation.", "Download the resulting image."],
    faqs: [
      { question: "Can I crop an image online for free?", answer: "Yes, this tool is free to use." },
      { question: "Does it have draggable crop handles?", answer: "The current implementation uses custom dimensions and does not provide draggable crop handles." },
      { question: "Can I download the result?", answer: "Yes, after processing you can download the resulting image." }
    ]
  },
  "qr-code-generator": {
    title: "Free QR Code Generator Online – Create QR Codes | ToolNova",
    description: "Create QR codes from text or URLs with ToolNova's free QR code generator. Generate a code for quick scanning.",
    intro: "Turn text or a web address into a QR code that people can scan with a compatible phone or QR reader.",
    steps: ["Enter the text or URL.", "Generate the QR code.", "Scan it to verify the content.", "Save the generated code if download is available."],
    faqs: [
      { question: "Can I create a QR code for a website?", answer: "Yes, enter the website URL supported by the generator." },
      { question: "Is the QR code generator free?", answer: "Yes, it is free to use." },
      { question: "Should I test my QR code?", answer: "Yes. Scan the generated code before sharing or printing it." }
    ]
  },
  "password-generator": {
    title: "Free Strong Password Generator Online | ToolNova",
    description: "Generate random passwords with ToolNova's free password generator. Create a password using the options available in your browser.",
    intro: "Create a random password for an account. Use the available settings to choose the password characteristics.",
    steps: ["Choose the password options.", "Set the desired length if available.", "Generate a password.", "Copy it and store it securely."],
    faqs: [
      { question: "Is this password generator free?", answer: "Yes, it is free to use." },
      { question: "Should I reuse a generated password?", answer: "No. Use a unique password for each account." },
      { question: "Where should I store my password?", answer: "Use a reputable password manager and never share passwords with others." }
    ]
  },
  "uuid-generator": {
    title: "Free UUID Generator Online – Generate UUID v4 | ToolNova",
    description: "Generate random UUID identifiers online with ToolNova's free UUID generator. Create unique ID values in seconds.",
    intro: "Generate a random UUID for software development, testing, databases and applications.",
    steps: ["Open the UUID generator.", "Generate a new UUID.", "Copy the identifier.", "Use it in your project."],
    faqs: [
      { question: "What is a UUID?", answer: "A UUID is a 128-bit identifier used to identify information in software systems." },
      { question: "Is this UUID generator free?", answer: "Yes, it is free to use." },
      { question: "Can I generate multiple UUIDs?", answer: "Use the generator repeatedly if the interface provides one-at-a-time generation." }
    ]
  },
  "word-counter": {
    title: "Free Online Word Counter – Count Words and Characters | ToolNova",
    description: "Count words, characters, sentences and estimated reading time with ToolNova's free online word counter.",
    intro: "Check the length of articles, essays, posts and other writing with a quick text analysis.",
    steps: ["Enter or paste your text.", "View the word and character counts.", "Review sentence and reading-time information.", "Edit your text as needed."],
    faqs: [
      { question: "Does the tool count characters?", answer: "Yes, the tool provides character counting." },
      { question: "Can I count words in an essay?", answer: "Yes, paste your essay into the text area." },
      { question: "What is reading time?", answer: "Reading time is an estimate based on the amount of text." }
    ]
  },
  "case-converter": {
    title: "Free Case Converter Online – Uppercase and Lowercase | ToolNova",
    description: "Convert text to uppercase, lowercase and title case online with ToolNova's free text case converter.",
    intro: "Change the letter case of text for documents, headings, captions and everyday writing.",
    steps: ["Paste or type your text.", "Choose the desired case format.", "Review the converted text.", "Copy the result."],
    faqs: [
      { question: "Can I convert text to uppercase?", answer: "Yes, choose the uppercase option." },
      { question: "Can I convert text to lowercase?", answer: "Yes, choose the lowercase option." },
      { question: "Is this case converter free?", answer: "Yes, it is free to use." }
    ]
  },
  "remove-duplicate-lines": {
    title: "Remove Duplicate Lines Online Free – Clean Text | ToolNova",
    description: "Remove repeated lines from text online with ToolNova's free duplicate line remover. Clean lists quickly.",
    intro: "Clean copied lists, data and notes by removing repeated lines from your text.",
    steps: ["Paste your text into the input area.", "Run the duplicate removal operation.", "Review the cleaned text.", "Copy the result."],
    faqs: [
      { question: "Can it remove repeated lines?", answer: "Yes, the tool is designed to remove duplicate lines." },
      { question: "Can I use it for lists?", answer: "Yes, it can help clean text-based lists." },
      { question: "Is it free?", answer: "Yes, it is free to use." }
    ]
  },
  "character-counter": {
    title: "Free Character Counter Online – Count Characters | ToolNova",
    description: "Count characters in your text online, including character totals with and without spaces using ToolNova.",
    intro: "Measure text length for social posts, forms, descriptions and writing with character limits.",
    steps: ["Enter or paste your text.", "Check the character count.", "Compare counts with and without spaces if available.", "Edit your text to meet your limit."],
    faqs: [
      { question: "Does the counter include spaces?", answer: "The tool provides character counts with and without spaces." },
      { question: "Can I use it for social media captions?", answer: "Yes, it can help check caption length." },
      { question: "Is it free?", answer: "Yes, it is free to use." }
    ]
  },
  "age-calculator": {
    title: "Free Age Calculator Online – Calculate Your Exact Age | ToolNova",
    description: "Calculate your age from your date of birth with ToolNova's free online age calculator.",
    intro: "Find the time between your date of birth and a selected date using the age calculator.",
    steps: ["Enter your date of birth.", "Select the calculation date if available.", "Calculate your age.", "Review the result."],
    faqs: [
      { question: "How do I calculate my age?", answer: "Enter your date of birth and run the calculation." },
      { question: "Can I calculate age on another date?", answer: "Use the date option if it is available in the calculator." },
      { question: "Is this age calculator free?", answer: "Yes, it is free to use." }
    ]
  },
  "percentage-calculator": {
    title: "Free Percentage Calculator Online – Calculate Percentages | ToolNova",
    description: "Calculate percentages quickly with ToolNova's free online percentage calculator. Solve everyday percentage problems.",
    intro: "Work out percentage values for study, shopping, finance and everyday calculations.",
    steps: ["Enter the numbers requested by the calculator.", "Choose or enter the percentage operation.", "Calculate the result.", "Review the answer."],
    faqs: [
      { question: "Can I calculate a percentage of a number?", answer: "Yes, enter the percentage and number required by the calculator." },
      { question: "Can it help with school work?", answer: "It can help check common percentage calculations." },
      { question: "Is it free?", answer: "Yes, it is free to use." }
    ]
  },
  "discount-calculator": {
    title: "Free Discount Calculator – Calculate Sale Price and Savings | ToolNova",
    description: "Calculate discount amounts, savings and sale prices with ToolNova's free online discount calculator.",
    intro: "Find how much you save and the price after a discount when shopping or comparing offers.",
    steps: ["Enter the original price.", "Enter the discount percentage.", "Calculate the discounted amount.", "Review the savings and final price."],
    faqs: [
      { question: "How do I calculate a discount?", answer: "Enter the original price and discount rate, then calculate." },
      { question: "Can it show my savings?", answer: "The calculator is designed to calculate sale price and savings." },
      { question: "Is it free?", answer: "Yes, it is free to use." }
    ]
  },
  "bmi-calculator": {
    title: "Free BMI Calculator Online – Calculate Body Mass Index | ToolNova",
    description: "Estimate body mass index using height and weight with ToolNova's free BMI calculator.",
    intro: "Calculate an approximate Body Mass Index (BMI) from height and weight. BMI is a screening measure, not a diagnosis.",
    steps: ["Enter your height.", "Enter your weight.", "Calculate your BMI.", "Use the result as general information, not a medical diagnosis."],
    faqs: [
      { question: "What does BMI mean?", answer: "BMI stands for Body Mass Index, a measure calculated from height and weight." },
      { question: "Is BMI a medical diagnosis?", answer: "No. BMI is a screening measure and does not independently diagnose health conditions." },
      { question: "Is this BMI calculator free?", answer: "Yes, it is free to use." }
    ]
  },
  "pdf-merger": {
    title: "Merge PDF Files Online Free – Combine PDF Documents | ToolNova",
    description: "Combine multiple PDF files into one document with ToolNova's free browser-based PDF merger.",
    intro: "Combine several PDF documents into a single file. Select your PDFs, arrange them in the order you want, and create one merged document.",
    steps: ["Select two or more PDF files.", "Arrange the files in your preferred order if the tool allows it.", "Start merging the selected PDFs.", "Download and open the merged PDF to verify its pages."],
    faqs: [
      { question: "Can I merge multiple PDF files?", answer: "Yes. Select the PDF files you want to combine and run the merge operation." },
      { question: "Can I change the order of PDF files?", answer: "Check the selected file order before merging so the final document follows your intended sequence." },
      { question: "Are my PDF files uploaded to a server?", answer: "The PDF processing implementation runs in the browser. Avoid using shared or untrusted devices for confidential documents." }
    ]
  },
  "pdf-splitter": {
    title: "Split PDF Online Free – Extract PDF Pages | ToolNova",
    description: "Extract selected pages from PDF files with ToolNova's free browser-based PDF splitter.",
    intro: "Create a separate PDF from selected pages of an existing document. Enter the page numbers or ranges supported by the tool and review the output.",
    steps: ["Choose a PDF file.", "Enter the page numbers or ranges you want to extract.", "Run the split operation.", "Download and open the new PDF to check the extracted pages."],
    faqs: [
      { question: "Can I extract specific PDF pages?", answer: "Yes. Enter the page numbers or ranges supported by the splitter." },
      { question: "Can I extract more than one page?", answer: "Yes. You can specify multiple pages or ranges using the supported input format." },
      { question: "Should I check the output PDF?", answer: "Yes. Open the downloaded file and confirm that it contains the pages you selected." }
    ]
  },
  "jpg-to-pdf": {
    title: "JPG to PDF Converter Online Free – Convert Images to PDF | ToolNova",
    description: "Convert JPG images into a PDF document with ToolNova's free browser-based JPG to PDF converter.",
    intro: "Turn image files into a PDF document. Select your images, create the PDF, and check the downloaded file before sharing or printing.",
    steps: ["Select the JPG or supported image files.", "Start the image-to-PDF conversion.", "Wait for the PDF document to be created.", "Download and open the PDF to verify the result."],
    faqs: [
      { question: "Can I convert JPG images to PDF?", answer: "Yes. Select your JPG images and use the conversion tool to create a PDF." },
      { question: "Can I put multiple images in one PDF?", answer: "The tool supports image-to-PDF creation; check the selected images and output pages after conversion." },
      { question: "How can I verify the PDF?", answer: "Open the downloaded PDF and check that the images appear correctly." }
    ]
  },
  "youtube-thumbnail-resizer": {
    title: "YouTube Thumbnail Resizer – Resize to 1280x720 | ToolNova",
    description: "Prepare an image for a 1280 x 720 YouTube thumbnail canvas with ToolNova's online thumbnail resizer.",
    intro: "Prepare a thumbnail image using the 1280 x 720 canvas size commonly used for YouTube thumbnails. Check the output for stretching or distortion.",
    steps: ["Select your thumbnail image.", "Set or use the 1280 x 720 output dimensions.", "Apply the resize operation.", "Preview the result and download it."],
    faqs: [
      { question: "What size is this thumbnail tool designed for?", answer: "It is designed for a 1280 x 720 pixel canvas." },
      { question: "Will the image keep its original proportions?", answer: "The current resize approach may stretch an image to fit the canvas. Check the result before publishing." },
      { question: "Is it free?", answer: "Yes, it is free to use." }
    ]
  }
};
