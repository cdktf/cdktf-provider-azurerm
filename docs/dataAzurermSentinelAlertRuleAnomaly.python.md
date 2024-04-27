# `dataAzurermSentinelAlertRuleAnomaly` Submodule <a name="`dataAzurermSentinelAlertRuleAnomaly` Submodule" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSentinelAlertRuleAnomaly <a name="DataAzurermSentinelAlertRuleAnomaly" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly azurerm_sentinel_alert_rule_anomaly}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly(
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
  display_name: str = None,
  id: str = None,
  name: str = None,
  timeouts: DataAzurermSentinelAlertRuleAnomalyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#log_analytics_workspace_id DataAzurermSentinelAlertRuleAnomaly#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#display_name DataAzurermSentinelAlertRuleAnomaly#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#id DataAzurermSentinelAlertRuleAnomaly#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#name DataAzurermSentinelAlertRuleAnomaly#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts">DataAzurermSentinelAlertRuleAnomalyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#log_analytics_workspace_id DataAzurermSentinelAlertRuleAnomaly#log_analytics_workspace_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#display_name DataAzurermSentinelAlertRuleAnomaly#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#id DataAzurermSentinelAlertRuleAnomaly#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#name DataAzurermSentinelAlertRuleAnomaly#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts">DataAzurermSentinelAlertRuleAnomalyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#timeouts DataAzurermSentinelAlertRuleAnomaly#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#read DataAzurermSentinelAlertRuleAnomaly#read}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermSentinelAlertRuleAnomaly resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermSentinelAlertRuleAnomaly resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermSentinelAlertRuleAnomaly to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermSentinelAlertRuleAnomaly that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermSentinelAlertRuleAnomaly to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.anomalySettingsVersion">anomaly_settings_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.anomalyVersion">anomaly_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.multiSelectObservation">multi_select_observation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList">DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.prioritizedExcludeObservation">prioritized_exclude_observation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList">DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.requiredDataConnector">required_data_connector</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList">DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.settingsDefinitionId">settings_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.singleSelectObservation">single_select_observation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList">DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.tactics">tactics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.techniques">techniques</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.thresholdObservation">threshold_observation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList">DataAzurermSentinelAlertRuleAnomalyThresholdObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference">DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts">DataAzurermSentinelAlertRuleAnomalyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `anomaly_settings_version`<sup>Required</sup> <a name="anomaly_settings_version" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.anomalySettingsVersion"></a>

```python
anomaly_settings_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `anomaly_version`<sup>Required</sup> <a name="anomaly_version" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.anomalyVersion"></a>

```python
anomaly_version: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `multi_select_observation`<sup>Required</sup> <a name="multi_select_observation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.multiSelectObservation"></a>

```python
multi_select_observation: DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList">DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList</a>

---

##### `prioritized_exclude_observation`<sup>Required</sup> <a name="prioritized_exclude_observation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.prioritizedExcludeObservation"></a>

```python
prioritized_exclude_observation: DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList">DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList</a>

---

##### `required_data_connector`<sup>Required</sup> <a name="required_data_connector" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.requiredDataConnector"></a>

```python
required_data_connector: DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList">DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList</a>

---

##### `settings_definition_id`<sup>Required</sup> <a name="settings_definition_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.settingsDefinitionId"></a>

```python
settings_definition_id: str
```

- *Type:* str

---

##### `single_select_observation`<sup>Required</sup> <a name="single_select_observation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.singleSelectObservation"></a>

```python
single_select_observation: DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList">DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList</a>

---

##### `tactics`<sup>Required</sup> <a name="tactics" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.tactics"></a>

```python
tactics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `techniques`<sup>Required</sup> <a name="techniques" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.techniques"></a>

```python
techniques: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `threshold_observation`<sup>Required</sup> <a name="threshold_observation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.thresholdObservation"></a>

