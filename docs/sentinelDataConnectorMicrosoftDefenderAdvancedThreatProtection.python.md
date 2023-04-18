# `azurerm_sentinel_data_connector_microsoft_defender_advanced_threat_protection`

Refer to the Terraform Registory for docs: [`azurerm_sentinel_data_connector_microsoft_defender_advanced_threat_protection`](https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection).

# `sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection` Submodule <a name="`sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection` Submodule" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection <a name="SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection azurerm_sentinel_data_connector_microsoft_defender_advanced_threat_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_microsoft_defender_advanced_threat_protection

sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log_analytics_workspace_id: str,
  name: str,
  id: str = None,
  tenant_id: str = None,
  timeouts: SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#name SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#tenant_id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#name SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#tenant_id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#timeouts SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#create SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#delete SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#read SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_microsoft_defender_advanced_threat_protection

sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_microsoft_defender_advanced_threat_protection

sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_microsoft_defender_advanced_threat_protection

sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.timeouts"></a>

```python
timeouts: SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig <a name="SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_microsoft_defender_advanced_threat_protection

sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log_analytics_workspace_id: str,
  name: str,
  id: str = None,
  tenant_id: str = None,
  timeouts: SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#name SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#tenant_id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#log_analytics_workspace_id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#log_analytics_workspace_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#name SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#tenant_id SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionConfig.property.timeouts"></a>

```python
timeouts: SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#timeouts SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#timeouts}

---

### SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts <a name="SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_microsoft_defender_advanced_threat_protection

sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#create SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#delete SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#read SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#create SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#delete SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/sentinel_data_connector_microsoft_defender_advanced_threat_protection#read SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference <a name="SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import sentinel_data_connector_microsoft_defender_advanced_threat_protection

sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.sentinelDataConnectorMicrosoftDefenderAdvancedThreatProtection.SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts">SentinelDataConnectorMicrosoftDefenderAdvancedThreatProtectionTimeouts</a>, cdktf.IResolvable]

---



