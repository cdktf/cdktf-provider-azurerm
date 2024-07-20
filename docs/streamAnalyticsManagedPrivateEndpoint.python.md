# `streamAnalyticsManagedPrivateEndpoint` Submodule <a name="`streamAnalyticsManagedPrivateEndpoint` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsManagedPrivateEndpoint <a name="StreamAnalyticsManagedPrivateEndpoint" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint azurerm_stream_analytics_managed_private_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_managed_private_endpoint

streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint(
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
  resource_group_name: str,
  stream_analytics_cluster_name: str,
  subresource_name: str,
  target_resource_id: str,
  id: str = None,
  timeouts: StreamAnalyticsManagedPrivateEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#name StreamAnalyticsManagedPrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#resource_group_name StreamAnalyticsManagedPrivateEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.streamAnalyticsClusterName">stream_analytics_cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#stream_analytics_cluster_name StreamAnalyticsManagedPrivateEndpoint#stream_analytics_cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.subresourceName">subresource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#subresource_name StreamAnalyticsManagedPrivateEndpoint#subresource_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#target_resource_id StreamAnalyticsManagedPrivateEndpoint#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#id StreamAnalyticsManagedPrivateEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#name StreamAnalyticsManagedPrivateEndpoint#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#resource_group_name StreamAnalyticsManagedPrivateEndpoint#resource_group_name}.

---

##### `stream_analytics_cluster_name`<sup>Required</sup> <a name="stream_analytics_cluster_name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.streamAnalyticsClusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#stream_analytics_cluster_name StreamAnalyticsManagedPrivateEndpoint#stream_analytics_cluster_name}.

---

##### `subresource_name`<sup>Required</sup> <a name="subresource_name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.subresourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#subresource_name StreamAnalyticsManagedPrivateEndpoint#subresource_name}.

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.targetResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#target_resource_id StreamAnalyticsManagedPrivateEndpoint#target_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#id StreamAnalyticsManagedPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#timeouts StreamAnalyticsManagedPrivateEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#create StreamAnalyticsManagedPrivateEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#delete StreamAnalyticsManagedPrivateEndpoint#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#read StreamAnalyticsManagedPrivateEndpoint#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StreamAnalyticsManagedPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_managed_private_endpoint

streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_managed_private_endpoint

streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_managed_private_endpoint

streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_managed_private_endpoint

streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StreamAnalyticsManagedPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StreamAnalyticsManagedPrivateEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StreamAnalyticsManagedPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsManagedPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference">StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.streamAnalyticsClusterNameInput">stream_analytics_cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.subresourceNameInput">subresource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.targetResourceIdInput">target_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.streamAnalyticsClusterName">stream_analytics_cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.subresourceName">subresource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.timeouts"></a>

```python
timeouts: StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference">StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `stream_analytics_cluster_name_input`<sup>Optional</sup> <a name="stream_analytics_cluster_name_input" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.streamAnalyticsClusterNameInput"></a>

```python
stream_analytics_cluster_name_input: str
```

- *Type:* str

---

##### `subresource_name_input`<sup>Optional</sup> <a name="subresource_name_input" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.subresourceNameInput"></a>

```python
subresource_name_input: str
```

- *Type:* str

---

##### `target_resource_id_input`<sup>Optional</sup> <a name="target_resource_id_input" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.targetResourceIdInput"></a>

```python
target_resource_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StreamAnalyticsManagedPrivateEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `stream_analytics_cluster_name`<sup>Required</sup> <a name="stream_analytics_cluster_name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.streamAnalyticsClusterName"></a>

```python
stream_analytics_cluster_name: str
```

- *Type:* str

---

##### `subresource_name`<sup>Required</sup> <a name="subresource_name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.subresourceName"></a>

```python
subresource_name: str
```

- *Type:* str

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsManagedPrivateEndpointConfig <a name="StreamAnalyticsManagedPrivateEndpointConfig" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_managed_private_endpoint

streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  stream_analytics_cluster_name: str,
  subresource_name: str,
  target_resource_id: str,
  id: str = None,
  timeouts: StreamAnalyticsManagedPrivateEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#name StreamAnalyticsManagedPrivateEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#resource_group_name StreamAnalyticsManagedPrivateEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.streamAnalyticsClusterName">stream_analytics_cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#stream_analytics_cluster_name StreamAnalyticsManagedPrivateEndpoint#stream_analytics_cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.subresourceName">subresource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#subresource_name StreamAnalyticsManagedPrivateEndpoint#subresource_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#target_resource_id StreamAnalyticsManagedPrivateEndpoint#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#id StreamAnalyticsManagedPrivateEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#name StreamAnalyticsManagedPrivateEndpoint#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#resource_group_name StreamAnalyticsManagedPrivateEndpoint#resource_group_name}.

---

##### `stream_analytics_cluster_name`<sup>Required</sup> <a name="stream_analytics_cluster_name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.streamAnalyticsClusterName"></a>

```python
stream_analytics_cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#stream_analytics_cluster_name StreamAnalyticsManagedPrivateEndpoint#stream_analytics_cluster_name}.

---

##### `subresource_name`<sup>Required</sup> <a name="subresource_name" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.subresourceName"></a>

```python
subresource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#subresource_name StreamAnalyticsManagedPrivateEndpoint#subresource_name}.

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#target_resource_id StreamAnalyticsManagedPrivateEndpoint#target_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#id StreamAnalyticsManagedPrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointConfig.property.timeouts"></a>

```python
timeouts: StreamAnalyticsManagedPrivateEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#timeouts StreamAnalyticsManagedPrivateEndpoint#timeouts}

---

### StreamAnalyticsManagedPrivateEndpointTimeouts <a name="StreamAnalyticsManagedPrivateEndpointTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_managed_private_endpoint

streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#create StreamAnalyticsManagedPrivateEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#delete StreamAnalyticsManagedPrivateEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#read StreamAnalyticsManagedPrivateEndpoint#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#create StreamAnalyticsManagedPrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#delete StreamAnalyticsManagedPrivateEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/stream_analytics_managed_private_endpoint#read StreamAnalyticsManagedPrivateEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference <a name="StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_managed_private_endpoint

streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StreamAnalyticsManagedPrivateEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsManagedPrivateEndpoint.StreamAnalyticsManagedPrivateEndpointTimeouts">StreamAnalyticsManagedPrivateEndpointTimeouts</a>]

---



