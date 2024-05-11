# `dataAzurermSentinelAlertRuleTemplate` Submodule <a name="`dataAzurermSentinelAlertRuleTemplate` Submodule" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSentinelAlertRuleTemplate <a name="DataAzurermSentinelAlertRuleTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template azurerm_sentinel_alert_rule_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate(
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
  timeouts: DataAzurermSentinelAlertRuleTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#log_analytics_workspace_id DataAzurermSentinelAlertRuleTemplate#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#display_name DataAzurermSentinelAlertRuleTemplate#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#id DataAzurermSentinelAlertRuleTemplate#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#name DataAzurermSentinelAlertRuleTemplate#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts">DataAzurermSentinelAlertRuleTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.logAnalyticsWorkspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#log_analytics_workspace_id DataAzurermSentinelAlertRuleTemplate#log_analytics_workspace_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#display_name DataAzurermSentinelAlertRuleTemplate#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#id DataAzurermSentinelAlertRuleTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#name DataAzurermSentinelAlertRuleTemplate#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts">DataAzurermSentinelAlertRuleTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#timeouts DataAzurermSentinelAlertRuleTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#read DataAzurermSentinelAlertRuleTemplate#read}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermSentinelAlertRuleTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermSentinelAlertRuleTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermSentinelAlertRuleTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermSentinelAlertRuleTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermSentinelAlertRuleTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.nrtTemplate">nrt_template</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList">DataAzurermSentinelAlertRuleTemplateNrtTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.scheduledTemplate">scheduled_template</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList">DataAzurermSentinelAlertRuleTemplateScheduledTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.securityIncidentTemplate">security_incident_template</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList">DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference">DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.logAnalyticsWorkspaceIdInput">log_analytics_workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts">DataAzurermSentinelAlertRuleTemplateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `nrt_template`<sup>Required</sup> <a name="nrt_template" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.nrtTemplate"></a>

```python
nrt_template: DataAzurermSentinelAlertRuleTemplateNrtTemplateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList">DataAzurermSentinelAlertRuleTemplateNrtTemplateList</a>

---

##### `scheduled_template`<sup>Required</sup> <a name="scheduled_template" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.scheduledTemplate"></a>

```python
scheduled_template: DataAzurermSentinelAlertRuleTemplateScheduledTemplateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList">DataAzurermSentinelAlertRuleTemplateScheduledTemplateList</a>

---

##### `security_incident_template`<sup>Required</sup> <a name="security_incident_template" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.securityIncidentTemplate"></a>

```python
security_incident_template: DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList">DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.timeouts"></a>

```python
timeouts: DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference">DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_analytics_workspace_id_input`<sup>Optional</sup> <a name="log_analytics_workspace_id_input" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.logAnalyticsWorkspaceIdInput"></a>

```python
log_analytics_workspace_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermSentinelAlertRuleTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts">DataAzurermSentinelAlertRuleTemplateTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSentinelAlertRuleTemplateConfig <a name="DataAzurermSentinelAlertRuleTemplateConfig" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig(
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
  timeouts: DataAzurermSentinelAlertRuleTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.logAnalyticsWorkspaceId">log_analytics_workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#log_analytics_workspace_id DataAzurermSentinelAlertRuleTemplate#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#display_name DataAzurermSentinelAlertRuleTemplate#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#id DataAzurermSentinelAlertRuleTemplate#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#name DataAzurermSentinelAlertRuleTemplate#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts">DataAzurermSentinelAlertRuleTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_analytics_workspace_id`<sup>Required</sup> <a name="log_analytics_workspace_id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.logAnalyticsWorkspaceId"></a>

```python
log_analytics_workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#log_analytics_workspace_id DataAzurermSentinelAlertRuleTemplate#log_analytics_workspace_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#display_name DataAzurermSentinelAlertRuleTemplate#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#id DataAzurermSentinelAlertRuleTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#name DataAzurermSentinelAlertRuleTemplate#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.timeouts"></a>

```python
timeouts: DataAzurermSentinelAlertRuleTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts">DataAzurermSentinelAlertRuleTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#timeouts DataAzurermSentinelAlertRuleTemplate#timeouts}

---

### DataAzurermSentinelAlertRuleTemplateNrtTemplate <a name="DataAzurermSentinelAlertRuleTemplateNrtTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplate()
```


### DataAzurermSentinelAlertRuleTemplateScheduledTemplate <a name="DataAzurermSentinelAlertRuleTemplateScheduledTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplate()
```


### DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate <a name="DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate()
```


### DataAzurermSentinelAlertRuleTemplateTimeouts <a name="DataAzurermSentinelAlertRuleTemplateTimeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#read DataAzurermSentinelAlertRuleTemplate#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/sentinel_alert_rule_template#read DataAzurermSentinelAlertRuleTemplate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSentinelAlertRuleTemplateNrtTemplateList <a name="DataAzurermSentinelAlertRuleTemplateNrtTemplateList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference <a name="DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.tactics">tactics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplate">DataAzurermSentinelAlertRuleTemplateNrtTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `tactics`<sup>Required</sup> <a name="tactics" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.tactics"></a>

```python
tactics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermSentinelAlertRuleTemplateNrtTemplate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplate">DataAzurermSentinelAlertRuleTemplateNrtTemplate</a>

---


### DataAzurermSentinelAlertRuleTemplateScheduledTemplateList <a name="DataAzurermSentinelAlertRuleTemplateScheduledTemplateList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference <a name="DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.queryFrequency">query_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.queryPeriod">query_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.tactics">tactics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.triggerOperator">trigger_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.triggerThreshold">trigger_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplate">DataAzurermSentinelAlertRuleTemplateScheduledTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `query_frequency`<sup>Required</sup> <a name="query_frequency" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.queryFrequency"></a>

```python
query_frequency: str
```

- *Type:* str

---

##### `query_period`<sup>Required</sup> <a name="query_period" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.queryPeriod"></a>

```python
query_period: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `tactics`<sup>Required</sup> <a name="tactics" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.tactics"></a>

```python
tactics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trigger_operator`<sup>Required</sup> <a name="trigger_operator" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.triggerOperator"></a>

```python
trigger_operator: str
```

- *Type:* str

---

##### `trigger_threshold`<sup>Required</sup> <a name="trigger_threshold" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.triggerThreshold"></a>

```python
trigger_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermSentinelAlertRuleTemplateScheduledTemplate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplate">DataAzurermSentinelAlertRuleTemplateScheduledTemplate</a>

---


### DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList <a name="DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference <a name="DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.productFilter">product_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate">DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `product_filter`<sup>Required</sup> <a name="product_filter" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.productFilter"></a>

```python
product_filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate">DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate</a>

---


### DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference <a name="DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_sentinel_alert_rule_template

dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts">DataAzurermSentinelAlertRuleTemplateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermSentinelAlertRuleTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts">DataAzurermSentinelAlertRuleTemplateTimeouts</a>]

---



