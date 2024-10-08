function main() {
    return {
        headers: {
            'Content-Type': 'text/html'
        },
        statusCode: 200,
        body: `
            <html>
                <head>
                    <title>${process.env.SITE_TITLE}</title>
                    <link rel="icon" type="image/x-icon" href="${process.env.SITE_URL}/favicon.ico" />
                    <style>
                        html, body, iframe {
                            margin: 0;
                            padding: 0;
                            width: 100%;
                            height: 100%; 
                        }
                        iframe {
                            border: 0;
                            transform: scaleX(-1);
                        }
                    </style>
                </head>
                <body>
                    <iframe src="${process.env.SITE_URL}"></iframe>
                </body>
            </html>
        `
    }
}
