# `azurerm_iothub_endpoint_servicebus_topic`

Refer to the Terraform Registory for docs: [`azurerm_iothub_endpoint_servicebus_topic`](https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic).

# `iothubEndpointServicebusTopic` Submodule <a name="`iothubEndpointServicebusTopic` Submodule" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubEndpointServicebusTopic <a name="IothubEndpointServicebusTopic" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic azurerm_iothub_endpoint_servicebus_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_endpoint_servicebus_topic

iothubEndpointServicebusTopic.IothubEndpointServicebusTopic(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  iothub_id: str,
  name: str,
  resource_group_name: str,
  authentication_type: str = None,
  connection_string: str = None,
  endpoint_uri: str = None,
  entity_path: str = None,
  id: str = None,
  identity_id: str = None,
  timeouts: IothubEndpointServicebusTopicTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.iothubId">iothub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#iothub_id IothubEndpointServicebusTopic#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#name IothubEndpointServicebusTopic#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#resource_group_name IothubEndpointServicebusTopic#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#authentication_type IothubEndpointServicebusTopic#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#connection_string IothubEndpointServicebusTopic#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.endpointUri">endpoint_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#endpoint_uri IothubEndpointServicebusTopic#endpoint_uri}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.entityPath">entity_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#entity_path IothubEndpointServicebusTopic#entity_path}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#id IothubEndpointServicebusTopic#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.identityId">identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#identity_id IothubEndpointServicebusTopic#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `iothub_id`<sup>Required</sup> <a name="iothub_id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.iothubId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#iothub_id IothubEndpointServicebusTopic#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#name IothubEndpointServicebusTopic#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#resource_group_name IothubEndpointServicebusTopic#resource_group_name}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.authenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#authentication_type IothubEndpointServicebusTopic#authentication_type}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.connectionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#connection_string IothubEndpointServicebusTopic#connection_string}.

---

##### `endpoint_uri`<sup>Optional</sup> <a name="endpoint_uri" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.endpointUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#endpoint_uri IothubEndpointServicebusTopic#endpoint_uri}.

---

##### `entity_path`<sup>Optional</sup> <a name="entity_path" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.entityPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#entity_path IothubEndpointServicebusTopic#entity_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#id IothubEndpointServicebusTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_id`<sup>Optional</sup> <a name="identity_id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.identityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#identity_id IothubEndpointServicebusTopic#identity_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#timeouts IothubEndpointServicebusTopic#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetAuthenticationType">reset_authentication_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetConnectionString">reset_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetEndpointUri">reset_endpoint_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetEntityPath">reset_entity_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetIdentityId">reset_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#create IothubEndpointServicebusTopic#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#delete IothubEndpointServicebusTopic#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#read IothubEndpointServicebusTopic#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#update IothubEndpointServicebusTopic#update}.

---

##### `reset_authentication_type` <a name="reset_authentication_type" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetAuthenticationType"></a>

```python
def reset_authentication_type() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```

##### `reset_endpoint_uri` <a name="reset_endpoint_uri" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetEndpointUri"></a>

```python
def reset_endpoint_uri() -> None
```

##### `reset_entity_path` <a name="reset_entity_path" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetEntityPath"></a>

```python
def reset_entity_path() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_id` <a name="reset_identity_id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetIdentityId"></a>

```python
def reset_identity_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_endpoint_servicebus_topic

iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_endpoint_servicebus_topic

iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_endpoint_servicebus_topic

iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference">IothubEndpointServicebusTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.endpointUriInput">endpoint_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.entityPathInput">entity_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.identityIdInput">identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.iothubIdInput">iothub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.endpointUri">endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.entityPath">entity_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.identityId">identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.iothubId">iothub_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.timeouts"></a>

```python
timeouts: IothubEndpointServicebusTopicTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference">IothubEndpointServicebusTopicTimeoutsOutputReference</a>

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `endpoint_uri_input`<sup>Optional</sup> <a name="endpoint_uri_input" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.endpointUriInput"></a>

```python
endpoint_uri_input: str
```

- *Type:* str

---

##### `entity_path_input`<sup>Optional</sup> <a name="entity_path_input" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.entityPathInput"></a>

```python
entity_path_input: str
```

- *Type:* str

---

##### `identity_id_input`<sup>Optional</sup> <a name="identity_id_input" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.identityIdInput"></a>

```python
identity_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iothub_id_input`<sup>Optional</sup> <a name="iothub_id_input" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.iothubIdInput"></a>

```python
iothub_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IothubEndpointServicebusTopicTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a>, cdktf.IResolvable]

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `endpoint_uri`<sup>Required</sup> <a name="endpoint_uri" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.endpointUri"></a>

```python
endpoint_uri: str
```

- *Type:* str

---

##### `entity_path`<sup>Required</sup> <a name="entity_path" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.entityPath"></a>

```python
entity_path: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_id`<sup>Required</sup> <a name="identity_id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

---

##### `iothub_id`<sup>Required</sup> <a name="iothub_id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.iothubId"></a>

```python
iothub_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IothubEndpointServicebusTopicConfig <a name="IothubEndpointServicebusTopicConfig" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_endpoint_servicebus_topic

iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  iothub_id: str,
  name: str,
  resource_group_name: str,
  authentication_type: str = None,
  connection_string: str = None,
  endpoint_uri: str = None,
  entity_path: str = None,
  id: str = None,
  identity_id: str = None,
  timeouts: IothubEndpointServicebusTopicTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.iothubId">iothub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#iothub_id IothubEndpointServicebusTopic#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#name IothubEndpointServicebusTopic#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#resource_group_name IothubEndpointServicebusTopic#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#authentication_type IothubEndpointServicebusTopic#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#connection_string IothubEndpointServicebusTopic#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.endpointUri">endpoint_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#endpoint_uri IothubEndpointServicebusTopic#endpoint_uri}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.entityPath">entity_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#entity_path IothubEndpointServicebusTopic#entity_path}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#id IothubEndpointServicebusTopic#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.identityId">identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#identity_id IothubEndpointServicebusTopic#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `iothub_id`<sup>Required</sup> <a name="iothub_id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.iothubId"></a>

```python
iothub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#iothub_id IothubEndpointServicebusTopic#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#name IothubEndpointServicebusTopic#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#resource_group_name IothubEndpointServicebusTopic#resource_group_name}.

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#authentication_type IothubEndpointServicebusTopic#authentication_type}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#connection_string IothubEndpointServicebusTopic#connection_string}.

---

##### `endpoint_uri`<sup>Optional</sup> <a name="endpoint_uri" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.endpointUri"></a>

```python
endpoint_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#endpoint_uri IothubEndpointServicebusTopic#endpoint_uri}.

---

##### `entity_path`<sup>Optional</sup> <a name="entity_path" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.entityPath"></a>

```python
entity_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#entity_path IothubEndpointServicebusTopic#entity_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#id IothubEndpointServicebusTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_id`<sup>Optional</sup> <a name="identity_id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.identityId"></a>

```python
identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#identity_id IothubEndpointServicebusTopic#identity_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.timeouts"></a>

```python
timeouts: IothubEndpointServicebusTopicTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#timeouts IothubEndpointServicebusTopic#timeouts}

---

### IothubEndpointServicebusTopicTimeouts <a name="IothubEndpointServicebusTopicTimeouts" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_endpoint_servicebus_topic

iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#create IothubEndpointServicebusTopic#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#delete IothubEndpointServicebusTopic#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#read IothubEndpointServicebusTopic#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#update IothubEndpointServicebusTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#create IothubEndpointServicebusTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#delete IothubEndpointServicebusTopic#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#read IothubEndpointServicebusTopic#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/iothub_endpoint_servicebus_topic#update IothubEndpointServicebusTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubEndpointServicebusTopicTimeoutsOutputReference <a name="IothubEndpointServicebusTopicTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_endpoint_servicebus_topic

iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IothubEndpointServicebusTopicTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a>, cdktf.IResolvable]

---



