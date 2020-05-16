document.write( '<button type=\"button\" onclick=\"init()\">Start</button>\n' );
document.write( '<div id=\"webcam-container\"></div>\n' );
document.write( '<div id=\"label-container\"></div>\n' );
document.write( '<script src=\"https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js\"></script>\n' );
document.write( '<script src=\"https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js\"></script>\n' );
document.write( '<script type=\"text/javascript\">\n' );
document.write( '    // More API functions here:\n' );
document.write( '    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image\n' );
document.write( '\n' );
document.write( '    // the link to your model provided by Teachable Machine export panel\n' );
document.write( '    const URL = \"https://teachablemachine.withgoogle.com/models/IWLTc3kkX/\";\n' );
document.write( '\n' );
document.write( '    let model, webcam, labelContainer, maxPredictions;\n' );
document.write( '\n' );
document.write( '    // Load the image model and setup the webcam\n' );
document.write( '    async function init() {\n' );
document.write( '        const modelURL = URL + \"model.json\";\n' );
document.write( '        const metadataURL = URL + \"metadata.json\";\n' );
document.write( '\n' );
document.write( '        // load the model and metadata\n' );
document.write( '        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker\n' );
document.write( '        // or files from your local hard drive\n' );
document.write( '        // Note: the pose library adds \"tmImage\" object to your window (window.tmImage)\n' );
document.write( '        model = await tmImage.load(modelURL, metadataURL);\n' );
document.write( '        maxPredictions = model.getTotalClasses();\n' );
document.write( '\n' );
document.write( '        // Convenience function to setup a webcam\n' );
document.write( '        const flip = true; // whether to flip the webcam\n' );
document.write( '        webcam = new tmImage.Webcam(400, 400, flip); // width, height, flip\n' );
document.write( '        await webcam.setup(); // request access to the webcam\n' );
document.write( '        await webcam.play();\n' );
document.write( '        window.requestAnimationFrame(loop);\n' );
document.write( '\n' );
document.write( '        // append elements to the DOM\n' );
document.write( '        document.getElementById(\"webcam-container\").appendChild(webcam.canvas);\n' );
document.write( '        labelContainer = document.getElementById(\"label-container\");\n' );
document.write( '        for (let i = 0; i < maxPredictions; i++) { // and class labels\n' );
document.write( '            labelContainer.appendChild(document.createElement(\"div\"));\n' );
document.write( '        }\n' );
document.write( '    }\n' );
document.write( '\n' );
document.write( '    async function loop() {\n' );
document.write( '        webcam.update(); // update the webcam frame\n' );
document.write( '        await predict();\n' );
document.write( '        window.requestAnimationFrame(loop);\n' );
document.write( '    }\n' );
document.write( '\n' );
document.write( '    // run the webcam image through the image model\n' );
document.write( 'async function predict() {\n' );
document.write( '        // predict can take in an image, video or canvas html element\n' );
document.write( '        const prediction = await model.predict(webcam.canvas);\n' );
document.write( '        for (let i = 0; i < maxPredictions; i++) {\n' );
document.write( '            const classPrediction =\n' );
document.write( '                prediction[i].className + \": \" + prediction[i].probability.toFixed(2);\n' );
document.write( '                var predo=prediction[i].probability.toFixed(2)\n' );
document.write( '            labelContainer.childNodes[i].innerHTML = predo*100;\n' );
document.write( '        }\n' );
document.write( '    }\n' );
document.write( '</script>' );