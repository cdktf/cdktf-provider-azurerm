# `iotTimeSeriesInsightsAccessPolicy` Submodule <a name="`iotTimeSeriesInsightsAccessPolicy` Submodule" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTimeSeriesInsightsAccessPolicy <a name="IotTimeSeriesInsightsAccessPolicy" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy azurerm_iot_time_series_insights_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_access_policy

iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  principal_object_id: str,
  roles: typing.List[str],
  time_series_insights_environment_id: str,
  description: str = None,
  id: str = None,
  timeouts: IotTimeSeriesInsightsAccessPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#name IotTimeSeriesInsightsAccessPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.principalObjectId">principal_object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#principal_object_id IotTimeSeriesInsightsAccessPolicy#principal_object_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.roles">roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#roles IotTimeSeriesInsightsAccessPolicy#roles}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.timeSeriesInsightsEnvironmentId">time_series_insights_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#time_series_insights_environment_id IotTimeSeriesInsightsAccessPolicy#time_series_insights_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#description IotTimeSeriesInsightsAccessPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#id IotTimeSeriesInsightsAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#name IotTimeSeriesInsightsAccessPolicy#name}.

---

##### `principal_object_id`<sup>Required</sup> <a name="principal_object_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.principalObjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#principal_object_id IotTimeSeriesInsightsAccessPolicy#principal_object_id}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.roles"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#roles IotTimeSeriesInsightsAccessPolicy#roles}.

---

##### `time_series_insights_environment_id`<sup>Required</sup> <a name="time_series_insights_environment_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.timeSeriesInsightsEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#time_series_insights_environment_id IotTimeSeriesInsightsAccessPolicy#time_series_insights_environment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#description IotTimeSeriesInsightsAccessPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#id IotTimeSeriesInsightsAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#timeouts IotTimeSeriesInsightsAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#create IotTimeSeriesInsightsAccessPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#delete IotTimeSeriesInsightsAccessPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#read IotTimeSeriesInsightsAccessPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#update IotTimeSeriesInsightsAccessPolicy#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IotTimeSeriesInsightsAccessPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_access_policy

iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_access_policy

iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_access_policy

iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_access_policy

iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IotTimeSeriesInsightsAccessPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotTimeSeriesInsightsAccessPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotTimeSeriesInsightsAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IotTimeSeriesInsightsAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference">IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.principalObjectIdInput">principal_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeSeriesInsightsEnvironmentIdInput">time_series_insights_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.principalObjectId">principal_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeSeriesInsightsEnvironmentId">time_series_insights_environment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeouts"></a>

```python
timeouts: IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference">IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `principal_object_id_input`<sup>Optional</sup> <a name="principal_object_id_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.principalObjectIdInput"></a>

```python
principal_object_id_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IotTimeSeriesInsightsAccessPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a>]

---

##### `time_series_insights_environment_id_input`<sup>Optional</sup> <a name="time_series_insights_environment_id_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeSeriesInsightsEnvironmentIdInput"></a>

```python
time_series_insights_environment_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `principal_object_id`<sup>Required</sup> <a name="principal_object_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.principalObjectId"></a>

```python
principal_object_id: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_series_insights_environment_id`<sup>Required</sup> <a name="time_series_insights_environment_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeSeriesInsightsEnvironmentId"></a>

```python
time_series_insights_environment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotTimeSeriesInsightsAccessPolicyConfig <a name="IotTimeSeriesInsightsAccessPolicyConfig" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_access_policy

iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  principal_object_id: str,
  roles: typing.List[str],
  time_series_insights_environment_id: str,
  description: str = None,
  id: str = None,
  timeouts: IotTimeSeriesInsightsAccessPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#name IotTimeSeriesInsightsAccessPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.principalObjectId">principal_object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#principal_object_id IotTimeSeriesInsightsAccessPolicy#principal_object_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.roles">roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#roles IotTimeSeriesInsightsAccessPolicy#roles}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.timeSeriesInsightsEnvironmentId">time_series_insights_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#time_series_insights_environment_id IotTimeSeriesInsightsAccessPolicy#time_series_insights_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#description IotTimeSeriesInsightsAccessPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#id IotTimeSeriesInsightsAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#name IotTimeSeriesInsightsAccessPolicy#name}.

---

##### `principal_object_id`<sup>Required</sup> <a name="principal_object_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.principalObjectId"></a>

```python
principal_object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#principal_object_id IotTimeSeriesInsightsAccessPolicy#principal_object_id}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#roles IotTimeSeriesInsightsAccessPolicy#roles}.

---

##### `time_series_insights_environment_id`<sup>Required</sup> <a name="time_series_insights_environment_id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.timeSeriesInsightsEnvironmentId"></a>

```python
time_series_insights_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#time_series_insights_environment_id IotTimeSeriesInsightsAccessPolicy#time_series_insights_environment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#description IotTimeSeriesInsightsAccessPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#id IotTimeSeriesInsightsAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.timeouts"></a>

```python
timeouts: IotTimeSeriesInsightsAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#timeouts IotTimeSeriesInsightsAccessPolicy#timeouts}

---

### IotTimeSeriesInsightsAccessPolicyTimeouts <a name="IotTimeSeriesInsightsAccessPolicyTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_access_policy

iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#create IotTimeSeriesInsightsAccessPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#delete IotTimeSeriesInsightsAccessPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#read IotTimeSeriesInsightsAccessPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#update IotTimeSeriesInsightsAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#create IotTimeSeriesInsightsAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#delete IotTimeSeriesInsightsAccessPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#read IotTimeSeriesInsightsAccessPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/iot_time_series_insights_access_policy#update IotTimeSeriesInsightsAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference <a name="IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iot_time_series_insights_access_policy

iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IotTimeSeriesInsightsAccessPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a>]

---



