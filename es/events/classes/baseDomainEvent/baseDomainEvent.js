"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDomainEventClass = void 0;
class BaseDomainEventClass {
    constructor(parameters) {
        const { id, payload = undefined, metaVersion = 1, } = parameters;
        if (!id) {
            throw new Error('The "identity" parameter must not be empty');
        }
        if (metaVersion !== null &&
            (typeof metaVersion !== 'number' || metaVersion === 0)) {
            throw new Error('A meta version value must be a number');
        }
        this.__id = id;
        this.__payload = payload;
        this.__metaVersion = metaVersion;
    }
    get name() {
        return this._name;
    }
    get metaVersion() {
        return this.__metaVersion;
    }
    get payload() {
        return this.__payload;
    }
    get id() {
        return this.__id;
    }
    serialize() {
        return JSON.stringify(this._getSerializableObjectRepresentation());
    }
    _getSerializableObjectRepresentation() {
        return {
            id: this.id,
            name: this.name,
            payload: this.payload,
            metaVersion: this.metaVersion,
        };
    }
}
exports.BaseDomainEventClass = BaseDomainEventClass;
//# sourceMappingURL=baseDomainEvent.js.map