# `apiManagementApiOperation` Submodule <a name="`apiManagementApiOperation` Submodule" id="@cdktf/provider-azurerm.apiManagementApiOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementApiOperation <a name="ApiManagementApiOperation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation azurerm_api_management_api_operation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_name: str,
  api_name: str,
  display_name: str,
  method: str,
  operation_id: str,
  resource_group_name: str,
  url_template: str,
  description: str = None,
  id: str = None,
  request: ApiManagementApiOperationRequest = None,
  response: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponse]] = None,
  template_parameter: typing.Union[IResolvable, typing.List[ApiManagementApiOperationTemplateParameter]] = None,
  timeouts: ApiManagementApiOperationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.apiManagementName">api_management_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#api_management_name ApiManagementApiOperation#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.apiName">api_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#api_name ApiManagementApiOperation#api_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#display_name ApiManagementApiOperation#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.method">method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#method ApiManagementApiOperation#method}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.operationId">operation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#operation_id ApiManagementApiOperation#operation_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#resource_group_name ApiManagementApiOperation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.urlTemplate">url_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#url_template ApiManagementApiOperation#url_template}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#id ApiManagementApiOperation#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.request">request</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a></code> | request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.response">response</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>]]</code> | response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.templateParameter">template_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>]]</code> | template_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.apiManagementName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#api_management_name ApiManagementApiOperation#api_management_name}.

---

##### `api_name`<sup>Required</sup> <a name="api_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.apiName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#api_name ApiManagementApiOperation#api_name}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#display_name ApiManagementApiOperation#display_name}.

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.method"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#method ApiManagementApiOperation#method}.

---

##### `operation_id`<sup>Required</sup> <a name="operation_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.operationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#operation_id ApiManagementApiOperation#operation_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#resource_group_name ApiManagementApiOperation#resource_group_name}.

---

##### `url_template`<sup>Required</sup> <a name="url_template" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.urlTemplate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#url_template ApiManagementApiOperation#url_template}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#id ApiManagementApiOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.request"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a>

request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#request ApiManagementApiOperation#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.response"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>]]

response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#response ApiManagementApiOperation#response}

---

##### `template_parameter`<sup>Optional</sup> <a name="template_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.templateParameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>]]

template_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#template_parameter ApiManagementApiOperation#template_parameter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#timeouts ApiManagementApiOperation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putRequest">put_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putResponse">put_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTemplateParameter">put_template_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetRequest">reset_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetResponse">reset_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetTemplateParameter">reset_template_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_request` <a name="put_request" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putRequest"></a>

```python
def put_request(
  description: str = None,
  header: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestHeader]] = None,
  query_parameter: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestQueryParameter]] = None,
  representation: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentation]] = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putRequest.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

###### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putRequest.parameter.header"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#header ApiManagementApiOperation#header}

---

###### `query_parameter`<sup>Optional</sup> <a name="query_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putRequest.parameter.queryParameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>]]

query_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#query_parameter ApiManagementApiOperation#query_parameter}

---

###### `representation`<sup>Optional</sup> <a name="representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putRequest.parameter.representation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>]]

representation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#representation ApiManagementApiOperation#representation}

---

##### `put_response` <a name="put_response" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putResponse"></a>

```python
def put_response(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponse]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putResponse.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>]]

---

##### `put_template_parameter` <a name="put_template_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTemplateParameter"></a>

```python
def put_template_parameter(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationTemplateParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTemplateParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#create ApiManagementApiOperation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#delete ApiManagementApiOperation#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#read ApiManagementApiOperation#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#update ApiManagementApiOperation#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_request` <a name="reset_request" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetRequest"></a>

```python
def reset_request() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetResponse"></a>

```python
def reset_response() -> None
```

##### `reset_template_parameter` <a name="reset_template_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetTemplateParameter"></a>

```python
def reset_template_parameter() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApiManagementApiOperation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperation.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApiManagementApiOperation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiManagementApiOperation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiManagementApiOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementApiOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.request">request</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference">ApiManagementApiOperationRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.response">response</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList">ApiManagementApiOperationResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.templateParameter">template_parameter</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList">ApiManagementApiOperationTemplateParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference">ApiManagementApiOperationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiManagementNameInput">api_management_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiNameInput">api_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.operationIdInput">operation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.requestInput">request_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.responseInput">response_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.templateParameterInput">template_parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.urlTemplateInput">url_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiManagementName">api_management_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiName">api_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.operationId">operation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.urlTemplate">url_template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.request"></a>

```python
request: ApiManagementApiOperationRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference">ApiManagementApiOperationRequestOutputReference</a>

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.response"></a>

```python
response: ApiManagementApiOperationResponseList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList">ApiManagementApiOperationResponseList</a>

---

##### `template_parameter`<sup>Required</sup> <a name="template_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.templateParameter"></a>

