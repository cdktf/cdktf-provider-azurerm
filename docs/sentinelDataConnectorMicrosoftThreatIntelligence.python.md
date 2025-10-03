# `sentinelDataConnectorMicrosoftThreatIntelligence` Submodule <a name="`sentinelDataConnectorMicrosoftThreatIntelligence` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorMicrosoftThreatIntelligence <a name="SentinelDataConnectorMicrosoftThreatIntelligence" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence azurerm_sentinel_data_connector_microsoft_threat_intelligence}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_microsoft_threat_intelligence

sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log_analytics_workspace_id: str,
  microsoft_emerging_threat_feed_lookback_date: str,
  name: str,
  id: str = None,
  tenant_id: str = None,
  timeouts: SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatIntelligence#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.microsoftEmergingThreatFeedLookbackDate">microsoft_emerging_threat_feed_lookback_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#microsoft_emerging_threat_feed_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#microsoft_emerging_threat_feed_lookback_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#name SentinelDataConnectorMicrosoftThreatIntelligence#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#id SentinelDataConnectorMicrosoftThreatIntelligence#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#tenant_id SentinelDataConnectorMicrosoftThreatIntelligence#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatIntelligence#log_analytics_workspace_id}.

---

##### `microsoft_emerging_threat_feed_lookback_date`<sup>Required</sup> <a name="microsoft_emerging_threat_feed_lookback_date" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.microsoftEmergingThreatFeedLookbackDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#microsoft_emerging_threat_feed_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#microsoft_emerging_threat_feed_lookback_date}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#name SentinelDataConnectorMicrosoftThreatIntelligence#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#id SentinelDataConnectorMicrosoftThreatIntelligence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#tenant_id SentinelDataConnectorMicrosoftThreatIntelligence#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#timeouts SentinelDataConnectorMicrosoftThreatIntelligence#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#create SentinelDataConnectorMicrosoftThreatIntelligence#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#delete SentinelDataConnectorMicrosoftThreatIntelligence#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#read SentinelDataConnectorMicrosoftThreatIntelligence#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SentinelDataConnectorMicrosoftThreatIntelligence resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_microsoft_threat_intelligence

sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_microsoft_threat_intelligence

sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_microsoft_threat_intelligence

sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_microsoft_threat_intelligence

sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SentinelDataConnectorMicrosoftThreatIntelligence resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SentinelDataConnectorMicrosoftThreatIntelligence to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SentinelDataConnectorMicrosoftThreatIntelligence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SentinelDataConnectorMicrosoftThreatIntelligence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference">SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.microsoftEmergingThreatFeedLookbackDateInput">microsoft_emerging_threat_feed_lookback_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.microsoftEmergingThreatFeedLookbackDate">microsoft_emerging_threat_feed_lookback_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.timeouts"></a>

```python
timeouts: SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference">SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `microsoft_emerging_threat_feed_lookback_date_input`<sup>Optional</sup> <a name="microsoft_emerging_threat_feed_lookback_date_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.microsoftEmergingThreatFeedLookbackDateInput"></a>

```python
microsoft_emerging_threat_feed_lookback_date_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `microsoft_emerging_threat_feed_lookback_date`<sup>Required</sup> <a name="microsoft_emerging_threat_feed_lookback_date" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.microsoftEmergingThreatFeedLookbackDate"></a>

```python
microsoft_emerging_threat_feed_lookback_date: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligence.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorMicrosoftThreatIntelligenceConfig <a name="SentinelDataConnectorMicrosoftThreatIntelligenceConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_microsoft_threat_intelligence

sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log_analytics_workspace_id: str,
  microsoft_emerging_threat_feed_lookback_date: str,
  name: str,
  id: str = None,
  tenant_id: str = None,
  timeouts: SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatIntelligence#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.microsoftEmergingThreatFeedLookbackDate">microsoft_emerging_threat_feed_lookback_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#microsoft_emerging_threat_feed_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#microsoft_emerging_threat_feed_lookback_date}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#name SentinelDataConnectorMicrosoftThreatIntelligence#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#id SentinelDataConnectorMicrosoftThreatIntelligence#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#tenant_id SentinelDataConnectorMicrosoftThreatIntelligence#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#log_analytics_workspace_id SentinelDataConnectorMicrosoftThreatIntelligence#log_analytics_workspace_id}.

---

##### `microsoft_emerging_threat_feed_lookback_date`<sup>Required</sup> <a name="microsoft_emerging_threat_feed_lookback_date" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.microsoftEmergingThreatFeedLookbackDate"></a>

```python
microsoft_emerging_threat_feed_lookback_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#microsoft_emerging_threat_feed_lookback_date SentinelDataConnectorMicrosoftThreatIntelligence#microsoft_emerging_threat_feed_lookback_date}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#name SentinelDataConnectorMicrosoftThreatIntelligence#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#id SentinelDataConnectorMicrosoftThreatIntelligence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#tenant_id SentinelDataConnectorMicrosoftThreatIntelligence#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceConfig.property.timeouts"></a>

```python
timeouts: SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#timeouts SentinelDataConnectorMicrosoftThreatIntelligence#timeouts}

---

### SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts <a name="SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_microsoft_threat_intelligence

sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#create SentinelDataConnectorMicrosoftThreatIntelligence#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#delete SentinelDataConnectorMicrosoftThreatIntelligence#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#read SentinelDataConnectorMicrosoftThreatIntelligence#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#create SentinelDataConnectorMicrosoftThreatIntelligence#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#delete SentinelDataConnectorMicrosoftThreatIntelligence#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_data_connector_microsoft_threat_intelligence#read SentinelDataConnectorMicrosoftThreatIntelligence#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference <a name="SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_microsoft_threat_intelligence

sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftThreatIntelligence.SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts">SentinelDataConnectorMicrosoftThreatIntelligenceTimeouts</a>]

---



