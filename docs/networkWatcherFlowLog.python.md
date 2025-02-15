# `networkWatcherFlowLog` Submodule <a name="`networkWatcherFlowLog` Submodule" id="@cdktf/provider-azurerm.networkWatcherFlowLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkWatcherFlowLog <a name="NetworkWatcherFlowLog" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log azurerm_network_watcher_flow_log}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_watcher_flow_log

networkWatcherFlowLog.NetworkWatcherFlowLog(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  name: str,
  network_watcher_name: str,
  resource_group_name: str,
  retention_policy: NetworkWatcherFlowLogRetentionPolicy,
  storage_account_id: str,
  id: str = None,
  location: str = None,
  network_security_group_id: str = None,
  tags: typing.Mapping[str] = None,
  target_resource_id: str = None,
  timeouts: NetworkWatcherFlowLogTimeouts = None,
  traffic_analytics: NetworkWatcherFlowLogTrafficAnalytics = None,
  version: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#name NetworkWatcherFlowLog#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.networkWatcherName">network_watcher_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#network_watcher_name NetworkWatcherFlowLog#network_watcher_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#resource_group_name NetworkWatcherFlowLog#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#storage_account_id NetworkWatcherFlowLog#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#id NetworkWatcherFlowLog#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#location NetworkWatcherFlowLog#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#network_security_group_id NetworkWatcherFlowLog#network_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#tags NetworkWatcherFlowLog#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#target_resource_id NetworkWatcherFlowLog#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.trafficAnalytics">traffic_analytics</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a></code> | traffic_analytics block. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#version NetworkWatcherFlowLog#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#name NetworkWatcherFlowLog#name}.

---

##### `network_watcher_name`<sup>Required</sup> <a name="network_watcher_name" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.networkWatcherName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#network_watcher_name NetworkWatcherFlowLog#network_watcher_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#resource_group_name NetworkWatcherFlowLog#resource_group_name}.

---

##### `retention_policy`<sup>Required</sup> <a name="retention_policy" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.retentionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#retention_policy NetworkWatcherFlowLog#retention_policy}

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#storage_account_id NetworkWatcherFlowLog#storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#id NetworkWatcherFlowLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#location NetworkWatcherFlowLog#location}.

---

##### `network_security_group_id`<sup>Optional</sup> <a name="network_security_group_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.networkSecurityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#network_security_group_id NetworkWatcherFlowLog#network_security_group_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#tags NetworkWatcherFlowLog#tags}.

---

##### `target_resource_id`<sup>Optional</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.targetResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#target_resource_id NetworkWatcherFlowLog#target_resource_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#timeouts NetworkWatcherFlowLog#timeouts}

---

##### `traffic_analytics`<sup>Optional</sup> <a name="traffic_analytics" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.trafficAnalytics"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a>

traffic_analytics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#traffic_analytics NetworkWatcherFlowLog#traffic_analytics}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.Initializer.parameter.version"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#version NetworkWatcherFlowLog#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putRetentionPolicy">put_retention_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTrafficAnalytics">put_traffic_analytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetNetworkSecurityGroupId">reset_network_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTargetResourceId">reset_target_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTrafficAnalytics">reset_traffic_analytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_retention_policy` <a name="put_retention_policy" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putRetentionPolicy"></a>

```python
def put_retention_policy(
  days: typing.Union[int, float],
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putRetentionPolicy.parameter.days"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#days NetworkWatcherFlowLog#days}.

---

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putRetentionPolicy.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#create NetworkWatcherFlowLog#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#delete NetworkWatcherFlowLog#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#read NetworkWatcherFlowLog#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#update NetworkWatcherFlowLog#update}.

---

##### `put_traffic_analytics` <a name="put_traffic_analytics" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTrafficAnalytics"></a>

```python
def put_traffic_analytics(
  enabled: typing.Union[bool, IResolvable],
  workspace_id: str,
  workspace_region: str,
  workspace_resource_id: str,
  interval_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTrafficAnalytics.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}.

---

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTrafficAnalytics.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#workspace_id NetworkWatcherFlowLog#workspace_id}.

---

###### `workspace_region`<sup>Required</sup> <a name="workspace_region" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTrafficAnalytics.parameter.workspaceRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#workspace_region NetworkWatcherFlowLog#workspace_region}.

---

###### `workspace_resource_id`<sup>Required</sup> <a name="workspace_resource_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTrafficAnalytics.parameter.workspaceResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#workspace_resource_id NetworkWatcherFlowLog#workspace_resource_id}.

---

###### `interval_in_minutes`<sup>Optional</sup> <a name="interval_in_minutes" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.putTrafficAnalytics.parameter.intervalInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#interval_in_minutes NetworkWatcherFlowLog#interval_in_minutes}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_network_security_group_id` <a name="reset_network_security_group_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetNetworkSecurityGroupId"></a>

```python
def reset_network_security_group_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_resource_id` <a name="reset_target_resource_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTargetResourceId"></a>

```python
def reset_target_resource_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_traffic_analytics` <a name="reset_traffic_analytics" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetTrafficAnalytics"></a>

```python
def reset_traffic_analytics() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkWatcherFlowLog resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import network_watcher_flow_log

networkWatcherFlowLog.NetworkWatcherFlowLog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import network_watcher_flow_log

networkWatcherFlowLog.NetworkWatcherFlowLog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import network_watcher_flow_log

networkWatcherFlowLog.NetworkWatcherFlowLog.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import network_watcher_flow_log

networkWatcherFlowLog.NetworkWatcherFlowLog.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkWatcherFlowLog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkWatcherFlowLog to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkWatcherFlowLog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkWatcherFlowLog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference">NetworkWatcherFlowLogRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference">NetworkWatcherFlowLogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.trafficAnalytics">traffic_analytics</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference">NetworkWatcherFlowLogTrafficAnalyticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkSecurityGroupIdInput">network_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkWatcherNameInput">network_watcher_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.retentionPolicyInput">retention_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.targetResourceIdInput">target_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.trafficAnalyticsInput">traffic_analytics_input</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkWatcherName">network_watcher_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `retention_policy`<sup>Required</sup> <a name="retention_policy" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.retentionPolicy"></a>

```python
retention_policy: NetworkWatcherFlowLogRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference">NetworkWatcherFlowLogRetentionPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.timeouts"></a>

```python
timeouts: NetworkWatcherFlowLogTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference">NetworkWatcherFlowLogTimeoutsOutputReference</a>

---

##### `traffic_analytics`<sup>Required</sup> <a name="traffic_analytics" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.trafficAnalytics"></a>

```python
traffic_analytics: NetworkWatcherFlowLogTrafficAnalyticsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference">NetworkWatcherFlowLogTrafficAnalyticsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_security_group_id_input`<sup>Optional</sup> <a name="network_security_group_id_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkSecurityGroupIdInput"></a>

```python
network_security_group_id_input: str
```

- *Type:* str

---

##### `network_watcher_name_input`<sup>Optional</sup> <a name="network_watcher_name_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkWatcherNameInput"></a>

```python
network_watcher_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `retention_policy_input`<sup>Optional</sup> <a name="retention_policy_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.retentionPolicyInput"></a>

```python
retention_policy_input: NetworkWatcherFlowLogRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a>

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_resource_id_input`<sup>Optional</sup> <a name="target_resource_id_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.targetResourceIdInput"></a>

```python
target_resource_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkWatcherFlowLogTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a>]