```python
template_parameter: ApiManagementApiOperationTemplateParameterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList">ApiManagementApiOperationTemplateParameterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.timeouts"></a>

```python
timeouts: ApiManagementApiOperationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference">ApiManagementApiOperationTimeoutsOutputReference</a>

---

##### `api_management_name_input`<sup>Optional</sup> <a name="api_management_name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiManagementNameInput"></a>

```python
api_management_name_input: str
```

- *Type:* str

---

##### `api_name_input`<sup>Optional</sup> <a name="api_name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiNameInput"></a>

```python
api_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `operation_id_input`<sup>Optional</sup> <a name="operation_id_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.operationIdInput"></a>

```python
operation_id_input: str
```

- *Type:* str

---

##### `request_input`<sup>Optional</sup> <a name="request_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.requestInput"></a>

```python
request_input: ApiManagementApiOperationRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.responseInput"></a>

```python
response_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponse]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>]]

---

##### `template_parameter_input`<sup>Optional</sup> <a name="template_parameter_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.templateParameterInput"></a>

```python
template_parameter_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationTemplateParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApiManagementApiOperationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a>]

---

##### `url_template_input`<sup>Optional</sup> <a name="url_template_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.urlTemplateInput"></a>

```python
url_template_input: str
```

- *Type:* str

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiManagementName"></a>

```python
api_management_name: str
```

- *Type:* str

---

##### `api_name`<sup>Required</sup> <a name="api_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiName"></a>

```python
api_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `operation_id`<sup>Required</sup> <a name="operation_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.operationId"></a>

```python
operation_id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `url_template`<sup>Required</sup> <a name="url_template" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.urlTemplate"></a>

```python
url_template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementApiOperationConfig <a name="ApiManagementApiOperationConfig" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_name: str,
  api_name: str,
  display_name: str,
  method: str,
  operation_id: str,
  resource_group_name: str,
  url_template: str,
  description: str = None,
  id: str = None,
  request: ApiManagementApiOperationRequest = None,
  response: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponse]] = None,
  template_parameter: typing.Union[IResolvable, typing.List[ApiManagementApiOperationTemplateParameter]] = None,
  timeouts: ApiManagementApiOperationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.apiManagementName">api_management_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#api_management_name ApiManagementApiOperation#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.apiName">api_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#api_name ApiManagementApiOperation#api_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#display_name ApiManagementApiOperation#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.method">method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#method ApiManagementApiOperation#method}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.operationId">operation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#operation_id ApiManagementApiOperation#operation_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#resource_group_name ApiManagementApiOperation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.urlTemplate">url_template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#url_template ApiManagementApiOperation#url_template}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#id ApiManagementApiOperation#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.request">request</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a></code> | request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.response">response</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>]]</code> | response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.templateParameter">template_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>]]</code> | template_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.apiManagementName"></a>

```python
api_management_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#api_management_name ApiManagementApiOperation#api_management_name}.

---

##### `api_name`<sup>Required</sup> <a name="api_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.apiName"></a>

```python
api_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#api_name ApiManagementApiOperation#api_name}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#display_name ApiManagementApiOperation#display_name}.

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.method"></a>

```python
method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#method ApiManagementApiOperation#method}.

---

##### `operation_id`<sup>Required</sup> <a name="operation_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.operationId"></a>

```python
operation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#operation_id ApiManagementApiOperation#operation_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#resource_group_name ApiManagementApiOperation#resource_group_name}.

---

##### `url_template`<sup>Required</sup> <a name="url_template" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.urlTemplate"></a>

```python
url_template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#url_template ApiManagementApiOperation#url_template}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#id ApiManagementApiOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.request"></a>

```python
request: ApiManagementApiOperationRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a>

request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#request ApiManagementApiOperation#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.response"></a>

```python
response: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponse]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>]]

response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#response ApiManagementApiOperation#response}

---

##### `template_parameter`<sup>Optional</sup> <a name="template_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.templateParameter"></a>

```python
template_parameter: typing.Union[IResolvable, typing.List[ApiManagementApiOperationTemplateParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>]]

template_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#template_parameter ApiManagementApiOperation#template_parameter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.timeouts"></a>

```python
timeouts: ApiManagementApiOperationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#timeouts ApiManagementApiOperation#timeouts}

---

### ApiManagementApiOperationRequest <a name="ApiManagementApiOperationRequest" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequest(
  description: str = None,
  header: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestHeader]] = None,
  query_parameter: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestQueryParameter]] = None,
  representation: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentation]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.queryParameter">query_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>]]</code> | query_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.representation">representation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>]]</code> | representation block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#header ApiManagementApiOperation#header}

---

##### `query_parameter`<sup>Optional</sup> <a name="query_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.queryParameter"></a>

