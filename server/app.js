/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const data      = require('./data');
const http      = require('http');
/**
 * Adding basic dependencies to work with API requests
 * (qs) to handle query strings
 * (url) to handle url requests
 */
const qs        = require('querystring')
const url       = require('url')

const hostname  = 'localhost';
const port      = 3035;

/** 
 * Start the Node Server Here...
 * 
 * The http.createServer() method creates a new server that listens at the specified port.  
 * The requestListener function (function (req, res)) is executed each time the server gets a request. 
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */
http.createServer(function (req, res) {
    // .. Here you can create your data response in a JSON format

    /**
     * Handeling the API CRUD Operations with HTTP Node Module
     * Simple singleton configuration
     */

    // GET Requests
    function handleGetReq(req, res) {
        const { pathname, query } = url.parse(req.url)

        /**
         * Only request implemented "/products?search=text"
         */
        if (pathname !== '/products') {
            return handleError(res, 404)
        }

        const { search } = qs.parse(query);

        if (!search) {
            return handleError(res, 404)
        }

        /**
         * Simple search filtering products for search string.
         * Matching search for Name, About and Tags
         */
        const filteredData = data.filter((product)=>{
            const normalizedSearch = search.toLowerCase();

            if (product.name.toLowerCase().includes(normalizedSearch)) {
                return true;
            }
            if (product.about.toLowerCase().includes(normalizedSearch)) {
                return true;
            }
            if (product.tags.join(",").toLowerCase().includes(normalizedSearch)) {
                return true;
            }
            return false;
        });
        const responseData = {
            count: filteredData.length,
            products: filteredData,
        }

        res.setHeader('Access-Control-Allow-Origin', '*'); // Allowing all origins, needs to be configure to white list a valid origin
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        res.write(JSON.stringify(responseData));
        
        return res.end();
    }

    // POST Requests
    function handlePostReq(req, res) {
        const { pathname } = url.parse(req.url)
        if (pathname !== '/product') {
            return handleError(res, 404)
        }
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        res.write('POST request response');
        return res.end();
    }

    // PUT Requests
    function handlePutReq(req, res) {
        const { pathname } = url.parse(req.url)
        if (pathname !== '/product') {
            return handleError(res, 404)
        }
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        res.write('PUT request response');
        return res.end();
    
    }
    // DELETE Requests
    function handleDeleteReq(req, res) {
        const { pathname } = url.parse(req.url)
        if (pathname !== '/product') {
            return handleError(res, 404)
        }
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        res.write('DELETE request response');
        return res.end();
    }

    // Error handeling
    function handleError (res, code) { 
        res.statusCode = code 
        res.end(`{"error": "${http.STATUS_CODES[code]}"}`) 
    }

    // Processing the requests
    if (req.method === 'GET') {
        return handleGetReq(req, res);
    } else if (req.method === 'POST') {
        return handlePostReq(req, res);
    } else if (req.method === 'PUT') {
        return handlePutReq(req, res);
    } else if (req.method === 'DELETE') {
        return handleDeleteReq(req, res);
    } else {
        return handleError(res, 404);
    }

}).listen( port );


console.log(`[Server running on ${hostname}:${port}]`);
