# `monitorDataCollectionEndpoint` Submodule <a name="`monitorDataCollectionEndpoint` Submodule" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorDataCollectionEndpoint <a name="MonitorDataCollectionEndpoint" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint azurerm_monitor_data_collection_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_data_collection_endpoint

monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  description: str = None,
  id: str = None,
  kind: str = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MonitorDataCollectionEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#location MonitorDataCollectionEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#name MonitorDataCollectionEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#resource_group_name MonitorDataCollectionEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#description MonitorDataCollectionEndpoint#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#id MonitorDataCollectionEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#kind MonitorDataCollectionEndpoint#kind}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#public_network_access_enabled MonitorDataCollectionEndpoint#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#tags MonitorDataCollectionEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts">MonitorDataCollectionEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#location MonitorDataCollectionEndpoint#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#name MonitorDataCollectionEndpoint#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#resource_group_name MonitorDataCollectionEndpoint#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#description MonitorDataCollectionEndpoint#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#id MonitorDataCollectionEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#kind MonitorDataCollectionEndpoint#kind}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#public_network_access_enabled MonitorDataCollectionEndpoint#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#tags MonitorDataCollectionEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts">MonitorDataCollectionEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#timeouts MonitorDataCollectionEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.resetKind">reset_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#create MonitorDataCollectionEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#delete MonitorDataCollectionEndpoint#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#read MonitorDataCollectionEndpoint#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#update MonitorDataCollectionEndpoint#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kind` <a name="reset_kind" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.resetKind"></a>

```python
def reset_kind() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MonitorDataCollectionEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_data_collection_endpoint

monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_data_collection_endpoint

monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_data_collection_endpoint

monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_data_collection_endpoint

monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MonitorDataCollectionEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MonitorDataCollectionEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MonitorDataCollectionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorDataCollectionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.configurationAccessEndpoint">configuration_access_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.immutableId">immutable_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.logsIngestionEndpoint">logs_ingestion_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.metricsIngestionEndpoint">metrics_ingestion_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference">MonitorDataCollectionEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts">MonitorDataCollectionEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_access_endpoint`<sup>Required</sup> <a name="configuration_access_endpoint" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.configurationAccessEndpoint"></a>

```python
configuration_access_endpoint: str
```

- *Type:* str

---

##### `immutable_id`<sup>Required</sup> <a name="immutable_id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.immutableId"></a>

```python
immutable_id: str
```

- *Type:* str

---

##### `logs_ingestion_endpoint`<sup>Required</sup> <a name="logs_ingestion_endpoint" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.logsIngestionEndpoint"></a>

```python
logs_ingestion_endpoint: str
```

- *Type:* str

---

##### `metrics_ingestion_endpoint`<sup>Required</sup> <a name="metrics_ingestion_endpoint" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.metricsIngestionEndpoint"></a>

```python
metrics_ingestion_endpoint: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.timeouts"></a>

```python
timeouts: MonitorDataCollectionEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference">MonitorDataCollectionEndpointTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MonitorDataCollectionEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts">MonitorDataCollectionEndpointTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorDataCollectionEndpointConfig <a name="MonitorDataCollectionEndpointConfig" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_data_collection_endpoint

monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  description: str = None,
  id: str = None,
  kind: str = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MonitorDataCollectionEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#location MonitorDataCollectionEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#name MonitorDataCollectionEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#resource_group_name MonitorDataCollectionEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#description MonitorDataCollectionEndpoint#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#id MonitorDataCollectionEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#kind MonitorDataCollectionEndpoint#kind}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#public_network_access_enabled MonitorDataCollectionEndpoint#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#tags MonitorDataCollectionEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts">MonitorDataCollectionEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#location MonitorDataCollectionEndpoint#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#name MonitorDataCollectionEndpoint#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#resource_group_name MonitorDataCollectionEndpoint#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#description MonitorDataCollectionEndpoint#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#id MonitorDataCollectionEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#kind MonitorDataCollectionEndpoint#kind}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#public_network_access_enabled MonitorDataCollectionEndpoint#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#tags MonitorDataCollectionEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointConfig.property.timeouts"></a>

```python
timeouts: MonitorDataCollectionEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts">MonitorDataCollectionEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#timeouts MonitorDataCollectionEndpoint#timeouts}

---

### MonitorDataCollectionEndpointTimeouts <a name="MonitorDataCollectionEndpointTimeouts" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_data_collection_endpoint

monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#create MonitorDataCollectionEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#delete MonitorDataCollectionEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#read MonitorDataCollectionEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#update MonitorDataCollectionEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#create MonitorDataCollectionEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#delete MonitorDataCollectionEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#read MonitorDataCollectionEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/monitor_data_collection_endpoint#update MonitorDataCollectionEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorDataCollectionEndpointTimeoutsOutputReference <a name="MonitorDataCollectionEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import monitor_data_collection_endpoint

monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts">MonitorDataCollectionEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorDataCollectionEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.monitorDataCollectionEndpoint.MonitorDataCollectionEndpointTimeouts">MonitorDataCollectionEndpointTimeouts</a>]

---