```python
query_parameter: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestQueryParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>]]

query_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#query_parameter ApiManagementApiOperation#query_parameter}

---

##### `representation`<sup>Optional</sup> <a name="representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.representation"></a>

```python
representation: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>]]

representation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#representation ApiManagementApiOperation#representation}

---

### ApiManagementApiOperationRequestHeader <a name="ApiManagementApiOperationRequestHeader" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestHeader(
  name: str,
  required: typing.Union[bool, IResolvable],
  type: str,
  default_value: str = None,
  description: str = None,
  example: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestHeaderExample]] = None,
  schema_id: str = None,
  type_name: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.example">example</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>]]</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.schemaId">schema_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.example"></a>

```python
example: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestHeaderExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>]]

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationRequestHeaderExample <a name="ApiManagementApiOperationRequestHeaderExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample(
  name: str,
  description: str = None,
  external_value: str = None,
  summary: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.externalValue">external_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `external_value`<sup>Optional</sup> <a name="external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.externalValue"></a>

```python
external_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.summary"></a>

```python
summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationRequestQueryParameter <a name="ApiManagementApiOperationRequestQueryParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter(
  name: str,
  required: typing.Union[bool, IResolvable],
  type: str,
  default_value: str = None,
  description: str = None,
  example: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestQueryParameterExample]] = None,
  schema_id: str = None,
  type_name: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.example">example</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>]]</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.schemaId">schema_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.example"></a>

```python
example: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestQueryParameterExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>]]

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationRequestQueryParameterExample <a name="ApiManagementApiOperationRequestQueryParameterExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample(
  name: str,
  description: str = None,
  external_value: str = None,
  summary: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.externalValue">external_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `external_value`<sup>Optional</sup> <a name="external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.externalValue"></a>

```python
external_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.summary"></a>

```python
summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationRequestRepresentation <a name="ApiManagementApiOperationRequestRepresentation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation(
  content_type: str,
  example: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentationExample]] = None,
  form_parameter: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentationFormParameter]] = None,
  schema_id: str = None,
  type_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#content_type ApiManagementApiOperation#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.example">example</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>]]</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.formParameter">form_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>]]</code> | form_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.schemaId">schema_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#content_type ApiManagementApiOperation#content_type}.

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.example"></a>

```python
example: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentationExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>]]

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `form_parameter`<sup>Optional</sup> <a name="form_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.formParameter"></a>

```python
form_parameter: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentationFormParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>]]

form_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#form_parameter ApiManagementApiOperation#form_parameter}

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

### ApiManagementApiOperationRequestRepresentationExample <a name="ApiManagementApiOperationRequestRepresentationExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample(
  name: str,
  description: str = None,
  external_value: str = None,
  summary: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.externalValue">external_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `external_value`<sup>Optional</sup> <a name="external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.externalValue"></a>

```python
external_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.summary"></a>

```python
summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationRequestRepresentationFormParameter <a name="ApiManagementApiOperationRequestRepresentationFormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter(
  name: str,
  required: typing.Union[bool, IResolvable],
  type: str,
  default_value: str = None,
  description: str = None,
  example: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentationFormParameterExample]] = None,
  schema_id: str = None,
  type_name: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.example">example</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>]]</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.schemaId">schema_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.example"></a>

```python
example: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentationFormParameterExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>]]

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationRequestRepresentationFormParameterExample <a name="ApiManagementApiOperationRequestRepresentationFormParameterExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample(
  name: str,
  description: str = None,
  external_value: str = None,
  summary: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.externalValue">external_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `external_value`<sup>Optional</sup> <a name="external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.externalValue"></a>

```python
external_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.summary"></a>

```python
summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationResponse <a name="ApiManagementApiOperationResponse" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponse(
  status_code: typing.Union[int, float],
  description: str = None,
  header: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseHeader]] = None,
  representation: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentation]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#status_code ApiManagementApiOperation#status_code}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.representation">representation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>]]</code> | representation block. |

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#status_code ApiManagementApiOperation#status_code}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#header ApiManagementApiOperation#header}

---

##### `representation`<sup>Optional</sup> <a name="representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.representation"></a>

```python
representation: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>]]

representation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#representation ApiManagementApiOperation#representation}

---

### ApiManagementApiOperationResponseHeader <a name="ApiManagementApiOperationResponseHeader" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseHeader(
  name: str,
  required: typing.Union[bool, IResolvable],
  type: str,
  default_value: str = None,
  description: str = None,
  example: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseHeaderExample]] = None,
  schema_id: str = None,
  type_name: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.example">example</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>]]</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.schemaId">schema_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.example"></a>

```python
example: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseHeaderExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>]]

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationResponseHeaderExample <a name="ApiManagementApiOperationResponseHeaderExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample(
  name: str,
  description: str = None,
  external_value: str = None,
  summary: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.externalValue">external_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `external_value`<sup>Optional</sup> <a name="external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.externalValue"></a>

```python
external_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.summary"></a>

