# ContactPropertyReferenceControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPropertyReferenceContactPatch**](#createpropertyreferencecontactpatch) | **PATCH** /contacts/{id}/first | |
|[**createPropertyReferenceContactPatch1**](#createpropertyreferencecontactpatch1) | **PATCH** /contacts/{id}/second | |
|[**createPropertyReferenceContactPut**](#createpropertyreferencecontactput) | **PUT** /contacts/{id}/first | |
|[**createPropertyReferenceContactPut1**](#createpropertyreferencecontactput1) | **PUT** /contacts/{id}/second | |
|[**deletePropertyReferenceContactDelete**](#deletepropertyreferencecontactdelete) | **DELETE** /contacts/{id}/first | |
|[**deletePropertyReferenceContactDelete1**](#deletepropertyreferencecontactdelete1) | **DELETE** /contacts/{id}/second | |
|[**deletePropertyReferenceIdContactDelete**](#deletepropertyreferenceidcontactdelete) | **DELETE** /contacts/{id}/first/{propertyId} | |
|[**deletePropertyReferenceIdContactDelete1**](#deletepropertyreferenceidcontactdelete1) | **DELETE** /contacts/{id}/second/{propertyId} | |
|[**followPropertyReferenceContactGet**](#followpropertyreferencecontactget) | **GET** /contacts/{id}/first | |
|[**followPropertyReferenceContactGet1**](#followpropertyreferencecontactget1) | **GET** /contacts/{id}/first/{propertyId} | |
|[**followPropertyReferenceContactGet2**](#followpropertyreferencecontactget2) | **GET** /contacts/{id}/second | |
|[**followPropertyReferenceContactGet3**](#followpropertyreferencecontactget3) | **GET** /contacts/{id}/second/{propertyId} | |

# **createPropertyReferenceContactPatch**
> EntityModelUser createPropertyReferenceContactPatch(collectionModelObject)

patch-user-by-contact-Id

### Example

```typescript
import {
    ContactPropertyReferenceControllerApi,
    Configuration,
    CollectionModelObject
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let collectionModelObject: CollectionModelObject; //

const { status, data } = await apiInstance.createPropertyReferenceContactPatch(
    id,
    collectionModelObject
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collectionModelObject** | **CollectionModelObject**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelUser**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-spring-data-compact+json, text/uri-list
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPropertyReferenceContactPatch1**
> EntityModelUser createPropertyReferenceContactPatch1(collectionModelObject)

patch-user-by-contact-Id

### Example

```typescript
import {
    ContactPropertyReferenceControllerApi,
    Configuration,
    CollectionModelObject
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let collectionModelObject: CollectionModelObject; //

const { status, data } = await apiInstance.createPropertyReferenceContactPatch1(
    id,
    collectionModelObject
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collectionModelObject** | **CollectionModelObject**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelUser**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-spring-data-compact+json, text/uri-list
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPropertyReferenceContactPut**
> EntityModelUser createPropertyReferenceContactPut(collectionModelObject)

update-user-by-contact-Id

### Example

```typescript
import {
    ContactPropertyReferenceControllerApi,
    Configuration,
    CollectionModelObject
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let collectionModelObject: CollectionModelObject; //

const { status, data } = await apiInstance.createPropertyReferenceContactPut(
    id,
    collectionModelObject
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collectionModelObject** | **CollectionModelObject**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelUser**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-spring-data-compact+json, text/uri-list
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**201** | Created |  -  |
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPropertyReferenceContactPut1**
> EntityModelUser createPropertyReferenceContactPut1(collectionModelObject)

update-user-by-contact-Id

### Example

```typescript
import {
    ContactPropertyReferenceControllerApi,
    Configuration,
    CollectionModelObject
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let collectionModelObject: CollectionModelObject; //

const { status, data } = await apiInstance.createPropertyReferenceContactPut1(
    id,
    collectionModelObject
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collectionModelObject** | **CollectionModelObject**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelUser**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-spring-data-compact+json, text/uri-list
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**201** | Created |  -  |
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePropertyReferenceContactDelete**
> deletePropertyReferenceContactDelete()

delete-user-by-contact-Id

### Example

```typescript
import {
    ContactPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deletePropertyReferenceContactDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePropertyReferenceContactDelete1**
> deletePropertyReferenceContactDelete1()

delete-user-by-contact-Id

### Example

```typescript
import {
    ContactPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deletePropertyReferenceContactDelete1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePropertyReferenceIdContactDelete**
> deletePropertyReferenceIdContactDelete()

delete-user-by-contact-Id

### Example

```typescript
import {
    ContactPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let propertyId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePropertyReferenceIdContactDelete(
    id,
    propertyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **propertyId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePropertyReferenceIdContactDelete1**
> deletePropertyReferenceIdContactDelete1()

delete-user-by-contact-Id

### Example

```typescript
import {
    ContactPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let propertyId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePropertyReferenceIdContactDelete1(
    id,
    propertyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **propertyId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No Content |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followPropertyReferenceContactGet**
> EntityModelUser followPropertyReferenceContactGet()

get-user-by-contact-Id

### Example

```typescript
import {
    ContactPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.followPropertyReferenceContactGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelUser**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json, text/uri-list


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followPropertyReferenceContactGet1**
> EntityModelUser followPropertyReferenceContactGet1()

get-user-by-contact-Id

### Example

```typescript
import {
    ContactPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let propertyId: string; // (default to undefined)

const { status, data } = await apiInstance.followPropertyReferenceContactGet1(
    id,
    propertyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **propertyId** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelUser**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followPropertyReferenceContactGet2**
> EntityModelUser followPropertyReferenceContactGet2()

get-user-by-contact-Id

### Example

```typescript
import {
    ContactPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.followPropertyReferenceContactGet2(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelUser**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json, text/uri-list


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **followPropertyReferenceContactGet3**
> EntityModelUser followPropertyReferenceContactGet3()

get-user-by-contact-Id

### Example

```typescript
import {
    ContactPropertyReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactPropertyReferenceControllerApi(configuration);

let id: string; // (default to undefined)
let propertyId: string; // (default to undefined)

const { status, data } = await apiInstance.followPropertyReferenceContactGet3(
    id,
    propertyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **propertyId** | [**string**] |  | defaults to undefined|


### Return type

**EntityModelUser**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

