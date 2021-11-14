[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [services](services.md) / [interfaces](services.interfaces.md) / common

# Namespace: common

[services](services.md).[interfaces](services.interfaces.md).common

## Table of contents

### Classes

- [ServicesContainerAbstractClass](../classes/services.interfaces.common.servicescontainerabstractclass.md)

### Interfaces

- [IClassService](../interfaces/services.interfaces.common.iclassservice.md)
- [IService](../interfaces/services.interfaces.common.iservice.md)
- [IServiceAggregate](../interfaces/services.interfaces.common.iserviceaggregate.md)
- [IServiceAsync](../interfaces/services.interfaces.common.iserviceasync.md)
- [IServicesContainer](../interfaces/services.interfaces.common.iservicescontainer.md)

### Type aliases

- [TServicesList](services.interfaces.common.md#tserviceslist)

## Type aliases

### TServicesList

Ƭ **TServicesList**: { [boundaryName in TDomainBoundaryName]: TServicesList \| IServiceAggregate \| IService<any\>}

#### Defined in

[src/services/interfaces/common/servicesList.ts:7](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/services/interfaces/common/servicesList.ts#L7)