```python
summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationResponseRepresentation <a name="ApiManagementApiOperationResponseRepresentation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation(
  content_type: str,
  example: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentationExample]] = None,
  form_parameter: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentationFormParameter]] = None,
  schema_id: str = None,
  type_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#content_type ApiManagementApiOperation#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.example">example</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>]]</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.formParameter">form_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>]]</code> | form_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.schemaId">schema_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#content_type ApiManagementApiOperation#content_type}.

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.example"></a>

```python
example: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentationExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>]]

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `form_parameter`<sup>Optional</sup> <a name="form_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.formParameter"></a>

```python
form_parameter: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentationFormParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>]]

form_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#form_parameter ApiManagementApiOperation#form_parameter}

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

### ApiManagementApiOperationResponseRepresentationExample <a name="ApiManagementApiOperationResponseRepresentationExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample(
  name: str,
  description: str = None,
  external_value: str = None,
  summary: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.externalValue">external_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `external_value`<sup>Optional</sup> <a name="external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.externalValue"></a>

```python
external_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.summary"></a>

```python
summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationResponseRepresentationFormParameter <a name="ApiManagementApiOperationResponseRepresentationFormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter(
  name: str,
  required: typing.Union[bool, IResolvable],
  type: str,
  default_value: str = None,
  description: str = None,
  example: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentationFormParameterExample]] = None,
  schema_id: str = None,
  type_name: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.example">example</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>]]</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.schemaId">schema_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.example"></a>

```python
example: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentationFormParameterExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>]]

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationResponseRepresentationFormParameterExample <a name="ApiManagementApiOperationResponseRepresentationFormParameterExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample(
  name: str,
  description: str = None,
  external_value: str = None,
  summary: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.externalValue">external_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `external_value`<sup>Optional</sup> <a name="external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.externalValue"></a>

```python
external_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.summary"></a>

```python
summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationTemplateParameter <a name="ApiManagementApiOperationTemplateParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationTemplateParameter(
  name: str,
  required: typing.Union[bool, IResolvable],
  type: str,
  default_value: str = None,
  description: str = None,
  example: typing.Union[IResolvable, typing.List[ApiManagementApiOperationTemplateParameterExample]] = None,
  schema_id: str = None,
  type_name: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.example">example</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>]]</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.schemaId">schema_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.example"></a>

```python
example: typing.Union[IResolvable, typing.List[ApiManagementApiOperationTemplateParameterExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>]]

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationTemplateParameterExample <a name="ApiManagementApiOperationTemplateParameterExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample(
  name: str,
  description: str = None,
  external_value: str = None,
  summary: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.externalValue">external_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `external_value`<sup>Optional</sup> <a name="external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.externalValue"></a>

```python
external_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.summary"></a>

```python
summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationTimeouts <a name="ApiManagementApiOperationTimeouts" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#create ApiManagementApiOperation#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#delete ApiManagementApiOperation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#read ApiManagementApiOperation#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#update ApiManagementApiOperation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#create ApiManagementApiOperation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#delete ApiManagementApiOperation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#read ApiManagementApiOperation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/api_management_api_operation#update ApiManagementApiOperation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementApiOperationRequestHeaderExampleList <a name="ApiManagementApiOperationRequestHeaderExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationRequestHeaderExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestHeaderExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>]]

---


### ApiManagementApiOperationRequestHeaderExampleOutputReference <a name="ApiManagementApiOperationRequestHeaderExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetExternalValue">reset_external_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetSummary">reset_summary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_external_value` <a name="reset_external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetExternalValue"></a>

```python
def reset_external_value() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetSummary"></a>

```python
def reset_summary() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.externalValueInput">external_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.externalValue">external_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `external_value_input`<sup>Optional</sup> <a name="external_value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.externalValueInput"></a>

```python
external_value_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external_value`<sup>Required</sup> <a name="external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.externalValue"></a>

```python
external_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationRequestHeaderExample]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>]

---


### ApiManagementApiOperationRequestHeaderList <a name="ApiManagementApiOperationRequestHeaderList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>]]

---


### ApiManagementApiOperationRequestHeaderOutputReference <a name="ApiManagementApiOperationRequestHeaderOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.putExample">put_example</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetExample">reset_example</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetSchemaId">reset_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_example` <a name="put_example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.putExample"></a>

```python
def put_example(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestHeaderExample]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.putExample.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>]]

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_example` <a name="reset_example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetExample"></a>

```python
def reset_example() -> None
```

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.example">example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList">ApiManagementApiOperationRequestHeaderExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.exampleInput">example_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.schemaIdInput">schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.schemaId">schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.example"></a>