```python
threshold_observation: DataAzurermSentinelAlertRuleAnomalyThresholdObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList">DataAzurermSentinelAlertRuleAnomalyThresholdObservationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.timeouts"></a>

```python
timeouts: DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference">DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermSentinelAlertRuleAnomalyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts">DataAzurermSentinelAlertRuleAnomalyTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSentinelAlertRuleAnomalyConfig <a name="DataAzurermSentinelAlertRuleAnomalyConfig" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log_analytics_workspace_id: str,
  display_name: str = None,
  id: str = None,
  name: str = None,
  timeouts: DataAzurermSentinelAlertRuleAnomalyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#log_analytics_workspace_id DataAzurermSentinelAlertRuleAnomaly#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#display_name DataAzurermSentinelAlertRuleAnomaly#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#id DataAzurermSentinelAlertRuleAnomaly#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#name DataAzurermSentinelAlertRuleAnomaly#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts">DataAzurermSentinelAlertRuleAnomalyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#log_analytics_workspace_id DataAzurermSentinelAlertRuleAnomaly#log_analytics_workspace_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#display_name DataAzurermSentinelAlertRuleAnomaly#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#id DataAzurermSentinelAlertRuleAnomaly#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#name DataAzurermSentinelAlertRuleAnomaly#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.timeouts"></a>

```python
timeouts: DataAzurermSentinelAlertRuleAnomalyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts">DataAzurermSentinelAlertRuleAnomalyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#timeouts DataAzurermSentinelAlertRuleAnomaly#timeouts}

---

### DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation <a name="DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation()
```


### DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation <a name="DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation()
```


### DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector <a name="DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector()
```


### DataAzurermSentinelAlertRuleAnomalySingleSelectObservation <a name="DataAzurermSentinelAlertRuleAnomalySingleSelectObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservation()
```


### DataAzurermSentinelAlertRuleAnomalyThresholdObservation <a name="DataAzurermSentinelAlertRuleAnomalyThresholdObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservation()
```


### DataAzurermSentinelAlertRuleAnomalyTimeouts <a name="DataAzurermSentinelAlertRuleAnomalyTimeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#read DataAzurermSentinelAlertRuleAnomaly#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/data-sources/sentinel_alert_rule_anomaly#read DataAzurermSentinelAlertRuleAnomaly#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList <a name="DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference <a name="DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.supportedValues">supported_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation">DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `supported_values`<sup>Required</sup> <a name="supported_values" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.supportedValues"></a>

```python
supported_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation">DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation</a>

---


### DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList <a name="DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference <a name="DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.exclude">exclude</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.prioritize">prioritize</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation">DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.exclude"></a>

```python
exclude: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prioritize`<sup>Required</sup> <a name="prioritize" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.prioritize"></a>

```python
prioritize: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation">DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation</a>

---


### DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList <a name="DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference <a name="DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.dataTypes">data_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector">DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `data_types`<sup>Required</sup> <a name="data_types" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.dataTypes"></a>

```python
data_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector">DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector</a>

---


### DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList <a name="DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference <a name="DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.supportedValues">supported_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservation">DataAzurermSentinelAlertRuleAnomalySingleSelectObservation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `supported_values`<sup>Required</sup> <a name="supported_values" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.supportedValues"></a>

```python
supported_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermSentinelAlertRuleAnomalySingleSelectObservation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservation">DataAzurermSentinelAlertRuleAnomalySingleSelectObservation</a>

---


### DataAzurermSentinelAlertRuleAnomalyThresholdObservationList <a name="DataAzurermSentinelAlertRuleAnomalyThresholdObservationList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference <a name="DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.max">max</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.min">min</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservation">DataAzurermSentinelAlertRuleAnomalyThresholdObservation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.max"></a>

```python
max: str
```

- *Type:* str

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.min"></a>

```python
min: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermSentinelAlertRuleAnomalyThresholdObservation
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservation">DataAzurermSentinelAlertRuleAnomalyThresholdObservation</a>

---


### DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference <a name="DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_anomaly

dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts">DataAzurermSentinelAlertRuleAnomalyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermSentinelAlertRuleAnomalyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts">DataAzurermSentinelAlertRuleAnomalyTimeouts</a>]

---