---

##### `traffic_analytics_input`<sup>Optional</sup> <a name="traffic_analytics_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.trafficAnalyticsInput"></a>

```python
traffic_analytics_input: NetworkWatcherFlowLogTrafficAnalytics
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_security_group_id`<sup>Required</sup> <a name="network_security_group_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkSecurityGroupId"></a>

```python
network_security_group_id: str
```

- *Type:* str

---

##### `network_watcher_name`<sup>Required</sup> <a name="network_watcher_name" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.networkWatcherName"></a>

```python
network_watcher_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkWatcherFlowLogConfig <a name="NetworkWatcherFlowLogConfig" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_watcher_flow_log

networkWatcherFlowLog.NetworkWatcherFlowLogConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  name: str,
  network_watcher_name: str,
  resource_group_name: str,
  retention_policy: NetworkWatcherFlowLogRetentionPolicy,
  storage_account_id: str,
  id: str = None,
  location: str = None,
  network_security_group_id: str = None,
  tags: typing.Mapping[str] = None,
  target_resource_id: str = None,
  timeouts: NetworkWatcherFlowLogTimeouts = None,
  traffic_analytics: NetworkWatcherFlowLogTrafficAnalytics = None,
  version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#name NetworkWatcherFlowLog#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.networkWatcherName">network_watcher_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#network_watcher_name NetworkWatcherFlowLog#network_watcher_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#resource_group_name NetworkWatcherFlowLog#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.retentionPolicy">retention_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#storage_account_id NetworkWatcherFlowLog#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#id NetworkWatcherFlowLog#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#location NetworkWatcherFlowLog#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#network_security_group_id NetworkWatcherFlowLog#network_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#tags NetworkWatcherFlowLog#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#target_resource_id NetworkWatcherFlowLog#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.trafficAnalytics">traffic_analytics</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a></code> | traffic_analytics block. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#version NetworkWatcherFlowLog#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#name NetworkWatcherFlowLog#name}.

---

##### `network_watcher_name`<sup>Required</sup> <a name="network_watcher_name" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.networkWatcherName"></a>

```python
network_watcher_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#network_watcher_name NetworkWatcherFlowLog#network_watcher_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#resource_group_name NetworkWatcherFlowLog#resource_group_name}.