```python
example: ApiManagementApiOperationRequestHeaderExampleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList">ApiManagementApiOperationRequestHeaderExampleList</a>

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `example_input`<sup>Optional</sup> <a name="example_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.exampleInput"></a>

```python
example_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestHeaderExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.schemaIdInput"></a>

```python
schema_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationRequestHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>]

---


### ApiManagementApiOperationRequestOutputReference <a name="ApiManagementApiOperationRequestOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putQueryParameter">put_query_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putRepresentation">put_representation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetQueryParameter">reset_query_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetRepresentation">reset_representation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header` <a name="put_header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putHeader"></a>

```python
def put_header(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>]]

---

##### `put_query_parameter` <a name="put_query_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putQueryParameter"></a>

```python
def put_query_parameter(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestQueryParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putQueryParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>]]

---

##### `put_representation` <a name="put_representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putRepresentation"></a>

```python
def put_representation(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putRepresentation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_query_parameter` <a name="reset_query_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetQueryParameter"></a>

```python
def reset_query_parameter() -> None
```

##### `reset_representation` <a name="reset_representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetRepresentation"></a>

```python
def reset_representation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList">ApiManagementApiOperationRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.queryParameter">query_parameter</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList">ApiManagementApiOperationRequestQueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.representation">representation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList">ApiManagementApiOperationRequestRepresentationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.queryParameterInput">query_parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.representationInput">representation_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.header"></a>

```python
header: ApiManagementApiOperationRequestHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList">ApiManagementApiOperationRequestHeaderList</a>

---

##### `query_parameter`<sup>Required</sup> <a name="query_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.queryParameter"></a>

```python
query_parameter: ApiManagementApiOperationRequestQueryParameterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList">ApiManagementApiOperationRequestQueryParameterList</a>

---

##### `representation`<sup>Required</sup> <a name="representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.representation"></a>

```python
representation: ApiManagementApiOperationRequestRepresentationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList">ApiManagementApiOperationRequestRepresentationList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>]]

---

##### `query_parameter_input`<sup>Optional</sup> <a name="query_parameter_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.queryParameterInput"></a>

```python
query_parameter_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestQueryParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>]]

---

##### `representation_input`<sup>Optional</sup> <a name="representation_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.representationInput"></a>

```python
representation_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementApiOperationRequest
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a>

---


### ApiManagementApiOperationRequestQueryParameterExampleList <a name="ApiManagementApiOperationRequestQueryParameterExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationRequestQueryParameterExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestQueryParameterExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>]]

---


### ApiManagementApiOperationRequestQueryParameterExampleOutputReference <a name="ApiManagementApiOperationRequestQueryParameterExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetExternalValue">reset_external_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetSummary">reset_summary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_external_value` <a name="reset_external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetExternalValue"></a>

```python
def reset_external_value() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetSummary"></a>

```python
def reset_summary() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.externalValueInput">external_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.externalValue">external_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `external_value_input`<sup>Optional</sup> <a name="external_value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.externalValueInput"></a>

```python
external_value_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external_value`<sup>Required</sup> <a name="external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.externalValue"></a>

```python
external_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationRequestQueryParameterExample]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>]

---


### ApiManagementApiOperationRequestQueryParameterList <a name="ApiManagementApiOperationRequestQueryParameterList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationRequestQueryParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestQueryParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>]]

---


### ApiManagementApiOperationRequestQueryParameterOutputReference <a name="ApiManagementApiOperationRequestQueryParameterOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.putExample">put_example</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetExample">reset_example</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetSchemaId">reset_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_example` <a name="put_example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.putExample"></a>

```python
def put_example(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestQueryParameterExample]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.putExample.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>]]

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_example` <a name="reset_example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetExample"></a>

```python
def reset_example() -> None
```

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.example">example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList">ApiManagementApiOperationRequestQueryParameterExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.exampleInput">example_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.schemaIdInput">schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.schemaId">schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.example"></a>

```python
example: ApiManagementApiOperationRequestQueryParameterExampleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList">ApiManagementApiOperationRequestQueryParameterExampleList</a>

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `example_input`<sup>Optional</sup> <a name="example_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.exampleInput"></a>

```python
example_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestQueryParameterExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.schemaIdInput"></a>

```python
schema_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationRequestQueryParameter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>]

---


### ApiManagementApiOperationRequestRepresentationExampleList <a name="ApiManagementApiOperationRequestRepresentationExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationRequestRepresentationExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentationExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>]]

---


### ApiManagementApiOperationRequestRepresentationExampleOutputReference <a name="ApiManagementApiOperationRequestRepresentationExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetExternalValue">reset_external_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetSummary">reset_summary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_external_value` <a name="reset_external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetExternalValue"></a>

```python
def reset_external_value() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetSummary"></a>

```python
def reset_summary() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.externalValueInput">external_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.externalValue">external_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `external_value_input`<sup>Optional</sup> <a name="external_value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.externalValueInput"></a>

