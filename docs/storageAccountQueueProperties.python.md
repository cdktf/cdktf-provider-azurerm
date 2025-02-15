# `storageAccountQueueProperties` Submodule <a name="`storageAccountQueueProperties` Submodule" id="@cdktf/provider-azurerm.storageAccountQueueProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountQueuePropertiesA <a name="StorageAccountQueuePropertiesA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties azurerm_storage_account_queue_properties}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  storage_account_id: str,
  cors_rule: typing.Union[IResolvable, typing.List[StorageAccountQueuePropertiesCorsRuleA]] = None,
  hour_metrics: StorageAccountQueuePropertiesHourMetricsA = None,
  id: str = None,
  logging: StorageAccountQueuePropertiesLoggingA = None,
  minute_metrics: StorageAccountQueuePropertiesMinuteMetricsA = None,
  timeouts: StorageAccountQueuePropertiesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueuePropertiesA#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.corsRule">cors_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>]]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.hourMetrics">hour_metrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | hour_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#id StorageAccountQueuePropertiesA#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | logging block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.minuteMetrics">minute_metrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | minute_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueuePropertiesA#storage_account_id}.

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.corsRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#cors_rule StorageAccountQueuePropertiesA#cors_rule}

---

##### `hour_metrics`<sup>Optional</sup> <a name="hour_metrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.hourMetrics"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#hour_metrics StorageAccountQueuePropertiesA#hour_metrics}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#id StorageAccountQueuePropertiesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#logging StorageAccountQueuePropertiesA#logging}

---

##### `minute_metrics`<sup>Optional</sup> <a name="minute_metrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.minuteMetrics"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#minute_metrics StorageAccountQueuePropertiesA#minute_metrics}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#timeouts StorageAccountQueuePropertiesA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putCorsRule">put_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics">put_hour_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics">put_minute_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetCorsRule">reset_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetHourMetrics">reset_hour_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetMinuteMetrics">reset_minute_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cors_rule` <a name="put_cors_rule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putCorsRule"></a>

```python
def put_cors_rule(
  value: typing.Union[IResolvable, typing.List[StorageAccountQueuePropertiesCorsRuleA]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putCorsRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>]]

---

##### `put_hour_metrics` <a name="put_hour_metrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics"></a>

```python
def put_hour_metrics(
  version: str,
  include_apis: typing.Union[bool, IResolvable] = None,
  retention_policy_days: typing.Union[int, float] = None
) -> None
```

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

###### `include_apis`<sup>Optional</sup> <a name="include_apis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics.parameter.includeApis"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}.

---

###### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics.parameter.retentionPolicyDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

##### `put_logging` <a name="put_logging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging"></a>

```python
def put_logging(
  delete: typing.Union[bool, IResolvable],
  read: typing.Union[bool, IResolvable],
  version: str,
  write: typing.Union[bool, IResolvable],
  retention_policy_days: typing.Union[int, float] = None
) -> None
```

###### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging.parameter.delete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}.

---

###### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging.parameter.read"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}.

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

###### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging.parameter.write"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#write StorageAccountQueuePropertiesA#write}.

---

###### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging.parameter.retentionPolicyDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

##### `put_minute_metrics` <a name="put_minute_metrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics"></a>

```python
def put_minute_metrics(
  version: str,
  include_apis: typing.Union[bool, IResolvable] = None,
  retention_policy_days: typing.Union[int, float] = None
) -> None
```

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

###### `include_apis`<sup>Optional</sup> <a name="include_apis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics.parameter.includeApis"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}.

---

###### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics.parameter.retentionPolicyDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#create StorageAccountQueuePropertiesA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#update StorageAccountQueuePropertiesA#update}.

---

##### `reset_cors_rule` <a name="reset_cors_rule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetCorsRule"></a>

```python
def reset_cors_rule() -> None
```

##### `reset_hour_metrics` <a name="reset_hour_metrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetHourMetrics"></a>

```python
def reset_hour_metrics() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_minute_metrics` <a name="reset_minute_metrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetMinuteMetrics"></a>

```python
def reset_minute_metrics() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StorageAccountQueuePropertiesA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StorageAccountQueuePropertiesA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageAccountQueuePropertiesA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageAccountQueuePropertiesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageAccountQueuePropertiesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRule">cors_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList">StorageAccountQueuePropertiesCorsRuleAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetrics">hour_metrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference">StorageAccountQueuePropertiesHourMetricsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference">StorageAccountQueuePropertiesLoggingAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetrics">minute_metrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference">StorageAccountQueuePropertiesMinuteMetricsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference">StorageAccountQueuePropertiesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRuleInput">cors_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetricsInput">hour_metrics_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.loggingInput">logging_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetricsInput">minute_metrics_input</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cors_rule`<sup>Required</sup> <a name="cors_rule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRule"></a>

```python
cors_rule: StorageAccountQueuePropertiesCorsRuleAList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList">StorageAccountQueuePropertiesCorsRuleAList</a>