---

##### `retention_policy`<sup>Required</sup> <a name="retention_policy" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.retentionPolicy"></a>

```python
retention_policy: NetworkWatcherFlowLogRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#retention_policy NetworkWatcherFlowLog#retention_policy}

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#storage_account_id NetworkWatcherFlowLog#storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#id NetworkWatcherFlowLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#location NetworkWatcherFlowLog#location}.

---

##### `network_security_group_id`<sup>Optional</sup> <a name="network_security_group_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.networkSecurityGroupId"></a>

```python
network_security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#network_security_group_id NetworkWatcherFlowLog#network_security_group_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#tags NetworkWatcherFlowLog#tags}.

---

##### `target_resource_id`<sup>Optional</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#target_resource_id NetworkWatcherFlowLog#target_resource_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.timeouts"></a>

```python
timeouts: NetworkWatcherFlowLogTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#timeouts NetworkWatcherFlowLog#timeouts}

---

##### `traffic_analytics`<sup>Optional</sup> <a name="traffic_analytics" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.trafficAnalytics"></a>

```python
traffic_analytics: NetworkWatcherFlowLogTrafficAnalytics
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a>

traffic_analytics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#traffic_analytics NetworkWatcherFlowLog#traffic_analytics}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogConfig.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#version NetworkWatcherFlowLog#version}.

---

### NetworkWatcherFlowLogRetentionPolicy <a name="NetworkWatcherFlowLogRetentionPolicy" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_watcher_flow_log

networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy(
  days: typing.Union[int, float],
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#days NetworkWatcherFlowLog#days}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}. |

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#days NetworkWatcherFlowLog#days}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}.

---

### NetworkWatcherFlowLogTimeouts <a name="NetworkWatcherFlowLogTimeouts" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_watcher_flow_log

networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#create NetworkWatcherFlowLog#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#delete NetworkWatcherFlowLog#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#read NetworkWatcherFlowLog#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#update NetworkWatcherFlowLog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#create NetworkWatcherFlowLog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#delete NetworkWatcherFlowLog#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#read NetworkWatcherFlowLog#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#update NetworkWatcherFlowLog#update}.

---

### NetworkWatcherFlowLogTrafficAnalytics <a name="NetworkWatcherFlowLogTrafficAnalytics" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_watcher_flow_log

networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics(
  enabled: typing.Union[bool, IResolvable],
  workspace_id: str,
  workspace_region: str,
  workspace_resource_id: str,
  interval_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#workspace_id NetworkWatcherFlowLog#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceRegion">workspace_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#workspace_region NetworkWatcherFlowLog#workspace_region}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceResourceId">workspace_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#workspace_resource_id NetworkWatcherFlowLog#workspace_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.intervalInMinutes">interval_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#interval_in_minutes NetworkWatcherFlowLog#interval_in_minutes}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#enabled NetworkWatcherFlowLog#enabled}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#workspace_id NetworkWatcherFlowLog#workspace_id}.

---

##### `workspace_region`<sup>Required</sup> <a name="workspace_region" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceRegion"></a>

```python
workspace_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#workspace_region NetworkWatcherFlowLog#workspace_region}.

---

##### `workspace_resource_id`<sup>Required</sup> <a name="workspace_resource_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.workspaceResourceId"></a>

```python
workspace_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#workspace_resource_id NetworkWatcherFlowLog#workspace_resource_id}.

---

##### `interval_in_minutes`<sup>Optional</sup> <a name="interval_in_minutes" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics.property.intervalInMinutes"></a>

```python
interval_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/network_watcher_flow_log#interval_in_minutes NetworkWatcherFlowLog#interval_in_minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkWatcherFlowLogRetentionPolicyOutputReference <a name="NetworkWatcherFlowLogRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_watcher_flow_log

networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: NetworkWatcherFlowLogRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogRetentionPolicy">NetworkWatcherFlowLogRetentionPolicy</a>

---


### NetworkWatcherFlowLogTimeoutsOutputReference <a name="NetworkWatcherFlowLogTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_watcher_flow_log

networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkWatcherFlowLogTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTimeouts">NetworkWatcherFlowLogTimeouts</a>]

---


### NetworkWatcherFlowLogTrafficAnalyticsOutputReference <a name="NetworkWatcherFlowLogTrafficAnalyticsOutputReference" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_watcher_flow_log

networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.resetIntervalInMinutes">reset_interval_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval_in_minutes` <a name="reset_interval_in_minutes" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.resetIntervalInMinutes"></a>

```python
def reset_interval_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.intervalInMinutesInput">interval_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceRegionInput">workspace_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceResourceIdInput">workspace_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.intervalInMinutes">interval_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceRegion">workspace_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceResourceId">workspace_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `interval_in_minutes_input`<sup>Optional</sup> <a name="interval_in_minutes_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.intervalInMinutesInput"></a>

```python
interval_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_region_input`<sup>Optional</sup> <a name="workspace_region_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceRegionInput"></a>

```python
workspace_region_input: str
```

- *Type:* str

---

##### `workspace_resource_id_input`<sup>Optional</sup> <a name="workspace_resource_id_input" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceResourceIdInput"></a>

```python
workspace_resource_id_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `interval_in_minutes`<sup>Required</sup> <a name="interval_in_minutes" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.intervalInMinutes"></a>

```python
interval_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `workspace_region`<sup>Required</sup> <a name="workspace_region" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceRegion"></a>

```python
workspace_region: str
```

- *Type:* str

---

##### `workspace_resource_id`<sup>Required</sup> <a name="workspace_resource_id" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.workspaceResourceId"></a>

```python
workspace_resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalyticsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkWatcherFlowLogTrafficAnalytics
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkWatcherFlowLog.NetworkWatcherFlowLogTrafficAnalytics">NetworkWatcherFlowLogTrafficAnalytics</a>

---