```python
external_value_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external_value`<sup>Required</sup> <a name="external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.externalValue"></a>

```python
external_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationRequestRepresentationExample]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>]

---


### ApiManagementApiOperationRequestRepresentationFormParameterExampleList <a name="ApiManagementApiOperationRequestRepresentationFormParameterExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentationFormParameterExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>]]

---


### ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference <a name="ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetExternalValue">reset_external_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetSummary">reset_summary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_external_value` <a name="reset_external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetExternalValue"></a>

```python
def reset_external_value() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetSummary"></a>

```python
def reset_summary() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.externalValueInput">external_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.externalValue">external_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `external_value_input`<sup>Optional</sup> <a name="external_value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.externalValueInput"></a>

```python
external_value_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external_value`<sup>Required</sup> <a name="external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.externalValue"></a>

```python
external_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationRequestRepresentationFormParameterExample]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>]

---


### ApiManagementApiOperationRequestRepresentationFormParameterList <a name="ApiManagementApiOperationRequestRepresentationFormParameterList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationRequestRepresentationFormParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentationFormParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>]]

---


### ApiManagementApiOperationRequestRepresentationFormParameterOutputReference <a name="ApiManagementApiOperationRequestRepresentationFormParameterOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.putExample">put_example</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetExample">reset_example</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetSchemaId">reset_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_example` <a name="put_example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.putExample"></a>

```python
def put_example(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentationFormParameterExample]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.putExample.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>]]

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_example` <a name="reset_example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetExample"></a>

```python
def reset_example() -> None
```

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.example">example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList">ApiManagementApiOperationRequestRepresentationFormParameterExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.exampleInput">example_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.schemaIdInput">schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.schemaId">schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.example"></a>

```python
example: ApiManagementApiOperationRequestRepresentationFormParameterExampleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList">ApiManagementApiOperationRequestRepresentationFormParameterExampleList</a>

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `example_input`<sup>Optional</sup> <a name="example_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.exampleInput"></a>

```python
example_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentationFormParameterExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.schemaIdInput"></a>

```python
schema_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationRequestRepresentationFormParameter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>]

---


### ApiManagementApiOperationRequestRepresentationList <a name="ApiManagementApiOperationRequestRepresentationList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationRequestRepresentationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>]]

---


### ApiManagementApiOperationRequestRepresentationOutputReference <a name="ApiManagementApiOperationRequestRepresentationOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putExample">put_example</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putFormParameter">put_form_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetExample">reset_example</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetFormParameter">reset_form_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetSchemaId">reset_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_example` <a name="put_example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putExample"></a>

```python
def put_example(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentationExample]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putExample.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>]]

---

##### `put_form_parameter` <a name="put_form_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putFormParameter"></a>

```python
def put_form_parameter(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentationFormParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putFormParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>]]

---

##### `reset_example` <a name="reset_example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetExample"></a>

```python
def reset_example() -> None
```

##### `reset_form_parameter` <a name="reset_form_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetFormParameter"></a>

```python
def reset_form_parameter() -> None
```

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.example">example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList">ApiManagementApiOperationRequestRepresentationExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.formParameter">form_parameter</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList">ApiManagementApiOperationRequestRepresentationFormParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.exampleInput">example_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.formParameterInput">form_parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.schemaIdInput">schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.schemaId">schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.example"></a>

```python
example: ApiManagementApiOperationRequestRepresentationExampleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList">ApiManagementApiOperationRequestRepresentationExampleList</a>

---

##### `form_parameter`<sup>Required</sup> <a name="form_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.formParameter"></a>

```python
form_parameter: ApiManagementApiOperationRequestRepresentationFormParameterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList">ApiManagementApiOperationRequestRepresentationFormParameterList</a>

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `example_input`<sup>Optional</sup> <a name="example_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.exampleInput"></a>

```python
example_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentationExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>]]

---

##### `form_parameter_input`<sup>Optional</sup> <a name="form_parameter_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.formParameterInput"></a>

```python
form_parameter_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationRequestRepresentationFormParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>]]

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.schemaIdInput"></a>

```python
schema_id_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationRequestRepresentation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>]

---


### ApiManagementApiOperationResponseHeaderExampleList <a name="ApiManagementApiOperationResponseHeaderExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationResponseHeaderExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseHeaderExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>]]

---


### ApiManagementApiOperationResponseHeaderExampleOutputReference <a name="ApiManagementApiOperationResponseHeaderExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetExternalValue">reset_external_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetSummary">reset_summary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_external_value` <a name="reset_external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetExternalValue"></a>

```python
def reset_external_value() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetSummary"></a>

```python
def reset_summary() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.externalValueInput">external_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.externalValue">external_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `external_value_input`<sup>Optional</sup> <a name="external_value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.externalValueInput"></a>

