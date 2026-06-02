# TestControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**echo**](#echo) | **POST** /api/echo | |
|[**hello**](#hello) | **GET** /api/hello | |
|[**hello2**](#hello2) | **GET** /api/hello2 | |
|[**ping**](#ping) | **GET** /api/ping | |
|[**test**](#test) | **POST** /api/test | |

# **echo**
> { [key: string]: object; } echo(requestBody)


### Example

```typescript
import {
    TestControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestControllerApi(configuration);

let requestBody: { [key: string]: object; }; //

const { status, data } = await apiInstance.echo(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: object; }**|  | |


### Return type

**{ [key: string]: object; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hello**
> { [key: string]: string; } hello()


### Example

```typescript
import {
    TestControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestControllerApi(configuration);

const { status, data } = await apiInstance.hello();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hello2**
> string hello2()


### Example

```typescript
import {
    TestControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestControllerApi(configuration);

let name: string; // (optional) (default to 'World')

const { status, data } = await apiInstance.hello2(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] |  | (optional) defaults to 'World'|


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ping**
> { [key: string]: string; } ping()


### Example

```typescript
import {
    TestControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestControllerApi(configuration);

const { status, data } = await apiInstance.ping();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test**
> { [key: string]: string; } test(requestBody)


### Example

```typescript
import {
    TestControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestControllerApi(configuration);

let requestBody: { [key: string]: string; }; //

const { status, data } = await apiInstance.test(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: string; }**|  | |


### Return type

**{ [key: string]: string; }**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