---

##### `hour_metrics`<sup>Required</sup> <a name="hour_metrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetrics"></a>

```python
hour_metrics: StorageAccountQueuePropertiesHourMetricsAOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference">StorageAccountQueuePropertiesHourMetricsAOutputReference</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.logging"></a>

```python
logging: StorageAccountQueuePropertiesLoggingAOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference">StorageAccountQueuePropertiesLoggingAOutputReference</a>

---

##### `minute_metrics`<sup>Required</sup> <a name="minute_metrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetrics"></a>

```python
minute_metrics: StorageAccountQueuePropertiesMinuteMetricsAOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference">StorageAccountQueuePropertiesMinuteMetricsAOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeouts"></a>

```python
timeouts: StorageAccountQueuePropertiesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference">StorageAccountQueuePropertiesTimeoutsOutputReference</a>

---

##### `cors_rule_input`<sup>Optional</sup> <a name="cors_rule_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRuleInput"></a>

```python
cors_rule_input: typing.Union[IResolvable, typing.List[StorageAccountQueuePropertiesCorsRuleA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>]]

---

##### `hour_metrics_input`<sup>Optional</sup> <a name="hour_metrics_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetricsInput"></a>

```python
hour_metrics_input: StorageAccountQueuePropertiesHourMetricsA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.loggingInput"></a>

```python
logging_input: StorageAccountQueuePropertiesLoggingA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

---

##### `minute_metrics_input`<sup>Optional</sup> <a name="minute_metrics_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetricsInput"></a>

```python
minute_metrics_input: StorageAccountQueuePropertiesMinuteMetricsA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StorageAccountQueuePropertiesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountQueuePropertiesAConfig <a name="StorageAccountQueuePropertiesAConfig" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  storage_account_id: str,
  cors_rule: typing.Union[IResolvable, typing.List[StorageAccountQueuePropertiesCorsRuleA]] = None,
  hour_metrics: StorageAccountQueuePropertiesHourMetricsA = None,
  id: str = None,
  logging: StorageAccountQueuePropertiesLoggingA = None,
  minute_metrics: StorageAccountQueuePropertiesMinuteMetricsA = None,
  timeouts: StorageAccountQueuePropertiesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueuePropertiesA#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.corsRule">cors_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>]]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.hourMetrics">hour_metrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | hour_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#id StorageAccountQueuePropertiesA#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | logging block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.minuteMetrics">minute_metrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | minute_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueuePropertiesA#storage_account_id}.

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.corsRule"></a>

```python
cors_rule: typing.Union[IResolvable, typing.List[StorageAccountQueuePropertiesCorsRuleA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#cors_rule StorageAccountQueuePropertiesA#cors_rule}

---

##### `hour_metrics`<sup>Optional</sup> <a name="hour_metrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.hourMetrics"></a>

```python
hour_metrics: StorageAccountQueuePropertiesHourMetricsA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#hour_metrics StorageAccountQueuePropertiesA#hour_metrics}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#id StorageAccountQueuePropertiesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.logging"></a>

