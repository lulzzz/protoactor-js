/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.messages = (function() {

    /**
     * Namespace messages.
     * @exports messages
     * @namespace
     */
    var messages = {};

    messages.HelloRequest = (function() {

        /**
         * Properties of a HelloRequest.
         * @typedef messages.HelloRequest$Properties
         * @type {Object}
         */

        /**
         * Constructs a new HelloRequest.
         * @exports messages.HelloRequest
         * @constructor
         * @param {messages.HelloRequest$Properties=} [properties] Properties to set
         */
        function HelloRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new HelloRequest instance using the specified properties.
         * @param {messages.HelloRequest$Properties=} [properties] Properties to set
         * @returns {messages.HelloRequest} HelloRequest instance
         */
        HelloRequest.create = function create(properties) {
            return new HelloRequest(properties);
        };

        /**
         * Encodes the specified HelloRequest message. Does not implicitly {@link messages.HelloRequest.verify|verify} messages.
         * @param {messages.HelloRequest$Properties} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified HelloRequest message, length delimited. Does not implicitly {@link messages.HelloRequest.verify|verify} messages.
         * @param {messages.HelloRequest$Properties} message HelloRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloRequest message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.HelloRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloRequest message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.HelloRequest} HelloRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloRequest message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        HelloRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a HelloRequest message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.HelloRequest} HelloRequest
         */
        HelloRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.HelloRequest)
                return object;
            return new $root.messages.HelloRequest();
        };

        /**
         * Creates a HelloRequest message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link messages.HelloRequest.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.HelloRequest} HelloRequest
         */
        HelloRequest.from = HelloRequest.fromObject;

        /**
         * Creates a plain object from a HelloRequest message. Also converts values to other types if specified.
         * @param {messages.HelloRequest} message HelloRequest
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Creates a plain object from this HelloRequest message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloRequest.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this HelloRequest to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        HelloRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HelloRequest;
    })();

    messages.HelloResponse = (function() {

        /**
         * Properties of a HelloResponse.
         * @typedef messages.HelloResponse$Properties
         * @type {Object}
         * @property {string} [Message] HelloResponse Message.
         */

        /**
         * Constructs a new HelloResponse.
         * @exports messages.HelloResponse
         * @constructor
         * @param {messages.HelloResponse$Properties=} [properties] Properties to set
         */
        function HelloResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HelloResponse Message.
         * @type {string}
         */
        HelloResponse.prototype.Message = "";

        /**
         * Creates a new HelloResponse instance using the specified properties.
         * @param {messages.HelloResponse$Properties=} [properties] Properties to set
         * @returns {messages.HelloResponse} HelloResponse instance
         */
        HelloResponse.create = function create(properties) {
            return new HelloResponse(properties);
        };

        /**
         * Encodes the specified HelloResponse message. Does not implicitly {@link messages.HelloResponse.verify|verify} messages.
         * @param {messages.HelloResponse$Properties} message HelloResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified HelloResponse message, length delimited. Does not implicitly {@link messages.HelloResponse.verify|verify} messages.
         * @param {messages.HelloResponse$Properties} message HelloResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HelloResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HelloResponse message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.HelloResponse} HelloResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.HelloResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HelloResponse message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.HelloResponse} HelloResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HelloResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HelloResponse message.
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        HelloResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            return null;
        };

        /**
         * Creates a HelloResponse message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.HelloResponse} HelloResponse
         */
        HelloResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.HelloResponse)
                return object;
            var message = new $root.messages.HelloResponse();
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a HelloResponse message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link messages.HelloResponse.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.HelloResponse} HelloResponse
         */
        HelloResponse.from = HelloResponse.fromObject;

        /**
         * Creates a plain object from a HelloResponse message. Also converts values to other types if specified.
         * @param {messages.HelloResponse} message HelloResponse
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Message = "";
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Creates a plain object from this HelloResponse message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HelloResponse.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this HelloResponse to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        HelloResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HelloResponse;
    })();

    return messages;
})();

module.exports = $root;