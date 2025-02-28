# `datadogMonitor` Submodule <a name="`datadogMonitor` Submodule" id="@cdktf/provider-azurerm.datadogMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatadogMonitor <a name="DatadogMonitor" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor azurerm_datadog_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor

datadogMonitor.DatadogMonitor(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datadog_organization: DatadogMonitorDatadogOrganization,
  location: str,
  name: str,
  resource_group_name: str,
  sku_name: str,
  user: DatadogMonitorUser,
  id: str = None,
  identity: DatadogMonitorIdentity = None,
  monitoring_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: DatadogMonitorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.datadogOrganization">datadog_organization</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization">DatadogMonitorDatadogOrganization</a></code> | datadog_organization block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#location DatadogMonitor#location}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#name DatadogMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#resource_group_name DatadogMonitor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#sku_name DatadogMonitor#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.user">user</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser">DatadogMonitorUser</a></code> | user block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#id DatadogMonitor#id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity">DatadogMonitorIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.monitoringEnabled">monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#monitoring_enabled DatadogMonitor#monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#tags DatadogMonitor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts">DatadogMonitorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datadog_organization`<sup>Required</sup> <a name="datadog_organization" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.datadogOrganization"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization">DatadogMonitorDatadogOrganization</a>

datadog_organization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#datadog_organization DatadogMonitor#datadog_organization}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#location DatadogMonitor#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#name DatadogMonitor#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#resource_group_name DatadogMonitor#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#sku_name DatadogMonitor#sku_name}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.user"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser">DatadogMonitorUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#user DatadogMonitor#user}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#id DatadogMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity">DatadogMonitorIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#identity DatadogMonitor#identity}

---

##### `monitoring_enabled`<sup>Optional</sup> <a name="monitoring_enabled" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.monitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#monitoring_enabled DatadogMonitor#monitoring_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#tags DatadogMonitor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts">DatadogMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#timeouts DatadogMonitor#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putDatadogOrganization">put_datadog_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putUser">put_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetMonitoringEnabled">reset_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_datadog_organization` <a name="put_datadog_organization" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putDatadogOrganization"></a>

```python
def put_datadog_organization(
  api_key: str,
  application_key: str,
  enterprise_app_id: str = None,
  linking_auth_code: str = None,
  linking_client_id: str = None,
  redirect_uri: str = None
) -> None
```

###### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putDatadogOrganization.parameter.apiKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#api_key DatadogMonitor#api_key}.

---

###### `application_key`<sup>Required</sup> <a name="application_key" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putDatadogOrganization.parameter.applicationKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#application_key DatadogMonitor#application_key}.

---

###### `enterprise_app_id`<sup>Optional</sup> <a name="enterprise_app_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putDatadogOrganization.parameter.enterpriseAppId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#enterprise_app_id DatadogMonitor#enterprise_app_id}.

---

###### `linking_auth_code`<sup>Optional</sup> <a name="linking_auth_code" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putDatadogOrganization.parameter.linkingAuthCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#linking_auth_code DatadogMonitor#linking_auth_code}.

---

###### `linking_client_id`<sup>Optional</sup> <a name="linking_client_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putDatadogOrganization.parameter.linkingClientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#linking_client_id DatadogMonitor#linking_client_id}.

---

###### `redirect_uri`<sup>Optional</sup> <a name="redirect_uri" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putDatadogOrganization.parameter.redirectUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#redirect_uri DatadogMonitor#redirect_uri}.

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putIdentity"></a>

```python
def put_identity(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#type DatadogMonitor#type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#create DatadogMonitor#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#delete DatadogMonitor#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#read DatadogMonitor#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#update DatadogMonitor#update}.

---

##### `put_user` <a name="put_user" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putUser"></a>

```python
def put_user(
  email: str,
  name: str,
  phone_number: str = None
) -> None
```

###### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putUser.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#email DatadogMonitor#email}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putUser.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#name DatadogMonitor#name}.

---

###### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.putUser.parameter.phoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#phone_number DatadogMonitor#phone_number}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_monitoring_enabled` <a name="reset_monitoring_enabled" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetMonitoringEnabled"></a>

```python
def reset_monitoring_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatadogMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor

datadogMonitor.DatadogMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor

datadogMonitor.DatadogMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor

datadogMonitor.DatadogMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor

datadogMonitor.DatadogMonitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatadogMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatadogMonitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatadogMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatadogMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.datadogOrganization">datadog_organization</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference">DatadogMonitorDatadogOrganizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference">DatadogMonitorIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.marketplaceSubscriptionStatus">marketplace_subscription_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference">DatadogMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.user">user</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference">DatadogMonitorUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.datadogOrganizationInput">datadog_organization_input</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization">DatadogMonitorDatadogOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity">DatadogMonitorIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.monitoringEnabledInput">monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts">DatadogMonitorTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.userInput">user_input</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser">DatadogMonitorUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.monitoringEnabled">monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datadog_organization`<sup>Required</sup> <a name="datadog_organization" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.datadogOrganization"></a>

```python
datadog_organization: DatadogMonitorDatadogOrganizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference">DatadogMonitorDatadogOrganizationOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.identity"></a>

```python
identity: DatadogMonitorIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference">DatadogMonitorIdentityOutputReference</a>

---

##### `marketplace_subscription_status`<sup>Required</sup> <a name="marketplace_subscription_status" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.marketplaceSubscriptionStatus"></a>

```python
marketplace_subscription_status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.timeouts"></a>

```python
timeouts: DatadogMonitorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference">DatadogMonitorTimeoutsOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.user"></a>

```python
user: DatadogMonitorUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference">DatadogMonitorUserOutputReference</a>

---

##### `datadog_organization_input`<sup>Optional</sup> <a name="datadog_organization_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.datadogOrganizationInput"></a>

```python
datadog_organization_input: DatadogMonitorDatadogOrganization
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization">DatadogMonitorDatadogOrganization</a>

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.identityInput"></a>

```python
identity_input: DatadogMonitorIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity">DatadogMonitorIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `monitoring_enabled_input`<sup>Optional</sup> <a name="monitoring_enabled_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.monitoringEnabledInput"></a>

```python
monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatadogMonitorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts">DatadogMonitorTimeouts</a>]

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.userInput"></a>

```python
user_input: DatadogMonitorUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser">DatadogMonitorUser</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `monitoring_enabled`<sup>Required</sup> <a name="monitoring_enabled" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.monitoringEnabled"></a>

```python
monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatadogMonitorConfig <a name="DatadogMonitorConfig" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor

datadogMonitor.DatadogMonitorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datadog_organization: DatadogMonitorDatadogOrganization,
  location: str,
  name: str,
  resource_group_name: str,
  sku_name: str,
  user: DatadogMonitorUser,
  id: str = None,
  identity: DatadogMonitorIdentity = None,
  monitoring_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: DatadogMonitorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.datadogOrganization">datadog_organization</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization">DatadogMonitorDatadogOrganization</a></code> | datadog_organization block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#location DatadogMonitor#location}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#name DatadogMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#resource_group_name DatadogMonitor#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#sku_name DatadogMonitor#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.user">user</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser">DatadogMonitorUser</a></code> | user block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#id DatadogMonitor#id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity">DatadogMonitorIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.monitoringEnabled">monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#monitoring_enabled DatadogMonitor#monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#tags DatadogMonitor#tags}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts">DatadogMonitorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datadog_organization`<sup>Required</sup> <a name="datadog_organization" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.datadogOrganization"></a>

```python
datadog_organization: DatadogMonitorDatadogOrganization
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization">DatadogMonitorDatadogOrganization</a>

datadog_organization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#datadog_organization DatadogMonitor#datadog_organization}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#location DatadogMonitor#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#name DatadogMonitor#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#resource_group_name DatadogMonitor#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#sku_name DatadogMonitor#sku_name}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.user"></a>

```python
user: DatadogMonitorUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser">DatadogMonitorUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#user DatadogMonitor#user}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#id DatadogMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.identity"></a>

```python
identity: DatadogMonitorIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity">DatadogMonitorIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#identity DatadogMonitor#identity}

---

##### `monitoring_enabled`<sup>Optional</sup> <a name="monitoring_enabled" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.monitoringEnabled"></a>

```python
monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#monitoring_enabled DatadogMonitor#monitoring_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#tags DatadogMonitor#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorConfig.property.timeouts"></a>

```python
timeouts: DatadogMonitorTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts">DatadogMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#timeouts DatadogMonitor#timeouts}

---

### DatadogMonitorDatadogOrganization <a name="DatadogMonitorDatadogOrganization" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor

datadogMonitor.DatadogMonitorDatadogOrganization(
  api_key: str,
  application_key: str,
  enterprise_app_id: str = None,
  linking_auth_code: str = None,
  linking_client_id: str = None,
  redirect_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.apiKey">api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#api_key DatadogMonitor#api_key}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.applicationKey">application_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#application_key DatadogMonitor#application_key}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.enterpriseAppId">enterprise_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#enterprise_app_id DatadogMonitor#enterprise_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.linkingAuthCode">linking_auth_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#linking_auth_code DatadogMonitor#linking_auth_code}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.linkingClientId">linking_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#linking_client_id DatadogMonitor#linking_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.redirectUri">redirect_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#redirect_uri DatadogMonitor#redirect_uri}. |

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#api_key DatadogMonitor#api_key}.

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.applicationKey"></a>

```python
application_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#application_key DatadogMonitor#application_key}.

---

##### `enterprise_app_id`<sup>Optional</sup> <a name="enterprise_app_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.enterpriseAppId"></a>

```python
enterprise_app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#enterprise_app_id DatadogMonitor#enterprise_app_id}.

---

##### `linking_auth_code`<sup>Optional</sup> <a name="linking_auth_code" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.linkingAuthCode"></a>

```python
linking_auth_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#linking_auth_code DatadogMonitor#linking_auth_code}.

---

##### `linking_client_id`<sup>Optional</sup> <a name="linking_client_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.linkingClientId"></a>

```python
linking_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#linking_client_id DatadogMonitor#linking_client_id}.

---

##### `redirect_uri`<sup>Optional</sup> <a name="redirect_uri" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#redirect_uri DatadogMonitor#redirect_uri}.

---

### DatadogMonitorIdentity <a name="DatadogMonitorIdentity" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor

datadogMonitor.DatadogMonitorIdentity(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#type DatadogMonitor#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#type DatadogMonitor#type}.

---

### DatadogMonitorTimeouts <a name="DatadogMonitorTimeouts" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor

datadogMonitor.DatadogMonitorTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#create DatadogMonitor#create}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#delete DatadogMonitor#delete}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#read DatadogMonitor#read}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#update DatadogMonitor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#create DatadogMonitor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#delete DatadogMonitor#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#read DatadogMonitor#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#update DatadogMonitor#update}.

---

### DatadogMonitorUser <a name="DatadogMonitorUser" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor

datadogMonitor.DatadogMonitorUser(
  email: str,
  name: str,
  phone_number: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#email DatadogMonitor#email}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#name DatadogMonitor#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#phone_number DatadogMonitor#phone_number}. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#email DatadogMonitor#email}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#name DatadogMonitor#name}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.0/docs/resources/datadog_monitor#phone_number DatadogMonitor#phone_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatadogMonitorDatadogOrganizationOutputReference <a name="DatadogMonitorDatadogOrganizationOutputReference" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor

datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resetEnterpriseAppId">reset_enterprise_app_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resetLinkingAuthCode">reset_linking_auth_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resetLinkingClientId">reset_linking_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resetRedirectUri">reset_redirect_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enterprise_app_id` <a name="reset_enterprise_app_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resetEnterpriseAppId"></a>

```python
def reset_enterprise_app_id() -> None
```

##### `reset_linking_auth_code` <a name="reset_linking_auth_code" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resetLinkingAuthCode"></a>

```python
def reset_linking_auth_code() -> None
```

##### `reset_linking_client_id` <a name="reset_linking_client_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resetLinkingClientId"></a>

```python
def reset_linking_client_id() -> None
```

##### `reset_redirect_uri` <a name="reset_redirect_uri" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.resetRedirectUri"></a>

```python
def reset_redirect_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.applicationKeyInput">application_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.enterpriseAppIdInput">enterprise_app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.linkingAuthCodeInput">linking_auth_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.linkingClientIdInput">linking_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.redirectUriInput">redirect_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.applicationKey">application_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.enterpriseAppId">enterprise_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.linkingAuthCode">linking_auth_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.linkingClientId">linking_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.redirectUri">redirect_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization">DatadogMonitorDatadogOrganization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `application_key_input`<sup>Optional</sup> <a name="application_key_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.applicationKeyInput"></a>

```python
application_key_input: str
```

- *Type:* str

---

##### `enterprise_app_id_input`<sup>Optional</sup> <a name="enterprise_app_id_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.enterpriseAppIdInput"></a>

```python
enterprise_app_id_input: str
```

- *Type:* str

---

##### `linking_auth_code_input`<sup>Optional</sup> <a name="linking_auth_code_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.linkingAuthCodeInput"></a>

```python
linking_auth_code_input: str
```

- *Type:* str

---

##### `linking_client_id_input`<sup>Optional</sup> <a name="linking_client_id_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.linkingClientIdInput"></a>

```python
linking_client_id_input: str
```

- *Type:* str

---

##### `redirect_uri_input`<sup>Optional</sup> <a name="redirect_uri_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.redirectUriInput"></a>

```python
redirect_uri_input: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.applicationKey"></a>

```python
application_key: str
```

- *Type:* str

---

##### `enterprise_app_id`<sup>Required</sup> <a name="enterprise_app_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.enterpriseAppId"></a>

```python
enterprise_app_id: str
```

- *Type:* str

---

##### `linking_auth_code`<sup>Required</sup> <a name="linking_auth_code" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.linkingAuthCode"></a>

```python
linking_auth_code: str
```

- *Type:* str

---

##### `linking_client_id`<sup>Required</sup> <a name="linking_client_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.linkingClientId"></a>

```python
linking_client_id: str
```

- *Type:* str

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganizationOutputReference.property.internalValue"></a>

```python
internal_value: DatadogMonitorDatadogOrganization
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorDatadogOrganization">DatadogMonitorDatadogOrganization</a>

---


### DatadogMonitorIdentityOutputReference <a name="DatadogMonitorIdentityOutputReference" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor

datadogMonitor.DatadogMonitorIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity">DatadogMonitorIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DatadogMonitorIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorIdentity">DatadogMonitorIdentity</a>

---


### DatadogMonitorTimeoutsOutputReference <a name="DatadogMonitorTimeoutsOutputReference" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor

datadogMonitor.DatadogMonitorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts">DatadogMonitorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatadogMonitorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorTimeouts">DatadogMonitorTimeouts</a>]

---


### DatadogMonitorUserOutputReference <a name="DatadogMonitorUserOutputReference" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor

datadogMonitor.DatadogMonitorUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser">DatadogMonitorUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUserOutputReference.property.internalValue"></a>

```python
internal_value: DatadogMonitorUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitor.DatadogMonitorUser">DatadogMonitorUser</a>

---



