# TaskControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addTask**](#addtask) | **POST** /api/tasks/tasks | |
|[**getOtherUserTasks**](#getotherusertasks) | **GET** /api/tasks/othertasks | |
|[**getTasks**](#gettasks) | **GET** /api/tasks/tasks | |
|[**getUnassigned**](#getunassigned) | **GET** /api/tasks/unassigned | |
|[**getUpdatedTasks**](#getupdatedtasks) | **GET** /api/tasks/tasks/update | |
|[**getusernameId**](#getusernameid) | **GET** /api/tasks/username_id | |
|[**updateTask**](#updatetask) | **PATCH** /api/tasks/tasks | |

# **addTask**
> TaskAnswer addTask(taskRequest)


### Example

```typescript
import {
    TaskControllerApi,
    Configuration,
    TaskRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskControllerApi(configuration);

let taskRequest: TaskRequest; //

const { status, data } = await apiInstance.addTask(
    taskRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taskRequest** | **TaskRequest**|  | |


### Return type

**TaskAnswer**

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

# **getOtherUserTasks**
> Array<OtherTaskAnswer> getOtherUserTasks()


### Example

```typescript
import {
    TaskControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskControllerApi(configuration);

let yearMonth: string; // (default to undefined)
let login: string; // (default to undefined)

const { status, data } = await apiInstance.getOtherUserTasks(
    yearMonth,
    login
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **yearMonth** | [**string**] |  | defaults to undefined|
| **login** | [**string**] |  | defaults to undefined|


### Return type

**Array<OtherTaskAnswer>**

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

# **getTasks**
> Array<TaskAnswer> getTasks()


### Example

```typescript
import {
    TaskControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskControllerApi(configuration);

let yearMonth: string; // (default to undefined)

const { status, data } = await apiInstance.getTasks(
    yearMonth
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **yearMonth** | [**string**] |  | defaults to undefined|


### Return type

**Array<TaskAnswer>**

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

# **getUnassigned**
> Array<TaskAnswer> getUnassigned()


### Example

```typescript
import {
    TaskControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskControllerApi(configuration);

const { status, data } = await apiInstance.getUnassigned();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<TaskAnswer>**

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

# **getUpdatedTasks**
> Array<TaskAnswer> getUpdatedTasks()


### Example

```typescript
import {
    TaskControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskControllerApi(configuration);

let yearMonth: string; // (default to undefined)
let since: number; // (default to undefined)

const { status, data } = await apiInstance.getUpdatedTasks(
    yearMonth,
    since
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **yearMonth** | [**string**] |  | defaults to undefined|
| **since** | [**number**] |  | defaults to undefined|


### Return type

**Array<TaskAnswer>**

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

# **getusernameId**
> UsernameIdAnswer getusernameId()


### Example

```typescript
import {
    TaskControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskControllerApi(configuration);

const { status, data } = await apiInstance.getusernameId();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UsernameIdAnswer**

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

# **updateTask**
> TaskAnswer updateTask(taskAnswer)


### Example

```typescript
import {
    TaskControllerApi,
    Configuration,
    TaskAnswer
} from './api';

const configuration = new Configuration();
const apiInstance = new TaskControllerApi(configuration);

let taskAnswer: TaskAnswer; //

const { status, data } = await apiInstance.updateTask(
    taskAnswer
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taskAnswer** | **TaskAnswer**|  | |


### Return type

**TaskAnswer**

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