```python
external_value_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external_value`<sup>Required</sup> <a name="external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.externalValue"></a>

```python
external_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationResponseHeaderExample]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>]

---


### ApiManagementApiOperationResponseHeaderList <a name="ApiManagementApiOperationResponseHeaderList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>]]

---


### ApiManagementApiOperationResponseHeaderOutputReference <a name="ApiManagementApiOperationResponseHeaderOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.putExample">put_example</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetExample">reset_example</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetSchemaId">reset_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_example` <a name="put_example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.putExample"></a>

```python
def put_example(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseHeaderExample]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.putExample.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>]]

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_example` <a name="reset_example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetExample"></a>

```python
def reset_example() -> None
```

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.example">example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList">ApiManagementApiOperationResponseHeaderExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.exampleInput">example_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.schemaIdInput">schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.schemaId">schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.example"></a>

```python
example: ApiManagementApiOperationResponseHeaderExampleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList">ApiManagementApiOperationResponseHeaderExampleList</a>

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `example_input`<sup>Optional</sup> <a name="example_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.exampleInput"></a>

```python
example_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseHeaderExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.schemaIdInput"></a>

```python
schema_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationResponseHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>]

---


### ApiManagementApiOperationResponseList <a name="ApiManagementApiOperationResponseList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponse]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>]]

---


### ApiManagementApiOperationResponseOutputReference <a name="ApiManagementApiOperationResponseOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putRepresentation">put_representation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetRepresentation">reset_representation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header` <a name="put_header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putHeader"></a>

```python
def put_header(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>]]

---

##### `put_representation` <a name="put_representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putRepresentation"></a>

```python
def put_representation(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putRepresentation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_representation` <a name="reset_representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetRepresentation"></a>

```python
def reset_representation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList">ApiManagementApiOperationResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.representation">representation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList">ApiManagementApiOperationResponseRepresentationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.representationInput">representation_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.header"></a>

```python
header: ApiManagementApiOperationResponseHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList">ApiManagementApiOperationResponseHeaderList</a>

---

##### `representation`<sup>Required</sup> <a name="representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.representation"></a>

```python
representation: ApiManagementApiOperationResponseRepresentationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList">ApiManagementApiOperationResponseRepresentationList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>]]

---

##### `representation_input`<sup>Optional</sup> <a name="representation_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.representationInput"></a>

```python
representation_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>]]

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.statusCodeInput"></a>

```python
status_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationResponse]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>]

---


### ApiManagementApiOperationResponseRepresentationExampleList <a name="ApiManagementApiOperationResponseRepresentationExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationResponseRepresentationExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentationExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>]]

---


### ApiManagementApiOperationResponseRepresentationExampleOutputReference <a name="ApiManagementApiOperationResponseRepresentationExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetExternalValue">reset_external_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetSummary">reset_summary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_external_value` <a name="reset_external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetExternalValue"></a>

```python
def reset_external_value() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetSummary"></a>

```python
def reset_summary() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.externalValueInput">external_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.externalValue">external_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `external_value_input`<sup>Optional</sup> <a name="external_value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.externalValueInput"></a>

```python
external_value_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external_value`<sup>Required</sup> <a name="external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.externalValue"></a>

```python
external_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationResponseRepresentationExample]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>]

---


### ApiManagementApiOperationResponseRepresentationFormParameterExampleList <a name="ApiManagementApiOperationResponseRepresentationFormParameterExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentationFormParameterExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>]]

---


### ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference <a name="ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetExternalValue">reset_external_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetSummary">reset_summary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_external_value` <a name="reset_external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetExternalValue"></a>

```python
def reset_external_value() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetSummary"></a>

```python
def reset_summary() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.externalValueInput">external_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.externalValue">external_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `external_value_input`<sup>Optional</sup> <a name="external_value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.externalValueInput"></a>

```python
external_value_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external_value`<sup>Required</sup> <a name="external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.externalValue"></a>

```python
external_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationResponseRepresentationFormParameterExample]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>]

---


### ApiManagementApiOperationResponseRepresentationFormParameterList <a name="ApiManagementApiOperationResponseRepresentationFormParameterList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationResponseRepresentationFormParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentationFormParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>]]

---


### ApiManagementApiOperationResponseRepresentationFormParameterOutputReference <a name="ApiManagementApiOperationResponseRepresentationFormParameterOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.putExample">put_example</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetExample">reset_example</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetSchemaId">reset_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_example` <a name="put_example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.putExample"></a>

```python
def put_example(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentationFormParameterExample]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.putExample.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>]]

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_example` <a name="reset_example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetExample"></a>

```python
def reset_example() -> None
```

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.example">example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList">ApiManagementApiOperationResponseRepresentationFormParameterExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.exampleInput">example_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.schemaIdInput">schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.schemaId">schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.example"></a>

