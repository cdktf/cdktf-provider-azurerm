# `azurerm_datadog_monitor_sso_configuration`

Refer to the Terraform Registory for docs: [`azurerm_datadog_monitor_sso_configuration`](https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration).

# `datadogMonitorSsoConfiguration` Submodule <a name="`datadogMonitorSsoConfiguration` Submodule" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatadogMonitorSsoConfiguration <a name="DatadogMonitorSsoConfiguration" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration azurerm_datadog_monitor_sso_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_sso_configuration

datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datadog_monitor_id: str,
  enterprise_application_id: str,
  single_sign_on_enabled: str,
  id: str = None,
  name: str = None,
  timeouts: DatadogMonitorSsoConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.datadogMonitorId">datadog_monitor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#datadog_monitor_id DatadogMonitorSsoConfiguration#datadog_monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.enterpriseApplicationId">enterprise_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#enterprise_application_id DatadogMonitorSsoConfiguration#enterprise_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.singleSignOnEnabled">single_sign_on_enabled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#single_sign_on_enabled DatadogMonitorSsoConfiguration#single_sign_on_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#id DatadogMonitorSsoConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#name DatadogMonitorSsoConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts">DatadogMonitorSsoConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datadog_monitor_id`<sup>Required</sup> <a name="datadog_monitor_id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.datadogMonitorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#datadog_monitor_id DatadogMonitorSsoConfiguration#datadog_monitor_id}.

---

##### `enterprise_application_id`<sup>Required</sup> <a name="enterprise_application_id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.enterpriseApplicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#enterprise_application_id DatadogMonitorSsoConfiguration#enterprise_application_id}.

---

##### `single_sign_on_enabled`<sup>Required</sup> <a name="single_sign_on_enabled" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.singleSignOnEnabled"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#single_sign_on_enabled DatadogMonitorSsoConfiguration#single_sign_on_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#id DatadogMonitorSsoConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#name DatadogMonitorSsoConfiguration#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts">DatadogMonitorSsoConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#timeouts DatadogMonitorSsoConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#create DatadogMonitorSsoConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#delete DatadogMonitorSsoConfiguration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#read DatadogMonitorSsoConfiguration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#update DatadogMonitorSsoConfiguration#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatadogMonitorSsoConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_sso_configuration

datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_sso_configuration

datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_sso_configuration

datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_sso_configuration

datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatadogMonitorSsoConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatadogMonitorSsoConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatadogMonitorSsoConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatadogMonitorSsoConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.loginUrl">login_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference">DatadogMonitorSsoConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.datadogMonitorIdInput">datadog_monitor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.enterpriseApplicationIdInput">enterprise_application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.singleSignOnEnabledInput">single_sign_on_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts">DatadogMonitorSsoConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.datadogMonitorId">datadog_monitor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.enterpriseApplicationId">enterprise_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.singleSignOnEnabled">single_sign_on_enabled</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `login_url`<sup>Required</sup> <a name="login_url" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.loginUrl"></a>

```python
login_url: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.timeouts"></a>

```python
timeouts: DatadogMonitorSsoConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference">DatadogMonitorSsoConfigurationTimeoutsOutputReference</a>

---

##### `datadog_monitor_id_input`<sup>Optional</sup> <a name="datadog_monitor_id_input" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.datadogMonitorIdInput"></a>

```python
datadog_monitor_id_input: str
```

- *Type:* str

---

##### `enterprise_application_id_input`<sup>Optional</sup> <a name="enterprise_application_id_input" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.enterpriseApplicationIdInput"></a>

```python
enterprise_application_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `single_sign_on_enabled_input`<sup>Optional</sup> <a name="single_sign_on_enabled_input" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.singleSignOnEnabledInput"></a>

```python
single_sign_on_enabled_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatadogMonitorSsoConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts">DatadogMonitorSsoConfigurationTimeouts</a>]

---

##### `datadog_monitor_id`<sup>Required</sup> <a name="datadog_monitor_id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.datadogMonitorId"></a>

```python
datadog_monitor_id: str
```

- *Type:* str

---

##### `enterprise_application_id`<sup>Required</sup> <a name="enterprise_application_id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.enterpriseApplicationId"></a>

```python
enterprise_application_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `single_sign_on_enabled`<sup>Required</sup> <a name="single_sign_on_enabled" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.singleSignOnEnabled"></a>

```python
single_sign_on_enabled: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatadogMonitorSsoConfigurationConfig <a name="DatadogMonitorSsoConfigurationConfig" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_sso_configuration

datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datadog_monitor_id: str,
  enterprise_application_id: str,
  single_sign_on_enabled: str,
  id: str = None,
  name: str = None,
  timeouts: DatadogMonitorSsoConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.datadogMonitorId">datadog_monitor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#datadog_monitor_id DatadogMonitorSsoConfiguration#datadog_monitor_id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.enterpriseApplicationId">enterprise_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#enterprise_application_id DatadogMonitorSsoConfiguration#enterprise_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.singleSignOnEnabled">single_sign_on_enabled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#single_sign_on_enabled DatadogMonitorSsoConfiguration#single_sign_on_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#id DatadogMonitorSsoConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#name DatadogMonitorSsoConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts">DatadogMonitorSsoConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datadog_monitor_id`<sup>Required</sup> <a name="datadog_monitor_id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.datadogMonitorId"></a>

```python
datadog_monitor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#datadog_monitor_id DatadogMonitorSsoConfiguration#datadog_monitor_id}.

---

##### `enterprise_application_id`<sup>Required</sup> <a name="enterprise_application_id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.enterpriseApplicationId"></a>

```python
enterprise_application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#enterprise_application_id DatadogMonitorSsoConfiguration#enterprise_application_id}.

---

##### `single_sign_on_enabled`<sup>Required</sup> <a name="single_sign_on_enabled" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.singleSignOnEnabled"></a>

```python
single_sign_on_enabled: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#single_sign_on_enabled DatadogMonitorSsoConfiguration#single_sign_on_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#id DatadogMonitorSsoConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#name DatadogMonitorSsoConfiguration#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationConfig.property.timeouts"></a>

```python
timeouts: DatadogMonitorSsoConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts">DatadogMonitorSsoConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#timeouts DatadogMonitorSsoConfiguration#timeouts}

---

### DatadogMonitorSsoConfigurationTimeouts <a name="DatadogMonitorSsoConfigurationTimeouts" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_sso_configuration

datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#create DatadogMonitorSsoConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#delete DatadogMonitorSsoConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#read DatadogMonitorSsoConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#update DatadogMonitorSsoConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#create DatadogMonitorSsoConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#delete DatadogMonitorSsoConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#read DatadogMonitorSsoConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/datadog_monitor_sso_configuration#update DatadogMonitorSsoConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatadogMonitorSsoConfigurationTimeoutsOutputReference <a name="DatadogMonitorSsoConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import datadog_monitor_sso_configuration

datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts">DatadogMonitorSsoConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatadogMonitorSsoConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.datadogMonitorSsoConfiguration.DatadogMonitorSsoConfigurationTimeouts">DatadogMonitorSsoConfigurationTimeouts</a>]

---