```python
logging: StorageAccountQueuePropertiesLoggingA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#logging StorageAccountQueuePropertiesA#logging}

---

##### `minute_metrics`<sup>Optional</sup> <a name="minute_metrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.minuteMetrics"></a>

```python
minute_metrics: StorageAccountQueuePropertiesMinuteMetricsA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#minute_metrics StorageAccountQueuePropertiesA#minute_metrics}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.timeouts"></a>

```python
timeouts: StorageAccountQueuePropertiesTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#timeouts StorageAccountQueuePropertiesA#timeouts}

---

### StorageAccountQueuePropertiesCorsRuleA <a name="StorageAccountQueuePropertiesCorsRuleA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA(
  allowed_headers: typing.List[str],
  allowed_methods: typing.List[str],
  allowed_origins: typing.List[str],
  exposed_headers: typing.List[str],
  max_age_in_seconds: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#allowed_headers StorageAccountQueuePropertiesA#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#allowed_methods StorageAccountQueuePropertiesA#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#allowed_origins StorageAccountQueuePropertiesA#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#exposed_headers StorageAccountQueuePropertiesA#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#max_age_in_seconds StorageAccountQueuePropertiesA#max_age_in_seconds}. |

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#allowed_headers StorageAccountQueuePropertiesA#allowed_headers}.

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#allowed_methods StorageAccountQueuePropertiesA#allowed_methods}.

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#allowed_origins StorageAccountQueuePropertiesA#allowed_origins}.

---

##### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#exposed_headers StorageAccountQueuePropertiesA#exposed_headers}.

---

##### `max_age_in_seconds`<sup>Required</sup> <a name="max_age_in_seconds" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#max_age_in_seconds StorageAccountQueuePropertiesA#max_age_in_seconds}.

---

### StorageAccountQueuePropertiesHourMetricsA <a name="StorageAccountQueuePropertiesHourMetricsA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA(
  version: str,
  include_apis: typing.Union[bool, IResolvable] = None,
  retention_policy_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.includeApis">include_apis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

##### `include_apis`<sup>Optional</sup> <a name="include_apis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.includeApis"></a>

```python
include_apis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}.

---

##### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

### StorageAccountQueuePropertiesLoggingA <a name="StorageAccountQueuePropertiesLoggingA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA(
  delete: typing.Union[bool, IResolvable],
  read: typing.Union[bool, IResolvable],
  version: str,
  write: typing.Union[bool, IResolvable],
  retention_policy_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.delete">delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.read">read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.write">write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#write StorageAccountQueuePropertiesA#write}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}. |

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.delete"></a>

```python
delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}.

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.read"></a>

```python
read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.write"></a>

```python
write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#write StorageAccountQueuePropertiesA#write}.

---

##### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

### StorageAccountQueuePropertiesMinuteMetricsA <a name="StorageAccountQueuePropertiesMinuteMetricsA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA(
  version: str,
  include_apis: typing.Union[bool, IResolvable] = None,
  retention_policy_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.includeApis">include_apis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

##### `include_apis`<sup>Optional</sup> <a name="include_apis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.includeApis"></a>

```python
include_apis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}.

---

##### `retention_policy_days`<sup>Optional</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

### StorageAccountQueuePropertiesTimeouts <a name="StorageAccountQueuePropertiesTimeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#create StorageAccountQueuePropertiesA#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#update StorageAccountQueuePropertiesA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#create StorageAccountQueuePropertiesA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/storage_account_queue_properties#update StorageAccountQueuePropertiesA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountQueuePropertiesCorsRuleAList <a name="StorageAccountQueuePropertiesCorsRuleAList" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageAccountQueuePropertiesCorsRuleAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StorageAccountQueuePropertiesCorsRuleA]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>]]

---


### StorageAccountQueuePropertiesCorsRuleAOutputReference <a name="StorageAccountQueuePropertiesCorsRuleAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeadersInput">allowed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeadersInput">exposed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSecondsInput">max_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_headers_input`<sup>Optional</sup> <a name="allowed_headers_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeadersInput"></a>

