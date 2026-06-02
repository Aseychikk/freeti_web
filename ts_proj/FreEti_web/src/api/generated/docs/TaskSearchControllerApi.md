# TaskSearchControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeSearchTaskGet**](#executesearchtaskget) | **GET** /task/search/deleteAllByUser | |
|[**executeSearchTaskGet1**](#executesearchtaskget1) | **GET** /task/search/findAllByUserAndRepeatTask | |
|[**executeSearchTaskGet2**](#executesearchtaskget2) | **GET** /task/search/findByClientUuid | |
|[**executeSearchTaskGet3**](#executesearchtaskget3) | **GET** /task/search/findByClientUuidAndUser | |
|[**executeSearchTaskGet4**](#executesearchtaskget4) | **GET** /task/search/findByTitleAndStartAndEndingAndUser | |
|[**executeSearchTaskGet5**](#executesearchtaskget5) | **GET** /task/search/findByUserAndEndingBetweenAndRepeatTaskIn | |
|[**executeSearchTaskGet6**](#executesearchtaskget6) | **GET** /task/search/findByUserAndStartBetweenAndRepeatTaskIsNull | |
|[**executeSearchTaskGet7**](#executesearchtaskget7) | **GET** /task/search/findTasksForUsersInPeriod | |

# **executeSearchTaskGet**
> executeSearchTaskGet()


### Example

```typescript
import {
    TaskSearchControllerApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskSearchControllerApi(configuration);

let user: User; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchTaskGet(
    user
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User** |  | (optional) defaults to undefined|


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
|**200** | OK |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **executeSearchTaskGet1**
> CollectionModelEntityModelTask executeSearchTaskGet1()


### Example

```typescript
import {
    TaskSearchControllerApi,
    Configuration,
    User,
    RepeatTask
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskSearchControllerApi(configuration);

let user: User; // (optional) (default to undefined)
let repeatTask: RepeatTask; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchTaskGet1(
    user,
    repeatTask
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User** |  | (optional) defaults to undefined|
| **repeatTask** | **RepeatTask** |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelTask**

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

# **executeSearchTaskGet2**
> EntityModelTask executeSearchTaskGet2()


### Example

```typescript
import {
    TaskSearchControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskSearchControllerApi(configuration);

let clientUuid: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchTaskGet2(
    clientUuid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientUuid** | [**string**] |  | (optional) defaults to undefined|


### Return type

**EntityModelTask**

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

# **executeSearchTaskGet3**
> EntityModelTask executeSearchTaskGet3()


### Example

```typescript
import {
    TaskSearchControllerApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskSearchControllerApi(configuration);

let clientUuid: string; // (optional) (default to undefined)
let user: User; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchTaskGet3(
    clientUuid,
    user
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientUuid** | [**string**] |  | (optional) defaults to undefined|
| **user** | **User** |  | (optional) defaults to undefined|


### Return type

**EntityModelTask**

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

# **executeSearchTaskGet4**
> EntityModelTask executeSearchTaskGet4()


### Example

```typescript
import {
    TaskSearchControllerApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskSearchControllerApi(configuration);

let title: string; // (optional) (default to undefined)
let start: string; // (optional) (default to undefined)
let ending: string; // (optional) (default to undefined)
let user: User; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchTaskGet4(
    title,
    start,
    ending,
    user
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **title** | [**string**] |  | (optional) defaults to undefined|
| **start** | [**string**] |  | (optional) defaults to undefined|
| **ending** | [**string**] |  | (optional) defaults to undefined|
| **user** | **User** |  | (optional) defaults to undefined|


### Return type

**EntityModelTask**

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

# **executeSearchTaskGet5**
> CollectionModelEntityModelTask executeSearchTaskGet5()


### Example

```typescript
import {
    TaskSearchControllerApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskSearchControllerApi(configuration);

let user: User; // (optional) (default to undefined)
let endingAfter: string; // (optional) (default to undefined)
let endingBefore: string; // (optional) (default to undefined)
let repeatTasks: Array<RepeatTask>; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchTaskGet5(
    user,
    endingAfter,
    endingBefore,
    repeatTasks
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User** |  | (optional) defaults to undefined|
| **endingAfter** | [**string**] |  | (optional) defaults to undefined|
| **endingBefore** | [**string**] |  | (optional) defaults to undefined|
| **repeatTasks** | **Array&lt;RepeatTask&gt;** |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelTask**

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

# **executeSearchTaskGet6**
> CollectionModelEntityModelTask executeSearchTaskGet6()


### Example

```typescript
import {
    TaskSearchControllerApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskSearchControllerApi(configuration);

let user: User; // (optional) (default to undefined)
let start: string; // (optional) (default to undefined)
let end: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchTaskGet6(
    user,
    start,
    end
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User** |  | (optional) defaults to undefined|
| **start** | [**string**] |  | (optional) defaults to undefined|
| **end** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelTask**

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

# **executeSearchTaskGet7**
> CollectionModelEntityModelTask executeSearchTaskGet7()


### Example

```typescript
import {
    TaskSearchControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskSearchControllerApi(configuration);

let userIds: Array<number>; // (optional) (default to undefined)
let privacies: Array<'PUBLIC' | 'FRIENDS' | 'PRIVATE'>; // (optional) (default to undefined)
let startPeriod: string; // (optional) (default to undefined)
let endPeriod: string; // (optional) (default to undefined)
let importanceValue: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.executeSearchTaskGet7(
    userIds,
    privacies,
    startPeriod,
    endPeriod,
    importanceValue
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined|
| **privacies** | **Array<&#39;PUBLIC&#39; &#124; &#39;FRIENDS&#39; &#124; &#39;PRIVATE&#39;>** |  | (optional) defaults to undefined|
| **startPeriod** | [**string**] |  | (optional) defaults to undefined|
| **endPeriod** | [**string**] |  | (optional) defaults to undefined|
| **importanceValue** | [**number**] |  | (optional) defaults to undefined|


### Return type

**CollectionModelEntityModelTask**

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

