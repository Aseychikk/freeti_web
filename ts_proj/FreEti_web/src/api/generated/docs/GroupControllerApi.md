# GroupControllerApi

All URIs are relative to *http://freeti.ru:8091*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createGroup**](#creategroup) | **POST** /api/groups/groups | |
|[**createNewGroupEvent**](#createnewgroupevent) | **POST** /api/groups/new_event | |
|[**deleteEventTask**](#deleteeventtask) | **DELETE** /api/groups/delete_event | |
|[**deleteGroup**](#deletegroup) | **DELETE** /api/groups/delete_group | |
|[**getCountMembersInGroup**](#getcountmembersingroup) | **GET** /api/groups/members_count | |
|[**getGroupTasks**](#getgrouptasks) | **GET** /api/groups/group_tasks | |
|[**getGroupsByLogin**](#getgroupsbylogin) | **GET** /api/groups/groups | |
|[**getMembers**](#getmembers) | **GET** /api/groups/group_members | |
|[**getMembersAsUsers**](#getmembersasusers) | **GET** /api/groups/group_users | |
|[**leaveFromGroup**](#leavefromgroup) | **PUT** /api/groups/leave | |
|[**memberAdd**](#memberadd) | **PUT** /api/groups/member_add | |
|[**memberDelete**](#memberdelete) | **PUT** /api/groups/member_delete | |
|[**memberSwitch**](#memberswitch) | **PUT** /api/groups/member_switch | |
|[**updateGroup**](#updategroup) | **PUT** /api/groups/groups | |

# **createGroup**
> GroupAnswer createGroup(groupAnswer)


### Example

```typescript
import {
    GroupControllerApi,
    Configuration,
    GroupAnswer
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupControllerApi(configuration);

let groupAnswer: GroupAnswer; //

const { status, data } = await apiInstance.createGroup(
    groupAnswer
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupAnswer** | **GroupAnswer**|  | |


### Return type

**GroupAnswer**

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

# **createNewGroupEvent**
> Array<GroupTaskAnswer> createNewGroupEvent(groupEventRequest)


### Example

```typescript
import {
    GroupControllerApi,
    Configuration,
    GroupEventRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupControllerApi(configuration);

let groupId: string; // (default to undefined)
let groupEventRequest: GroupEventRequest; //

const { status, data } = await apiInstance.createNewGroupEvent(
    groupId,
    groupEventRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupEventRequest** | **GroupEventRequest**|  | |
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**Array<GroupTaskAnswer>**

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

# **deleteEventTask**
> boolean deleteEventTask()


### Example

```typescript
import {
    GroupControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupControllerApi(configuration);

let eventId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteEventTask(
    eventId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

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

# **deleteGroup**
> boolean deleteGroup()


### Example

```typescript
import {
    GroupControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupControllerApi(configuration);

let groupId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteGroup(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

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

# **getCountMembersInGroup**
> number getCountMembersInGroup()


### Example

```typescript
import {
    GroupControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupControllerApi(configuration);

let groupId: string; // (default to undefined)

const { status, data } = await apiInstance.getCountMembersInGroup(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**number**

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

# **getGroupTasks**
> Array<GroupTaskAnswer> getGroupTasks()


### Example

```typescript
import {
    GroupControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupControllerApi(configuration);

let yearMonth: string; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.getGroupTasks(
    yearMonth,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **yearMonth** | [**string**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Array<GroupTaskAnswer>**

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

# **getGroupsByLogin**
> Array<GroupAnswer> getGroupsByLogin()


### Example

```typescript
import {
    GroupControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupControllerApi(configuration);

const { status, data } = await apiInstance.getGroupsByLogin();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GroupAnswer>**

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

# **getMembers**
> Array<GroupUserAnswer> getMembers()


### Example

```typescript
import {
    GroupControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupControllerApi(configuration);

let groupId: string; // (default to undefined)

const { status, data } = await apiInstance.getMembers(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**Array<GroupUserAnswer>**

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

# **getMembersAsUsers**
> Array<UserAnswer> getMembersAsUsers()


### Example

```typescript
import {
    GroupControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupControllerApi(configuration);

let groupId: string; // (default to undefined)

const { status, data } = await apiInstance.getMembersAsUsers(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**Array<UserAnswer>**

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

# **leaveFromGroup**
> boolean leaveFromGroup()


### Example

```typescript
import {
    GroupControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupControllerApi(configuration);

let groupId: string; // (default to undefined)

const { status, data } = await apiInstance.leaveFromGroup(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

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

# **memberAdd**
> boolean memberAdd()


### Example

```typescript
import {
    GroupControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupControllerApi(configuration);

let userId: number; // (default to undefined)
let groupId: string; // (default to undefined)

const { status, data } = await apiInstance.memberAdd(
    userId,
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] |  | defaults to undefined|
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

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

# **memberDelete**
> boolean memberDelete()


### Example

```typescript
import {
    GroupControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupControllerApi(configuration);

let userId: number; // (default to undefined)
let groupId: string; // (default to undefined)

const { status, data } = await apiInstance.memberDelete(
    userId,
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] |  | defaults to undefined|
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

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

# **memberSwitch**
> GroupUserAnswer memberSwitch()


### Example

```typescript
import {
    GroupControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupControllerApi(configuration);

let userId: number; // (default to undefined)
let groupId: string; // (default to undefined)

const { status, data } = await apiInstance.memberSwitch(
    userId,
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] |  | defaults to undefined|
| **groupId** | [**string**] |  | defaults to undefined|


### Return type

**GroupUserAnswer**

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

# **updateGroup**
> GroupAnswer updateGroup(groupAnswer)


### Example

```typescript
import {
    GroupControllerApi,
    Configuration,
    GroupAnswer
} from './api';

const configuration = new Configuration();
const apiInstance = new GroupControllerApi(configuration);

let groupAnswer: GroupAnswer; //

const { status, data } = await apiInstance.updateGroup(
    groupAnswer
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupAnswer** | **GroupAnswer**|  | |


### Return type

**GroupAnswer**

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