```python
example: ApiManagementApiOperationResponseRepresentationFormParameterExampleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList">ApiManagementApiOperationResponseRepresentationFormParameterExampleList</a>

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `example_input`<sup>Optional</sup> <a name="example_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.exampleInput"></a>

```python
example_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentationFormParameterExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.schemaIdInput"></a>

```python
schema_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationResponseRepresentationFormParameter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>]

---


### ApiManagementApiOperationResponseRepresentationList <a name="ApiManagementApiOperationResponseRepresentationList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationResponseRepresentationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>]]

---


### ApiManagementApiOperationResponseRepresentationOutputReference <a name="ApiManagementApiOperationResponseRepresentationOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putExample">put_example</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putFormParameter">put_form_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetExample">reset_example</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetFormParameter">reset_form_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetSchemaId">reset_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_example` <a name="put_example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putExample"></a>

```python
def put_example(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentationExample]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putExample.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>]]

---

##### `put_form_parameter` <a name="put_form_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putFormParameter"></a>

```python
def put_form_parameter(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentationFormParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putFormParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>]]

---

##### `reset_example` <a name="reset_example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetExample"></a>

```python
def reset_example() -> None
```

##### `reset_form_parameter` <a name="reset_form_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetFormParameter"></a>

```python
def reset_form_parameter() -> None
```

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.example">example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList">ApiManagementApiOperationResponseRepresentationExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.formParameter">form_parameter</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList">ApiManagementApiOperationResponseRepresentationFormParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.exampleInput">example_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.formParameterInput">form_parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.schemaIdInput">schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.schemaId">schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.example"></a>

```python
example: ApiManagementApiOperationResponseRepresentationExampleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList">ApiManagementApiOperationResponseRepresentationExampleList</a>

---

##### `form_parameter`<sup>Required</sup> <a name="form_parameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.formParameter"></a>

```python
form_parameter: ApiManagementApiOperationResponseRepresentationFormParameterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList">ApiManagementApiOperationResponseRepresentationFormParameterList</a>

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `example_input`<sup>Optional</sup> <a name="example_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.exampleInput"></a>

```python
example_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentationExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>]]

---

##### `form_parameter_input`<sup>Optional</sup> <a name="form_parameter_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.formParameterInput"></a>

```python
form_parameter_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationResponseRepresentationFormParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>]]

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.schemaIdInput"></a>

```python
schema_id_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationResponseRepresentation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>]

---


### ApiManagementApiOperationTemplateParameterExampleList <a name="ApiManagementApiOperationTemplateParameterExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationTemplateParameterExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationTemplateParameterExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>]]

---


### ApiManagementApiOperationTemplateParameterExampleOutputReference <a name="ApiManagementApiOperationTemplateParameterExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetExternalValue">reset_external_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetSummary">reset_summary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_external_value` <a name="reset_external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetExternalValue"></a>

```python
def reset_external_value() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetSummary"></a>

```python
def reset_summary() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.externalValueInput">external_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.externalValue">external_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `external_value_input`<sup>Optional</sup> <a name="external_value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.externalValueInput"></a>

```python
external_value_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external_value`<sup>Required</sup> <a name="external_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.externalValue"></a>

```python
external_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationTemplateParameterExample]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>]

---


### ApiManagementApiOperationTemplateParameterList <a name="ApiManagementApiOperationTemplateParameterList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiManagementApiOperationTemplateParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationTemplateParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>]]

---


### ApiManagementApiOperationTemplateParameterOutputReference <a name="ApiManagementApiOperationTemplateParameterOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.putExample">put_example</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetExample">reset_example</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetSchemaId">reset_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_example` <a name="put_example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.putExample"></a>

```python
def put_example(
  value: typing.Union[IResolvable, typing.List[ApiManagementApiOperationTemplateParameterExample]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.putExample.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>]]

---

##### `reset_default_value` <a name="reset_default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_example` <a name="reset_example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetExample"></a>

```python
def reset_example() -> None
```

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.example">example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList">ApiManagementApiOperationTemplateParameterExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.exampleInput">example_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.schemaIdInput">schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.schemaId">schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.example"></a>

```python
example: ApiManagementApiOperationTemplateParameterExampleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList">ApiManagementApiOperationTemplateParameterExampleList</a>

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `example_input`<sup>Optional</sup> <a name="example_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.exampleInput"></a>

```python
example_input: typing.Union[IResolvable, typing.List[ApiManagementApiOperationTemplateParameterExample]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.schemaIdInput"></a>

```python
schema_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationTemplateParameter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>]

---


### ApiManagementApiOperationTimeoutsOutputReference <a name="ApiManagementApiOperationTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api_operation

apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiOperationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a>]

---