```python
allowed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exposed_headers_input`<sup>Optional</sup> <a name="exposed_headers_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeadersInput"></a>

```python
exposed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_in_seconds_input`<sup>Optional</sup> <a name="max_age_in_seconds_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSecondsInput"></a>

```python
max_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_in_seconds`<sup>Required</sup> <a name="max_age_in_seconds" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageAccountQueuePropertiesCorsRuleA]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA">StorageAccountQueuePropertiesCorsRuleA</a>]

---


### StorageAccountQueuePropertiesHourMetricsAOutputReference <a name="StorageAccountQueuePropertiesHourMetricsAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetIncludeApis">reset_include_apis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetRetentionPolicyDays">reset_retention_policy_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_apis` <a name="reset_include_apis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetIncludeApis"></a>

```python
def reset_include_apis() -> None
```

##### `reset_retention_policy_days` <a name="reset_retention_policy_days" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetRetentionPolicyDays"></a>

```python
def reset_retention_policy_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApisInput">include_apis_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDaysInput">retention_policy_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApis">include_apis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_apis_input`<sup>Optional</sup> <a name="include_apis_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApisInput"></a>

```python
include_apis_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_policy_days_input`<sup>Optional</sup> <a name="retention_policy_days_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDaysInput"></a>

```python
retention_policy_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `include_apis`<sup>Required</sup> <a name="include_apis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApis"></a>

```python
include_apis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_policy_days`<sup>Required</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountQueuePropertiesHourMetricsA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

---


### StorageAccountQueuePropertiesLoggingAOutputReference <a name="StorageAccountQueuePropertiesLoggingAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resetRetentionPolicyDays">reset_retention_policy_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retention_policy_days` <a name="reset_retention_policy_days" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resetRetentionPolicyDays"></a>

```python
def reset_retention_policy_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.deleteInput">delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.readInput">read_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDaysInput">retention_policy_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.writeInput">write_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.delete">delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.read">read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.write">write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.deleteInput"></a>

```python
delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.readInput"></a>

```python
read_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_policy_days_input`<sup>Optional</sup> <a name="retention_policy_days_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDaysInput"></a>

```python
retention_policy_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `write_input`<sup>Optional</sup> <a name="write_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.writeInput"></a>

```python
write_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.delete"></a>

```python
delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.read"></a>

```python
read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_policy_days`<sup>Required</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.write"></a>

```python
write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountQueuePropertiesLoggingA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

---


### StorageAccountQueuePropertiesMinuteMetricsAOutputReference <a name="StorageAccountQueuePropertiesMinuteMetricsAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetIncludeApis">reset_include_apis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetRetentionPolicyDays">reset_retention_policy_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_apis` <a name="reset_include_apis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetIncludeApis"></a>

```python
def reset_include_apis() -> None
```

##### `reset_retention_policy_days` <a name="reset_retention_policy_days" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetRetentionPolicyDays"></a>

```python
def reset_retention_policy_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApisInput">include_apis_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDaysInput">retention_policy_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApis">include_apis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDays">retention_policy_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_apis_input`<sup>Optional</sup> <a name="include_apis_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApisInput"></a>

```python
include_apis_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_policy_days_input`<sup>Optional</sup> <a name="retention_policy_days_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDaysInput"></a>

```python
retention_policy_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `include_apis`<sup>Required</sup> <a name="include_apis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApis"></a>

```python
include_apis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_policy_days`<sup>Required</sup> <a name="retention_policy_days" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDays"></a>

```python
retention_policy_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.internalValue"></a>

```python
internal_value: StorageAccountQueuePropertiesMinuteMetricsA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

---


### StorageAccountQueuePropertiesTimeoutsOutputReference <a name="StorageAccountQueuePropertiesTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import storage_account_queue_properties

storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageAccountQueuePropertiesTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>]

---



